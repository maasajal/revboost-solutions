import React from "react";


const Expense = () => {
    return (
        <div className="font-roboto">
            <h1>Expense</h1>
            <div className="mt-6">
                <form >
                    <section className="flex flex-col  lg:flex-row gap-3 md:gap-5  lg:gap-20">
                        <div className="flex flex-col md:flex-row items-start md:items-center">
                            <label>Your Company Name</label>
                            <input type="text" className="border border-black w-full md:w-[250px] h-10 mt-3 md:mt-0 ml-0 md:ml-5 " />
                        </div>
                        <div className="flex flex-col md:flex-row items-start md:items-center">
                            <label>Your Company Name</label>
                            <input type="text" className="border border-black w-full md:w-[250px] h-10 mt-3 md:mt-0 ml-0 md:ml-5 " />
                            <button className="ml-8 hidden lg:block bg-[#ff0000] bg-opacity-70 py-2 px-5 rounded-md text-white">Add</button>
                        </div>
                        <button className="w-20 block lg:hidden bg-[#ff0000] bg-opacity-70 py-2 px-5 rounded-md text-white">Add</button>
                    </section>


                    <section>
                        this is a new secio
                    </section>


                </form>


            </div>
        </div>
    );
};

export default Expense;