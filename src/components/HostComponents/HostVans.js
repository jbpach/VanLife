import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import "./HostVans.css";
import { requireAuth } from "../../utils";

export async function loader(){
    await requireAuth();
    return getHostVans();
}

const HostVans = () => {
    const vans = useLoaderData();
    
    const vanElm = vans.map((van) => {
        return (
            <div className="van-container" key={van.id}>
                <Link to={`../../host/vans/${van.id}`}>
                    <img src={van.imageUrl} alt="van" />
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </Link>
            </div>
        )
    });

    return (
        <div className="host-vans">
            <div className="container">
                <h1>Your Listed Vans</h1>
                <Link to="">View All</Link>
                {vanElm}
            </div>
        </div>
    )
}

export default HostVans;