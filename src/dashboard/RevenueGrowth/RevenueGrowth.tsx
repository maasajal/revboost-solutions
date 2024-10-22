import RevenueForecastChart from "./RevenueForecastChart";
import RevenueComparisonPieChart from "./RevenueComparisonPieChart";
import { useAppDispatch } from "../../app/hooks/useAppDispatch";
import { useAppSelector } from "../../app/hooks/useAppSelector";
import { useEffect } from "react";
import {
  fetchMonthlyRevenue,
  fetchQuarterlyRevenue,
  fetchRevenueGrowth,
  getMonthlyRevenue,
} from "../../app/api/revenueGrowthAPI";
import User from "../../app/features/users/UserType";
import { fetchRevenueData } from "../../app/features/revenueGrowth/revenueSlice";
import { getCurrentUser } from "../../app/api/currentUserAPI";
import { RootState } from "../../app/store/store";
import { CircularProgress, Grid } from "@mui/material";
import RevenueCard from "./RevenueCard";

interface RevenueData {
  month: number;
  totalRevenue: number;
}

const revenueData: RevenueData[] = [
  { month: 6, totalRevenue: 23345 },
  { month: 12, totalRevenue: 33345 },
  { month: 24, totalRevenue: 43345 },
  { month: 36, totalRevenue: 53345 },
];

const RevenueGrowth: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.currentUser.user) as User;

  useEffect(() => {
    dispatch(getCurrentUser());
    if (currentUser._id) {
      dispatch(fetchRevenueData(currentUser._id));
      dispatch(fetchMonthlyRevenue(currentUser._id));
      dispatch(fetchQuarterlyRevenue(currentUser._id));
    }
    dispatch(fetchRevenueGrowth(currentUser._id));
    dispatch(getMonthlyRevenue(currentUser._id));
  }, [dispatch, currentUser._id]);

  const { loading, error } = useAppSelector(
    (state: RootState) => state.monthlyRevenue
  );

  const { previousMonthRevenue, currentMonthRevenue, monthlyGrowth } =
    useAppSelector((state: RootState) => state.monthlyRevenue.monthlyRevenue);

  const {
    currentQuarter,
    previousQuarter,
    currentQuarterRevenue,
    previousQuarterRevenue,
    quarterlyGrowth,
  } = useAppSelector(
    (state: RootState) => state.quarterlyRevenue.quarterlyRevenue
  );

  const { revenueEntries } = useAppSelector((state) => state.revenue);

  const calculateRevenueGrowth = (
    previousRevenue: number,
    currentRevenue: number
  ): number => {
    if (previousRevenue === 0) return 0;
    const growth = ((currentRevenue - previousRevenue) / previousRevenue) * 100;
    return growth;
  };

  const lastTwoRevenues = revenueEntries.slice(-2);
  if (lastTwoRevenues.length === 2) {
    const [previous, current] = lastTwoRevenues;
    calculateRevenueGrowth(previous.revenue, current.revenue);
  }

  if (loading) return <CircularProgress size="3rem" />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-5 space-y-10">
      <h1 className="text-center mb-8">
        {currentUser ? currentUser.name : "Company Name"}
      </h1>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-8 py-10">
        <Grid item xs={2} sm={4} md={4}>
          <RevenueCard
            title={"Monthly Revenue"}
            current_time={""}
            previous_time={""}
            current={currentMonthRevenue}
            previous={previousMonthRevenue}
            growth={monthlyGrowth}
          />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <RevenueCard
            title={"Quarterly Revenue"}
            current_time={currentQuarter}
            previous_time={previousQuarter}
            current={currentQuarterRevenue}
            previous={previousQuarterRevenue}
            growth={quarterlyGrowth}
          />
        </Grid>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-8 py-10">
        {revenueData.map((data) => (
          <div
            key={data.month}
            className={`p-4 rounded-md text-white shadow-xl`}
          >
            <p className="text-lg">Total Revenue (Month {data.month})</p>
            <h2 className="text-3xl font-bold">
              ${data.totalRevenue.toLocaleString()}
            </h2>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="h-full py-10 px-5 rounded-xl border">
          <RevenueForecastChart />
        </div>
        <div className="h-full py-10 px-5 rounded-xl border">
          <RevenueComparisonPieChart />
        </div>
      </div>
    </div>
  );
};

export default RevenueGrowth;
