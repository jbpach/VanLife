import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import "./HostVanDetail.css";
import { requireAuth } from "../../utils";

export async function loader({ params }) {
    await requireAuth();
    return getHostVans(params.id);
}

const HostVanDetail = () => {
    const color = {
        "simple": "#E17654",
        "rugged": "#115E59",
        "luxury": "#161616"
    };
    const van = useLoaderData();

    return (
        <div className="host-van-details">
            <div className="container">

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
            </div>
        </div>
    )
}

export default HostVanDetail;