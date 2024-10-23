import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMonthlyRevenue, MonthlyRevenueState } from "./RevenueGrowthType";

const initialState: MonthlyRevenueState = {
  monthlyRevenue: { currentMonthRevenue: 0, previousMonthRevenue: 0, monthlyGrowth: "0%" },
  loading: false,
  error: null,
};

const monthlyRevenueSlice = createSlice({
  name: "monthlyRevenue",
  initialState,
  reducers: {
    fetchMonthlyRevenueStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchMonthlyRevenueSuccess(state, action: PayloadAction<IMonthlyRevenue>) {
      state.monthlyRevenue = action.payload;
      state.loading = false;
    },
    fetchMonthlyRevenueFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchMonthlyRevenueStart,
  fetchMonthlyRevenueSuccess,
  fetchMonthlyRevenueFailure,
} = monthlyRevenueSlice.actions;

export default monthlyRevenueSlice.reducer;
