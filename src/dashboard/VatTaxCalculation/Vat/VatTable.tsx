const VatTable = () => {
    return (
        <div className="w-full">
            <div className="p-4 mx-auto dark:text-gray-800">
                <h2 className="mb-4 text-lg font-semibold leading-tight md:text-xl">Invoices</h2>

                <div className="overflow-x-auto min-w-full max-w-32">
                    <table className="  max-w-full overflow-scroll table-auto text-sm md:text-base w-full">
                        <thead>
                            <tr className="text-left">
                                <th className="p-2 md:p-3">Product</th>
                                <th className="p-2 md:p-3">Client</th>
                                <th className="p-2 md:p-3">Issued</th> 
                                <th className="p-2 md:p-3 text-right">Amount</th>
                                <th className="p-2 md:p-3 text-right">Vat</th>
                                <th className="p-2 md:p-3 text-right">Final Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { invoice: "97412378923", client: "Microsoft Corporation", issued: "14 Jan 2022", due: "01 Feb 2022", amount: "$15,792", vat: "200", status: "Pending" },
                                { invoice: "97412378923", client: "Nvidia Corporation", issued: "14 Jan 2022", due: "01 Feb 2022", amount: "$98,218", vat: "200", status: "Pending" },
                            ].map((item, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
                                >
                                    <td className="p-2 md:p-3">
                                        <p>{item.invoice}</p>
                                    </td>
                                    <td className="p-2 md:p-3">
                                        <p>{item.client}</p>
                                    </td>
                                    <td className="p-2 md:p-3">
                                        <p>{item.issued}</p>
                                        <p className="text-gray-600 dark:text-gray-400">Friday</p>
                                    </td>
                                    <td className="p-2 md:p-3 text-right">
                                        <p>{item.amount}</p>
                                    </td>
                                    <td className="p-2 md:p-3 text-right">
                                        <span className="px-2 py-1 text-sm font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                                            {item.vat}
                                        </span>
                                    </td>
                                    <td className="p-2 md:p-3 text-right">
                                        <span className="px-2 py-1 text-sm font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                                            {item.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default VatTable;
