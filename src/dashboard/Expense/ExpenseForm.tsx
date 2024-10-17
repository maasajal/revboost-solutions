import { useEffect, useState } from "react";
import { Box, Modal, TextField, Button, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { ExpenseEntry } from "../../app/features/expenses/IExpense";
import { useAppSelector } from "../../app/hooks/useAppSelector";
import User from "../../app/features/users/UserType";
import { getCurrentUser } from "../../app/api/currentUserAPI";
import {
  addOrUpdateExpense,
  fetchExpenses,
} from "../../app/features/expenses/expenseSlice";
import { useAppDispatch } from "../../app/hooks/useAppDispatch";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 2 / 3,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ExpenseForm: React.FC = () => {
  // mui modal state
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const { _id: userId, email: userEmail } = useAppSelector(
    (state) => state.currentUser.user
  ) as User;

  // form handling using react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseEntry>();

  const onSubmit: SubmitHandler<ExpenseEntry> = async (data) => {
    if (!userId || !userEmail) {
      console.error("User ID or email is missing");
      return;
    }
    const expenseEntries: ExpenseEntry[] = [
      {
        expenseId: data.expenseId,
        item: data.item,
        quantity: data.quantity,
        unitPrice: data.unitPrice,
        total: data.quantity * data.unitPrice,
      },
    ];
    const savedExpense = await dispatch(
      addOrUpdateExpense({ userId, userEmail, expenseEntries })
    );
    if (addOrUpdateExpense.fulfilled.match(savedExpense)) {
      dispatch(fetchExpenses(userId));
    }
    reset();
    handleClose();
  };

  return (
    <div className="space-y-4">
      {/* Button to open modal */}
      <Button className="animate-bounce" onClick={handleOpen}>
        Add Expenses Details
      </Button>

      {/* Modal component */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2" mb="25px">
            Add your Expense details
          </Typography>

          {/* Form inside the modal */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="gap-6 grid grid-cols-1 md:grid-cols-2"
          >
            <TextField
              id="UniqueExpenseId"
              {...register("expenseId", {
                required: "Expense UniqueExpenseId is required",
              })}
              label="Unique Expense Id"
              variant="outlined"
              error={!!errors.expenseId}
              helperText={errors.expenseId?.message}
            />

            <TextField
              id="ExpenseSector"
              {...register("item", {
                required: "ExpenseSector is required",
                min: { value: 0, message: "Amount must be positive" },
              })}
              label="Expense Sector"
              variant="outlined"
              error={!!errors.item}
              helperText={errors.item?.message}
            />

            <TextField
              id="quantity"
              type="number"
              {...register("quantity", { required: "quantity is required" })}
              label="Quantity"
              variant="outlined"
              error={!!errors.quantity}
              helperText={errors.quantity?.message}
            />

            <TextField
              id="unitPrice"
              {...register("unitPrice", { required: "unitPrice is required" })}
              label="Unit Price"
              variant="outlined"
              error={!!errors.unitPrice}
              helperText={errors.unitPrice?.message}
            />

            <Button type="submit" variant="contained" color="success">
              Add Expenses
            </Button>
          </form>
          {/* <form
            onSubmit={handleSubmit(onSubmit)}
            className="gap-6 grid grid-cols-1 md:grid-cols-2"
          >
            <TextField
              id="UniqueExpenseId"
              {...register("expenseId", {
                required: "Expense UniqueExpenseId is required",
              })}
              label="Unique Expense Id"
              variant="outlined"
            />
            {errors.expenseId && (
              <span className="text-red-400">{errors.expenseId.message}</span>
            )}

            <TextField
              id="ExpenseSector"
              {...register("item", {
                required: "ExpenseSector is required",
                min: { value: 0, message: "Amount must be positive" },
              })}
              label="Expense Sector"
              variant="outlined"
            />
            {errors.item && (
              <span className="text-red-400">{errors.item.message}</span>
            )}

            <TextField
              id="quantity"
              type="number"
              {...register("quantity", { required: "quantity is required" })}
              label="Quantity"
              variant="outlined"
            />
            {errors.quantity && (
              <span className="text-red-400">{errors.quantity.message}</span>
            )}

            <TextField
              id="unitPrice"
              {...register("unitPrice", { required: "unitPrice is required" })}
              label="Unit Price"
              variant="outlined"
            />
            {errors.unitPrice && (
              <span className="text-red-400">{errors.unitPrice.message}</span>
            )}

            <button
              type="submit"
              style={{
                padding: "10px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
              }}
            >
              Add Expenses
            </button>
            <Button type="submit" variant="contained" color="success">
              Add Expenses
            </Button>
          </form> */}
        </Box>
      </Modal>
    </div>
  );
};

export default ExpenseForm;
