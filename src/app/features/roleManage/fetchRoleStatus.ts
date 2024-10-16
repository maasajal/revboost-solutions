import { AxiosInstance } from "axios";
import { AppDispatch } from "../../store/store";
import { setError, setLoading, setUserStatus } from "./roleManageSlice";

export const fetchUserRole =
  (axiosSecure: AxiosInstance) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading());
      const response = await axiosSecure.get("/basic"); 
      dispatch(setUserStatus(response.data));
    } catch (error) { 
      dispatch(setError({ message: "Failed to fetch users", detail: error }));
    }
  };
