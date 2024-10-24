import { useEffect, useState } from "react";
import useAxiosSecure from "../../../app/hooks/useAxiosSecure";
interface TaxStatus {
    month: string;        // e.g., "October 2024"
    totalIncome: number;  // e.g., 5242748
    vat_status: string;   // e.g., "pending"
    tax_rate: number;     // e.g., 25
    tax_amount: number;   // e.g., 560687
}
const TaxTable = () => {
    const [tax, setTax] = useState<TaxStatus[]>([]);
    const [loading, setLoading] = useState<boolean>(false); 
    const axiosSecure = useAxiosSecure()

    const getTaxData = async () => {
        try {
            setLoading(true)
            const res = await axiosSecure.post(`/incomes/tax-status`, { name: "rajiul" })
            setTax(res.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getTaxData()
    }, [])

    if (loading) return <>Data Fetching</>
    if (!tax.length) return <>you should add your income data</>


    return (
        <div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h2 className="text-2xl font-bold mb-4">Tax Data Table</h2>
                <div className="overflow-x-auto min-w-full max-w-32">
                    <table className="  max-w-full overflow-scroll table-auto text-sm md:text-base w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Date</th>
                                <th className="px-4 py-2">Solid Income</th>
                                <th className="px-4 py-2">(%)</th>
                                <th className="px-4 py-2">Tax amount</th>
                                <th className="px-4 py-2">Vat Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tax.map(income => {
                                    return <tr>
                                        <td className="border px-4 py-2"> <p>{income.month}</p></td>
                                        <td className={`${income.vat_status === "pending" ? "text-primary" : "text-green-600"} border px-4 py-2`}>
                                            {income.totalIncome}
                                        </td>
                                        <td className="border px-4 py-2">{income.tax_rate}%</td>
                                        <td className="border px-4 py-2">{<p>${income.tax_amount}</p>}</td>
                                        <td className="border px-4 py-2">{income.vat_status}</td>
                                    </tr>
                                })}



                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default TaxTable;