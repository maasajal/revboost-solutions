import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createPayroll, getPayroll } from "./payrollAPI";

interface Payroll {
  _id: string;
  employeeName: string;
  position: string;
  salary: number;
  bonus: number;
  taxDeduction: number;
  month: string;
  __v: number;
}

interface PayrollState {
  payroll: Payroll[];
  isLoading: boolean;
  error: string | null;
}

const initialState: PayrollState = {
  payroll: [],
  isLoading: false,
  error: null,
};

export const fetchPayroll = createAsyncThunk(
  "payroll/fetchPayroll",
  async () => {
    const payroll = getPayroll();
    return payroll;
  }
);

export const addPayroll = createAsyncThunk(
  "payroll/addPayroll",
  async (payrollData: Payroll) => {
    const newPayroll = await createPayroll(payrollData);
    return newPayroll;
  }
);

const payrollSlice = createSlice({
  name: "payroll",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPayroll.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPayroll.fulfilled, (state, action) => {
        state.isLoading = false;
        state.payroll = action.payload;
      })
      .addCase(fetchPayroll.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message || "Failed to fetch payrolls";
      })
      .addCase(addPayroll.fulfilled, (state, action) => {
        state.payroll.push(action.payload);
      });
  },
});

export default payrollSlice.reducer;
