import { Navigate, useLocation } from "react-router-dom";

export const LogOut = () => {
    localStorage.clear()
    let location = useLocation();
    return <Navigate to="/signin" state={{ from: location }} replace />;
}