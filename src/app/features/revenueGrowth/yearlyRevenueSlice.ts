import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { YearlyRevenueState, IYearlyRevenue } from "./RevenueGrowthType";

const initialState: YearlyRevenueState = {
  yearlyRevenue: {
    currentYear: "",
    previousYear: "",
    currentYearRevenue: 0,
    previousYearRevenue: 0,
    yearlyGrowth: "0%",
  },
  loading: false,
  error: null,
};

const YearlyRevenueSlice = createSlice({
  name: "yearlyRevenue",
  initialState,
  reducers: {
    fetchYearlyRevenueStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchYearlyRevenueSuccess(state, action: PayloadAction<IYearlyRevenue>) {
      state.yearlyRevenue = action.payload;
      state.loading = false;
    },
    fetchYearlyRevenueFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchYearlyRevenueStart,
  fetchYearlyRevenueSuccess,
  fetchYearlyRevenueFailure,
} = YearlyRevenueSlice.actions;

export default YearlyRevenueSlice.reducer;
