import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPublic } from "../../hooks/useAxiosPublic";

interface RevenueState {
  revenueEntries: { period: string; revenue: number }[];
  loading: boolean;
  error: string | null;
}

const initialState: RevenueState = {
  revenueEntries: [],
  loading: false,
  error: null,
};

export const fetchRevenueData = createAsyncThunk(
  "revenue/fetchRevenueData",
  async (userId: string) => {
    const response = await axiosPublic.get(`/revenue/${userId}`);
    return response.data;
  }
);
export const addOrUpdateRevenueData = createAsyncThunk(
  "revenue/addOrUpdateRevenueData",
  async (data: {
    userId: string;
    userEmail: string;
    revenueEntries: { period: string; revenue: number }[];
  }) => {
    const response = await axiosPublic.post("/add-update-revenue", data);
    return response.data;
  }
);

const revenueSlice = createSlice({
  name: "revenue",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRevenueData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRevenueData.fulfilled, (state, action) => {
        state.loading = false;
        state.revenueEntries = action.payload;
      })
      .addCase(fetchRevenueData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch revenue data";
      });

    builder.addCase(addOrUpdateRevenueData.fulfilled, (state, action) => {
      state.revenueEntries = action.payload.revenueCollection.revenueEntries;
    });
  },
});

export default revenueSlice.reducer;
