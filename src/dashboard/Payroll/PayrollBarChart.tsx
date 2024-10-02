import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PayrollBarChart = () => {
  const data = [
    { name: "January", salary: 10000, bonus: 6000, tax: 4000 },
    { name: "February", salary: 11000, bonus: 5000, tax: 3000 },
    { name: "March", salary: 10500, bonus: 5500, tax: 3500 },
    { name: "April", salary: 12000, bonus: 6000, tax: 4000 },
  ];
  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="salary" fill="#ff0000" />
          <Bar dataKey="bonus" fill="#008000" />
          <Bar dataKey="tax" fill="#0000ff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PayrollBarChart;
