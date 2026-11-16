import usePageTitle from "../../hooks/usePageTitle";
import './About.css';

export default function About() {
    usePageTitle("About");

    const languages = [
        "Java",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "SQL",
        "Python"
    ];

    const tools = [
        "React",
        "Git",
        "GitHub",
        "VS Code",
        "SQLite",
        "FastAPI"
    ];

    return (
        <main>
            <section className="about">

                <h1>About Me</h1>

                <p>
                    I'm a Computer Science student at CEGEP who enjoys programming, building applications, and exploring new technologies.
                </p>

                <p>
                    I like solving problems, experimenting with different tools, and turning ideas into practical projects. Through personal projects and hands-on experience, I'm continuously improving my programming skills and expanding my knowledge.
                </p>

                <p>
                    I'm always curious to learn something new and take on new challenges.
                </p>

                <div className="skills">
                    <div className="skills-group card">
                        <h2>Languages</h2>

                        <ul>
                            {languages.map((language) => (
                                <li key={language}>
                                    {language}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="skills-group card">
                        <h2>Tools & Technologies</h2>

                        <ul>
                            {tools.map((tool) => (
                                <li key={tool}>
                                    {tool}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}