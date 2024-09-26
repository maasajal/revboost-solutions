import React from "react";
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

const data = [
  {
    month: "Month 1",
    newRevenue: 0,
    totalRevenue: 0,
  },
  {
    month: "Month 6",
    newRevenue: 23345,
    totalRevenue: 23345,
  },
  {
    month: "Month 12",
    newRevenue: 10000,
    totalRevenue: 33345,
  },
  {
    month: "Month 24",
    newRevenue: 10000,
    totalRevenue: 43345,
  },
  {
    month: "Month 36",
    newRevenue: 10000,
    totalRevenue: 53345,
  },
];

const formatCurrency = (value: number) => `$${value.toLocaleString()}`;

const RevenueForecastChart: React.FC = () => {
  return (
    <div className="chart-container">
      <h3 className="text-center my-4">24-Month Sales Forecast</h3>
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
