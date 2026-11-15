import './Fallback.css'

function Fallback() {
    return (
        <div className="fallback-overlay">
            <div className="fallback-card">
                <svg className="loading-circle" viewBox="25 25 50 50">
                    <circle className="circle-shape" r="20" cy="50" cx="50"></circle>
                </svg>
                <p className="fallback-title">Loading</p>
            </div>
        </div>
    );
}
export default Fallback;