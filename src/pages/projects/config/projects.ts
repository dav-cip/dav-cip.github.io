/**
 * Optional overrides for a project.
 *
 * Your own public, non-fork repositories appear on the Projects page
 * automatically, using their GitHub description, language, and topics.
 * Add an entry here only to customize one, or to show a repository
 * that isn't automatic (a fork, or one you only contributed to).
 * `name` must match the GitHub repository name exactly.
 */
export interface ProjectConfig {
    name: string;
    github?: string; // used for the card link when the GitHub API is unavailable
    description?: string;
    featured?: boolean;
    image?: string;
    tech?: string[];
    demo?: string;
    hidden?: boolean; // set to true to hide an automatically listed repository
}

const projectImage = (filename: string) => `${import.meta.env.BASE_URL}images/${filename}`;

export const DEFAULT_PROJECT_IMAGE = projectImage("default-project.svg");

const projectConfig: ProjectConfig[] = [
    {
        name: "graph-your-x",
        github: "https://github.com/GermanViter/graph-your-x",
        description:
            "An interactive learning-path planner that visualizes the prerequisites needed to reach a learning goal. Track completed courses, discover what you're ready to learn next, and build custom learning roadmaps.",
        featured: true,
        image: projectImage("graph-your-x.svg"),
        tech: [
            "React",
            "TypeScript",
            "CSS",
            "Vite",
            "Python",
            "FastAPI",
            "SQLite",
        ]
    },
    {
        name: "dav-cip.github.io",
        github: "https://github.com/dav-cip/dav-cip.github.io",
        description:
            "A personal developer portfolio showcasing my projects, technical skills, and experience through a responsive and modern web experience.",
        featured: false,
        image: projectImage("portfolio.svg"),
        tech: ["TypeScript", "React", "Vite", "CSS"]
    }
];

export default projectConfig;