import { useEffect } from "react";
import useAxiosSecure from "../../../useHook/useAxiosSecure";

 

const AdminProfile = () => {
    const axiosSecure = useAxiosSecure()
    useEffect(() => {
        axiosSecure.get('/api/v1/login/admin',{
            headers:{
                authorization:`Bearer ${localStorage.getItem("user-token")}`
            }
        })
        .then(res=>console.log(res.data))
    }, [ axiosSecure])
    
    return (
        <div>
            AdminProfile
        </div>
    );
};

export default AdminProfile;