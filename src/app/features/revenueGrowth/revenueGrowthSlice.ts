import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RevenueGrowth {
  _id: string;
  userId: string;
  totalIncome: number;
  totalExpenses: number;
  growthPercentage: number;
  createdAt: string;
  updatedAt: string;
}

interface RevenueGrowthState {
  data: RevenueGrowth; // single object
  loading: boolean;
  error: string | null;
}

const initialState: RevenueGrowthState = {
  data: {} as RevenueGrowth, // initialize as an empty object
  loading: false,
  error: null,
};

const revenueGrowthSlice = createSlice({
  name: "revenueGrowth",
  initialState,
  reducers: {
    fetchRevenueGrowthStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    // Expecting a single object (not an array)
    fetchRevenueGrowthSuccess: (state, action: PayloadAction<RevenueGrowth>) => {
      state.loading = false;
      state.data = action.payload; // assign single object to data
      state.error = null;
    },

    fetchRevenueGrowthFailure: (state, action: PayloadAction<string | null>) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Create and update are for a single revenue growth object
    createRevenueGrowthSuccess: (state, action: PayloadAction<RevenueGrowth>) => {
      state.loading = false;
      state.data = action.payload; // directly assign the created object
      state.error = null;
    },

    updateRevenueGrowthSuccess: (state, action: PayloadAction<RevenueGrowth>) => {
      state.loading = false;
      state.data = action.payload; // update the object directly
      state.error = null;
    },

    revenueGrowthRequestFailure: (state, action: PayloadAction<string | null>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchRevenueGrowthStart,
  fetchRevenueGrowthSuccess,
  fetchRevenueGrowthFailure,
  createRevenueGrowthSuccess,
  updateRevenueGrowthSuccess,
  revenueGrowthRequestFailure,
} = revenueGrowthSlice.actions;

export default revenueGrowthSlice.reducer;
