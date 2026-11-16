import "./ProjectCard.css";

interface ProjectProps {
    title: string;
    image: string;
    description: string;
    tech: string[];
    github: string;
    demo?: string;
}


export default function ProjectCard({ title, image, description, tech, github, demo}: ProjectProps) {
    return (
        <div className="card" key={title}>

            <img src={image} alt={title} className="project-image" />

            <div className="card-content">

                <h2>{title}</h2>

                <p>
                    {description}
                </p>


                <div className="tech-list">

                    {tech.map((technology) => (
                        <span key={technology}>
                            {technology}
                        </span>
                    ))}

                </div>


                <div className="project-links">

                    <a href={github} target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>


                    {demo && (
                        <a href={demo} target="_blank" rel="noopener noreferrer">
                            Live Demo
                        </a>
                    )}

                </div>
            </div>
        </div>
    );
}