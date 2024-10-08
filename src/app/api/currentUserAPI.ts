import { jwtDecode } from "jwt-decode";
import {
  fetchUsersStart,
  userRequestFailure,
  fetchUserSuccess,
} from "../features/users/currentUserSlice";

import { axiosSecure } from "../hooks/useAxiosSecure";

export interface DecodedToken {
  email: string;
}

export const getCurrentUser = () => async (dispatch: any) => {
  dispatch(fetchUsersStart());

  const token = localStorage.getItem("user-token");
  try {
    if (token) {
      const decoded = jwtDecode<DecodedToken>(token); // Decode the token with the defined type
      const response = await axiosSecure.get(`/user/${decoded.email}`); // Assuming your API supports fetching by email
      dispatch(fetchUserSuccess(response.data.user)); // Wrap in an array if your state expects an array
    }
  } catch (error: any) {
    dispatch(userRequestFailure(error.message || "Failed to fetch user"));
  }
};
