import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HostVans.css";

const HostVans = () => {
    const [vans, setVans] = useState([]);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVans = async () => {
            try {
                const response = await fetch('/api/host/vans');
                const vansRes = await response.json();
                // setLoading(false);
                setVans(vansRes.vans);
            } catch(err) {
                console.log(err)
            }
        }
        fetchVans();
    }, [])
    
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