import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Message {
  message: string;
  plan: string;
}
interface UserStatus {
  userStatus: Message;
  loading: boolean;
  error: string | null;
}
const initialState: UserStatus = {
  userStatus: {
    message: "",
    plan: "",
  },
  loading: false,
  error: null,
};

const roleManageSlice = createSlice({
  name: "role_manage",
  initialState,
  reducers: {
    setUserStatus(state, action: PayloadAction<Message>) {
      state.userStatus = action.payload;
      state.loading = false;
      state.error = null;
    }, 
    setLoading(state) {
      state.loading = true;
    },
    setError(
      state,
      action: PayloadAction<{ message: string; detail?: unknown }>
    ) {
      state.loading = false;
      state.error = action.payload.message;
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const { setUserStatus, setLoading, setError, clearError } =
  roleManageSlice.actions;

export default roleManageSlice.reducer;
