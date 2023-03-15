import { Link } from "react-router-dom";
import './About.css';
import bgImg from "../../images/image55.png";

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <img src={bgImg} alt='hero' />
                <div className="hello">
                    <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                    <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                    <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                </div>
                <div className="yellow-box">
                    <h2>Your destination is waiting.</h2>
                    <h2>Your van is ready.</h2>
                    <Link className="blackBtn" to="/vans">Explore our vans</Link>
                </div>
            </div>
        </div>
    )
};

export default About;