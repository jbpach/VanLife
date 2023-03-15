import { useOutletContext } from "react-router-dom"
import "./HostVan.css";

const Details = () => {
    const { van } = useOutletContext();
    return (
        <div className="details">
            <p><b>Name:</b> {van.name}</p>
            <p><b>Category:</b> {van.type}</p>
            <p><b>Description:</b> {van.description}</p>
            <p><b>Visibility:</b> Public</p>
        </div>
    )
}

export default Details;