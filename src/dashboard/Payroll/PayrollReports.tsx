import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPayroll,
  removePayroll,
} from "../../app/features/payroll/payrollSlice";
import { AppDispatch, RootState } from "../../app/store/store";
import toast from "react-hot-toast";
import SelectField from "./payrollComponents/SelectField";
import PayrollUpdateModal from "./payrollComponents/PayrollUpdateModal";
import User from "../../app/features/users/UserType";

interface Payroll {
  _id: string;
  employeeName: string;
  position: string;
  salary: number;
  bonus: number;
  taxDeduction: number;
  month: string;
  __v: number;
}

const PayrollReports = () => {
  const { register } = useForm<{ month: string }>();
  const { payrolls } = useSelector((state: RootState) => state.payroll);
  const dispatch: AppDispatch = useDispatch();

  // Get current user data
  const user = useSelector(
    (state: RootState) => state.currentUser.user
  ) as User;
  const { _id, email } = user;
  console.log(_id, email); // undefined undefined

  useEffect(() => {
    dispatch(fetchPayroll("670de31140abc753ec86c509"));
  }, [dispatch, _id]);

  // Inside the component
  const [openModal, setOpenModal] = useState(false);
  const [selectedPayroll, setSelectedPayroll] = useState<Payroll | null>(null);

  // Function to handle the Edit button click
  const handleEdit = (payroll: Payroll) => {
    setSelectedPayroll(payroll);
    setOpenModal(true); // Open the modal
  };

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

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonth = months[new Date().getMonth()];

  return (
    <div className="space-y-6 border-2 p-4 my-10">
      <h2 className="mb-4 text-center text-2xl font-bold leading-tight">
        Employee Payroll Reports
      </h2>
      <PayrollUpdateModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        payroll={selectedPayroll}
      />

      <div className="flex justify-between items-center">
        <SelectField
          label=""
          options={months}
          defaultValue={currentMonth}
          register={register("month", { required: true })}
        />
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
                  <td className="p-3">{payroll?._id?.slice(-5) || "N/A"}</td>
                  <td className="p-3">{payroll?.employeeName}</td>
                  <td className="p-3">{payroll?.position}</td>
                  <td className="p-3 text-center">{payroll?.salary}</td>
                  <td className="p-3 text-center">{payroll?.bonus}</td>
                  <td className="p-3 text-center">{payroll?.taxDeduction}</td>
                  <td className="p-3 text-center">
                    {payroll?.salary + payroll?.bonus - payroll?.taxDeduction}
                  </td>
                  <td className="p-3 text-right space-x-2">
                    <button
                      onClick={() => handleEdit(payroll)}
                      className="px-3 py-1 font-semibold rounded-md bg-red-400 text-gray-50 hover:bg-opacity-90"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(payroll?._id)}
                      className="px-3 py-1 font-semibold rounded-md bg-red-400 text-gray-50 hover:bg-opacity-90"
                    >
                      Delete
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
