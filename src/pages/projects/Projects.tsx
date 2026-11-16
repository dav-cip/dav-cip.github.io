
import { useState } from "react";
import ProjectCard from "./components/project-card/ProjectCard";
import ProjectFilters from "./components/project-filters/ProjectFilters";
import useGithubProjects from "./hooks/useGithubProjects";
import "./Projects.css";

export default function Project() {
    const { projects, loading, error } = useGithubProjects();

    const [selectedTech, setSelectedTech] = useState("All");

    const technologies = Array.from(
        new Set(projects.flatMap(project => project.tech))
    ).sort();

    const filteredProjects = selectedTech === "All"
        ? projects
        : projects.filter(project =>
            project.tech.includes(selectedTech)
        );

    return (
        <main>
            <section className="projects">
                <h1 className="projects-heading">Projects</h1>

                {loading ? (
                    <p className="projects-loading" role="status">
                        Loading projects...
                    </p>
                ) : error ? (
                    <p className="projects-error" role="alert">
                        Unable to load projects. Please try again later.
                    </p>
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
                    <>
                        <ProjectFilters
                            technologies={technologies}
                            selectedTech={selectedTech}
                            onSelect={setSelectedTech}
                        />

                        {filteredProjects.length === 0 ? (
                            <p>No projects found for this technology.</p>
                        ) : (
                            <div className="project-grid">
                                {filteredProjects.map(project => (
                                    <ProjectCard
                                        key={project.id}
                                        title={project.title}
                                        image={project.image}
                                        description={project.description}
                                        tech={project.tech}
                                        github={project.github}
                                        demo={project.demo}
                                        featured={project.featured}
                                    />
                                ))}
                            </div>
                        )}
                    </>
                )}
            </section>
        </main>
    );
}
