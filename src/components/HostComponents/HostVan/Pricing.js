import { useOutletContext } from "react-router-dom"
import "./HostVan.css";

const Pricing = () => {
    const { van } = useOutletContext();
    return (
        <div className="pricing">
            <p><b>${van.price}.00</b>/day</p>
        </div>
    )
}

export default Pricing;