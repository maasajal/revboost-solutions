import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { RootState } from "../../store/store";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import { ExpenseCollection, ExpenseEntry, ExpenseState } from "./IExpense";
// import { getExpenses } from "./expensesActions";
import { axiosPublic } from "../../hooks/useAxiosPublic";

// Initial state
const initialState: ExpenseState = {
  expenseCollection: null,
  loading: false,
  error: null,
};

// Thunks
export const fetchExpenses = createAsyncThunk<ExpenseCollection, string>(
  "expenses/fetchExpenses",
  async (userId: string) => {
    try {
      const response = await axiosPublic.get(`/expenses/${userId}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addOrUpdateExpense = createAsyncThunk(
  "expenses/addOrUpdateExpense",
  async (
    {
      userId,
      userEmail,
      expenseEntry,
    }: { userId: string; userEmail: string; expenseEntry: ExpenseEntry },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosSecure.post("/expenses/add-update-expense", {
        userId,
        userEmail,
        expenseEntry,
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteExpense = createAsyncThunk(
  "expenses/deleteExpense",
  async (
    { userId, expenseId }: { userId: string; expenseId: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosSecure.delete(
        `/expenses/${userId}/${expenseId}`
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Slice
const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch expenses
      .addCase(fetchExpenses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExpenses.fulfilled, (state, action) => {
        state.loading = false;
        state.expenseCollection = action.payload;
        state.error = null;
      })
      .addCase(fetchExpenses.rejected, (state, action) => {
        state.loading = false;
        state.expenseCollection = null;
        state.error = action.error.message as string;
      })
      // Add or update expense
      .addCase(addOrUpdateExpense.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addOrUpdateExpense.fulfilled, (state, action) => {
        state.loading = false;
        state.expenseCollection = action.payload;
      })
      .addCase(addOrUpdateExpense.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Delete expense
      .addCase(deleteExpense.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteExpense.fulfilled, (state, action) => {
        state.loading = false;
        state.expenseCollection = action.payload;
      })
      .addCase(deleteExpense.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// export const selectExpenses = (state: RootState) => state.expenses;
export default expenseSlice.reducer;
