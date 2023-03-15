import { useState, useEffect } from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";
import "./HostVanDetail.css";

const HostVanDetail = () => {
    const { id } = useParams();
    const [van, setVans] = useState(null);
    const color = {
        "simple": "#E17654",
        "rugged": "#115E59",
        "luxury": "#161616"
    };
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fecthVan = async () => {
            try {
                const response = await fetch(`/api/host/vans/${id}`);
                const vanRes = await response.json();
                setLoading(false)
                setVans(vanRes.vans[0]);
            } catch (err) {
                console.log(err);
            }
        }
        fecthVan();
    }, [id])

    return (
        <div className="host-van-details">
            <div className="container">
                {loading ? <h2>Loading...</h2> : ( 
                <>
                <Link to=".." relative="path">← Back to all vans</Link>
                <div className="square">
                    <div className="info-container">
                        <img src={van.imageUrl} alt="van"/>
                        <p className="tag" style={{background: color[van.type]}}>{van.type}</p>
                        <h1>{van.name}</h1>
                        <span><b>${van.price}</b>/day</span>
                    </div>
                    <nav className="van-host-nav">
                        <NavLink 
                            className="nav-link" 
                            style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold": "",
                                    textDecoration: isActive ? "underline" : "",
                                };
                            }}  
                            end
                            to={"."}>
                        Details</NavLink>
                        <NavLink 
                            className="nav-link" 
                            style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold": "",
                                    textDecoration: isActive ? "underline" : "",
                                };
                            }}  
                            to={"./pricing"}
                        >Pricing</NavLink>
                        <NavLink 
                            className="nav-link" 
                            style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold": "",
                                    textDecoration: isActive ? "underline" : "",
                                };
                            }}  
                            to={"./photos"}
                        >Photos</NavLink>
                    </nav>
                    <Outlet context={{van}}/>
                </div>
                </>)}
            </div>
        </div>
    )
}

export default HostVanDetail;