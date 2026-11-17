import { useState } from "react";
import usePageTitle from "../../hooks/usePageTitle";
import { useLanguage } from "../../i18n/LanguageContext";
import ProjectCard from "./components/project-card/ProjectCard";
import ProjectFilters from "./components/project-filters/ProjectFilters";
import useGithubProjects from "./hooks/useGithubProjects";
import "./Projects.css";

// Internal value for the "show everything" filter (the label is translated).
const ALL = "All";

export default function Project() {
    const { t } = useLanguage();
    usePageTitle(t("nav.projects"), t("projects.metaDescription"));

    const { projects, loading, error } = useGithubProjects();

    const [selectedTech, setSelectedTech] = useState(ALL);

    const technologies = Array.from(
        new Set(projects.flatMap(project => project.tech))
    ).sort();

    const filteredProjects = selectedTech === ALL
        ? projects
        : projects.filter(project =>
            project.tech.includes(selectedTech)
        );

    return (
        <main>
            <section className="projects">
                <h1 className="projects-heading">{t("projects.heading")}</h1>

                {loading ? (
                    <p className="projects-loading" role="status">
                        {t("projects.loading")}
                    </p>
                ) : error ? (
                    <p className="projects-error" role="alert">
                        {t("projects.error")}
                    </p>
                ) : projects.length === 0 ? (
                    <div className="no-projects card">
                        <div className="no-projects-icon">📁</div>
                        <h2>{t("projects.emptyTitle")}</h2>
                        <p>
                            {t("projects.emptyText")}
                        </p>
                    </div>
                ) : (
                    <>
                        <ProjectFilters
                            technologies={technologies}
                            allValue={ALL}
                            allLabel={t("projects.all")}
                            selectedTech={selectedTech}
                            onSelect={setSelectedTech}
                        />

                        {filteredProjects.length === 0 ? (
                            <p>{t("projects.noMatch")}</p>
                        ) : (
                            <div className="project-grid">
                                {filteredProjects.map(project => (
                                    <ProjectCard
                                        key={project.id}
                                        title={project.title}
                                        image={project.image}
                                        description={project.description}
                                        descriptionFr={project.descriptionFr}
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
