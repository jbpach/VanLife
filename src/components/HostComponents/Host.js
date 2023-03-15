import { Link } from "react-router-dom";
import "./Host.css";

const Host = () => {
    return (
        <div className="host-dashboard">
                <div className="host-welcome">
                    <div className="container">
                        <h1>Welcome!</h1>
                        <p className="inline-block">Income last 30 days</p>
                        <Link className="float-right" to="/host/income">Details</Link>
                        <h2>$2,260</h2>
                    </div>
                </div>
                <div className="host-review">
                    <div className="container">
                        <h3 className="inline-block">Review Score 5.0/5</h3>
                        <Link className="float-right" to="/host/reviews">Details</Link>
                    </div>
                </div>
                <div className="host-vans">
                    <div className="container">
                        <h2 className="inline-block">Your listed vans</h2>
                        <Link className="float-right" to="/host/vans">View all</Link>
                    </div>
                </div>
        </div>
    )
}

export default Host;