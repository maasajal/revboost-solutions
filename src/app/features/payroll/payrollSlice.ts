import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createPayroll,
  deletePayroll,
  editPayroll,
  getPayroll,
} from "./payrollAPI";

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
  payrolls: Payroll[];
  isLoading: boolean;
  error: string | null;
}

const initialState: PayrollState = {
  payrolls: [],
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

export const updatePayroll = createAsyncThunk(
  "payroll/updatePayroll",
  async ({ id, payrollData }: { id: string; payrollData: Payroll }) => {
    const updatedPayroll = await editPayroll(id, payrollData);
    return { id, updatedPayroll };
  }
);

export const removePayroll = createAsyncThunk(
  "payroll/removePayroll",
  async (id: string) => {
    await deletePayroll(id);
    return id;
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
        state.payrolls = action.payload;
      })
      .addCase(fetchPayroll.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message || "Failed to fetch payrolls";
      })
      .addCase(addPayroll.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addPayroll.fulfilled, (state, action) => {
        state.payrolls.push(action.payload);
      })
      .addCase(addPayroll.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message || "Failed to add payroll";
      })
      .addCase(removePayroll.fulfilled, (state, action) => {
        state.payrolls = state.payrolls.filter(
          (payroll: { _id: string }) => payroll._id !== action.payload
        );
      })
      // Update payroll case
      .addCase(updatePayroll.fulfilled, (state, action) => {
        console.log(action.payload);
        const index = state.payrolls.findIndex(
          (payroll) => payroll._id === action.payload.id
        );
        if (index !== -1) {
          state.payrolls[index] = action.payload.updatedPayroll;
        }
      });
  },
});

export default payrollSlice.reducer;
