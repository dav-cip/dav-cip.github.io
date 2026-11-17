import { Link } from "react-router-dom";
import usePageTitle from "../../hooks/usePageTitle";
import { useLanguage } from "../../i18n/LanguageContext";
import "./Home.css";

export default function Home() {
    const { t } = useLanguage();
    usePageTitle(t("nav.home"));

    return (
        <main>
            <section className="home">
                <div className="home-content">
                    <p className="welcome">{t("home.hello")}</p>

                    <h1 className="home-title">
                        Davide<span>.</span>
                    </h1>

                    <h2 className="home-subtitle">
                        {t("home.subtitle")}
                    </h2>

                    <p className="description">
                        {t("home.description")}
                    </p>

                    <div className="home-buttons">
                        <Link to="/projects" className="btn-primary home-btn">
                            {t("home.viewProjects")}
                        </Link>

                        <Link to="/contact" className="btn-secondary home-btn">
                            {t("home.contactMe")}
                        </Link>
                    </div>

                    <p className="home-note">
                        {t("home.note")}
                    </p>
                </div>

                <div className="code-panel">
                    <div className="code-header">
                        <div className="code-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <span className="code-filename">developer.ts</span>
                    </div>

                    <div className="code-content">
                        <p>
                            <span className="line-number">01</span>
                            <span className="code-purple">const</span>{" "}
                            developer = {"{"}
                        </p>

                        <p>
                            <span className="line-number">02</span>
                            &nbsp;&nbsp;name: <span className="code-green">"Davide"</span>,
                        </p>

                        <p>
                            <span className="line-number">03</span>
                            &nbsp;&nbsp;role: <span className="code-green">"Developer"</span>,
                        </p>

                        <p>
                            <span className="line-number">04</span>
                            &nbsp;&nbsp;learning: <span className="code-orange">true</span>,
                        </p>

                        <p>
                            <span className="line-number">05</span>
                            &nbsp;&nbsp;building: <span className="code-green">"Projects"</span>
                        </p>

                        <p>
                            <span className="line-number">06</span>
                            {"}"}
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
