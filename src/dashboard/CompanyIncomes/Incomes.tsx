import { useEffect } from "react";
import { fetchIncomeCollection } from "../../app/features/companyIncome/incomeSlice";
import { RootState } from "../../app/store/store";
import { Alert, Box, CircularProgress } from "@mui/material";
import { MdOutlineFolderDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { getCurrentUser } from "../../app/api/currentUserAPI";
import { fetchIncomes } from "../../app/features/companyIncome/incomesSlice";
import User from "../../app/features/users/UserType";
import { useAppDispatch } from "../../app/hooks/useAppDispatch";
import { useAppSelector } from "../../app/hooks/useAppSelector";
import useAxiosSecure from "../../app/hooks/useAxiosSecure";
import { waringStatus } from "../../components/utils/waringStatus";
import IncomeForm from "./IncomeForm";
import { Helmet } from "react-helmet";
import SectionTitle from "../../components/SectionTitle";
import { fetchTotalRevenue } from "../../app/api/revenueGrowthAPI";

interface Parameter {
  incomeId: string;
  userId: string;
}

const Incomes: React.FC = () => {
  const dispatch = useAppDispatch();
  const axiosSecure = useAxiosSecure();
  const { _id: userId, name } = useAppSelector(
    (state: RootState) => state.currentUser.user
  ) as User;

  // ------------
  useEffect(() => {
    dispatch(getCurrentUser());
    if (userId) {
      dispatch(fetchIncomes(userId));
      dispatch(fetchTotalRevenue(userId));
    }
  }, [dispatch, userId]);

  const { incomeEntries, loading, error } = useAppSelector(
    (state: RootState) => state.allIncome
  );

  const { totalIncome } = useAppSelector(
    (state: RootState) => state.totalRevenueGrowth.totalRevenueGrowth
  );

  // form section
  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm<IncomeFormInputs>();

  // const onSubmit: SubmitHandler<IncomeFormInputs> = async (data) => {
  //   console.log(data);
  //   if (!userId || !userEmail) {
  //     console.error("User ID or email is missing");
  //     return;
  //   }
  //   const newEntry: IncomeEntry = {
  //     incomeId: data.incomeId,
  //     amount: data.amount,
  //     source: data.source,
  //     date: data.date,
  //   };
  //   const savedIncome = await dispatch(
  //     addIncomeEntry({ userId, userEmail, entry: newEntry })
  //   );
  //   if (addIncomeEntry.fulfilled.match(savedIncome)) {
  //     dispatch(fetchIncomeCollection(userId));
  //   }
  //   reset();
  //   handleClose();
  // };

  const handleDelete = async ({
    incomeId,
    userId,
  }: Parameter): Promise<void> => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });
      if (result.isConfirmed) {
        // Use the productId and userId for the API call
        await axiosSecure.delete(
          `/incomes/delete?userId=${userId}&incomeId=${incomeId}`
        );
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        dispatch(fetchIncomeCollection(userId));
      }
    } catch (error) {
      console.error("Error during delete:", error);
      waringStatus();
    }
  };

  return (
    <section className="container mx-auto mt-10 space-y-5">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Incomes - RevBoost Solutions</title>
      </Helmet>
      <SectionTitle
        title={`Income Tracking of ${name}`}
        intro={"Income"}
        content="All your income entries & add new income!"
      />
      {loading && (
        <Box display="flex" justifyContent="center" marginY={2}>
          <CircularProgress />
        </Box>
      )}
      {error && (
        <Alert severity="error" sx={{ marginY: 2 }}>
          {error}
        </Alert>
      )}

      {/* <section className="p-5">
        <TableContainer component={Paper} className="overflow-x-auto">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>ID</strong>
                </TableCell>
                <TableCell>
                  <strong>Source</strong>
                </TableCell>
                <TableCell>
                  <strong>Amount</strong>
                </TableCell>
                <TableCell>
                  <strong>Action</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {incomeEntries && incomeEntries.length > 0 ? (
                incomeEntries.map((entry) => (
                  <TableRow key={entry.incomeId}>
                    <TableCell>{entry.incomeId}</TableCell>
                    <TableCell>{entry.source}</TableCell>
                    <TableCell>$ {entry.amount}</TableCell>
                    <TableCell>
                      <MdOutlineFolderDelete
                        onClick={() =>
                          handleDelete({
                            incomeId: entry.incomeId,
                            userId: userId,
                          })
                        }
                        className="text-2xl text-primary cursor-pointer"
                      />
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    No expenses found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </section> */}

      <IncomeForm />
      <div className="overflow-x-auto min-w-full max-w-32 px-5">
        <table className="table-auto text-sm md:text-base w-full">
          <thead>
            <tr className="text-left border-b border-opacity-20 dark:border-gray-300">
              <th className="p-2 md:p-3">Income ID</th>
              <th className="p-2 md:p-3">Source</th>
              <th className="p-2 md:p-3">Amount</th>
              <th className="p-2 md:p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {incomeEntries && incomeEntries.length > 0 ? (
              incomeEntries.map((entry) => (
                <tr
                  key={entry.incomeId}
                  className="border-b border-opacity-20 dark:border-gray-300 hover:bg-slate-600"
                >
                  <td className="p-2 md:p-3">{entry.incomeId}</td>
                  <td className="p-2 md:p-3">{entry.source}</td>
                  <td className="p-2 md:p-3">$ {entry.amount}</td>
                  <td className="p-2 md:p-3">
                    <MdOutlineFolderDelete
                      onClick={() =>
                        handleDelete({
                          incomeId: entry.incomeId,
                          userId: userId,
                        })
                      }
                      className="text-2xl text-primary cursor-pointer"
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} align="center">
                  No expenses found.
                </td>
              </tr>
            )}
            <tr className="border-b border-opacity-20">
              <td className="p-3"></td>
              <td className="p-3"></td>
              <td className="p-3">
                <h5>Subtotal</h5>
              </td>
              <td className="p-3 text-right ">
                <h5>$ {totalIncome}</h5>
              </td>
            </tr>
            <tr className="border-b border-opacity-20">
              <td className="p-3"></td>
              <td className="p-3"></td>
              <td className="p-3">
                <h5>VAT(15%)</h5>
              </td>
              <td className="p-3 text-right">
                <h5>$ {totalIncome * 0.15}</h5>
              </td>
            </tr>
            <tr className="border-b border-opacity-20 dark:border-gray-300">
              <td className="p-3"></td>
              <td className="p-3"></td>
              <td className="p-3">
                <h4>Total</h4>
              </td>
              <td className="p-3 text-right animate-bounce">
                <h4>$ {totalIncome - totalIncome * 0.15} </h4>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Incomes;
