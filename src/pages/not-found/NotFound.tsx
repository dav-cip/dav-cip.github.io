import { Link } from "react-router-dom";
import usePageTitle from "../../hooks/usePageTitle";
import { useLanguage } from "../../i18n/LanguageContext";
import "./NotFound.css";

export default function NotFound() {
    const { t } = useLanguage();
    usePageTitle(t("notFound.title"));

    return (
        <main>
            <section className="not-found">
                <h1>404<span>.</span></h1>

                <h2>{t("notFound.heading")}</h2>

                <p>
                    {t("notFound.text")}
                </p>

                <Link to="/" className="btn-primary not-found-btn">
                    {t("common.backHome")}
                </Link>
            </section>
        </main>
    );
}
