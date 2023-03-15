import { NavLink } from "react-router-dom";
import './HostNavbar.css';

const HostNavbar = ( ) => {
    return (
        <nav className="host-nav">
            <div className="container">
                <NavLink 
                    className="nav-link" 
                    style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold": "",
                            textDecoration: isActive ? "underline" : "",
                        };
                    }}  
                    end
                    to=".">
                Dashboard</NavLink>
                <NavLink 
                    className="nav-link" 
                    style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold": "",
                            textDecoration: isActive ? "underline" : "",
                        };
                    }}  
                    to="/host/income"
                >Income</NavLink>
                <NavLink 
                    className="nav-link" 
                    style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold": "",
                            textDecoration: isActive ? "underline" : "",
                        };
                    }}  
                    to="/host/vans"
                >Vans</NavLink>
                <NavLink 
                    className="nav-link" 
                    style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold": "",
                            textDecoration: isActive ? "underline" : "",
                        };
                    }}  
                    to="/host/reviews"
                >Reviews</NavLink>
            </div>
        </nav>
    )
}

export default HostNavbar;