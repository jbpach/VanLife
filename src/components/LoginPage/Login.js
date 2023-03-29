import { useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import "./Login.css";

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message");
}

const Login = () => {
    const messaage = useLoaderData();
    const location = useLocation();
    const [userLoginData, setUserLoginData] = useState({ "email": "", "password": ""})

    const handleSumbit = (event) => {
        event.preventDefault();
        alert(`Email: ${userLoginData.email} Password: ${userLoginData.password}`)
        setUserLoginData({ "email": "", "password": ""})
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserLoginData(prev => ({
            ...prev, 
            [name]: value
        }))
    }

    return (
        <form className="login" onSubmit={handleSumbit}>
            <div className="container">
                {location.state?.messaage && <h3>{location.state.messaage}</h3> }
                <h1>Sign into your account</h1>
                {messaage && <h3>messaage</h3>}
                <input type="email" name="email" placeholder="Email address" value={userLoginData.email} onChange={handleChange}/>
                <input type="password" name="password" placeholder="Password" value={userLoginData.password} onChange={handleChange}/>
                <button className="orangeBtn">Sign in</button>    
                <p>Don't have an accont? Create one now</p>
            </div>
        </form>
    )
}

export default Login;