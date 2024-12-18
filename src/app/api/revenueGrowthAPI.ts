import { axiosSecure } from "../hooks/useAxiosSecure";
import { AppDispatch } from "../store/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchRevenueGrowthStart,
  fetchRevenueGrowthSuccess,
  fetchRevenueGrowthFailure,
  createRevenueGrowthSuccess,
  updateRevenueGrowthSuccess,
  revenueGrowthRequestFailure,
} from "../features/revenueGrowth/revenueGrowthSlice";
import {
  fetchMonthlyRevenueStart,
  fetchMonthlyRevenueSuccess,
  fetchMonthlyRevenueFailure,
} from "../features/revenueGrowth/monthlyRevenueSlice";
import {
  fetchQuarterlyRevenueStart,
  fetchQuarterlyRevenueSuccess,
} from "../features/revenueGrowth/quarterlyRevenueSlice";
import {
  fetchHalfYearlyRevenueFailure,
  fetchHalfYearlyRevenueStart,
  fetchHalfYearlyRevenueSuccess,
} from "../features/revenueGrowth/halfYearlyRevenueSlice";
import {
  fetchYearlyRevenueFailure,
  fetchYearlyRevenueStart,
  fetchYearlyRevenueSuccess,
} from "../features/revenueGrowth/yearlyRevenueSlice";
import {
  fetchTotalRevenueFailure,
  fetchTotalRevenueStart,
  fetchTotalRevenueSuccess,
} from "../features/revenueGrowth/totalRevenueSlice";

export const fetchMonthlyRevenue =
  (userId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchMonthlyRevenueStart());
      const response = await axiosSecure.get(`/monthly-revenue/${userId}`);
      const { currentMonthRevenue, previousMonthRevenue, monthlyGrowth } =
        response.data;
      dispatch(
        fetchMonthlyRevenueSuccess({
          currentMonthRevenue,
          previousMonthRevenue,
          monthlyGrowth,
        })
      );
    } catch (error: any) {
      dispatch(
        fetchMonthlyRevenueFailure(
          error.message || "Failed to fetch monthly revenue"
        )
      );
    }
  };

export const fetchQuarterlyRevenue =
  (userId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchQuarterlyRevenueStart());
      const response = await axiosSecure.get(`/quarterly-revenue/${userId}`);
      const {
        currentQuarter,
        previousQuarter,
        currentQuarterRevenue,
        previousQuarterRevenue,
        quarterlyGrowth,
      } = response.data;

      dispatch(
        fetchQuarterlyRevenueSuccess({
          currentQuarter,
          previousQuarter,
          currentQuarterRevenue,
          previousQuarterRevenue,
          quarterlyGrowth,
        })
      );
    } catch (error: any) {
      dispatch(
        fetchMonthlyRevenueFailure(
          error.message || "Failed to fetch monthly revenue"
        )
      );
    }
  };

export const fetchHalfYearlyRevenue =
  (userId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchHalfYearlyRevenueStart());
      const response = await axiosSecure.get(`/half-year-revenue/${userId}`);
      const {
        currentHalfYear,
        previousHalfYear,
        currentHalfYearRevenue,
        previousHalfYearRevenue,
        halfYearlyGrowth,
      } = response.data;

      dispatch(
        fetchHalfYearlyRevenueSuccess({
          currentHalfYear,
          previousHalfYear,
          currentHalfYearRevenue,
          previousHalfYearRevenue,
          halfYearlyGrowth,
        })
      );
    } catch (error: any) {
      dispatch(
        fetchHalfYearlyRevenueFailure(
          error.message || "Failed to fetch Half Yearly revenue"
        )
      );
    }
  };

export const fetchYearlyRevenue =
  (userId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchYearlyRevenueStart());
      const response = await axiosSecure.get(`/yearly-revenue/${userId}`);
      const {
        currentYear,
        previousYear,
        currentYearRevenue,
        previousYearRevenue,
        yearlyGrowth,
      } = response.data;

      dispatch(
        fetchYearlyRevenueSuccess({
          currentYear,
          previousYear,
          currentYearRevenue,
          previousYearRevenue,
          yearlyGrowth,
        })
      );
    } catch (error: any) {
      dispatch(
        fetchYearlyRevenueFailure(
          error.message || "Failed to fetch  Yearly revenue"
        )
      );
    }
  };

export const fetchTotalRevenue =
  (userId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchTotalRevenueStart());
      const response = await axiosSecure.get(`/total-revenue/${userId}`);
      const { totalIncome, totalExpenses, growthPercentage, forecast } =
        response.data;

      dispatch(
        fetchTotalRevenueSuccess({
          totalIncome,
          totalExpenses,
          growthPercentage,
          forecast,
        })
      );
    } catch (error: any) {
      dispatch(
        fetchTotalRevenueFailure(
          error.message || "Failed to fetch  Yearly revenue"
        )
      );
    }
  };

export const getMonthlyRevenue = createAsyncThunk(
  "monthlyRevenues/getMonthlyRevenue",
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await axiosSecure.get(`/monthly-revenue/${userId}`);
      return response.data;
    } catch (error: any) {
      console.error("Error fetching monthly revenue: ", error.message);
      return rejectWithValue(error.message?.data);
    }
  }
);

export const fetchRevenueGrowth = (userId: string) => async (dispatch: any) => {
  dispatch(fetchRevenueGrowthStart());
  try {
    const response = await axiosSecure.get(`/revenue-growth/${userId}`);
    dispatch(fetchRevenueGrowthSuccess(response.data));
  } catch (error: any) {
    dispatch(fetchRevenueGrowthFailure(error.message));
  }
};

export const createRevenueGrowth = (data: any) => async (dispatch: any) => {
  try {
    const response = await axiosSecure.post(`/revenue-growth`, data);
    dispatch(createRevenueGrowthSuccess(response.data));
  } catch (error: any) {
    dispatch(
      revenueGrowthRequestFailure(
        error.message || "Failed to create revenue growth entry"
      )
    );
  }
};

export const updateRevenueGrowth =
  (id: string, data: any) => async (dispatch: any) => {
    try {
      const response = await axiosSecure.patch(`/revenue-growth/${id}`, data);
      dispatch(updateRevenueGrowthSuccess(response.data));
    } catch (error: any) {
      dispatch(
        revenueGrowthRequestFailure(
          error.message || "Failed to update revenue growth entry"
        )
      );
    }
  };
