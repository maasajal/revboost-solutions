import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPayroll,
  removePayroll,
} from "../../app/features/payroll/payrollSlice";
import { AppDispatch, RootState } from "../../app/store/store";
import toast from "react-hot-toast";
// import SelectField from "./payrollComponents/SelectField";
import PayrollUpdateModal from "./payrollComponents/PayrollUpdateModal";
import User from "../../app/features/users/UserType";
import DeleteIcon from "@mui/icons-material/Delete";
import RevButton from "../../components/RevButton";
import EditIcon from '@mui/icons-material/Edit';

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
  // const { register } = useForm<{ month: string }>();
  const { payrolls } = useSelector((state: RootState) => state.payroll);
  const dispatch: AppDispatch = useDispatch();

  // Get current user data
  const user = useSelector(
    (state: RootState) => state.currentUser.user
  ) as User;
  const { _id, email } = user;
  console.log(_id, email);

  useEffect(() => {
    dispatch(fetchPayroll(_id));
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
  const handleDelete = async (payrollId: string) => {
    try {
      await dispatch(removePayroll({ userId: _id, payrollId })); // Send both userId and payrollId
      toast.success("Deleted successfully!");
    } catch (err) {
      console.log(err);
      toast.error("An unknown error occurred");
    }
  };

  // const months = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];
  // const currentMonth = months[new Date().getMonth()];

  return (
    <div className="space-y-6 border-2 p-4 my-10" data-aos="zoom-in-down">
      <h2 className="mb-4 text-center text-2xl font-bold leading-tight">
        Employee Payroll Reports
      </h2>
      <PayrollUpdateModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        payroll={selectedPayroll}
        userId={_id}
      />

      {/* <div className="flex justify-between items-center">
        <SelectField
          label=""
          options={months}
          defaultValue={currentMonth}
          register={register("month", { required: true })}
        />
        <div>
          <h6>Total: {payrolls.length}</h6>
        </div>
      </div> */}
      <div>
        <div className="overflow-x-auto min-w-full max-w-32">
          <table className="min-w-full text-xs">
            <thead>
              <tr className="bg-lightColor">
                <th className="p-3">Id</th>
                <th className="p-3">Name</th>
                <th className="p-3">Position</th>
                <th className="p-3 text-center">Salary</th>
                <th className="p-3 text-center">Bonus</th>
                <th className="p-3 text-center">Tax Deduction</th>
                <th className="p-3 text-center">Net Pay</th>
                <th className="p-3 text-center">Month</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {payrolls.map((payroll, idx) => (
                <tr
                  key={idx}
                  className="border-b border-opacity-20 border-gray-300 hover:bg-gray-50 hover:text-black"
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
                  <td className="p-3 text-center">{payroll?.month}</td>
                  <td className="p-3 text-right space-x-2">

                    <RevButton
                      name={<EditIcon />}
                      onClick={() => handleEdit(payroll)}
                    />
                    <RevButton
                      name={<DeleteIcon />}
                      onClick={() => handleDelete(payroll?._id)}
                    />
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
