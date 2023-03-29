import { Link, useLocation, useLoaderData } from "react-router-dom";
import './Van.css';
import { getVans } from "../api";

export function loader({ params }) {
    return getVans(params.id);
}

const Van = () => {
    const color = {
        "simple": "#E17654",
        "rugged": "#115E59",
        "luxury": "#161616"
    };
    const van = useLoaderData()
    const location = useLocation();
    const search = location.state?.search || "";
    const type = location.state?.type || "all";

    return (
        <div className="van">
            <div className="container"> 
                {/* <Link to=".." relative="path">← Back to all vans</Link> */}
                <Link to={`./..${search}`}>← Back to {type} vans</Link>
                <img src={van.imageUrl} alt="van"/>
                <p className="tag" style={{background: color[van.type]}}>{van.type}</p>
                <h1>{van.name}</h1>
                <span><b>${van.price}</b>/day</span>
                <p className="des">{van.description}</p>
                <Link className="orangeBtn">Rent this van</Link>
            </div>
        </div>
    )
};

export default Van;