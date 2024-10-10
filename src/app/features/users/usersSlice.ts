import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "./UserType";

interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUsersStart(state) {
      state.loading = true;
      state.error = null;
    },

    fetchUsersSuccess(state, action: PayloadAction<User[]>) {
      state.loading = false;
      state.users = action.payload;
    },

    fetchUsersFailure(state, action: PayloadAction<string | null>) {
      state.loading = false;
      state.error = action.payload;
    },

    createUserSuccess(state, action: PayloadAction<User>) {
      state.loading = false;
      state.users.push(action.payload);
    },

    updateUserSuccess(state, action: PayloadAction<User>) {
      state.loading = false;
      const index = state.users.findIndex(
        (user) => user.email === action.payload.email
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },

    userRequestFailure(state, action: PayloadAction<string | null>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
  createUserSuccess,
  updateUserSuccess,
  userRequestFailure,
} = usersSlice.actions;

export default usersSlice.reducer;
