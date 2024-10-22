import axios from "axios";
import {
  fetchRevenueGrowthStart,
  fetchRevenueGrowthSuccess,
  fetchRevenueGrowthFailure,
  createRevenueGrowthSuccess,
  updateRevenueGrowthSuccess,
  revenueGrowthRequestFailure,
} from "../features/revenueGrowth/revenueGrowthSlice";
import { axiosPublic } from "../hooks/useAxiosPublic";
// import { axiosSecure } from "../hooks/useAxiosSecure";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchMonthlyRevenueStart,
  fetchMonthlyRevenueSuccess,
  fetchMonthlyRevenueFailure,
} from "../features/revenueGrowth/monthlyRevenueSlice";
import { axiosSecure } from "../hooks/useAxiosSecure";
import { AppDispatch } from "../store/store";

const API_BASE_URL = "/revenue-growth";

export const fetchMonthlyRevenue =
  (userId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchMonthlyRevenueStart());

      const response = await axiosSecure.get(`/monthly-revenue/${userId}`);

      const { currentMonthRevenue, previousMonthRevenue, growth } =
        response.data;

      // Dispatch the success action with payload
      dispatch(
        fetchMonthlyRevenueSuccess({
          currentMonthRevenue,
          previousMonthRevenue,
          growth,
        })
      );
    } catch (error: any) {
      // Handle the error and dispatch the failure action
      dispatch(
        fetchMonthlyRevenueFailure(
          error.message || "Failed to fetch monthly revenue"
        )
      );
    }
  };

export const getMonthlyRevenue = createAsyncThunk(
  "monthlyRevenues/getMonthlyRevenue",
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await axiosPublic.get(`/monthly-revenue/${userId}`);
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.error("Error fetching monthly revenue: ", error.message);
      return rejectWithValue(
        error.message?.data || "Error fetching monthly revenue"
      );
    }
  }
);

// Fetch Revenue Growth Data
export const fetchRevenueGrowth = (userId: string) => async (dispatch: any) => {
  dispatch(fetchRevenueGrowthStart());
  try {
    const response = await axiosPublic.get(`${API_BASE_URL}/${userId}`);
    dispatch(fetchRevenueGrowthSuccess(response.data));
  } catch (error: any) {
    dispatch(
      fetchRevenueGrowthFailure(
        error.message || "Failed to fetch revenue growth data"
      )
    );
  }
};

// Create new Revenue Growth entry
export const createRevenueGrowth = (data: any) => async (dispatch: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}`, data);
    dispatch(createRevenueGrowthSuccess(response.data));
  } catch (error: any) {
    dispatch(
      revenueGrowthRequestFailure(
        error.message || "Failed to create revenue growth entry"
      )
    );
  }
};

// Update existing Revenue Growth entry
export const updateRevenueGrowth =
  (id: string, data: any) => async (dispatch: any) => {
    try {
      const response = await axios.patch(`${API_BASE_URL}/${id}`, data);
      dispatch(updateRevenueGrowthSuccess(response.data));
    } catch (error: any) {
      dispatch(
        revenueGrowthRequestFailure(
          error.message || "Failed to update revenue growth entry"
        )
      );
    }
  };
