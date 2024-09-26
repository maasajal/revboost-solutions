import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: object | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      
    },
    loginSuccess: (state, action: PayloadAction<{ user: object }>) => {
      state.loading = false;
      state.user = action.payload.user;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<{ error: string | null }>) => {  
      state.loading = false;  
      state.error = action.payload.error; 
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.user = null;  
      state.error = null;  
    },
    setUser: (state, action: PayloadAction<object | null>) => { // নতুন অ্যাকশন
      state.user = action.payload; // ব্যবহারকারীকে স্টেটে সেট করা
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logoutSuccess,setUser } = authSlice.actions;
export default authSlice.reducer;
