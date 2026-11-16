
import { useEffect, useState } from "react";
import ProjectCard from "./components/project-card/ProjectCard";
import "./Projects.css";

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tech: string[];
    github: string;
    demo?: string;
}

interface GithubRepo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    language: string | null;
    fork: boolean;
    archived: boolean;
    private?: boolean;
    updated_at?: string;
}

interface CommitSearchResponse {
    items: {
        repository: GithubRepo;
    }[];
}

export default function Project() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchProjects() {
            try {
                const [ownedResponse, contributionsResponse] =
                    await Promise.allSettled([
                        fetch(
                            "https://api.github.com/users/dav-cip/repos?type=owner&sort=updated&per_page=100"
                        ),
                        fetch(
                            "https://api.github.com/search/commits?q=author:dav-cip&sort=author-date&order=desc&per_page=100",
                            {
                                headers: {
                                    Accept: "application/vnd.github+json"
                                }
                            }
                        )
                    ]);

                // Check which requests succeeded
                let ownedRepos: GithubRepo[] = [];
                let contributedRepos: GithubRepo[] = [];

                if (ownedResponse.status === "fulfilled" &&
                    ownedResponse.value.ok) {
                    ownedRepos = await ownedResponse.value.json();
                }

                if (contributionsResponse.status === "fulfilled" &&
                    contributionsResponse.value.ok) {
                    const data: CommitSearchResponse =
                        await contributionsResponse.value.json();

                    contributedRepos = data.items.map(
                        item => item.repository
                    );
                }

                if (
                    ownedRepos.length === 0 &&
                    contributedRepos.length === 0
                ) {
                    throw new Error("Unable to retrieve GitHub repositories");
                }

                // Combine repositories and remove duplicates
                const uniqueRepos = new Map<number, GithubRepo>();

                [...ownedRepos, ...contributedRepos].forEach(repo => {
                    if (
                        !repo.archived &&
                        !repo.private
                    ) {
                        uniqueRepos.set(repo.id, repo);
                    }
                });

                // Convert GitHub data into your Project format
                const formattedProjects: Project[] = Array.from(
                    uniqueRepos.values()
                ).map(repo => ({
                    id: repo.id,
                    title: repo.name,
                    description:
                        repo.description || "No description available.",
                    image: "/images/project-placeholder.png",
                    tech: repo.language ? [repo.language] : [],
                    github: repo.html_url
                }));

                setProjects(formattedProjects);

            } catch (error) {
                console.error("GitHub API error:", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchProjects();
    }, []);

    return (
        <main>
            <section className="projects">
                <h1 className="projects-heading">Projects</h1>

                {loading ? (
                    <p>Loading projects...</p>
                ) : error ? (
                    <p>Unable to load projects. Please try again later.</p>
                ) : projects.length === 0 ? (
                    <div className="no-projects card">
                        <div className="no-projects-icon">📁</div>
                        <h2>No Projects Found</h2>
                        <p>
                            It looks like there aren't any projects
                            added here just yet. Check back soon!
                        </p>
                    </div>
                ) : (
                    <div className="project-grid">
                        {projects.map(project => (
                            <ProjectCard
                                key={project.id}
                                title={project.title}
                                image={project.image}
                                description={project.description}
                                tech={project.tech}
                                github={project.github}
                                demo={project.demo}
                            />
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}
