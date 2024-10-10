import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "./useAppDispatch";
import { logoutSuccess } from "../features/firebaseAuthentication/authSlice";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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
      (response) => response, // Return the response if successful
      (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          console.log("Unauthorized or Forbidden");
          localStorage.removeItem("user-token");
          dispatch(logoutSuccess()); // Dispatch as a function call
          navigate("/login"); // Redirect to the homepage
        }
        return Promise.reject(error); // Pass the error down the chain
      }
    );
  }, [navigate, dispatch]);

  return axiosSecure;
};

export { axiosSecure };
export default useAxiosSecure;
