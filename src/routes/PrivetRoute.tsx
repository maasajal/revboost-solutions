import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { RootState } from "../app/store/store";

interface PrivetRouteProps {
    children: ReactNode;
}

const PrivetRoute = ({ children }: PrivetRouteProps) => {
    const navigate = useNavigate()
    const { user, loading } = useSelector((state: RootState) => state.auth);
    if (loading) {
        return <>Loading rajiul</>
    }
    if (!user) {
        navigate("/login")
        return
    }
    if (user) return children
    return <Navigate to='/login' state={location.pathname} replace={true} />
};

export default PrivetRoute;