import { useEffect, useState } from "react";
import { fetchGithubRepositories, type GithubRepo } from "../services/github";
import projectConfig, { DEFAULT_PROJECT_IMAGE } from "../config/projects";
import { SITE } from "../../../config/site";

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tech: string[];
    github: string;
    demo?: string;
    featured: boolean;
    updatedAt?: string;
}

const NO_DESCRIPTION = "No description yet.";

const capitalize = (value: string) =>
    value.charAt(0).toUpperCase() + value.slice(1);

// Tech tags for repositories without a config entry: language + topics.
function techFromRepo(repo: GithubRepo): string[] {
    const tags = [repo.language, ...(repo.topics ?? []).map(capitalize)];
    return Array.from(new Set(tags.filter((tag): tag is string => !!tag)));
}

function isOwnedByMe(repo: GithubRepo): boolean {
    return repo.owner?.login.toLowerCase() === SITE.githubUser.toLowerCase();
}

function sortProjects(projects: Project[]): Project[] {
    return [...projects].sort((a, b) => {
        if (a.featured !== b.featured) return Number(b.featured) - Number(a.featured);
        return (b.updatedAt ?? "").localeCompare(a.updatedAt ?? "");
    });
}

// Used when the GitHub API is unavailable: only the configured projects.
function buildFallbackProjects(): Project[] {
    return sortProjects(
        projectConfig
            .filter(config => !config.hidden)
            .map((config, index) => ({
                id: index,
                title: config.name,
                description: config.description ?? NO_DESCRIPTION,
                image: config.image ?? DEFAULT_PROJECT_IMAGE,
                tech: config.tech ?? [],
                github:
                    config.github ??
                    `https://github.com/${SITE.githubUser}/${config.name}`,
                demo: config.demo,
                featured: config.featured ?? false
            }))
    );
}

function buildProjects(repositories: GithubRepo[]): Project[] {
    const projects: Project[] = [];

    for (const repo of repositories) {
        const config = projectConfig.find(item => item.name === repo.name);

        if (config?.hidden) continue;

        // Without a config entry, only list my own non-fork repositories.
        if (!config && (!isOwnedByMe(repo) || repo.fork)) continue;

        projects.push({
            id: repo.id,
            title: repo.name,
            description: config?.description ?? repo.description ?? NO_DESCRIPTION,
            image: config?.image ?? DEFAULT_PROJECT_IMAGE,
            tech: config?.tech ?? techFromRepo(repo),
            github: repo.html_url,
            demo: config?.demo ?? (repo.homepage || undefined),
            featured: config?.featured ?? false,
            updatedAt: repo.pushed_at ?? repo.updated_at
        });
    }

    return sortProjects(projects);
}

export default function useGithubProjects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function loadProjects() {
            try {
                const repositories = await fetchGithubRepositories();
                setProjects(buildProjects(repositories));
            } catch (error) {
                console.error("GitHub API error:", error);
                const fallback = buildFallbackProjects();
                setProjects(fallback);
                if (fallback.length === 0) setError(true);
            } finally {
                setLoading(false);
            }
        }

        loadProjects();
    }, []);

    return { projects, loading, error };
}
