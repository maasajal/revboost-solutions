import { AxiosInstance } from "axios";
import { AppDispatch } from "../../store/store";
import { setError, setLoading, setUsers } from "./getAllUsersSlice";

// Thunk to fetch users
export const fetchAllUsers =
  (axiosSecure: AxiosInstance) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading()); // Set loading to true

      const response = await axiosSecure.get("/users"); // Use .get method for axios requests
      dispatch(setUsers(response.data.users)); // Dispatch users if successful
    } catch (error) {
      dispatch(setError({ message: "Failed to fetch users", detail: error }));
    }
  };
