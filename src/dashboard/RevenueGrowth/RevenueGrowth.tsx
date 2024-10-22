import RevenueForecastChart from "./RevenueForecastChart";
import RevenueComparisonPieChart from "./RevenueComparisonPieChart";
import { useAppDispatch } from "../../app/hooks/useAppDispatch";
import { useAppSelector } from "../../app/hooks/useAppSelector";
import { useEffect } from "react";
import {
  fetchRevenueGrowth,
  getMonthlyRevenue,
} from "../../app/api/revenueGrowthAPI";
import User from "../../app/features/users/UserType";
import { fetchRevenueData } from "../../app/features/revenueGrowth/revenueSlice";
import { getCurrentUser } from "../../app/api/currentUserAPI";
import { RootState } from "../../app/store/store";

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

  const { data, loading, error } = useAppSelector(
    (state) => state.revenueGrowth
  );

  const revenueGrowth = data || {};
  // console.log("revenue", revenueGrowth);
  useEffect(() => {
    dispatch(getCurrentUser());
    const userId: string = "670708f70e882388dd5b3af0";
    if (currentUser._id) {
      dispatch(fetchRevenueData(currentUser._id));
    }
    dispatch(fetchRevenueGrowth(userId));
    dispatch(getMonthlyRevenue(userId));
  }, [dispatch, currentUser._id]);

  const { monthlyRevenue } = useAppSelector(
    (state: RootState) => state.monthlyRevenues
  );

  console.log("monthly revenue", monthlyRevenue);

  const { revenueEntries } = useAppSelector((state) => state.revenue);

  const calculateRevenueGrowth = (
    previousRevenue: number,
    currentRevenue: number
  ): number => {
    if (previousRevenue === 0) return 0; // Prevent division by zero
    const growth = ((currentRevenue - previousRevenue) / previousRevenue) * 100;
    return growth;
  };

  // Get revenue for the last two periods (e.g., "2023-Q1" and "2024-Q1")
  const lastTwoRevenues = revenueEntries.slice(-2);
  if (lastTwoRevenues.length === 2) {
    const [previous, current] = lastTwoRevenues;
    calculateRevenueGrowth(previous.revenue, current.revenue);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-5 space-y-5">
      <h1 className="text-center mb-8">
        {currentUser ? currentUser.name : "Company Name"}
      </h1>
      <div>
        <h3>Get Revenue from Database</h3>
        {revenueEntries.map((entry) => (
          <div key={entry.period}>
            <p>
              {entry.period}: ${entry.revenue}
            </p>
          </div>
        ))}
      </div>
      <div>
        {lastTwoRevenues.length === 2 && (
          <div>
            <h3>
              Revenue Growth:{" "}
              {calculateRevenueGrowth(
                lastTwoRevenues[0].revenue,
                lastTwoRevenues[1].revenue
              ).toFixed(2)}
              %
            </h3>
          </div>
        )}
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-8 py-10">
        <h3 className={`p-4 rounded-md shadow-xl`}>
          Total Incomes: {revenueGrowth?.totalIncome}
        </h3>
        <h3 className={`p-4 rounded-md shadow-xl`}>
          Total Expenses: {revenueGrowth?.totalExpenses}
        </h3>
        <h3 className={`p-4 rounded-md shadow-xl`}>
          GrowthPercentage: {revenueGrowth?.growthPercentage}
        </h3>
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
