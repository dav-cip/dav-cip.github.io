import './About.css';

export default function About() {

    const languages = [
        { name: "Java", color: "#b45309" },
        { name: "HTML", color: "#c2410c" },
        { name: "CSS", color: "#1d4ed8" },
        { name: "Javascript", color: "#ca8a04" },
        { name: "Typescript", color: "#2563a6" },
        { name: "SQL", color: "#036672" }
    ];

    const tools = [
        { name: "React", color: "#0e7490" },
        { name: "Git", color: "#c2410c" },
        { name: "GitHub", color: "#374151" },
        { name: "VS Code", color: "#0369a1" }
    ];

    return (
        <main>
            <section className="about">

                <h1>About Me</h1>

                <p>
                    I'm a Computer Science student currently studying at CEGEP.
                    I enjoy programming, creating applications, and learning new
                    technologies.
                </p>

                <div className="skills">

                    <div className="skills-group card">
                        <h3>Languages</h3>
                        <ul>
                            {languages.map((l) =>
                                <li
                                    key={l.name}
                                    style={{ backgroundColor: l.color }}
                                >
                                    <p>{l.name}</p>
                                </li>
                            )}
                        </ul>
                    </div>

                    <div className="skills-group card">
                        <h3>Tools</h3>
                        <ul>
                            {tools.map((t) =>
                                <li
                                    key={t.name}
                                    style={{ backgroundColor: t.color }}
                                >
                                    <p>{t.name}</p>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}