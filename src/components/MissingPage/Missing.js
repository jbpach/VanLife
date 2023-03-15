import { Link } from "react-router-dom";
import './Missing.css';

const Missing = () => {
    return (
        <div className="missing">
            <div className="container">
                <h1>Sorry, the page you were looking for was not found.</h1>
                <Link className="blackBtn" to="/">Return to Home</Link>
            </div>
        </div>
    )
};

export default Missing;