
export interface ProjectConfig {
    name: string;
    featured: boolean;
    image: string;
    tech: string[];
    demo?: string;
}

const projectImage = (filename: string) =>
    `${import.meta.env.BASE_URL}images/${filename}`;

const projectConfig: ProjectConfig[] = [
    {
        name: "graph-your-x",
        featured: true,
        image: projectImage("graph-your-x.svg"),
        tech: ["TypeScript", "React", "SQLite"]
    },
    {
        name: "my-website",
        featured: false,
        image: projectImage("portfolio.svg"),
        tech: ["TypeScript", "React", "Vite", "CSS"]
    }
];

export default projectConfig;
