import usePageTitle from "../../hooks/usePageTitle";
import { useLanguage } from "../../i18n/LanguageContext";
import type { TranslationKey } from "../../i18n/translations";
import './About.css';

// Items are either plain text (technology names, the same in every language)
// or translation keys.
interface SkillGroup {
    headingKey: TranslationKey;
    items: string[];
    itemKeys?: TranslationKey[];
}

const skillGroups: SkillGroup[] = [
    {
        headingKey: "about.group.languages",
        items: ["Java", "JavaScript", "TypeScript", "HTML", "CSS", "SQL", "Python"]
    },
    {
        headingKey: "about.group.frontend",
        items: ["React", "TypeScript", "Vite", "Vitest"]
    },
    {
        headingKey: "about.group.backend",
        items: ["Python (FastAPI)", "SQLite", "REST API"]
    },
    {
        headingKey: "about.group.tools",
        items: ["Git", "GitHub", "VS Code"]
    },
    {
        headingKey: "about.group.hardware",
        items: [],
        itemKeys: ["about.hardware.configuration", "about.hardware.installation"]
    },
    {
        headingKey: "about.group.interpersonal",
        items: [],
        itemKeys: [
            "about.skill.teamwork",
            "about.skill.communication",
            "about.skill.deadlines",
            "about.skill.calm",
            "about.skill.problemSolving",
            "about.skill.quickLearner"
        ]
    }
];

export default function About() {
    const { t } = useLanguage();
    usePageTitle(t("nav.about"), t("about.metaDescription"));

    return (
        <main>
            <section className="about">

                <h1>{t("about.heading")}</h1>

                <p>{t("about.p1")}</p>

                <p>{t("about.p2")}</p>

                <p>{t("about.p3")}</p>

                <div className="skills">
                    {skillGroups.map((group) => (
                        <div key={group.headingKey} className="skills-group card">
                            <h2>{t(group.headingKey)}</h2>

                            <ul>
                                {group.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}

                                {group.itemKeys?.map((key) => (
                                    <li key={key}>{t(key)}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
