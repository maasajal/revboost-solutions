import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import { IIncomeEntry, IncomesState } from "./IIncomes";

// Initial state
const initialState: IncomesState = {
  incomeEntries: [],
  loading: false,
  error: null,
};

export const fetchIncomes = createAsyncThunk(
  "incomes/fetchIncomes",
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await axiosSecure.get(`/incomes/${userId}`);
      return response.data;
    } catch (error: any) {
      console.error("Error fetching incomes: ", error.message);
      return rejectWithValue(error.message?.data || "Error fetching incomes");
    }
  }
);
export const addOrUpdateIncome = createAsyncThunk(
  "incomes/addOrUpdateIncome",
  async (
    {
      userId,
      userEmail,
      incomeEntries,
    }: { userId: string; userEmail: string; incomeEntries: IIncomeEntry[] },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosSecure.post("/incomes/add-update-income", {
        userId,
        userEmail,
        incomeEntries,
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const incomesSlice = createSlice({
  name: "incomes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchIncomes.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      fetchIncomes.fulfilled,
      (state, action: PayloadAction<IIncomeEntry[]>) => {
        state.incomeEntries = action.payload;
        state.loading = false;
        state.error = null;
      }
    );
    builder.addCase(fetchIncomes.rejected, (state, action) => {
      state.error = action.payload as string;
      state.loading = false;
    });

    builder.addCase(addOrUpdateIncome.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      addOrUpdateIncome.fulfilled,
      (state, action: PayloadAction<IIncomeEntry>) => {
        const updatedIncome = action.payload;
        const existingIndex = state.incomeEntries.findIndex(
          (income) => income.incomeId === updatedIncome.incomeId
        );

        if (existingIndex !== -1) {
          // Update the existing income
          state.incomeEntries[existingIndex] = updatedIncome;
        } else {
          // Add new income
          state.incomeEntries.push(updatedIncome);
        }
        state.loading = false;
      }
    );
    builder.addCase(addOrUpdateIncome.rejected, (state, action) => {
      state.error = action.payload as string;
      state.loading = false;
    });
  },
});

export default incomesSlice.reducer;
