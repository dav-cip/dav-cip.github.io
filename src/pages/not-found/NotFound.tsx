import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
    return (
        <main className="not-found">
            <span className="error-code">404</span>
            <h1>Page Not Found</h1>
            <p>
                Sorry, the page you're looking for doesn't exist
                or may have been moved.
            </p>
            <Link to="/">Back to Home</Link>
        </main>
    );
}
