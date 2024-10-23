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
  Typography,
  Alert,
  Paper,
} from "@mui/material";
import { Helmet } from "react-helmet";

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
    }
  }, [dispatch, user._id]);

  const { expenseEntries, loading, error } = useAppSelector(
    (state: RootState) => state.expenses
  );

  return (
    <section>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Expenses - RevBoost Solutions</title>
      </Helmet>
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Your Expenses
        </Typography>

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

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
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
