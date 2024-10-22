import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IQuarterlyRevenue, QuarterlyRevenueState } from "./RevenueGrowthType";

const initialState: QuarterlyRevenueState = {
  quarterlyRevenue: {
    currentQuarter: "",
    previousQuarter: "",
    currentQuarterRevenue: 0,
    previousQuarterRevenue: 0,
    quarterlyGrowth: "0%",
  },
  loading: false,
  error: null,
};

const quarterlyRevenueSlice = createSlice({
  name: "quarterlyRevenue",
  initialState,
  reducers: {
    fetchQuarterlyRevenueStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchQuarterlyRevenueSuccess(
      state,
      action: PayloadAction<IQuarterlyRevenue>
    ) {
      state.quarterlyRevenue = action.payload;
      state.loading = false;
    },
    fetchQuarterlyRevenueFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchQuarterlyRevenueStart,
  fetchQuarterlyRevenueSuccess,
  fetchQuarterlyRevenueFailure,
} = quarterlyRevenueSlice.actions;

export default quarterlyRevenueSlice.reducer;
