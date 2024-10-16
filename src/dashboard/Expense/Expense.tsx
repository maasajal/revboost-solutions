import axios from "axios";
import { useState } from "react";
import {
  ADDRESS_END_POINT,
  EXPENSE_END_POINT,
} from "../../components/utils/constant";
import toast from "react-hot-toast";

const Expense = () => {
  const [address, setAddress] = useState({
    companyName: "",
    create: "",
  });

  const [expense, setExpense] = useState({
    no: "",
    item: "",
    quantity: "",
    unitPrice: "",
    total: "",
  });
  console.log(expense);
  const changeAddressHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const submitAddressHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(address);
    try {
      const res = await axios.post(
        `${ADDRESS_END_POINT}/expenseAddress`,
        address,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const changeExpenseHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const submitExpenseHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(expense);
    try {
      const res = await axios.post(`${EXPENSE_END_POINT}/create`, expense, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error: unknown) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto p-5 space-y-10">
      <h1 className="text-center">Add your Expenses</h1>
      <form
        onSubmit={submitAddressHandler}
        className="card-body grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-center shadow-lg rounded-xl"
      >
        <div className="form-control">
          <label className="label">Your Company Name</label>
          <input
            type="text"
            className="input input-bordered"
            name="companyName"
            value={address.companyName}
            onChange={changeAddressHandler}
          />
        </div>
        <div className="form-control">
          <label className="label">Creation Month</label>
          <input
            type="text"
            className="input input-bordered"
            name="create"
            value={address.create}
            onChange={changeAddressHandler}
          />
        </div>
        <div className="form-control">
          <label className="label">Action</label>
          <button
            type="submit"
            className="btn bg-btnBgColor text-white hover:bg-btnBgHoverColor"
          >
            Add
          </button>
        </div>
      </form>
      <div className="divider"></div>
      <form
        onSubmit={submitExpenseHandler}
        className="card-body grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5 items-center shadow-lg rounded-xl"
      >
        <div className="form-control">
          <h5>No</h5>
          <input
            type="text"
            className="input input-bordered mt-3"
            name="no"
            value={expense.no}
            onChange={changeExpenseHandler}
          />
        </div>
        <div className="form-control">
          <h5>Item</h5>
          <input
            type="text"
            className="input input-bordered mt-3"
            name="item"
            value={expense.item}
            onChange={changeExpenseHandler}
          />
        </div>
        <div className="form-control">
          <h5>Quantity</h5>
          <input
            type="text"
            className="input input-bordered mt-3"
            name="quantity"
            value={expense.quantity}
            onChange={changeExpenseHandler}
          />
        </div>
        <div className="form-control">
          <h5>Unit Price</h5>
          <input
            type="text"
            className="input input-bordered mt-3"
            name="unitPrice"
            value={expense.unitPrice}
            onChange={changeExpenseHandler}
          />
        </div>

        <div className="form-control">
          <h5>Action</h5>
          <button
            type="submit"
            className="btn bg-btnBgColor text-white hover:bg-btnBgHoverColor mt-3"
          >
            Add
          </button>
        </div>
      </form>
      <div className="divider"></div>
      <section className="w-full py-5 md:mt-10 bg-gray-400 drop-shadow-md rounded-xl">
        <h1 className="text-center mt-5 md:mt-10">Monthly Expense Statement</h1>
        <h4 className="text-center mt-5">Creation month</h4>
        <p className="ml-11 lg:ml-20 ">Company Name</p>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Item</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover"></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Expense;
