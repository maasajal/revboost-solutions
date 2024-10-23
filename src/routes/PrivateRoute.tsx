import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../app/store/store";

interface PrivetRouteProps {
    children: ReactNode;
}

const PrivateRoute = ({ children }: PrivetRouteProps) => {
    const { user, loading } = useSelector((state: RootState) => state.auth); 
    if (loading) {
        return <>Loading.....</>
    }
    if (user) return children
    return <Navigate to='/login' state={location.pathname} replace />
};

export default PrivateRoute;