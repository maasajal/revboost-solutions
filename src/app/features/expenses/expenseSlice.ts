import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "../../store/store";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import { ExpenseEntry, ExpensesState } from "./IExpense";
// import { getExpenses } from "./expensesActions";
// import { axiosPublic } from "../../hooks/useAxiosPublic";

// Initial state
const initialState: ExpensesState = {
  expenses: [],
  loading: false,
  error: null,
};

export const fetchExpenses = createAsyncThunk(
  "expenses/fetchExpenses",
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await axiosSecure.get(`/expenses/${userId}`);
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.error("Error fetching expenses: ", error.message);
      return rejectWithValue(error.message?.data || "Error fetching expenses");
    }
  }
);

// Thunks
// export const fetchExpenses = createAsyncThunk<ExpenseCollection, string>(
//   "expenses/fetchExpenses",
//   async (userId: string) => {
//     try {
//       const response = await axiosPublic.get(`/expenses/${userId}`);
//       return response.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

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

// export const deleteExpense = createAsyncThunk(
//   "expenses/deleteExpense",
//   async (
//     { userId, expenseId }: { userId: string; expenseId: string },
//     { rejectWithValue }
//   ) => {
//     try {
//       const response = await axiosSecure.delete(
//         `/expenses/${userId}/${expenseId}`
//       );
//       return response.data;
//     } catch (error: any) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// Slice
const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchExpenses.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      fetchExpenses.fulfilled,
      (state, action: PayloadAction<ExpenseEntry[]>) => {
        state.expenses = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(fetchExpenses.rejected, (state, action) => {
      state.error = action.payload as string;
      state.loading = false;
    });
    
    builder.addCase(addOrUpdateExpense.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      addOrUpdateExpense.fulfilled,
      (state, action: PayloadAction<ExpenseEntry>) => {
        const updatedExpense = action.payload;
        const existingIndex = state.expenses.findIndex(
          (expense) => expense.expenseId === updatedExpense.expenseId
        );

        if (existingIndex !== -1) {
          // If the expense already exists, update it
          state.expenses[existingIndex] = updatedExpense;
        } else {
          // Otherwise, add it as a new expense
          state.expenses.push(updatedExpense);
        }

        state.loading = false;
      }
    );
    builder.addCase(addOrUpdateExpense.rejected, (state, action) => {
      state.error = action.payload as string;
      state.loading = false;
    });
  },
});

// export const selectExpenses = (state: RootState) => state.expenses;
export default expenseSlice.reducer;
