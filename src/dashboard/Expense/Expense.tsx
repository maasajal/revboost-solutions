import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { ADDRESS_END_POINT, EXPENSE_END_POINT } from "../../components/utils/constant";


const Expense = () => {
    const [address, setAddress] = useState({
        companyName: "",
        create: ""
    });


    const [expense,setExpense] = useState({
        no: "",
        item : "",
        quantity : "",
        unitPrice : "",
        total : ""
    });

    const changeAddressHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress({ ...address, [e.target.name]: e.target.value })
    };


    const submitAddressHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(address);
        try {
            const res = await axios.post(`${ADDRESS_END_POINT}/expenseAddress`,address,{
                headers :{'Content-Type': "application/json"},
                withCredentials: true,
            })

            if(res.data.success){
                toast.success(res.data.message);
            }
            
        } catch (error){
            console.error(error);
        }
    };


    const changeExpenseHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setExpense({ ...expense, [e.target.name]: e.target.value })
    }


    const submitExpenseHandler = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(expense);
        try {
            const res = await axios.post(`${EXPENSE_END_POINT}/create`,expense,{
                headers :{'Content-Type': "application/json"},
                withCredentials: true,
            })

            if(res.data.success){
                toast.success(res.data.message);
            }
            
        } catch (error:unknown) {
            console.error(error);
            
        }
    }
    return (
        <div className="font-roboto">
            <h1>Expense</h1>
            <form onSubmit={submitAddressHandler}>
                <section className="flex flex-col space-y-5 md:space-y-0 md:flex-row  md:gap-10 lg:gap-56 mt-4 md:mt-6 lg:mt-10">
                    <div className="">
                        <label>Your Company Name</label>
                        <input
                            type="text"
                            className="input input-bordered  w-full max-w-xs  mt-3"
                            name="companyName"
                            value={address.companyName}
                            onChange={changeAddressHandler} />
                    </div>
                    <div className="relative">
                        <label>Creation Month</label>
                        <input
                            type="text"
                            className="input input-bordered  w-full max-w-xs mt-3"
                            name="create"
                            value={address.create}
                            onChange={changeAddressHandler} />
                        <button type="submit" className="hidden lg:block absolute ml-96 -mt-11 bg-[#ff0000] bg-opacity-70 py-2 px-4 rounded-md text-white">Add</button>
                    </div>

                </section>
                <button type="submit" className="block lg:hidden mt-5 lg:mt-0 bg-[#ff0000] bg-opacity-70 py-2 px-4 rounded-md text-white">Add</button>
            </form>

            <form onSubmit={submitExpenseHandler}>
                <section className="mt-5 md:mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-10 lg:gap-16">
                        <div>
                            <h5>No</h5>
                            <input
                                type="text"
                                className="input input-bordered   w-full max-w-xs mt-3"
                                name='no'
                                value={expense.no}
                                onChange={changeExpenseHandler} />
                        </div>

                        <div>
                            <h5>Item</h5>
                            <input
                                type="text"
                                className="input input-bordered   w-full max-w-xs mt-3"
                                name='item'
                                value={expense.item}
                                onChange={changeExpenseHandler} />
                        </div>
                        <div>
                            <h5>Quantity</h5>
                            <input
                                type="text"
                                className="input input-bordered   w-full max-w-xs mt-3"
                                name="quantity"
                                value={expense.quantity}
                                onChange={changeExpenseHandler} />
                        </div>
                        <div>
                            <h5>Unit Price</h5>
                            <input
                                type="text"
                                className="input input-bordered   w-full max-w-xs mt-3"
                                name="unitPrice"
                                value={expense.unitPrice}
                                onChange={changeExpenseHandler} />
                        </div>

                        <button type="submit" className="hidden lg:block h-1/2  mt-10 bg-[#ff0000] bg-opacity-70 py-2 px-4 rounded-md text-white">Add</button>
                    </div>
                    <button type="submit" className="block lg:hidden mt-5 lg:mt-0 bg-[#ff0000] bg-opacity-70 py-2 px-4 rounded-md text-white">Add</button>
                </section>
            </form>


            <section className="w-full  border-2 border-black mt-5 md:mt-10 bg-white drop-shadow-md">
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
                            <tr className="hover">
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                                <td>Purple</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </section>


        </div>
    );
};

export default Expense;