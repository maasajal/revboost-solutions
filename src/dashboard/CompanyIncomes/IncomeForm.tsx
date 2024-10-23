import { useEffect, useState } from "react";
import { Box, Modal, TextField, Button, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector } from "../../app/hooks/useAppSelector";
import User from "../../app/features/users/UserType";
import { getCurrentUser } from "../../app/api/currentUserAPI";
import { useAppDispatch } from "../../app/hooks/useAppDispatch";
import { IIncomeEntry } from "../../app/features/companyIncome/IIncomes";
import {
  addOrUpdateIncome,
  fetchIncomes,
} from "../../app/features/companyIncome/incomesSlice";

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

const IncomeForm: React.FC = () => {
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
  } = useForm<IIncomeEntry>();

  const onSubmit: SubmitHandler<IIncomeEntry> = async (data) => {
    if (!userId || !userEmail) {
      console.error("User ID or email is missing");
      return;
    }
    const incomeEntries: IIncomeEntry[] = [
      {
        incomeId: data.incomeId,
        amount: data.amount,
        source: data.source,
        date: data.date,
      },
    ];
    const savedIncome = await dispatch(
      addOrUpdateIncome({ userId, userEmail, incomeEntries })
    );
    if (addOrUpdateIncome.fulfilled.match(savedIncome)) {
      dispatch(fetchIncomes(userId));
    }
    reset();
    handleClose();
  };

  return (
    <div className="space-y-4">
      <Button className="animate-bounce" onClick={handleOpen}>
        Add a new Income
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2" mb="25px">
            Add your Income details
          </Typography>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="gap-6 grid grid-cols-1 md:grid-cols-2"
          >
            <TextField
              id="UniqueIncomeId"
              {...register("incomeId", {
                required: "Income Unique IncomeId is required",
              })}
              label="Unique Income Id"
              variant="outlined"
              error={!!errors.incomeId}
              helperText={errors.incomeId?.message}
            />

            <TextField
              id="IncomeSector"
              {...register("source", {
                required: "Income Sector is required",
                min: { value: 0, message: "Amount must be positive" },
              })}
              label="Income Sector"
              variant="outlined"
              error={!!errors.source}
              helperText={errors.source?.message}
            />

            <TextField
              id="amount"
              type="number"
              {...register("amount", { required: "amount is required" })}
              label="Amount"
              variant="outlined"
              error={!!errors.amount}
              helperText={errors.amount?.message}
            />

            <TextField
              id="date"
              type="date"
              {...register("date", { required: "Income date is required" })}
              label="Income Date"
              variant="outlined"
              error={!!errors.date}
              helperText={errors.date?.message}
            />

            <Button type="submit" variant="contained" color="success">
              Add Income
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default IncomeForm;
