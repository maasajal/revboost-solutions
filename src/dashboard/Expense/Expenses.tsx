import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks/useAppDispatch";
import { useAppSelector } from "../../app/hooks/useAppSelector";
import { fetchExpenses } from "../../app/features/expenses/expenseSlice";
import User from "../../app/features/users/UserType";
import { RootState } from "../../app/store/store";
import { getCurrentUser } from "../../app/api/currentUserAPI";
// import { axiosSecure } from "../../app/hooks/useAxiosSecure";
import { axiosPublic } from "../../app/hooks/useAxiosPublic";

const Expenses: React.FC = () => {
  const dispatch = useAppDispatch();
  const [expenses, setExpenses] = useState([]);

  // Get current user data
  const user = useAppSelector(
    (state: RootState) => state.currentUser.user
  ) as User;
  const { _id, email } = user;
  console.log(_id, email);

  // Get expenses data from redux store
  const { expenseCollection, loading, error } = useAppSelector(
    (state: RootState) => state.expenses
  );

  const getAllExpenses = async () => {
    const response = await axiosPublic.get(`/expenses/6707fa75b397d3c4264da`); // hardcoded on is working
    console.log("expenses koi", response.data);
    setExpenses(response.data);
    return response.data;
  };

  const getAllExpense = async (id: string) => {
    const response = await axiosPublic.get(`/expenses/${id}`); // id passing is not working
    console.log("all expense koi", response.data);
    setExpenses(response.data);
    return response.data;
  };

  useEffect(() => {
    dispatch(getCurrentUser());
    getAllExpenses();
    if (_id) {
      getAllExpense(_id);
      dispatch(fetchExpenses(_id));
    }
  }, [dispatch, _id]);

  console.log("Expense Data", expenseCollection, loading, error, expenses);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Expenses</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {/* {expenses.map((entry) => (
          <li key={entry.expenseId}>
            {entry.item}: {entry.quantity} x {entry.unitPrice} = {entry.total}
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default Expenses;
