import React, { useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import User from "../../app/features/users/UserType";
import { useAppDispatch } from "../../app/hooks/useAppDispatch";
import { useAppSelector } from "../../app/hooks/useAppSelector";
import { getCurrentUser } from "../../app/api/currentUserAPI";
import { fetchTotalRevenue } from "../../app/api/revenueGrowthAPI";
import { RootState } from "../../app/store/store";
import { CircularProgress } from "@mui/material";

// Colors for the chart segments
const COLORS = ["#0088FE", "#FF0000", "#AA47BC"];

const RevenueComparisonPieChart: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.currentUser.user) as User;

  useEffect(() => {
    dispatch(getCurrentUser());
    if (currentUser?._id) {
      dispatch(fetchTotalRevenue(currentUser._id));
    }
  }, [dispatch, currentUser?._id]);

  const { loading, error } = useAppSelector(
    (state: RootState) => state.totalRevenueGrowth
  );
  const { totalIncome, totalExpenses, growthPercentage } = useAppSelector(
    (state: RootState) => state.totalRevenueGrowth.totalRevenueGrowth
  );

  const data = [
    { name: "Total Incomes ($)", value: totalIncome || 0 },
    { name: "Total Expenses ($)", value: totalExpenses || 0 },
    {
      name: "Revenue Growth (%)",
      value: parseFloat(growthPercentage.replace("%", "")) || 0,
    },
  ];
  if (loading) return <CircularProgress size="3rem" />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="chart-container">
      <h3 className="text-center my-4">Income vs Expenses vs Revenue Growth</h3>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueComparisonPieChart;
