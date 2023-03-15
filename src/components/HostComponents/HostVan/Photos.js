import { useOutletContext } from "react-router-dom"
import "./HostVan.css";

const Photos = () => {
    const { van } = useOutletContext();
    return (
        <div className="photos">
            <img src={van.imageUrl} alt="van" />
        </div>
    )
}

export default Photos;