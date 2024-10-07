import axios from "axios";
import { useEffect } from "react";

 
const axiosSecure = axios.create({
    baseURL:import.meta.env.VITE_API
})
const useAxiosSecure = () => {
   useEffect(() => {
   axiosSecure.interceptors.response.use(res=>{
    return res;
   },error =>{
    if (error.response.status ===401 || error.response.status ===403) {
       console.log("cor is coming") 
    }
   }
)
   }, [])
   
};

export default useAxiosSecure;