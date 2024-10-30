import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { Box, CircularProgress, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useEffect } from "react";
import { getCurrentUser } from "../../app/api/currentUserAPI";
import {
  fetchMonthlyRevenue,
  fetchQuarterlyRevenue,
  fetchHalfYearlyRevenue,
  fetchYearlyRevenue,
} from "../../app/api/revenueGrowthAPI";
import { fetchRevenueData } from "../../app/features/revenueGrowth/revenueSlice";
import User from "../../app/features/users/UserType";
import { useAppDispatch } from "../../app/hooks/useAppDispatch";
import { useAppSelector } from "../../app/hooks/useAppSelector";
import { RootState } from "../../app/store/store";

interface RevenueData {
  title: string;
  previous: number;
  current: number;
  growth: number;
}

const RevenueBarChart: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.currentUser.user) as User;

  useEffect(() => {
    dispatch(getCurrentUser());
    if (currentUser._id) {
      dispatch(fetchRevenueData(currentUser._id));
      dispatch(fetchMonthlyRevenue(currentUser._id));
      dispatch(fetchQuarterlyRevenue(currentUser._id));
      dispatch(fetchHalfYearlyRevenue(currentUser._id));
      dispatch(fetchYearlyRevenue(currentUser._id));
    }
  }, [dispatch, currentUser._id]);

  const { loading } = useAppSelector(
    (state: RootState) => state.monthlyRevenue
  );

  const { previousMonthRevenue, currentMonthRevenue, monthlyGrowth } =
    useAppSelector((state: RootState) => state.monthlyRevenue.monthlyRevenue);

  const { currentQuarterRevenue, previousQuarterRevenue, quarterlyGrowth } =
    useAppSelector(
      (state: RootState) => state.quarterlyRevenue.quarterlyRevenue
    );

  const { currentHalfYearRevenue, previousHalfYearRevenue, halfYearlyGrowth } =
    useAppSelector(
      (state: RootState) => state.halfYearlyRevenue.halfYearlyRevenue
    );

  const { currentYearRevenue, previousYearRevenue, yearlyGrowth } =
    useAppSelector((state: RootState) => state.yearlyRevenue.yearlyRevenue);

  const data: RevenueData[] = [
    {
      title: "Monthly",
      previous: previousMonthRevenue,
      current: currentMonthRevenue,
      growth: parseFloat(monthlyGrowth),
    },
    {
      title: "Quarterly",
      previous: previousQuarterRevenue,
      current: currentQuarterRevenue,
      growth: parseFloat(quarterlyGrowth),
    },
    {
      title: "Half Year",
      previous: previousHalfYearRevenue,
      current: currentHalfYearRevenue,
      growth: parseFloat(halfYearlyGrowth),
    },
    {
      title: "Yearly",
      previous: previousYearRevenue,
      current: currentYearRevenue,
      growth: parseFloat(yearlyGrowth),
    },
  ];

  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "20px",
        borderRadius: "10px",
      }}
      className="border overflow-x-auto min-w-full max-w-32"
    >
      <Typography variant="h5" gutterBottom>
        Revenue Growth Overview
      </Typography>
      {loading && (
        <Box display="flex" justifyContent="center" marginY={2}>
          <CircularProgress />
        </Box>
      )}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="title" />
          <YAxis />
          <Tooltip
            formatter={(value: number) => `$${value.toLocaleString()}`}
            labelFormatter={(label: string) => `${label} Revenue`}
            contentStyle={{
              backgroundColor: "#333",
              borderRadius: "5px",
              borderColor: "#666",
            }}
            labelStyle={{ color: "#fff" }}
          />
          <Legend wrapperStyle={{ color: "#fff" }} />

          <Bar dataKey="previous" fill="#8884d8" name="Previous Period">
            <LabelList
              dataKey="previous"
              position="top"
              formatter={(value: number) => `$${value}`}
            />
          </Bar>
          <Bar dataKey="current" fill="#82ca9d" name="Current Period">
            <LabelList
              dataKey="current"
              position="top"
              formatter={(value: number) => `$${value}`}
            />
          </Bar>

          <Bar dataKey="growth" fill="#ffc658" name="Growth (%)">
            <LabelList
              dataKey="growth"
              position="top"
              formatter={(value: number) => `${value}%`}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <Box display="flex" justifyContent="center" marginTop={2}>
        {data.map((item) => (
          <Box key={item.title} textAlign="center" mx={2}>
            <Typography variant="body1" color="textSecondary">
              {item.title} Growth
            </Typography>
            <Typography
              variant="h6"
              color={item.growth >= 0 ? "success.main" : "error.main"}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {item.growth >= 0 ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
              {item.growth}%
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default RevenueBarChart;
