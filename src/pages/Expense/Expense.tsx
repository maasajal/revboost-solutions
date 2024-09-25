

const Expense = () => {
    return (
        <div className="font-roboto">
            <h1>Expense</h1>
            <form>
                <section className="flex flex-col space-y-5 md:space-y-0 md:flex-row  md:gap-10 lg:gap-56 mt-4 md:mt-6 lg:mt-10">
                    <div className="">
                        <label>Your Company Name</label>
                        <input
                            type="text"
                            className="input input-bordered  w-full max-w-xs  mt-3" />
                    </div>
                    <div className="relative">
                        <label>Creation Month</label>
                        <input
                            type="text"
                            className="input input-bordered   w-full max-w-xs mt-3" />


                        <button type="button" className="hidden lg:block absolute ml-96 -mt-11 bg-[#ff0000] bg-opacity-70 py-2 px-4 rounded-md text-white">Add</button>
                    </div>

                </section>
                <button type="button" className="block lg:hidden mt-5 lg:mt-0 bg-[#ff0000] bg-opacity-70 py-2 px-4 rounded-md text-white">Add</button>
            </form>



            <form>
                <section className="mt-5 md:mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-10 lg:gap-16">
                        <div>
                            <h5>No</h5>
                            <input
                                type="text"
                                className="input input-bordered   w-full max-w-xs mt-3" />
                        </div>

                        <div>
                            <h5>Item</h5>
                            <input
                                type="text"
                                className="input input-bordered   w-full max-w-xs mt-3" />
                        </div>
                        <div>
                            <h5>Quantity</h5>
                            <input
                                type="text"
                                className="input input-bordered   w-full max-w-xs mt-3" />
                        </div>
                        <div>
                            <h5>Unit Price</h5>
                            <input
                                type="text"
                                className="input input-bordered   w-full max-w-xs mt-3" />
                        </div>

                        <button type="button" className="hidden lg:block h-1/2  mt-10 bg-[#ff0000] bg-opacity-70 py-2 px-4 rounded-md text-white">Add</button>
                    </div>
                    <button type="button" className="block lg:hidden mt-5 lg:mt-0 bg-[#ff0000] bg-opacity-70 py-2 px-4 rounded-md text-white">Add</button>
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