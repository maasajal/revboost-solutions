import { useState } from "react";
import RevButton from "../../components/RevButton";

const RevenueGrowth = () => {
  // Data will be here from mongodb database
  const [income, setIncome] = useState<number | string>("");
  const [expenses, setExpenses] = useState<number | string>("");
  const [growth, setGrowth] = useState<number | null>(null);

  const handleCalculation = () => {
    const incomeValue = Number(income);
    const expensesValue = Number(expenses);

    if (!isNaN(incomeValue) && !isNaN(expensesValue)) {
      const calculatedGrowth =
        ((incomeValue - expensesValue) / expensesValue) * 100;
      setGrowth(calculatedGrowth);
    }
  };

  return (
    <>
      <section className="container mx-auto mt-10">
        <h2 className="font-bold text-center mb-4">
          Revenue Growth Calculator
        </h2>
        <div className="flex flex-col items-center gap-4">
          <div>
            <label className="block mb-2">Company Income</label>
            <input
              type="number"
              className="border px-4 py-2 w-[300px]"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              placeholder="Enter company income"
            />
          </div>
          <div>
            <label className="block mb-2">Company Expenses</label>
            <input
              type="number"
              className="border px-4 py-2 w-[300px]"
              value={expenses}
              onChange={(e) => setExpenses(e.target.value)}
              placeholder="Enter company expenses"
            />
          </div>
          <button onClick={handleCalculation}>
            <RevButton name="Revenue Growth" />
          </button>
          {growth !== null && (
            <div className="mt-6">
              <h3 className="text-xl font-bold">
                Revenue Growth: {growth.toFixed(2)}%
              </h3>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default RevenueGrowth;
