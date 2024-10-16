import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  addPayroll,
  fetchPayroll,
} from "../../app/features/payroll/payrollSlice";
import { AppDispatch, RootState } from "../../app/store/store";
import FormField from "./payrollComponents/FormField";
import SelectField from "./payrollComponents/SelectField";
import { FaSpinner } from "react-icons/fa";

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

type Inputs = {
  _id: string;
  employeeName: string;
  position: string;
  salary: number;
  bonus: number;
  taxDeduction: number;
  month: string;
  __v: number;
};

const PayrollForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const { isLoading } = useSelector((state: RootState) => state.payroll);

  const dispatch: AppDispatch = useDispatch();

  const onSubmit: SubmitHandler<Inputs> = async (data: Payroll) => {
    console.log(data);
    try {
      await dispatch(addPayroll(data));
      await dispatch(fetchPayroll()); // Fetch the updated list of payrolls
      toast.success("Saved Successfully.");
      reset();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Failed to save payroll."); // Show error message
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
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4"
      >
        <FormField
          label="Employee Name"
          type="text"
          register={register("employeeName", { required: true })}
          error={errors.employeeName}
        />
        <FormField
          label="Position"
          type="text"
          register={register("position", { required: true })}
          error={errors.position}
        />

        <FormField
          label="Salary"
          type="number"
          register={register("salary", { required: true })}
          error={errors.salary}
        />
        <FormField
          label="Bonus"
          type="number"
          register={register("bonus", { required: true })}
          error={errors.bonus}
        />

        <FormField
          label="Tax Deduction"
          type="number"
          register={register("taxDeduction", { required: true })}
          error={errors.taxDeduction}
        />

        <SelectField
          label="Month"
          options={months}
          defaultValue={currentMonth}
          register={register("month", { required: true })}
          error={errors.month}
        />

        <div className="form-control mt-6">
          <button className="btn bg-[#FF6B6B] hover:bg-[#FF5252] text-white w-full">
            {isLoading ? (
              <FaSpinner className="animate-spin text-2xl" />
            ) : (
              "Save"
            )}
          </button>
        </div>
        {/* <div className="form-control mt-6">
          <button className="btn bg-[#FF6B6B] hover:bg-[#FF5252] text-white w-full">
            Save
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default PayrollForm;
