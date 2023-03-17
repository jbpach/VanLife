import { useEffect, useState } from "react";
import './Vans.css'
import { Link, useSearchParams } from "react-router-dom";

const Vans = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");
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

    const vanToSearchThrough = typeFilter 
        ? vans.filter(van => van.type === typeFilter)
        : vans;

    const vanElm = vanToSearchThrough.map((van) => {
        return (
                <div className="singleVan" key={van.id}>
                    <Link to={`/vans/${van.id}`} state={{search : typeFilter ? `?${searchParams.toString()}` : null, type: typeFilter}}>
                        <img src={van.imageUrl} alt="van"/>
                        <h2>{van.name}</h2>
                        <span><b>${van.price}</b>/day</span>
                        <p style={{background: color[van.type]}}>{van.type}</p>
                    </Link>
                </div>
        )
    })

    const handleFilterChange = (key, value) => {
        setSearchParams(prevParams => {
            if (value) {
                prevParams.set(key, value);
            } else {
                prevParams.delete(key);
            }
            return prevParams;
        }) 
    }

    return (
        <div className="vans">
            <div className="container">
                {loading ? <h2>Loading...</h2> : 
                    (
                        <>
                            <h1>Explore our van options</h1>
                            <nav className="filter-vans-nav">
                                <button onClick={() => handleFilterChange("type", "simple")} className={`type-filter simple ${typeFilter === "simple" ? "simple-active" : ""}`}>Simple</button>
                                <button onClick={() => handleFilterChange("type", "luxury")} className={`type-filter luxury ${typeFilter === "luxury" ? "luxury-active" : ""}`}>Luxury</button>
                                <button onClick={() => handleFilterChange("type", "rugged")} className={`type-filter rugged ${typeFilter === "rugged" ? "rugged-active" : ""}`}>Rugged</button>
                                {typeFilter ? <button onClick={() => handleFilterChange("type", null)} className="clear-filter">Clear filter</button> : null }
                            </nav>
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