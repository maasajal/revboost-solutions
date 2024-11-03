import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  addPayroll,
  fetchPayroll,
} from "../../app/features/payroll/payrollSlice";
import { AppDispatch, RootState } from "../../app/store/store";
import {
  Box,
  CircularProgress,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import User from "../../app/features/users/UserType";
import RevButton from "../../components/RevButton";

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

interface IPayload {
  userId: string;
  userEmail: string;
  payrollEntries: {
    employeeName: string;
    position: string;
    salary: number;
    bonus: number;
    taxDeduction: number;
    month: string;
  }[];
}

const PayrollForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const { isLoading } = useSelector((state: RootState) => state.payroll);
  const dispatch: AppDispatch = useDispatch();

  // Get current user data
  const user = useSelector(
    (state: RootState) => state.currentUser.user
  ) as User;
  const { _id, email } = user;

  const onSubmit: SubmitHandler<Inputs> = async (data: Payroll) => {
    const payload: IPayload = {
      userId: _id,
      userEmail: email,
      payrollEntries: [
        {
          employeeName: data.employeeName,
          position: data.position,
          salary: data.salary,
          bonus: data.bonus,
          taxDeduction: data.taxDeduction,
          month: data.month,
        },
      ],
    };

    try {
      await dispatch(addPayroll(payload));
      await dispatch(fetchPayroll(_id));
      toast.success("Saved Successfully.");
      reset();
    } catch (error) {
      toast.error("Failed to save payroll.");
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
    <section className="py-5 space-y-5" data-aos="zoom-in-down">
      <Typography variant="h5" gutterBottom>
        Payroll Form
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        display="grid"
        gap={2}
        className="gap-6 grid grid-cols-1 md:grid-cols-2"
      >
        <TextField
          id="employeeName"
          {...register("employeeName", {
            required: "Employee name is required",
          })}
          label="Employee Name"
          placeholder="Enter the employee's full name"
          variant="outlined"
          error={!!errors.employeeName}
          helperText={errors.employeeName?.message}
          fullWidth
        />

        <TextField
          id="position"
          {...register("position", { required: "Position is required" })}
          label="Position"
          placeholder="Enter the employee's position (e.g., Software Engineer)"
          variant="outlined"
          error={!!errors.position}
          helperText={errors.position?.message}
          fullWidth
        />

        <TextField
          id="salary"
          {...register("salary", { required: "Salary is required" })}
          label="Salary"
          placeholder="Enter the monthly salary in USD"
          variant="outlined"
          type="number"
          error={!!errors.salary}
          helperText={errors.salary?.message}
          fullWidth
        />

        <TextField
          id="bonus"
          {...register("bonus", { required: "Bonus is required" })}
          label="Bonus"
          placeholder="Enter any bonus amount in USD"
          variant="outlined"
          type="number"
          error={!!errors.bonus}
          helperText={errors.bonus?.message}
          fullWidth
        />

        <TextField
          id="taxDeduction"
          {...register("taxDeduction", {
            required: "Tax Deduction is required",
          })}
          label="Tax Deduction"
          placeholder="Enter the tax deduction amount in USD"
          variant="outlined"
          type="number"
          error={!!errors.taxDeduction}
          helperText={errors.taxDeduction?.message}
          fullWidth
        />

        <TextField
          id="month"
          {...register("month", { required: "Month is required" })}
          select
          label="Month"
          placeholder="Select the month for payroll"
          defaultValue={currentMonth}
          variant="outlined"
          error={!!errors.month}
          helperText={errors.month?.message}
          fullWidth
        >
          {months.map((month) => (
            <MenuItem key={month} value={month}>
              {month}
            </MenuItem>
          ))}
        </TextField>

        <RevButton
          type="submit"
          disabled={isLoading}
          name={isLoading ? <CircularProgress size={24} /> : "Save"}
        />
      </Box>
    </section>
  );
};

export default PayrollForm;
