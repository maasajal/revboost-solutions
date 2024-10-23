import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  HalfYearlyRevenueState,
  IHalfYearlyRevenue,
} from "./RevenueGrowthType";

const initialState: HalfYearlyRevenueState = {
  halfYearlyRevenue: {
    currentHalfYear: "",
    previousHalfYear: "",
    currentHalfYearRevenue: 0,
    previousHalfYearRevenue: 0,
    halfYearlyGrowth: "0%",
  },
  loading: false,
  error: null,
};

const halfYearlyRevenueSlice = createSlice({
  name: "halfYearlyRevenue",
  initialState,
  reducers: {
    fetchHalfYearlyRevenueStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchHalfYearlyRevenueSuccess(
      state,
      action: PayloadAction<IHalfYearlyRevenue>
    ) {
      state.halfYearlyRevenue = action.payload;
      state.loading = false;
    },
    fetchHalfYearlyRevenueFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchHalfYearlyRevenueStart,
  fetchHalfYearlyRevenueSuccess,
  fetchHalfYearlyRevenueFailure,
} = halfYearlyRevenueSlice.actions;

export default halfYearlyRevenueSlice.reducer;
