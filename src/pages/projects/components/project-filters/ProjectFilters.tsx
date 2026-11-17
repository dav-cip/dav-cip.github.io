import { useLanguage } from "../../../../i18n/LanguageContext";
import "./ProjectFilters.css";

interface ProjectFiltersProps {
    technologies: string[];
    allValue: string;
    allLabel: string;
    selectedTech: string;
    onSelect: (technology: string) => void;
}

export default function ProjectFilters({
    technologies,
    allValue,
    allLabel,
    selectedTech,
    onSelect
}: ProjectFiltersProps) {
    const { t } = useLanguage();
    const filters = [allValue, ...technologies];

    return (
        <div
            className="project-filters"
            role="group"
            aria-label={t("projects.filterLabel")}
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
                    {technology === allValue ? allLabel : technology}
                </button>
            ))}
        </div>
    );
}