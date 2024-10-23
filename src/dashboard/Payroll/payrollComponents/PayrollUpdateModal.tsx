import { useEffect } from "react";
import { Modal, Box, Button } from "@mui/material";
import FormField from "./FormField";
import { SubmitHandler, useForm } from "react-hook-form";
import SelectField from "./SelectField";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/store/store";
import toast from "react-hot-toast";
import {
  fetchPayroll,
  updatePayroll,
} from "../../../app/features/payroll/payrollSlice";

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

type PayrollUpdateModalProps = {
  open: boolean;
  onClose: () => void;
  payroll: Inputs | null;
  userId: string;
};

const PayrollUpdateModal = ({
  open,
  onClose,
  payroll,
  userId, // Destructure userId from props
}: PayrollUpdateModalProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  useEffect(() => {
    if (payroll) {
      // Set form values with selected payroll data
      setValue("_id", payroll._id); // Ensure _id is set
      setValue("employeeName", payroll?.employeeName || "");
      setValue("position", payroll?.position || "");
      setValue("salary", payroll?.salary || 0);
      setValue("bonus", payroll?.bonus || 0);
      setValue("taxDeduction", payroll?.taxDeduction || 0);
      setValue("month", payroll?.month || "");
    }
  }, [payroll, setValue]);

  const dispatch: AppDispatch = useDispatch();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const payload = {
      ...data,
      salary: Number(data.salary),
      bonus: Number(data.bonus),
      taxDeduction: Number(data.taxDeduction),
    };

    console.log("Updated form data: ", payload);
    await dispatch(
      updatePayroll({
        userId, // Pass userId from the parent component
        payrollId: data._id,
        payrollData: payload,
      })
    );
    await dispatch(fetchPayroll(userId)); // Refetch the updated payroll data
    toast.success("Updated Successfully.");
    onClose();
  };

  if (!open) return null;

  // Modal style
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "90%", sm: "80%", md: 700, lg: 800 }, // Keep modal responsive
    maxHeight: "90vh", // Set max height to 90% of the viewport height
    overflowY: "auto", // Make modal scrollable if content exceeds height
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
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
      {/* Modal component */}
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
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
                register={register("salary", {
                  required: true,
                  valueAsNumber: true,
                })}
                error={errors.salary}
              />
              <FormField
                label="Bonus"
                type="number"
                register={register("bonus", {
                  required: true,
                  valueAsNumber: true,
                })}
                error={errors.bonus}
              />

              <FormField
                label="Tax Deduction"
                type="number"
                register={register("taxDeduction", {
                  required: true,
                  valueAsNumber: true,
                })}
                error={errors.taxDeduction}
              />

              <SelectField
                label="Month"
                options={months}
                defaultValue={currentMonth}
                register={register("month", { required: true })}
                error={errors.month}
              />
            </div>

            <div className="form-control mt-6 flex flex-row justify-between items-center">
              <div>
                <button className="btn bg-[#FF6B6B] hover:bg-[#FF5252] text-white w-full uppercase">
                  Update
                </button>
              </div>

              <div>
                <Button onClick={onClose} variant="contained">
                  Close Modal
                </Button>
              </div>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default PayrollUpdateModal;
