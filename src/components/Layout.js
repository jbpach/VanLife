import { Outlet } from "react-router-dom";
import Navbar from "./NavBarPage/Navbar";
import Footer from "./FooterPage/Footer";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;