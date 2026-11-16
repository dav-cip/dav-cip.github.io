
import { Link } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
    return (
        <main>
            <section className="home">
                <div className="home-content">
                    <p className="welcome">HELLO, I'M</p>

                    <h1 className="home-title">
                        Davide<span>.</span>
                    </h1>

                    <h2 className="home-subtitle">
                        Computer Science Student & Developer
                    </h2>

                    <p className="description">
                        I build web applications and software projects,
                        exploring new technologies and turning ideas
                        into practical solutions.
                    </p>

                    <div className="home-buttons">
                        <Link to="/projects" className="btn-primary home-btn">
                            View Projects
                        </Link>

                        <Link to="/contact" className="btn-secondary home-btn">
                            Contact Me
                        </Link>
                    </div>

                    <p className="home-note">
                        BUILDING · LEARNING · CREATING
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
