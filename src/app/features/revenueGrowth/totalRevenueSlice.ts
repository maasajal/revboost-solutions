import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITotalRevenue, TotalRevenueState } from "./RevenueGrowthType";

const initialState: TotalRevenueState = {
  totalRevenueGrowth: {
    totalIncome: 0,
    totalExpenses: 0,
    growthPercentage: "",
    forecast: "",
  },
  loading: false,
  error: null,
};

const TotalRevenueSlice = createSlice({
  name: "totalRevenueGrowth",
  initialState,
  reducers: {
    fetchTotalRevenueStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchTotalRevenueSuccess(state, action: PayloadAction<ITotalRevenue>) {
      state.totalRevenueGrowth = action.payload;
      state.loading = false;
    },
    fetchTotalRevenueFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchTotalRevenueStart,
  fetchTotalRevenueSuccess,
  fetchTotalRevenueFailure,
} = TotalRevenueSlice.actions;

export default TotalRevenueSlice.reducer;
