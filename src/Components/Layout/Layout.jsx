import { Outlet } from "react-router-dom";
import Navbar from "../Homepage/Navbar/Navbar";

const Layout = () => {
    return (
        <div className="mb-60">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;