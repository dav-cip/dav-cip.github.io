import { useEffect, useState } from "react";
import { fetchGithubRepositories } from "../services/github";
import {
    buildFallbackProjects,
    buildProjects,
    type Project
} from "../utils/buildProjects";

export type { Project };

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
