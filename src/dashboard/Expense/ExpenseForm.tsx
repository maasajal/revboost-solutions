import { useState } from "react";
import { Box, Modal, TextField,  Button, Typography  } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";

// Define the form inputs
interface ExpenseFormInputs {
  UniqueExpenseId: string;
  ExpenseSector: string;
  quantity: number;
  unitPrice: string;
}

// Modal styling
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 2/3,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const IncomeModal: React.FC = () => {
  // mui modal state
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // form handling using react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormInputs>();

  const onSubmit: SubmitHandler<ExpenseFormInputs> = (data) => {
    console.log(data);
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
          <form onSubmit={handleSubmit(onSubmit)} className="gap-6 grid grid-cols-1 md:grid-cols-2">
            <TextField
              id="UniqueExpenseId"
              {...register("UniqueExpenseId", { required: "Expense UniqueExpenseId is required" })}
              label="Unique Expense Id"
              variant="outlined"
            />
            {errors.UniqueExpenseId && <span className="text-red-400">{errors.UniqueExpenseId.message}</span>}

            <TextField
              id="ExpenseSector"
              {...register("ExpenseSector", { required: "ExpenseSector is required", min: { value: 0, message: "Amount must be positive" } })}
              label="Expense Sector"
              variant="outlined"
            />
            {errors.ExpenseSector && <span className="text-red-400">{errors.ExpenseSector.message}</span>}

            <TextField
              id="quantity"
              type="number"
              {...register("quantity", { required: "quantity is required" })}
              label="Quantity"
              variant="outlined"
            />
            {errors.quantity && <span className="text-red-400">{errors.quantity.message}</span>}

            <TextField
              id="unitPrice"
              {...register("unitPrice", { required: "unitPrice is required" })}
              label="Unit Price"
              variant="outlined"
            />
            {errors.unitPrice && <span className="text-red-400">{errors.unitPrice.message}</span>}

            <button
              type="submit"
              style={{ padding: "10px", backgroundColor: "#4CAF50", color: "white", border: "none" }}
            >
              Add Expenses
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default IncomeModal;
