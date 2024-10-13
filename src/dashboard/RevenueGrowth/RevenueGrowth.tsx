import RevenueForecastChart from "./RevenueForecastChart";
import RevenueComparisonPieChart from "./RevenueComparisonPieChart";
import RevenueTable from "./RevenueTable";
import { useAppDispatch } from "../../app/hooks/useAppDispatch";
import { useAppSelector } from "../../app/hooks/useAppSelector";
import { useEffect } from "react";
import { fetchRevenueGrowth } from "../../app/api/revenueGrowthAPI";

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
  const currentUser = useAppSelector((state) => state.currentUser.user);
  console.log("currentUser", currentUser);

  const { data, loading, error } = useAppSelector(
    (state) => state.revenueGrowth
  );
  const revenueGrowth = data || {};
  // console.log("revenue", revenueGrowth);
  useEffect(() => {
    const userId: string = "670708f70e882388dd5b3af0";
    dispatch(fetchRevenueGrowth(userId));
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-5 space-y-5">
      <h1 className="text-center mb-8">COMPANY NAME</h1>

      <section className="flex flex-wrap justify-center gap-8 mb-8 py-10">
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

      <div className="flex flex-wrap justify-center gap-8 mb-8 py-10">
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

      <div className="overflow-x-auto">
        <RevenueTable />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="">
          <div className="h-full py-10 bg-gray-100 border">
            <RevenueForecastChart />
          </div>
        </div>

        <div className="">
          <div className="h-full py-10 bg-gray-100 border">
            <RevenueComparisonPieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueGrowth;
