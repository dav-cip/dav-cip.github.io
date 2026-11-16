import { useState } from "react";
import { NavLink } from "react-router-dom";
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
                <h1 className="logo" onClick={closeMenu}>
                    Davide<span>.</span>
                </h1>

                {/* Combined Navigation Container */}
                <nav className={`nav ${isOpen ? "open" : ""}`}>
                    {links.map((link) =>
                        <NavLink
                            key={link.link}
                            to={link.link}
                            onClick={closeMenu} /* Closes menu when a link is clicked */
                            className={({ isActive }) =>
                                isActive ? "header-link active" : "header-link"
                            }
                        >
                            {link.name}
                        </NavLink>
                    )}
                </nav>

                {/* Right Area: Button + Hamburger */}
                <div className="header-actions">
                    <a
                        className="resume-btn"
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Resume
                    </a>

                    {/* CSS Hamburger Button */}
                    <button
                        className={`hamburger ${isOpen ? "open" : ""}`}
                        onClick={toggleMenu}
                        aria-label="Toggle navigation menu"
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