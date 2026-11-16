import './Contact.css';

export default function Contact() {
    return (
        <main>
            <section className="contact">
                <h1 className="contact-heading">Contact</h1>

                <p className="contact-desc">
                    Interested in working together? Feel free to reach out.
                </p>

                <div className="contact-links">
                    <a
                        href="mailto:cipolla.dav@gmail.com"
                        className="contact-card card"
                    >
                        <span className="contact-label">Email</span>
                        <span className="contact-action">Send a message &rarr;</span>
                    </a>

                    <a
                        href="https://github.com/dav-cip"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card card"
                    >
                        <span className="contact-label">GitHub</span>
                        <span className="contact-action">View projects &rarr;</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/cipolladavide"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card card"
                    >
                        <span className="contact-label">LinkedIn</span>
                        <span className="contact-action">Connect &rarr;</span>
                    </a>
                </div>

            </section>
        </main>
    );
}
