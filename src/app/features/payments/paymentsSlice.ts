import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import { PaymentEntry, PaymentsState } from "./IPayments";

// Initial state
const initialState: PaymentsState = {
  paymentEntries: [],
  loading: false,
  error: null,
};

export const fetchPayments = createAsyncThunk(
  "payments/fetchPayments",
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await axiosSecure.get(`/payments/${userId}`);
      return response.data;
    } catch (error: any) {
      console.error("Error fetching payments: ", error.message);
      return rejectWithValue(error.message?.data);
    }
  }
);
export const addOrUpdatePayment = createAsyncThunk(
  "payments/addOrUpdatePayment",
  async (
    {
      userId,
      userEmail,
      paymentEntries,
    }: { userId: string; userEmail: string; paymentEntries: PaymentEntry[] },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosSecure.post("/payments/add-payment", {
        userId,
        userEmail,
        paymentEntries,
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const paymentsSlice = createSlice({
  name: "payments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPayments.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      fetchPayments.fulfilled,
      (state, action: PayloadAction<PaymentEntry[]>) => {
        state.paymentEntries = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(fetchPayments.rejected, (state, action) => {
      state.error = action.payload as string;
      state.loading = false;
    });

    builder.addCase(addOrUpdatePayment.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      addOrUpdatePayment.fulfilled,
      (state, action: PayloadAction<PaymentEntry>) => {
        const updatedPayment = action.payload;
        const existingIndex = state.paymentEntries.findIndex(
          (payment) => payment.transactionId === updatedPayment.transactionId
        );

        if (existingIndex !== -1) {
          // Update the existing payment
          state.paymentEntries[existingIndex] = updatedPayment;
        } else {
          // Add new payment
          state.paymentEntries.push(updatedPayment);
        }
        state.loading = false;
      }
    );
    builder.addCase(addOrUpdatePayment.rejected, (state, action) => {
      state.error = action.payload as string;
      state.loading = false;
    });
  },
});

export default paymentsSlice.reducer;
