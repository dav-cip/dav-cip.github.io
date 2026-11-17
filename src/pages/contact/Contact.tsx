import { SITE } from "../../config/site";
import usePageTitle from "../../hooks/usePageTitle";
import { useLanguage } from "../../i18n/LanguageContext";
import './Contact.css';

export default function Contact() {
    const { t } = useLanguage();
    usePageTitle(t("nav.contact"), t("contact.metaDescription"));

    return (
        <main>
            <section className="contact">
                <h1 className="contact-heading">{t("contact.heading")}</h1>

                <p className="contact-desc">
                    {t("contact.description")}
                </p>

                <div className="contact-links">
                    <a
                        href="mailto:cipolla.dav@gmail.com"
                        className="contact-card card"
                    >
                        <span className="contact-label">{t("contact.email")}</span>
                        <span className="contact-action">{t("contact.sendMessage")} &rarr;</span>
                    </a>

                    <a
                        href={`https://github.com/${SITE.githubUser}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card card"
                    >
                        <span className="contact-label">{t("contact.github")}</span>
                        <span className="contact-action">{t("contact.viewProjects")} &rarr;</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/cipolladavide"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card card"
                    >
                        <span className="contact-label">{t("contact.linkedin")}</span>
                        <span className="contact-action">{t("contact.connect")} &rarr;</span>
                    </a>
                </div>

            </section>
        </main>
    );
}
