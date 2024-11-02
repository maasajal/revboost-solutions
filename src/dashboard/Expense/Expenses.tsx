import { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks/useAppDispatch";
import { useAppSelector } from "../../app/hooks/useAppSelector";
import { fetchExpenses } from "../../app/features/expenses/expenseSlice";
import User from "../../app/features/users/UserType";
import { RootState } from "../../app/store/store";
import { getCurrentUser } from "../../app/api/currentUserAPI";
import ExpenseForm from "./ExpenseForm";
import {
  Box,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Alert,
  Paper,
} from "@mui/material";
import { Helmet } from "react-helmet";
import SectionTitle from "../../components/SectionTitle";
import { fetchTotalRevenue } from "../../app/api/revenueGrowthAPI";

const Expenses: React.FC = () => {
  const dispatch = useAppDispatch();

  // Get current user data
  const user = useAppSelector(
    (state: RootState) => state.currentUser.user
  ) as User;

  useEffect(() => {
    dispatch(getCurrentUser());
    if (user?._id) {
      dispatch(fetchExpenses(user._id));
      dispatch(fetchTotalRevenue(user._id));
    }
  }, [dispatch, user._id]);

  const { expenseEntries, loading, error } = useAppSelector(
    (state: RootState) => state.expenses
  );
  const { totalExpenses } = useAppSelector(
    (state: RootState) => state.totalRevenueGrowth.totalRevenueGrowth
  );

  return (
    <section>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Expenses - RevBoost Solutions</title>
      </Helmet>
      <SectionTitle
        title={`Expenses Tracking of ${user?.name}`}
        intro={"Your Expenses"}
        content="All your expense entries & add new expense!"
      />
      <Box sx={{ padding: 4 }} data-aos="zoom-in-down">
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

        <TableContainer
          component={Paper}
          className="overflow-x-auto min-w-full max-w-32 px-5"
        >
          <Table>
            <TableHead>
              <TableRow className="bg-lightColor">
                <TableCell>
                  <strong>ID</strong>
                </TableCell>
                <TableCell>
                  <strong>Item</strong>
                </TableCell>
                <TableCell>
                  <strong>Quantity</strong>
                </TableCell>
                <TableCell>
                  <strong>Unit Price</strong>
                </TableCell>
                <TableCell>
                  <strong>Total</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {expenseEntries && expenseEntries.length > 0 ? (
                expenseEntries.map((entry) => (
                  <TableRow key={entry.expenseId}>
                    <TableCell>{entry.expenseId}</TableCell>
                    <TableCell>{entry.item}</TableCell>
                    <TableCell>{entry.quantity}</TableCell>
                    <TableCell>${entry.unitPrice}</TableCell>
                    <TableCell>${entry.total}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    No expenses found.
                  </TableCell>
                </TableRow>
              )}
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>Subtotal</TableCell>
                <TableCell>$ {totalExpenses}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>VAT Deduction</TableCell>
                <TableCell>$ {totalExpenses * 0.25}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>Total</TableCell>
                <TableCell>$ {totalExpenses - totalExpenses * 0.25}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Box mt={4}>
          <ExpenseForm />
        </Box>
      </Box>
    </section>
  );
};

export default Expenses;
