import React from "react";

const revenueData = {
  newRevenue: [
    2000, 3000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000,
    55000,
  ],
  totalRevenue: [
    2000, 5000, 15000, 30000, 50000, 75000, 105000, 140000, 180000, 225000,
    275000, 330000,
  ],
};

const RevenueTable: React.FC = () => {
  return (
    <table className="table-auto border-collapse border border-gray-500 text-center mb-8">
      <thead>
        <tr>
          <th className="border border-gray-400 px-4 py-2"></th>
          {Array.from({ length: 12 }, (_, i) => (
            <th key={i + 1} className="border border-gray-400 px-4 py-2">
              Month {i + 1}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-400 px-4 py-2">New Revenue</td>
          {revenueData.newRevenue.map((revenue, i) => (
            <td key={i} className="border border-gray-400 px-4 py-2">
              ${revenue.toLocaleString()}
            </td>
          ))}
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Total Revenue</td>
          {revenueData.totalRevenue.map((revenue, i) => (
            <td key={i} className="border border-gray-400 px-4 py-2">
              ${revenue.toLocaleString()}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default RevenueTable;
