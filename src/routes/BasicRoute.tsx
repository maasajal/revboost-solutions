import { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { fetchUserRole } from "../app/features/roleManage/fetchRoleStatus";
import User from "../app/features/users/UserType";
import { useAppSelector } from "../app/hooks/useAppSelector";
import useAxiosSecure from "../app/hooks/useAxiosSecure";
import { AppDispatch, RootState } from "../app/store/store";

interface BasicRoutChild {
    children: ReactNode
}
const BasicRoute = ({ children }: BasicRoutChild) => {

    const dispatch = useDispatch<AppDispatch>()
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        dispatch(fetchUserRole(axiosSecure));
    }, [dispatch, axiosSecure]);



    const user = useAppSelector(
        (state: RootState) => state.currentUser.user
    ) as User;
    const { subscriptionPlan, role } = user;


    const { userStatus, loading } = useSelector((state: RootState) => state.role_manage);

    const { message } = userStatus;



    if (loading) {
        return <>Loading</>
    }
    if (role === message || subscriptionPlan?.toLocaleLowerCase() === "basic" || subscriptionPlan?.toLocaleLowerCase() === "standard" || subscriptionPlan?.toLocaleLowerCase() === "premium") {
        return <>{children}</>;
    }
    return <Navigate to='/dashboard' state={location.pathname} replace />
};

export default BasicRoute; 