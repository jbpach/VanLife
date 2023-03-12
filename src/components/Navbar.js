import { Link } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
    return (
        <nav>
            <div className="container">
                <Link className="nav-logo" to='/'>#VanLife</Link>
                <Link className="nav-links" to='/about'>About</Link>
                <Link className="nav-links" to='/vans'>Vans</Link>
            </div>
        </nav>
    )
};

export default Navbar;