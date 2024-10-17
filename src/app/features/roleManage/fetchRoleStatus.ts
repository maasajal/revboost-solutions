import { AxiosInstance } from "axios";
import { AppDispatch } from "../../store/store";
import { setError, setLoading, setUserStatus } from "./roleManageSlice";
interface Url {
  url: string;
}

export const fetchUserRole =
  (axiosSecure: AxiosInstance, url: Url) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading());
      const response = await axiosSecure.get(`/${url}`); 
      dispatch(setUserStatus(response.data));
    } catch (error) { 
      dispatch(setError({ message: "Failed to fetch users", detail: error }));
    }
  };
