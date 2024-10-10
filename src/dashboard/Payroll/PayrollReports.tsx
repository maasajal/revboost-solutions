import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchPayroll } from "../../app/state/payroll/payrollSlice";
import { AppDispatch, RootState } from "../../app/store/store";
import { FaSpinner } from "react-icons/fa";

type Inputs = {
  monthOfTable: string;
};

const PayrollReports = () => {
  const { register } = useForm<Inputs>();
  const { payroll, isLoading, error } = useSelector(
    (state: RootState) => state.payroll
  );
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPayroll());
  }, [dispatch]);
  return (
    <div className="space-y-6 border-2 p-4 mt-10">
      <h2 className="mb-4 text-center text-2xl font-bold leading-tight">
        Employee Payroll Reports
      </h2>

      <div>
        {isLoading && <FaSpinner className="animate-spin text-2xl" />}
        {error && <h3>{error}</h3>}
        {payroll && <h3>{payroll.length}</h3>}
      </div>

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
                <th className="p-3">Position</th>
                <th className="p-3 text-center">Salary</th>
                <th className="p-3 text-center">Bonus</th>
                <th className="p-3 text-center">Tax Deduction</th>
                <th className="p-3 text-center">Net Pay</th>
                <th className="p-3"></th>
              </tr>
            </thead>
            <tbody>
              {payroll.map((item, idx) => (
                <tr
                  key={idx}
                  className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
                >
                  <td className="p-3">
                    <p>{item?._id}</p>
                  </td>
                  <td className="p-3">
                    <p>{item?.employeeName}</p>
                  </td>
                  <td className="p-3">
                    <p>{item?.position}</p>
                  </td>
                  <td className="p-3 text-center">
                    <p>{item?.salary}</p>
                  </td>
                  <td className="p-3 text-center">
                    <p>{item?.bonus}</p>
                  </td>
                  <td className="p-3 text-center">
                    <p>{item?.taxDeduction}</p>
                  </td>
                  <td className="p-3 text-center">
                    <p>{item?.salary + item?.bonus - item?.taxDeduction}</p>
                  </td>
                  <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold rounded-md dark:bg-red-400 dark:text-gray-50">
                      <span>Delete</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PayrollReports;
