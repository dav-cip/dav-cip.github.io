import usePageTitle from "../../hooks/usePageTitle";
import { useLanguage } from "../../i18n/LanguageContext";
import { certificates, type Certificate } from "./config/certificates";
import "./Certificates.css";

const sorted = [...certificates].sort((a, b) => b.date.localeCompare(a.date));

/**
 * Top of each card: the certificate image if one is set, otherwise a
 * generated banner with the issuer's initial and name.
 */
function CertificateMedia({ cert }: { cert: Certificate }) {
    const { t } = useLanguage();

    const content = cert.image ? (
        <img
            className="certificate-image"
            src={`${import.meta.env.BASE_URL}images/${cert.image}`}
            alt={t("certificates.imageAlt", { name: cert.name })}
            loading="lazy"
        />
    ) : (
        <div className="certificate-placeholder" aria-hidden="true">
            <span className="certificate-badge">{cert.issuer.charAt(0)}</span>
            <span className="certificate-placeholder-issuer">{cert.issuer}</span>
        </div>
    );

    if (!cert.url) {
        return <div className="certificate-media">{content}</div>;
    }

    return (
        <a
            className="certificate-media"
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t("certificates.view")}: ${cert.name}`}
        >
            {content}
        </a>
    );
}

export default function Certificates() {
    const { t, lang } = useLanguage();
    usePageTitle(t("nav.certificates"), t("certificates.metaDescription"));

    const formatDate = (date: string) => {
        const [year, month] = date.split("-").map(Number);
        if (!year) return date;
        if (!month) return String(year);

        return new Intl.DateTimeFormat(lang, {
            year: "numeric",
            month: "long",
            timeZone: "UTC"
        }).format(new Date(Date.UTC(year, month - 1, 1)));
    };

    return (
        <main>
            <section className="certificates">
                <h1>{t("certificates.heading")}</h1>

                <p className="certificates-intro">{t("certificates.intro")}</p>

                {sorted.length === 0 ? (
                    <p className="certificates-empty card" role="status">
                        {t("certificates.empty")}
                    </p>
                ) : (
                    <div className="certificates-list">
                        {sorted.map(cert => {
                            const description =
                                lang === "fr"
                                    ? cert.descriptionFr ?? cert.description
                                    : cert.description;

                            return (
                                <article
                                    key={`${cert.issuer}-${cert.name}`}
                                    className="certificate-card card"
                                >
                                    <CertificateMedia cert={cert} />

                                    <div className="certificate-body">
                                        <span className="certificate-date">
                                            {formatDate(cert.date)}
                                        </span>

                                        <h2>{cert.name}</h2>
                                        <p className="certificate-issuer">{cert.issuer}</p>

                                        {description && (
                                            <p className="certificate-description">
                                                {description}
                                            </p>
                                        )}

                                        {cert.skills && cert.skills.length > 0 && (
                                            <ul className="certificate-skills">
                                                {cert.skills.map(skill => (
                                                    <li key={skill}>{skill}</li>
                                                ))}
                                            </ul>
                                        )}

                                        {cert.url && (
                                            <a
                                                className="certificate-link btn-secondary"
                                                href={cert.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {t("certificates.view")} &rarr;
                                            </a>
                                        )}
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                )}
            </section>
        </main>
    );
}
