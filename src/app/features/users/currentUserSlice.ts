import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "./UserType";

interface UsersState {
  user: User | {};
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  user: {},
  loading: false,
  error: null,
};

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    fetchUsersStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUserSuccess: (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },

    fetchUsersFailure: (state, action: PayloadAction<string | null>) => {
      state.loading = false;
      state.error = action.payload;
    },

    userRequestFailure: (state, action: PayloadAction<string | null>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchUsersStart,
  fetchUserSuccess,
  fetchUsersFailure,
  userRequestFailure,
} = currentUserSlice.actions;

export default currentUserSlice.reducer;
