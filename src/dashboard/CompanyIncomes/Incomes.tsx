import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addIncomeEntry,
  fetchIncomeCollection,
  IncomeEntry,
} from "../../app/features/companyIncome/incomeSlice";
import { AppDispatch, RootState } from "../../app/store/store";

import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector } from "../../app/hooks/useAppSelector";
import User from "../../app/features/users/UserType";
import { getCurrentUser } from "../../app/api/currentUserAPI";

// form input
interface IncomeFormInputs {
  incomeId: string;
  amount: number;
  source: string;
  date: string; // YYYY-MM-DD
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Incomes: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  // Getting userId
  const currentUser = useAppSelector(
    (state) => state.currentUser.user
  ) as User;
  const userId = currentUser?._id; // Replace with dynamic user ID as needed
  // const userId: string = "670708f70e882388dd5b3af0";

  useEffect(() => {
    dispatch(getCurrentUser());
    dispatch(fetchIncomeCollection(userId));
  }, [dispatch, userId]);

  const { incomeCollection, loading, error } = useSelector(
    (state: RootState) => state.incomes
  );
  // console.log(incomeCollection, dispatch);
  //  mui modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // form section
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IncomeFormInputs>();
  const onSubmit: SubmitHandler<IncomeFormInputs> = (data) => {
    // console.log(data);

    const newEntry: IncomeEntry = {
      incomeId: data.incomeId,
      amount: data.amount,
      source: data.source,
      date: data.date,
    };
    // console.log(newEntry);
    dispatch(addIncomeEntry({ userId, entry: newEntry }));
    reset();
  };
  return (
    <section className="container mx-auto mt-10 space-y-4">
      <h2 className="text-center">Income Page</h2>
      <div className="space-y-6 border-2 p-4 shadow-2xl rounded-lg">
        <h3 className="mb-4 text-center text-2xl font-bold leading-tight">
          Your Incomes details
        </h3>
        <div className="flex justify-between">
          <div className="space-y-4">
            <div>
              <h5>From:</h5>
              <p>Company Name:</p>
            </div>
            {/* MODAL*/}
            <div>
              {/* mui modal */}
              <div className="space-y-4">
                <Button className="animate-bounce" onClick={handleOpen}>
                  Add Income details
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Add your item here
                    </Typography>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="gap-6 grid grid-cols-1 md:grid-cols-2"
                    >
                      <TextField
                        id="incomeId"
                        {...register("incomeId", {
                          required: "Income ID is required",
                        })}
                        label="IncomeId"
                        variant="outlined"
                      />
                      {errors.incomeId && (
                        <span className="text-red-400">
                          {errors.incomeId.message}
                        </span>
                      )}
                      <TextField
                        id="amount"
                        type="number"
                        {...register("amount", {
                          required: "Amount is required",
                          min: { value: 0, message: "Amount must be positive" },
                        })}
                        label="Amount"
                        variant="outlined"
                      />
                      {errors.amount && (
                        <span className="text-red-400">
                          {errors.amount.message}
                        </span>
                      )}
                      <TextField
                        id="source"
                        {...register("source", {
                          required: "Source is required",
                        })}
                        label="Source"
                        variant="outlined"
                      />
                      {errors.source && (
                        <span style={{ color: "red" }}>
                          {errors.source.message}
                        </span>
                      )}

                      <TextField
                        id="date"
                        type="date"
                        {...register("date", { required: "Date is required" })}
                        variant="outlined"
                      />
                      {errors.date && (
                        <span style={{ color: "red" }}>
                          {errors.date.message}
                        </span>
                      )}

                      <button
                        type="submit"
                        disabled={loading}
                        style={{
                          padding: "10px",
                          backgroundColor: "#4CAF50",
                          color: "white",
                          border: "none",
                        }}
                      >
                        {loading ? "Saving..." : "Add Income"}
                      </button>
                    </form>{" "}
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Complete the input fields and{" "}
                      <span className="text-green-300">add income</span>
                    </Typography>
                  </Box>
                </Modal>
              </div>
            </div>
            <div>
              <h5 className="underline">Bill To:</h5>
              <p>Customer Name</p>
              <p>Customer Address</p>
            </div>
          </div>
          <div className="space-y-4">
            <p>Creation Date:</p>
            <p className="text-red-400">Due Date:</p>
          </div>
        </div>

        <div className=" dark:text-gray-800">
          <h2>Income Entries</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
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
                  <th className="p-3">Invoice #</th>
                  <th className="p-3">Client</th>
                  <th className="p-3">Issued</th>
                  <th className="p-3">Due</th>
                  <th className="p-3 text-right">Amount</th>
                  <th className="p-3 text-right"></th>
                </tr>
              </thead>
              <tbody>
                {/* test col */}
                {/* Display Current Income Entries */}
                <div className="dark:border-gray-300 dark:bg-gray-50">
                  {loading && <p>Loading...</p>}
                  {error && <p className="text-red-400">{error}</p>}
                  {incomeCollection &&
                  incomeCollection.incomeEntries.length > 0 ? (
                    <table
                      border={1}
                      cellPadding={5}
                      cellSpacing={0}
                      style={{ width: "100%", marginTop: "10px" }}
                      className="min-w-full text-xs"
                    >
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
                          <th className="p-3">Invoice #</th>
                          <th className="p-3">Client</th>
                          <th className="p-3">Issued</th>
                          <th className="p-3">Due</th>
                          <th className="p-3 text-right">Amount</th>
                          <th className="p-3 text-right"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {incomeCollection.incomeEntries.map((entry) => (
                          <tr key={entry.incomeId}>
                            <td>{entry.incomeId}</td>
                            <td>{entry.amount}</td>
                            <td>{entry.source}</td>
                            <td>{new Date(entry.date).toLocaleDateString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    !loading && <p>No income entries found.</p>
                  )}
                </div>
                {/* ^^^end test */}
                {/* <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                    <td className="p-3">
                      <p>97412378923</p>
                    </td>
                    <td className="p-3">
                      <p>Tesla Inc.</p>
                    </td>
                    <td className="p-3">
                      <p>14 Jan 2022</p>
                      <p className="dark:text-gray-600">Friday</p>
                    </td>
                    <td className="p-3">
                      <p>01 Feb 2022</p>
                      <p className="dark:text-gray-600">Tuesday</p>
                    </td>
                    <td className="p-3 text-right">
                      <p>$275</p>
                    </td>
                    <td className="p-3 text-right">
                      <span className="px-3 py-1 font-semibold rounded-md dark:bg-red-400 dark:text-gray-50">
                        <span>Delete</span>
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                    <td className="p-3">
                      <p>97412378923</p>
                    </td>
                    <td className="p-3">
                      <p>Coca Cola co.</p>
                    </td>
                    <td className="p-3">
                      <p>14 Jan 2022</p>
                      <p className="dark:text-gray-600">Friday</p>
                    </td>
                    <td className="p-3">
                      <p>01 Feb 2022</p>
                      <p className="dark:text-gray-600">Tuesday</p>
                    </td>
                    <td className="p-3 text-right">
                      <p>$8,950,500</p>
                    </td>
                    <td className="p-3 text-right">
                      <span className="px-3 py-1 font-semibold rounded-md dark:bg-red-400 dark:text-gray-50">
                        <span>Delete</span>
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-opacity-20 dark:border-red-300 dark:bg-gray-50">
                    <td className="p-3">
                      <p>97412378923</p>
                    </td>
                    <td className="p-3">
                      <p>Nvidia Corporation</p>
                    </td>
                    <td className="p-3">
                      <p>14 Jan 2022</p>
                      <p className="dark:text-gray-600">Friday</p>
                    </td>
                    <td className="p-3">
                      <p>01 Feb 2022</p>
                      <p className="dark:text-gray-600">Tuesday</p>
                    </td>
                    <td className="p-3 text-right">
                      <p>$98,218</p>
                    </td>
                    <td className="p-3 text-right">
                      <span className="px-3 py-1 font-semibold rounded-md dark:bg-red-400 dark:text-gray-50">
                        <span>Delete</span>
                      </span>
                    </td>
                  </tr> */}

                <tr className="border-b border-opacity-20">
                  <td className="p-3">
                    <p></p>
                  </td>
                  <td className="p-3">
                    <p></p>
                  </td>
                  <td className="p-3">
                    <p></p>
                    <p className="dark:text-gray-600"></p>
                  </td>
                  <td className="p-3">
                    <h5>Subtotal</h5>
                    <p className="dark:text-gray-600"></p>
                  </td>
                  <td className="p-3 text-right ">
                    {/* Write Total Below  */}

                    <h5>$</h5>
                  </td>
                  <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold rounded-md dark:text-gray-50">
                      <span></span>
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-opacity-20">
                  <td className="p-3">
                    <p></p>
                  </td>
                  <td className="p-3">
                    <p></p>
                  </td>
                  <td className="p-3">
                    <p></p>
                    <p className="dark:text-gray-600"></p>
                  </td>
                  <td className="p-3">
                    <h5>VAT(15%)</h5>
                    <p className="dark:text-gray-600"></p>
                  </td>
                  <td className="p-3 text-right">
                    {/* Write VAT Below  */}

                    <h5>$</h5>
                  </td>
                  <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold rounded-md dark:text-gray-50">
                      <span></span>
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-red-50">
                  <td className="p-3">
                    <p></p>
                  </td>
                  <td className="p-3">
                    <p></p>
                  </td>
                  <td className="p-3">
                    <p></p>
                    <p className="dark:text-gray-600"></p>
                  </td>
                  <td className="p-3">
                    <h4>total</h4>
                    <p className="dark:text-gray-600"></p>
                  </td>
                  <td className="p-3 text-right animate-bounce">
                    {/* Write Total Below  */}

                    <h4>$</h4>
                  </td>
                  <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold rounded-md dark:text-gray-50">
                      <span></span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Incomes;
