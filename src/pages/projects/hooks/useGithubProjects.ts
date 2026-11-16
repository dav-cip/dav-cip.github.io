import { useEffect, useState } from "react";
import {
    fetchGithubRepositories,
    type GithubRepo
} from "../services/github";
import projectConfig from "../config/projects";

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tech: string[];
    github: string;
    demo?: string;
    featured: boolean;
}

export default function useGithubProjects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function loadProjects() {
            try {
                const repositories: GithubRepo[] =
                    await fetchGithubRepositories();

                // Match GitHub repositories with portfolio configuration.
                const configuredProjects = repositories
                    .map(repo => ({
                        repo,
                        config: projectConfig.find(
                            item => item.name === repo.name
                        )
                    }))
                    .filter(
                        (item): item is {
                            repo: GithubRepo;
                            config: (typeof projectConfig)[number];
                        } => item.config !== undefined
                    );

                // Convert repository data into portfolio projects.
                const formattedProjects: Project[] = configuredProjects.map(
                    ({ repo, config }) => ({
                        id: repo.id,
                        title: repo.name,
                        description: config.description,
                        image: config.image,
                        tech: config.tech,
                        github: repo.html_url,
                        demo: config.demo,
                        featured: config.featured
                    })
                );

                // Display featured projects first.
                formattedProjects.sort((a, b) => {
                    const aFeatured = projectConfig.find(
                        item => item.name === a.title
                    )?.featured ?? false;

                    const bFeatured = projectConfig.find(
                        item => item.name === b.title
                    )?.featured ?? false;

                    return Number(bFeatured) - Number(aFeatured);
                });

                setProjects(formattedProjects);
            } catch (error) {
                console.error("GitHub API error:", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        loadProjects();
    }, []);

    return { projects, loading, error };
}
