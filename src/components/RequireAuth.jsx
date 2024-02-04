import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { useEffect } from "react";

export const RequireAuth = ({ children }) => {
    const { user, authenticateUser } = useAuth();
        let location = useLocation();

    if (user === false) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};