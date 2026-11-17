import { useLanguage } from "../../../../i18n/LanguageContext";
import "./ProjectCard.css";

interface ProjectProps {
    title: string;
    image: string;
    description?: string;
    descriptionFr?: string;
    tech: string[];
    github: string;
    demo?: string;
    featured: boolean;
}

export default function ProjectCard({
    title,
    image,
    description,
    descriptionFr,
    tech,
    github,
    demo,
    featured
}: ProjectProps) {
    const { t, lang } = useLanguage();

    const text =
        (lang === "fr" ? descriptionFr : undefined) ??
        description ??
        t("projects.noDescription");

    return (
        <article className={`card project-card ${featured ? "featured" : ""}`}>
            <div className="project-image-container">
                {featured && (
                    <span className="featured-label">
                        {t("projects.featured")}
                    </span>
                )}

                <img
                    src={image}
                    alt={t("projects.imageAlt", { title })}
                    className="project-image"
                    loading="lazy"
                />
            </div>

            <div className="card-content">
                <h2>{title}</h2>

                <p>{text}</p>

                <div className="tech-list" role="list" aria-label={t("projects.techLabel")}>
                    {tech.map(technology => (
                        <span key={technology} role="listitem">
                            {technology}
                        </span>
                    ))}
                </div>

                <div className="project-links">
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t("projects.github")}
                    </a>

                    {demo && (
                        <a
                            href={demo}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t("projects.demo")}
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}
