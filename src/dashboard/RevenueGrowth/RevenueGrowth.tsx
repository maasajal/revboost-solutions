import RevenueForecastChart from "./RevenueForecastChart";
import RevenueComparisonPieChart from "./RevenueComparisonPieChart";
import RevenueTable from "./RevenueTable";

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
  return (
    <div className="container mx-auto p-5 space-y-5">
      <h1 className="text-center mb-8">COMPANY NAME</h1>

      <div className="flex flex-wrap justify-center gap-8 mb-8">
        {revenueData.map((data) => (
          <div
            key={data.month}
            className={`p-4 rounded-md ${
              data.month === 36 ? "bg-red-700" : "bg-red-400"
            } text-white shadow-md`}
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
