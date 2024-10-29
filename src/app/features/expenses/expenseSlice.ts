import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import { ExpenseEntry, ExpensesState } from "./IExpense";

// Initial state
const initialState: ExpensesState = {
  expenseEntries: [],
  loading: false,
  error: null,
};

export const fetchExpenses = createAsyncThunk(
  "expenses/fetchExpenses",
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await axiosSecure.get(`/expenses/${userId}`);
      //   console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.error("Error fetching expenses: ", error.message);
      return rejectWithValue(error.message?.data);
    }
  }
);
export const addOrUpdateExpense = createAsyncThunk(
  "expenses/addOrUpdateExpense",
  async (
    {
      userId,
      userEmail,
      expenseEntries,
    }: { userId: string; userEmail: string; expenseEntries: ExpenseEntry[] },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosSecure.post("/expenses/add-update-expense", {
        userId,
        userEmail,
        expenseEntries,
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

// export const addOrUpdateExpense = createAsyncThunk(
//   "expenses/addOrUpdateExpense",
//   async (
//     {
//       userId,
//       userEmail,
//       expenseEntry,
//     }: { userId: string; userEmail: string; expenseEntry: ExpenseEntry },
//     { rejectWithValue }
//   ) => {
//     try {
//       const response = await axiosSecure.post("/expenses/add-update-expense", {
//         userId,
//         userEmail,
//         expenseEntry,
//       });
//       return response.data;
//     } catch (error: any) {
//       console.error("Error adding/updating expense:", error);
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

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
        state.expenseEntries = action.payload;
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
        const existingIndex = state.expenseEntries.findIndex(
          (expense) => expense.expenseId === updatedExpense.expenseId
        );

        if (existingIndex !== -1) {
          // Update the existing expense
          state.expenseEntries[existingIndex] = updatedExpense;
        } else {
          // Add new expense
          state.expenseEntries.push(updatedExpense);
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

export default expenseSlice.reducer;
