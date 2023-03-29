import { Link, NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="main-nav">
            <div className="container">
                <Link className="nav-logo" to='/'>#VanLife</Link>
                <NavLink 
                    className="nav-links" 
                    style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold": "",
                            textDecoration: isActive ? "underline" : "",
                        };
                    }} 
                    to="host"
                >Host</NavLink>
                <NavLink 
                    className="nav-links" 
                    style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold": "",
                            textDecoration: isActive ? "underline" : "",
                        };
                    }} 
                    to="about"
                >About</NavLink>
                <NavLink 
                    className="nav-links" 
                    style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold": "",
                            textDecoration: isActive ? "underline" : "",
                        };
                    }} 
                    to="vans"
                >Vans</NavLink>
                                <NavLink 
                    className="nav-links" 
                    style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold": "",
                            textDecoration: isActive ? "underline" : "",
                        };
                    }} 
                    to="login"
                >Login</NavLink>
            </div>
        </nav>
    )
};

export default Navbar;