
import { Outlet, Navigate } from "react-router-dom";

const  AuthRequired = () => {
    const auth = localStorage.getItem("loggedIn")
    if (!auth) {
        return <Navigate to="login" state={{ messaage: "You must login in first." }}/>
    } 
    return <Outlet />
}

export default AuthRequired;