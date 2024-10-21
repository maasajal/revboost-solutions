
const TaxTable = () => {
    return (
        <div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h2 className="text-2xl font-bold mb-4">Tax Data Table</h2>
                <div className="overflow-x-auto min-w-full max-w-32">
                    <table className="  max-w-full overflow-scroll table-auto text-sm md:text-base w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Date</th>
                                <th className="px-4 py-2">Issue</th>
                                <th className="px-4 py-2">Income</th>
                                <th className="px-4 py-2">(%)</th>
                                <th className="px-4 py-2">Status</th>
                                <th className="px-4 py-2">Final income</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2">2024/10/31</td>
                                <td className="border px-4 py-2">System Architect</td>
                                <td className="border px-4 py-2">1752000</td>
                                <td className="border px-4 py-2">15%</td>
                                <td className="border px-4 py-2 text-primary">pending</td>
                                <td className="border px-4 py-2">----</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">2024/09/31</td>
                                <td className="border px-4 py-2">System Architect</td>
                                <td className="border px-4 py-2">1300000</td>
                                <td className="border px-4 py-2">15%</td>
                                <td className="border px-4 py-2 text-green-500">Clear</td>
                                <td className="border px-4 py-2">1131000</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default TaxTable;