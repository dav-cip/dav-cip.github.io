import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import type { TranslationKey } from "../../i18n/translations";
import { useTheme } from "../../theme/ThemeContext";
import "./Header.css";

const links: { labelKey: TranslationKey; link: string }[] = [
    { labelKey: "nav.home", link: "/" },
    { labelKey: "nav.about", link: "/about" },
    { labelKey: "nav.experience", link: "/experience" },
    { labelKey: "nav.projects", link: "/projects" },
    { labelKey: "nav.contact", link: "/contact" },
];

function MoonIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
    );
}

function SunIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
    );
}

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { t, toggleLang } = useLanguage();
    const { theme, toggleTheme } = useTheme();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="header">
            <div className="container">
                <Link
                    to="/"
                    className="logo"
                    onClick={closeMenu}
                    aria-label={t("nav.logoLabel")}
                >
                    Davide<span>.</span>
                </Link>

                <nav
                    id="main-navigation"
                    className={`nav ${isOpen ? "open" : ""}`}
                    aria-label={t("nav.main")}
                >
                    {links.map((link) => (
                        <NavLink
                            key={link.link}
                            to={link.link}
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                isActive
                                    ? "header-link active"
                                    : "header-link"
                            }
                        >
                            {t(link.labelKey)}
                        </NavLink>
                    ))}
                </nav>

                <div className="header-actions">
                    <button
                        type="button"
                        className="header-toggle"
                        onClick={toggleLang}
                        aria-label={t("header.switchToOtherLanguage")}
                        title={t("header.switchToOtherLanguage")}
                    >
                        {t("header.otherLanguageCode")}
                    </button>

                    <button
                        type="button"
                        className="header-toggle"
                        onClick={toggleTheme}
                        aria-label={
                            theme === "dark"
                                ? t("header.themeToLight")
                                : t("header.themeToDark")
                        }
                        title={
                            theme === "dark"
                                ? t("header.themeToLight")
                                : t("header.themeToDark")
                        }
                    >
                        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
                    </button>

                    <button
                        type="button"
                        className={`hamburger ${isOpen ? "open" : ""}`}
                        onClick={toggleMenu}
                        aria-label={
                            isOpen
                                ? t("nav.closeMenu")
                                : t("nav.openMenu")
                        }
                        aria-expanded={isOpen}
                        aria-controls="main-navigation"
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                </div>
            </div>
        </header>
    );
}
