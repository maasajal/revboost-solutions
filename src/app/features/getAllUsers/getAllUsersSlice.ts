import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the structure of a user
interface User {
  id: number;
  name: string;
  email: string;
  _id: string;
  photo: string;
  subscriptionStatus: string;
  role: string;
  subscriptionPlan: string;
}

// Define the state interface for the slice
interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
  errorDetail?: unknown; // Optional error detail
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

const getAllUsersSlice = createSlice({
  name: "allUsers",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
      state.loading = false;
      state.error = null;
      state.errorDetail = undefined;
    },
    // Action to set loading state
    setLoading(state) {
      state.loading = true;
    },
    setError(
      state,
      action: PayloadAction<{ message: string; detail?: unknown }>
    ) {
      state.loading = false;
      state.error = action.payload.message;
      state.errorDetail = action.payload.detail;
    },
    clearError(state) {
      state.error = null;
      state.errorDetail = undefined;
    },
  },
});
export const { setUsers, setLoading, setError, clearError } =
  getAllUsersSlice.actions;
export default getAllUsersSlice.reducer;
