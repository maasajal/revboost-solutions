import {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
  createUserSuccess,
  userRequestFailure,
  updateUserSuccess,
  User,
} from "../features/users/usersSlice";
import useAxiosPublic from "../hooks/useAxiosPublic";

const axiosPublic = useAxiosPublic();

export const fetchUsers = () => async (dispatch: any) => {
  dispatch(fetchUsersStart());
  try {
    const response = await axiosPublic.get("/users"); // Assuming you have an API call
    dispatch(fetchUsersSuccess(response.data));
  } catch (error: any) {
    dispatch(fetchUsersFailure(error.message || "Failed to fetch users"));
  }
};

export const createUser = (userData: User) => async (dispatch: any) => {
  dispatch(fetchUsersStart());
  try {
    const response = await axiosPublic.post("/register", userData);
    dispatch(createUserSuccess(response.data));
  } catch (error: any) {
    dispatch(userRequestFailure(error.message || "Failed to create user"));
  }
};

export const updateUser =
  (email: string, updatedData: Partial<User>) => async (dispatch: any) => {
    dispatch(fetchUsersStart());
    try {
      const response = await axiosPublic.patch(`/user/${email}`, updatedData);
      dispatch(updateUserSuccess(response.data));
    } catch (error: any) {
      dispatch(userRequestFailure(error.message || "Failed to update user"));
    }
  };
