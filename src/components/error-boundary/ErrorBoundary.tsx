import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import "./ErrorBoundary.css";

export default function ErrorBoundary() {
    const error = useRouteError();
    const { t } = useLanguage();


    console.error("ErrorBoundary caught:", error);

    let message = t("error.unexpected");


    if (isRouteErrorResponse(error)) {
        message = `${error.status} ${error.statusText}`;
    } else if (error instanceof Error) {
        message = error.message;
    } else if (typeof error === "string") {
        message = error;
    }

    return (
        <div className="error-container">
            <div className="error-card card">
                <div className="error-icon">!</div>
                <h2 className="error-heading">{t("error.heading")}</h2>
                <p className="error-message">{message}</p>

                {/* Added a helpful button to get users back to safety safely */}
                <Link to="/" className="btn-primary error-btn">
                    {t("common.backHome")}
                </Link>
            </div>
        </div>
    );
}