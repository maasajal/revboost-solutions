import React, { useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useAppSelector } from "../../app/hooks/useAppSelector";
import { RootState } from "../../app/store/store";
import { useAppDispatch } from "../../app/hooks/useAppDispatch";
import { getCurrentUser } from "../../app/api/currentUserAPI";
import {
  fetchHalfYearlyRevenue,
  fetchMonthlyRevenue,
  fetchQuarterlyRevenue,
  fetchTotalRevenue,
  fetchYearlyRevenue,
} from "../../app/api/revenueGrowthAPI";
import User from "../../app/features/users/UserType";
import { CircularProgress } from "@mui/material";

const formatCurrency = (value: number) => `$${value.toLocaleString()}`;

const RevenueForecastChart: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.currentUser.user) as User;

  useEffect(() => {
    dispatch(getCurrentUser());
    if (currentUser?._id) {
      dispatch(fetchMonthlyRevenue(currentUser._id));
      dispatch(fetchQuarterlyRevenue(currentUser._id));
      dispatch(fetchHalfYearlyRevenue(currentUser._id));
      dispatch(fetchYearlyRevenue(currentUser._id));
      dispatch(fetchTotalRevenue(currentUser._id));
    }
  }, [dispatch, currentUser?._id]);
  const { loading } = useAppSelector(
    (state: RootState) => state.totalRevenueGrowth
  );

  const {
    totalRevenueGrowth,
    monthlyRevenue,
    quarterlyRevenue,
    halfYearlyRevenue,
    yearlyRevenue,
  } = useAppSelector((state: RootState) => ({
    totalRevenueGrowth: state.totalRevenueGrowth.totalRevenueGrowth,
    monthlyRevenue: state.monthlyRevenue.monthlyRevenue,
    quarterlyRevenue: state.quarterlyRevenue.quarterlyRevenue,
    halfYearlyRevenue: state.halfYearlyRevenue.halfYearlyRevenue,
    yearlyRevenue: state.yearlyRevenue.yearlyRevenue,
  }));

  const data = [
    {
      month: "Month 1",
      newRevenue: monthlyRevenue.previousMonthRevenue || 0,
      totalRevenue: monthlyRevenue.currentMonthRevenue || 0,
    },
    {
      month: "Month 3",
      newRevenue: quarterlyRevenue.previousQuarterRevenue || 0,
      totalRevenue: quarterlyRevenue.currentQuarterRevenue || 0,
    },
    {
      month: "Month 6",
      newRevenue: halfYearlyRevenue.previousHalfYearRevenue || 0,
      totalRevenue: halfYearlyRevenue.currentHalfYearRevenue || 0,
    },
    {
      month: "Month 12",
      newRevenue: yearlyRevenue.previousYearRevenue || 0,
      totalRevenue: yearlyRevenue.currentYearRevenue || 0,
    },
    {
      month: "Month 24",
      newRevenue: yearlyRevenue.currentYearRevenue || 0,
      totalRevenue:
        yearlyRevenue.previousYearRevenue + yearlyRevenue.currentYearRevenue ||
        0,
    },
  ];

  if (loading) return <CircularProgress size="3rem" />;
  return (
    <div className="chart-container">
      <h3 className="text-center my-4">24-Month Revenue Forecast</h3>
      <p>Total Forecast: $ {totalRevenueGrowth.forecast}</p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={formatCurrency} />
          <Tooltip formatter={(value: number) => formatCurrency(value)} />
          <Legend />
          <Line
            type="monotone"
            dataKey="newRevenue"
            stroke="#0000FF"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="totalRevenue"
            stroke="#FF0000"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueForecastChart;
