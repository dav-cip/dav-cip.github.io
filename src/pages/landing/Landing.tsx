import { Link } from 'react-router-dom';
import './Landing.css';

export default function Landing() {
    return (
        <main>
            <section className="home">
                <div className="home-content">

                    <p className="welcome">
                        Hello, I'm
                    </p>

                    <h1 className="home-title">
                        Davide<span>.</span>
                    </h1>

                    <h2 className="home-subtitle">
                        Computer Science Student
                    </h2>

                    <p className="description">
                        I build web applications and software projects while
                        learning new technologies and improving my programming skills.
                    </p>

                    <div className="home-buttons">
                        <Link to="/projects" className="btn-primary home-btn">
                            View Projects
                        </Link>

                        <Link to="/contact" className="btn-secondary home-btn">
                            Contact Me
                        </Link>
                    </div>

                </div>
            </section>
        </main>
    );
}