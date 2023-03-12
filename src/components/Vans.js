import { useEffect, useState } from "react";
import './Vans.css'
import { Link } from "react-router-dom";

const Vans = () => {
    const [vans, setVans] = useState([]);
    const color = {
        "simple": "#E17654",
        "rugged": "#115E59",
        "luxury": "#161616"
    };
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVans = async () => {
            try {
                const response = await fetch('/api/vans');
                const vansRes = await response.json();
                setLoading(false);
                setVans(vansRes.vans);
            } catch(err) {
                console.log(err)
            }
        }
        fetchVans();
    }, [])

    const vanElm = vans.map((van) => {
        return (
                <div className="singleVan" key={van.id}>
                    <Link to={`/vans/${van.id}`}>
                        <img src={van.imageUrl} alt="van"/>
                        <h2>{van.name}</h2>
                        <span><b>${van.price}</b>/day</span>
                        <p style={{background: color[van.type]}}>{van.type}</p>
                    </Link>
                </div>
        )
    })
    return (
        <div className="vans">
            <div className="container">
                {loading ? <h2>Loading...</h2> : 
                    (
                        <>
                            <h1>Explore our van options</h1>
                    
                            <div className="grid">
                                {vanElm}
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
};

export default Vans;