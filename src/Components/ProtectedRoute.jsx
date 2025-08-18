import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "..";

const ProtectedRoute = ({ children }) => {
    const location = useLocation()
    if (!isAuthenticated()) {
        const redirect = encodeURIComponent(location.pathname + location.search)
        return <Navigate to={`/login?redirect=${redirect}`} replace />
    }
    return children
}

export default ProtectedRoute;


