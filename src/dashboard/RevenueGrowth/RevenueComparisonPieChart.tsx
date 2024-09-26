import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Total Incomes", value: 45000 },
  { name: "Total Expenses", value: 30000 },
  { name: "Revenue Growth", value: 25000 },
];

// Colors for the chart segments
const COLORS = ["#0088FE", "#FF0000", "#AA47BC"];

const RevenueComparisonPieChart: React.FC = () => {
  return (
    <div className="chart-container">
      <h3 className="text-center my-4">Income vs Expenses vs Revenue Growth</h3>
      <ResponsiveContainer width="100%" height={300}>
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
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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
