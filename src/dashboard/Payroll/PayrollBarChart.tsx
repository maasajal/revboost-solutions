import { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { fetchPayroll } from "../../app/features/payroll/payrollSlice";
import { AppDispatch, RootState } from "../../app/store/store";
import User from "../../app/features/users/UserType";

// Define the interface for chart data
interface IPayrollChartData {
  name: string;
  salary: number;
  bonus: number;
  tax: number;
}

const PayrollBarChart = () => {
  const [chartData, setChartData] = useState<IPayrollChartData[]>([]);
  const dispatch: AppDispatch = useDispatch();

  // Get current user data (if you need user-specific payroll data)
  const user = useSelector(
    (state: RootState) => state.currentUser.user
  ) as User;
  const { _id } = user;

  // Fetch payroll data from Redux store
  const payrolls = useSelector((state: RootState) => state.payroll.payrolls);

  useEffect(() => {
    // Dispatch the action to fetch payroll data when the component mounts
    if (_id) {
      dispatch(fetchPayroll(_id));
    }
  }, [dispatch, _id]);

  // useEffect(() => {
  //   // Transform payroll data to match the chart format
  //   const transformedData: IPayrollChartData[] = payrolls.map((payroll) => ({
  //     name: payroll.month,
  //     salary: payroll.salary,
  //     bonus: payroll.bonus,
  //     tax: payroll.taxDeduction,
  //   }));
  //   setChartData(transformedData);
  // }, [payrolls]);

  useEffect(() => {
    // Step 2: Aggregate payroll data by month
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const aggregatedData = payrolls.reduce((acc: any, payroll: any) => {
      const { month, salary, bonus, taxDeduction } = payroll;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const existingMonth = acc.find((item: any) => item.name === month);

      if (existingMonth) {
        existingMonth.salary += salary;
        existingMonth.bonus += bonus;
        existingMonth.tax += taxDeduction;
      } else {
        acc.push({
          name: month,
          salary: salary,
          bonus: bonus,
          tax: taxDeduction,
        });
      }

      return acc;
    }, []);

    // Set the aggregated data as chart data
    setChartData(aggregatedData);
  }, [payrolls]);

  return (
    <div className="overflow-x-auto whitespace-nowrap">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          width={1200} // Increase width to accommodate more bars
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="salary" fill="#2E568A" />
          <Bar dataKey="bonus" fill="#3E7EB3" />
          <Bar dataKey="tax" fill="#4EA7DD" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PayrollBarChart;
