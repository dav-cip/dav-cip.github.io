import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
    return (
        <main>
            <section className="not-found">
                <h1>404<span>.</span></h1>

                <h2>Page Not Found</h2>

                <p>
                    Sorry, the page you're looking for doesn't exist
                    or may have been moved.
                </p>

                <Link to="/" className="btn-primary not-found-btn">
                    Back to Home
                </Link>
            </section>
        </main>
    );
}
