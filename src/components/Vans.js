import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getVans } from "../api";
import './Vans.css'

export function loader() {
    return getVans();
}

const Vans = () => {
    const vans = useLoaderData()
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");
    console.log(typeFilter)
    const color = {
        "simple": "#E17654",
        "rugged": "#115E59",
        "luxury": "#161616"
    }

    const displayedVans = typeFilter !== null
        ? vans.filter(van => van.type === typeFilter)
        : vans

    console.log(displayedVans)
    const vanElements = displayedVans.map(van => ( 
        <div className="singleVan" key={van.id}>
            <Link to={`/vans/${van.id}`} state={{search : typeFilter ? `?${searchParams.toString()}` : null, type: typeFilter}}>
                <img src={van.imageUrl} alt="van"/>
                <h2>{van.name}</h2>
                <span><b>${van.price}</b>/day</span>
                <p style={{background: color[van.type]}}>{van.type}</p>
            </Link>
        </div>
    )) 

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
                <h1>Explore our van options</h1>
                <nav className="filter-vans-nav">
                    <button onClick={() => handleFilterChange("type", "simple")} className={`type-filter simple ${typeFilter === "simple" ? "simple-active" : ""}`}>Simple</button>
                    <button onClick={() => handleFilterChange("type", "luxury")} className={`type-filter luxury ${typeFilter === "luxury" ? "luxury-active" : ""}`}>Luxury</button>
                    <button onClick={() => handleFilterChange("type", "rugged")} className={`type-filter rugged ${typeFilter === "rugged" ? "rugged-active" : ""}`}>Rugged</button>
                    {typeFilter ? <button onClick={() => handleFilterChange("type", null)} className="clear-filter">Clear filter</button> : null }
                </nav>
                <div className="grid">
                    {vanElements}
                </div>
            </div>
        </div>
    )
};

export default Vans;