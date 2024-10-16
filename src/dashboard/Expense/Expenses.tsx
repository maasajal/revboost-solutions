import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks/useAppDispatch";
import { useAppSelector } from "../../app/hooks/useAppSelector";
import { fetchExpenses } from "../../app/features/expenses/expenseSlice";
import User from "../../app/features/users/UserType";
import { RootState } from "../../app/store/store";
import { getCurrentUser } from "../../app/api/currentUserAPI";
import { axiosPublic } from "../../app/hooks/useAxiosPublic";
import Expense from "./Expense";

const Expenses: React.FC = () => {
  const dispatch = useAppDispatch();
  const [allExpense, setExpenses] = useState([]);

  // Get current user data
  const user = useAppSelector(
    (state: RootState) => state.currentUser.user
  ) as User;

  // Get expenses data from redux store
  //   const { expenseCollection, loading, error } = useAppSelector(
  //     (state: RootState) => state.expenses
  //   );

  const getAllExpenses = async () => {
    const response = await axiosPublic.get(`/expenses/6707fa75b397d3c4264da`); // hardcoded on is working
    setExpenses(response.data);
    return response.data;
  };

  //   const getAllExpense = async (id: string) => {
  //     const response = await axiosPublic.get(`/expenses/${id}`); // id passing is not working
  //     console.log("all expense", response.data);
  //     setExpenses(response.data);
  //     return response.data;
  //   };

  useEffect(() => {
    dispatch(getCurrentUser());
    getAllExpenses();
    if (user?._id) {
      //   console.log("Fetching expenses for user:", user._id);
      //   getAllExpense(user?._id);
      dispatch(fetchExpenses(user._id));
    }
  }, [dispatch, user._id]);

  const { expenses, loading, error } = useAppSelector(
    (state: RootState) => state.expenses
  );

  //   console.log("Expense Data", loading, error, expenses);

  //   if (loading) return <p>Loading...</p>;
  //   if (error) return <p>Error: {error}</p>;

  return (
    <div className="space-y-5">
      <h2>Your all Expenses</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {expenses ? (
          expenses?.map((entry) => (
            <li key={entry.expenseId}>
              {entry.item}: {entry.quantity} x {entry.unitPrice} = {entry.total}
            </li>
          ))
        ) : (
          <li>No Expenses found!</li>
        )}
      </ul>
      <ul>
        {allExpense?.map((entry) => (
          <li key={entry?.expenseId}>
            {entry?.item}: {entry?.quantity} x {entry?.unitPrice} ={" "}
            {entry?.total}
          </li>
        ))}
      </ul>
      <Expense />
    </div>
  );
};

export default Expenses;
