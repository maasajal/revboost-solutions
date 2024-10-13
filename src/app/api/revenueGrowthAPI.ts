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

const API_BASE_URL = "/revenue-growth";

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
