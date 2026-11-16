import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Projects", link: "/projects" },
        { name: "Contact", link: "/contact" },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="header">
            <div className="container">
                <Link
                    to="/"
                    className="logo"
                    onClick={closeMenu}
                    aria-label="Davide - Home"
                >
                    Davide<span>.</span>
                </Link>

                <nav
                    id="main-navigation"
                    className={`nav ${isOpen ? "open" : ""}`}
                    aria-label="Main navigation"
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
                            {link.name}
                        </NavLink>
                    ))}
                </nav>

                <div className="header-actions">
                    <a
                        className="resume-btn"
                        href={`${import.meta.env.BASE_URL}resume.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-disabled="true"
                    >
                        Resume
                    </a>

                    <button
                        type="button"
                        className={`hamburger ${isOpen ? "open" : ""}`}
                        onClick={toggleMenu}
                        aria-label={
                            isOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
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
