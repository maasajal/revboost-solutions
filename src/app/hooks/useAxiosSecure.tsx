// import axios from "axios";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";


// const axiosSecure = axios.create({
//     baseURL: import.meta.env.VITE_API
// })
// const useAxiosSecure = () => {
//     const navigate = useNavigate()

//     useEffect(() => {
//         axiosSecure.interceptors.response.use(res => {
//             return res;
//         }, error => {
//             if (error.response.status === 401 || error.response.status === 403) {
//                 console.log("cor is coming")
//                 navigate("/")

//             }
//         }
//         )
//     }, [])

//     return axiosSecure;

// };

// export default useAxiosSecure;

import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API
});

const useAxiosSecure = () => {
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem("user-token");
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`; // Attach the token
                }
                return config;
            },
            (error) => {
                // Handle request error
                return Promise.reject(error);
            }
        );

        // Response interceptor to handle errors
        axiosSecure.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                if (error.response.status === 401 || error.response.status === 403) {
                    console.log("Unauthorized or Forbidden");
                    // navigate("/"); // Redirect to the homepage
                }
                return Promise.reject(error); // Pass the error down the chain
            }
        );
    }, [navigate]);

    return axiosSecure;
};

export default useAxiosSecure;
