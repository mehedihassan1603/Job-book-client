import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <span><progress className="progress w-56"></progress></span>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};

export default PrivateRoute;