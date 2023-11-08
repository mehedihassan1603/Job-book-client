import { Outlet } from "react-router-dom";
import Navbar from "../Homepage/Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
    return (
        <div className="mb-60">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;