import { useState } from "react";
import RevenueForecastChart from "./RevenueForecastChart";

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
  const [newRevenue, setNewRevenue] = useState<number[]>([]);
  const [totalRevenue, setTotalRevenue] = useState<number[]>([]);

  return (
    <div className="container mx-auto p-5">
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
        <table className="table-auto border-collapse border border-gray-500 text-center mb-8">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Month 1</th>
              <th className="border border-gray-400 px-4 py-2">Month 2</th>
              <th className="border border-gray-400 px-4 py-2">Month 3</th>
              <th className="border border-gray-400 px-4 py-2">Month 4</th>
              <th className="border border-gray-400 px-4 py-2">Month 5</th>
              <th className="border border-gray-400 px-4 py-2">Month 6</th>
              <th className="border border-gray-400 px-4 py-2">Month 7</th>
              <th className="border border-gray-400 px-4 py-2">Month 8</th>
              <th className="border border-gray-400 px-4 py-2">Month 9</th>
              <th className="border border-gray-400 px-4 py-2">Month 10</th>
              <th className="border border-gray-400 px-4 py-2">Month 11</th>
              <th className="border border-gray-400 px-4 py-2">Month 12</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-4 py-2">New Revenue</td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">
                Total Revenue
              </td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="">
          <div className="h-full py-10 bg-gray-100 border">
            <RevenueForecastChart />
          </div>
        </div>

        <div className="">
          <h3 className="text-lg font-bold mb-4">Revenue Distribution</h3>
          <div className="h-64 bg-gray-100 border">
            {/* Add chart component here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueGrowth;

// import { useState } from "react";
// import RevButton from "../../components/RevButton";

// const RevenueGrowth = () => {
//   // Data will be here from mongodb database
//   const [income, setIncome] = useState<number | string>("");
//   const [expenses, setExpenses] = useState<number | string>("");
//   const [growth, setGrowth] = useState<number | null>(null);

//   const handleCalculation = () => {
//     const incomeValue = Number(income);
//     const expensesValue = Number(expenses);

//     if (!isNaN(incomeValue) && !isNaN(expensesValue)) {
//       const calculatedGrowth =
//         ((incomeValue - expensesValue) / expensesValue) * 100;
//       setGrowth(calculatedGrowth);
//     }
//   };

//   return (
//     <>
//       <section className="container mx-auto mt-10">
//         <h2 className="font-bold text-center mb-4">
//           Revenue Growth Calculator
//         </h2>
//         <div className="flex flex-col items-center gap-4">
//           <div>
//             <label className="block mb-2">Company Income</label>
//             <input
//               type="number"
//               className="border px-4 py-2 w-[300px]"
//               value={income}
//               onChange={(e) => setIncome(e.target.value)}
//               placeholder="Enter company income"
//             />
//           </div>
//           <div>
//             <label className="block mb-2">Company Expenses</label>
//             <input
//               type="number"
//               className="border px-4 py-2 w-[300px]"
//               value={expenses}
//               onChange={(e) => setExpenses(e.target.value)}
//               placeholder="Enter company expenses"
//             />
//           </div>
//           <button onClick={handleCalculation}>
//             <RevButton name="Revenue Growth" />
//           </button>
//           {growth !== null && (
//             <div className="mt-6">
//               <h3 className="text-xl font-bold">
//                 Revenue Growth: {growth.toFixed(2)}%
//               </h3>
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// };

// export default RevenueGrowth;
