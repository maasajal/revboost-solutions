import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addPayroll } from "../../app/features/payroll/payrollSlice";
import { AppDispatch } from "../../app/store/store";

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
    formState: { errors },
  } = useForm<Inputs>();

  const dispatch: AppDispatch = useDispatch();

  const onSubmit: SubmitHandler<Inputs> = async (data: Payroll) => {
    console.log(data);
    try {
      await dispatch(addPayroll(data));
      toast.success("Saved Successfully."); // Show success message
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Failed to save payroll."); // Show error message
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4"
      >
        <div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Employee Name</span>
            </label>
            <input
              type="text"
              className="w-full p-3 rounded dark:bg-gray-100"
              {...register("employeeName", { required: true })}
            />
            {errors.employeeName && (
              <small className="text-red-400 mt-2">
                This field is required
              </small>
            )}
          </div>

          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Position</span>
            </label>
            <input
              type="text"
              className="w-full p-3 rounded dark:bg-gray-100"
              {...register("position", { required: true })}
            />
            {errors.position && (
              <small className="text-red-400 mt-2">
                This field is required
              </small>
            )}
          </div>
        </div>

        <div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Salary</span>
            </label>
            <input
              type="number"
              className="w-full p-3 rounded dark:bg-gray-100"
              {...register("salary", { required: true })}
            />
            {errors.salary && (
              <small className="text-red-400 mt-2">
                This field is required
              </small>
            )}
          </div>

          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Bonus</span>
            </label>
            <input
              type="number"
              className="w-full p-3 rounded dark:bg-gray-100"
              {...register("bonus", { required: true })}
            />
            {errors.bonus && (
              <small className="text-red-400 mt-2">
                This field is required
              </small>
            )}
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Tax Deduction</span>
            </label>
            <input
              type="number"
              className="w-full p-3 rounded dark:bg-gray-100"
              {...register("taxDeduction", { required: true })}
            />
            {errors.taxDeduction && (
              <small className="text-red-400 mt-2">
                This field is required
              </small>
            )}
          </div>

          <div>
            <label className="label">
              <span className="label-text">Month</span>
            </label>
            <select
              className="w-full p-3 rounded dark:bg-gray-100"
              {...register("month", { required: true })}
            >
              <option value="Select Month" selected disabled>
                Select Month
              </option>
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
            {errors.month && (
              <small className="text-red-400 mt-2">
                This field is required
              </small>
            )}
          </div>
        </div>

        <div className="form-control mt-6">
          <button className="btn bg-[#FF6B6B] hover:bg-[#FF5252] text-white w-full">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default PayrollForm;
