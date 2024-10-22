import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMonthlyRevenue, MonthlyRevenueState } from "./RevenueGrowthType";
import { getMonthlyRevenue } from "../../api/revenueGrowthAPI";

const initialState: MonthlyRevenueState = {
  monthlyRevenue: {} as IMonthlyRevenue,
  loading: false,
  error: null,
};

const monthlyRevenueSlice = createSlice({
  name: "monthlyRevenues",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMonthlyRevenue.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getMonthlyRevenue.fulfilled,
      (state, action: PayloadAction<IMonthlyRevenue>) => {
        state.monthlyRevenue = action.payload;
        state.loading = false;
        state.error = null;
      }
    );
    builder.addCase(getMonthlyRevenue.rejected, (state, action) => {
      state.error = action.payload as string;
      state.loading = false;
    });
  },
});

export default monthlyRevenueSlice.reducer;
