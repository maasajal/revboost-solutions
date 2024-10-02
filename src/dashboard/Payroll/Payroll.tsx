import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

type Inputs = {
  employeeName: string;
  position: string;
  salary: number;
  bonus: number;
  taxDeduction: number;
  month: string;
};

const Payroll = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    toast.success("Saved Successfully.");
  };
  return (
    <div>
      <h2 className="mb-10">Payroll Management</h2>
      {/* form section */}
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

          {/* <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Month</span>
            </label>
            <input
              type="text"
              className="w-full p-3 rounded dark:bg-gray-100"
              {...register("month", { required: true })}
            />
            {errors.month && (
              <small className="text-red-400 mt-2">
                This field is required
              </small>
            )}
          </div> */}
        </div>

        <div className="form-control mt-6">
          <button className="btn bg-[#FF6B6B] hover:bg-[#FF5252] text-white w-full">
            Save
          </button>
        </div>
      </form>

      {/* display payroll details */}
      <div className="space-y-6 border-2 p-4 mt-10">
        <h2 className="mb-4 text-center text-2xl font-bold leading-tight">
          Employee Payroll Details
        </h2>
        <div className="dark:text-gray-800">
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
              {/* colgroup? */}
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col className="w-24" />
              </colgroup>

              <thead className="dark:bg-red-400">
                <tr className="text-left">
                  <th className="p-3">Id</th>
                  <th className="p-3">Name</th>
                  <th className="p-3 text-center">Salary</th>
                  <th className="p-3 text-center">Bonus</th>
                  <th className="p-3 text-center">Tax Deduction</th>
                  <th className="p-3 text-center">Net Pay</th>
                  <th className="p-3 text-center">Month</th>
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
                  <td className="p-3 text-center">
                    <p>September</p>
                  </td>
                  <td className="p-3">
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
                  <td className="p-3 text-center">
                    <p>September</p>
                  </td>
                  <td className="p-3">
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
                  <td className="p-3 text-center">
                    <p>September</p>
                  </td>
                  <td className="p-3">
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
    </div>
  );
};

export default Payroll;
