import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPayroll,
  removePayroll,
} from "../../app/features/payroll/payrollSlice";
import { AppDispatch, RootState } from "../../app/store/store";
import { FaSpinner } from "react-icons/fa";
import toast from "react-hot-toast";

type Inputs = {
  monthOfTable: string;
};

const PayrollReports = () => {
  const { register } = useForm<Inputs>();
  const { payrolls, isLoading, error } = useSelector(
    (state: RootState) => state.payroll
  );
  const dispatch: AppDispatch = useDispatch();

  // Handle payroll deletion
  const handleDelete = async (id: string) => {
    try {
      await dispatch(removePayroll(id));
      toast.success("Deleted successfully!");
    } catch (err) {
      console.log(err);
      toast.error("An unknown error occurred");
    }
  };

  useEffect(() => {
    dispatch(fetchPayroll());
  }, [dispatch]);
  return (
    <div className="space-y-6 border-2 p-4 my-10">
      <h2 className="mb-4 text-center text-2xl font-bold leading-tight">
        Employee Payroll Reports
      </h2>

      <div>
        {isLoading && <FaSpinner className="animate-spin text-2xl" />}
        {error && <h3>{error}</h3>}
      </div>

      <div className="flex justify-between">
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
        <div>
          <h6>Total: {payrolls.length}</h6>
        </div>
      </div>

      <div className="dark:text-gray-800">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="bg-red-400">
              <tr className="text-left">
                <th className="p-3">Id</th>
                <th className="p-3">Name</th>
                <th className="p-3">Position</th>
                <th className="p-3 text-center">Salary</th>
                <th className="p-3 text-center">Bonus</th>
                <th className="p-3 text-center">Tax Deduction</th>
                <th className="p-3 text-center">Net Pay</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {payrolls.map((payroll, idx) => (
                <tr
                  key={idx}
                  className="border-b border-opacity-20 border-gray-300 bg-gray-50"
                >
                  <td className="p-3">
                    <p>{payroll?._id}</p>
                  </td>
                  <td className="p-3">
                    <p>{payroll?.employeeName}</p>
                  </td>
                  <td className="p-3">
                    <p>{payroll?.position}</p>
                  </td>
                  <td className="p-3 text-center">
                    <p>{payroll?.salary}</p>
                  </td>
                  <td className="p-3 text-center">
                    <p>{payroll?.bonus}</p>
                  </td>
                  <td className="p-3 text-center">
                    <p>{payroll?.taxDeduction}</p>
                  </td>
                  <td className="p-3 text-center">
                    <p>
                      {payroll?.salary + payroll?.bonus - payroll?.taxDeduction}
                    </p>
                  </td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => handleDelete(payroll?._id)}
                      className="px-3 py-1 font-semibold rounded-md bg-red-400 text-gray-50 hover:bg-opacity-90"
                    >
                      <span>Delete</span>
                    </button>
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
