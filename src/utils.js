// utils loader is sending me to an unexpected application error

import { redirect } from "react-router-dom";

export async function requireAuth() {
    const isLoggedIn = localStorage.getItem("loggedIn")
    
    if (!isLoggedIn) {
        // throw redirect("/login?message=You must log in first");
        return redirect("/login?message=You must log in first");

    }
    return null
};