import { Link, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import './Van.css';

const Van = () => {
    const { id } = useParams();
    const location = useLocation();
    const [van, setVans] = useState({});
    const color = {
        "simple": "#E17654",
        "rugged": "#115E59",
        "luxury": "#161616"
    };
    const [loading, setLoading] = useState(true);
    console.log(location)

    useEffect(() => {
        const fecthVan = async () => {
            try {
                const response = await fetch(`/api/vans/${id}`);
                const vanRes = await response.json();
                setLoading(false)
                setVans(vanRes.vans);
            } catch (err) {
                console.log(err);
            }
        }
        fecthVan();
    }, [id])

    const search = location.state?.search || "";
    const type = location.state?.type || "all"

    return (
        <div className="van">
            
            <div className="container"> 
                {loading ? <h2>Loading...</h2> : 
                    (
                        Object.keys(van).length ? (
                            <>
                                {/* <Link to=".." relative="path">← Back to all vans</Link> */}
                                <Link to={`./..${search}`}>← Back to {type} vans</Link>
                                <img src={van.imageUrl} alt="van"/>
                                <p className="tag" style={{background: color[van.type]}}>{van.type}</p>
                                <h1>{van.name}</h1>
                                <span><b>${van.price}</b>/day</span>
                                <p className="des">{van.description}</p>
                                <Link className="orangeBtn">Rent this van</Link>
                            </> 
                        ) : (
                            <>
                                <h1 style={{alignSelf: "center"}}>Sorry, the page you were looking for was not found.</h1>
                                <Link style={{alignSelf: "center"}} className="blackBtn" to="/">Return to Home</Link>
                            </>
                        )
                    )
                }
            </div>
        </div>
    )
};

export default Van;