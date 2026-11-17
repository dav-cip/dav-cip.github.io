import { Link } from "react-router-dom";
import usePageTitle from "../../hooks/usePageTitle";
import { useLanguage } from "../../i18n/LanguageContext";
import type { TranslationKey } from "../../i18n/translations";
import "./Experience.css";

interface Entry {
    titleKey: TranslationKey;
    organizationKey: TranslationKey;
    periodKey?: TranslationKey;
    detailsKey?: TranslationKey;
    pointKeys?: TranslationKey[];
    link?: { labelKey: TranslationKey; href: string };
}

interface Section {
    headingKey: TranslationKey;
    showCvNote?: boolean; // adds the "contact me for my CV" note after the entries
    entries: Entry[];
}

const sections: Section[] = [
    {
        headingKey: "experience.section.education",
        entries: [
            {
                titleKey: "experience.edu.cegep.title",
                organizationKey: "experience.edu.cegep.org",
                periodKey: "experience.edu.cegep.period"
            }
        ]
    },
    {
        headingKey: "experience.section.projects",
        entries: [
            {
                titleKey: "experience.hackathon.title",
                organizationKey: "experience.hackathon.org",
                detailsKey: "experience.hackathon.details",
                pointKeys: [
                    "experience.hackathon.point1",
                    "experience.hackathon.point2",
                    "experience.hackathon.point3",
                    "experience.hackathon.point4"
                ],
                link: {
                    labelKey: "experience.hackathon.link",
                    href: "https://github.com/GermanViter/graph-your-x"
                }
            }
        ]
    },
    {
        headingKey: "experience.section.volunteering",
        showCvNote: true,
        entries: [
            {
                titleKey: "experience.camp.title",
                organizationKey: "experience.camp.org",
                periodKey: "experience.camp.period",
                pointKeys: [
                    "experience.camp.point1",
                    "experience.camp.point2",
                    "experience.camp.point3"
                ]
            },
            {
                titleKey: "experience.openhouse.title",
                organizationKey: "experience.openhouse.org",
                pointKeys: [
                    "experience.openhouse.point1",
                    "experience.openhouse.point2",
                    "experience.openhouse.point3"
                ]
            }
        ]
    }
];

const languageKeys: TranslationKey[] = [
    "experience.language.french",
    "experience.language.english",
    "experience.language.italian",
    "experience.language.spanish"
];

export default function Experience() {
    const { t } = useLanguage();
    usePageTitle(t("nav.experience"), t("experience.metaDescription"));

    return (
        <main>
            <section className="experience">
                <h1>{t("experience.heading")}</h1>

                <p className="experience-intro">{t("experience.intro")}</p>

                {sections.map((section, index) => (
                    <section
                        key={section.headingKey}
                        className="experience-section"
                        aria-labelledby={`experience-heading-${index}`}
                    >
                        <h2 id={`experience-heading-${index}`}>
                            {t(section.headingKey)}
                        </h2>

                        <div className="experience-list">
                            {section.entries.map(entry => (
                                <article
                                    key={entry.titleKey}
                                    className="experience-entry card"
                                >
                                    <div className="experience-entry-header">
                                        <h3>{t(entry.titleKey)}</h3>
                                        {entry.periodKey && (
                                            <span className="experience-period">
                                                {t(entry.periodKey)}
                                            </span>
                                        )}
                                    </div>

                                    <p className="experience-org">
                                        {t(entry.organizationKey)}
                                    </p>

                                    {entry.detailsKey && (
                                        <p className="experience-details">
                                            {t(entry.detailsKey)}
                                        </p>
                                    )}

                                    {entry.pointKeys && (
                                        <ul>
                                            {entry.pointKeys.map(key => (
                                                <li key={key}>{t(key)}</li>
                                            ))}
                                        </ul>
                                    )}

                                    {entry.link && (
                                        <a
                                            className="experience-link"
                                            href={entry.link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {t(entry.link.labelKey)} &rarr;
                                        </a>
                                    )}
                                </article>
                            ))}
                        </div>

                        {section.showCvNote && (
                            <div className="experience-cta card">
                                <p>{t("experience.cta.text")}</p>

                                <Link to="/contact" className="btn-secondary">
                                    {t("experience.cta.button")}
                                </Link>
                            </div>
                        )}
                    </section>
                ))}

                <section
                    className="experience-section"
                    aria-labelledby="experience-heading-languages"
                >
                    <h2 id="experience-heading-languages">
                        {t("experience.section.languages")}
                    </h2>

                    <ul className="experience-languages">
                        {languageKeys.map(key => (
                            <li key={key}>{t(key)}</li>
                        ))}
                    </ul>
                </section>
            </section>
        </main>
    );
}
