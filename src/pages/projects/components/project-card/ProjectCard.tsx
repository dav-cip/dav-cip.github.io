import "./ProjectCard.css";

interface ProjectProps {
    title: string;
    image: string;
    description: string;
    tech: string[];
    github: string;
    demo?: string;
    featured: boolean;
}

export default function ProjectCard({
    title,
    image,
    description,
    tech,
    github,
    demo,
    featured
}: ProjectProps) {
    return (
        <article className={`card project-card ${featured ? "featured" : ""}`}>
            <div className="project-image-container">
                {featured && (
                    <span className="featured-label">
                        Featured
                    </span>
                )}

                <img
                    src={image}
                    alt={`${title} logo`}
                    className="project-image"
                    loading="lazy"
                />
            </div>

            <div className="card-content">
                <h2>{title}</h2>

                <p>{description}</p>

                <div className="tech-list" role="list" aria-label="Technologies used">
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
                        GitHub
                    </a>

                    {demo && (
                        <a
                            href={demo}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}
