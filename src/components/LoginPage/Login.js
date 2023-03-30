import { useState } from "react";
import { useLoaderData, useLocation, Form, redirect } from "react-router-dom";
import "./Login.css";
import { loginUser } from "../../api";

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const data = await loginUser({ email, password })
    localStorage.setItem("loggedIn", data.token);
    return redirect("/host")
}

const Login = () => {
    const messaage = useLoaderData();
    const location = useLocation();


    const [userLoginData, setUserLoginData] = useState({email: "", password: ""});
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState(null);

    const handleSumbit = (e) => {
        e.preventDefault();

        setStatus("submitting");
        setError(null);
        loginUser(userLoginData)
            .then(data => console.log(data))
            .catch(err => setError(err))
            .finally(() => setStatus("idle"))

        setUserLoginData({ "email": "", "password": ""});
    }

    return (
        <Form className="login" method="post">
            <div className="container">
                <form onSubmit={handleSumbit}></form>
                <h1>Sign into your account</h1>
                {messaage && <h3>messaage</h3>}
                {location.state?.messaage && <h3>{location.state.messaage}</h3> }
                {error && <h3>{error.message}</h3>}

                <input type="email" name="email" placeholder="Email address" />
                <input type="password" name="password" placeholder="Password" />
                <button disabled={status === "submitting"} className="orangeBtn">{ status === "submitting" ? "Logging in ": "Log in"}</button>    
                <p>Don't have an accont? Create one now</p>
            </div>
        </Form>
    )
}

export default Login;