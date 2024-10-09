import { useForm } from "react-hook-form";

type Inputs = {
  monthOfTable: string;
};

const PayrollReports = () => {
  const { register } = useForm<Inputs>();
  return (
    <div className="space-y-6 border-2 p-4 mt-10">
      <h2 className="mb-4 text-center text-2xl font-bold leading-tight">
        Employee Payroll Reports
      </h2>

      <div>
        <select
          className="w-1/4 p-3 rounded dark:bg-gray-100"
          {...register("monthOfTable", { required: true })}
        >
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
      </div>

      <div className="dark:text-gray-800">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="dark:bg-red-400">
              <tr className="text-left">
                <th className="p-3">Id</th>
                <th className="p-3">Name</th>
                <th className="p-3 text-center">Salary</th>
                <th className="p-3 text-center">Bonus</th>
                <th className="p-3 text-center">Tax Deduction</th>
                <th className="p-3 text-center">Net Pay</th>
                <th className="p-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                <td className="p-3">
                  <p>101</p>
                </td>
                <td className="p-3">
                  <p>Abdullah Sajal</p>
                </td>
                <td className="p-3 text-center">
                  <p>10000</p>
                </td>
                <td className="p-3 text-center">
                  <p>1000</p>
                </td>
                <td className="p-3 text-center">
                  <p>500</p>
                </td>
                <td className="p-3 text-center">
                  <p>10500</p>
                </td>
                <td className="p-3 text-right">
                  <span className="px-3 py-1 font-semibold rounded-md dark:bg-red-400 dark:text-gray-50">
                    <span>Delete</span>
                  </span>
                </td>
              </tr>
              <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                <td className="p-3">
                  <p>101</p>
                </td>
                <td className="p-3">
                  <p>Abdullah Sajal</p>
                </td>
                <td className="p-3 text-center">
                  <p>10000</p>
                </td>
                <td className="p-3 text-center">
                  <p>1000</p>
                </td>
                <td className="p-3 text-center">
                  <p>500</p>
                </td>
                <td className="p-3 text-center">
                  <p>10500</p>
                </td>
                <td className="p-3 text-right">
                  <span className="px-3 py-1 font-semibold rounded-md dark:bg-red-400 dark:text-gray-50">
                    <span>Delete</span>
                  </span>
                </td>
              </tr>
              <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                <td className="p-3">
                  <p>101</p>
                </td>
                <td className="p-3">
                  <p>Abdullah Sajal</p>
                </td>
                <td className="p-3 text-center">
                  <p>10000</p>
                </td>
                <td className="p-3 text-center">
                  <p>1000</p>
                </td>
                <td className="p-3 text-center">
                  <p>500</p>
                </td>
                <td className="p-3 text-center">
                  <p>10500</p>
                </td>
                <td className="p-3 text-right">
                  <span className="px-3 py-1 font-semibold rounded-md dark:bg-red-400 dark:text-gray-50">
                    <span>Delete</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PayrollReports;
