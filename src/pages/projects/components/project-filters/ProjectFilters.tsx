import "./ProjectFilters.css";

interface ProjectFiltersProps {
    technologies: string[];
    selectedTech: string;
    onSelect: (technology: string) => void;
}

export default function ProjectFilters({ technologies, selectedTech, onSelect }: ProjectFiltersProps) {
    const filters = ["All", ...technologies];

    return (
        <div
            className="project-filters"
            role="group"
            aria-label="Filter projects by technology"
        >
            {filters.map(technology => (
                <button
                    key={technology}
                    type="button"
                    className={`filter-button ${selectedTech === technology ? "active" : ""
                        }`}
                    onClick={() => onSelect(technology)}
                    aria-pressed={selectedTech === technology}
                >
                    {technology}
                </button>
            ))}
        </div>
    );
}
