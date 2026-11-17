import type { GithubRepo } from "../services/github";
import projectConfig, {
    DEFAULT_PROJECT_IMAGE,
    type ProjectConfig
} from "../config/projects";
import { SITE } from "../../../config/site";

export interface Project {
    id: number;
    title: string;
    description?: string; // undefined: the page shows a "no description" text
    descriptionFr?: string;
    image: string;
    tech: string[];
    github: string;
    demo?: string;
    featured: boolean;
    updatedAt?: string;
}

const capitalize = (value: string) =>
    value.charAt(0).toUpperCase() + value.slice(1);

/** Tech tags for a repo without a config entry: its language plus its topics. */
export function techFromRepo(repo: GithubRepo): string[] {
    const tags = [repo.language, ...(repo.topics ?? []).map(capitalize)];
    return Array.from(new Set(tags.filter((tag): tag is string => !!tag)));
}

/** Featured projects first, then the most recently pushed. */
export function sortProjects(projects: Project[]): Project[] {
    return [...projects].sort((a, b) => {
        if (a.featured !== b.featured) return Number(b.featured) - Number(a.featured);
        return (b.updatedAt ?? "").localeCompare(a.updatedAt ?? "");
    });
}

/** Used when the GitHub API is unavailable: only the configured projects. */
export function buildFallbackProjects(
    config: ProjectConfig[] = projectConfig,
    githubUser: string = SITE.githubUser
): Project[] {
    return sortProjects(
        config
            .filter(item => !item.hidden)
            .map((item, index) => ({
                id: index,
                title: item.name,
                description: item.description,
                descriptionFr: item.descriptionFr,
                image: item.image ?? DEFAULT_PROJECT_IMAGE,
                tech: item.tech ?? [],
                github: item.github ?? `https://github.com/${githubUser}/${item.name}`,
                demo: item.demo,
                featured: item.featured ?? false
            }))
    );
}

/**
 * Turns GitHub repositories into portfolio projects.
 * Repos with a config entry use it; repos without one are listed only if
 * they are my own non-fork repositories. Config entries can hide a repo.
 */
export function buildProjects(
    repositories: GithubRepo[],
    config: ProjectConfig[] = projectConfig,
    githubUser: string = SITE.githubUser
): Project[] {
    const projects: Project[] = [];

    for (const repo of repositories) {
        const entry = config.find(item => item.name === repo.name);

        if (entry?.hidden) continue;

        const ownedByMe = repo.owner?.login.toLowerCase() === githubUser.toLowerCase();
        if (!entry && (!ownedByMe || repo.fork)) continue;

        projects.push({
            id: repo.id,
            title: repo.name,
            description: entry?.description ?? repo.description ?? undefined,
            descriptionFr: entry?.descriptionFr,
            image: entry?.image ?? DEFAULT_PROJECT_IMAGE,
            tech: entry?.tech ?? techFromRepo(repo),
            github: repo.html_url,
            demo: entry?.demo ?? (repo.homepage || undefined),
            featured: entry?.featured ?? false,
            updatedAt: repo.pushed_at ?? repo.updated_at
        });
    }

    return sortProjects(projects);
}
