import { useEffect } from "react";
import { getCurrentUser } from "../../../app/api/currentUserAPI";
import { fetchIncomes } from "../../../app/features/companyIncome/incomesSlice";
import User from "../../../app/features/users/UserType";
import { useAppDispatch } from "../../../app/hooks/useAppDispatch";
import { useAppSelector } from "../../../app/hooks/useAppSelector";
import { RootState } from "../../../app/store/store";
import { useDate, useDayName } from "../../../useHook/useDate";

const VatTable = () => {
    const dispatch = useAppDispatch();
    const date = useDate;
    const dayName = useDayName;
    const { incomeEntries, loading } = useAppSelector((state: RootState) => state.allIncome);
    const {
        _id: userId,
    } = useAppSelector((state: RootState) => state.currentUser.user) as User;
    useEffect(() => {
        dispatch(getCurrentUser());
        if (userId) {
            dispatch(fetchIncomes(userId));
        }
    }, [dispatch, userId]);
    if (loading) {
        return <>Loading</>
    }
    return (
        <div className="w-full">
            <div className="p-4 mx-auto dark:text-gray-800">
                <h2 className="mb-4 text-lg font-semibold leading-tight md:text-xl">Invoices</h2>

                <div className="overflow-x-auto min-w-full max-w-32">
                    <table className="  max-w-full overflow-scroll table-auto text-sm md:text-base w-full ">
                        <thead>
                            <tr className="text-left">
                                <th className="p-2 md:p-3">Date</th>
                                <th className="p-2 md:p-3">Product</th>
                                <th className="p-2 md:p-3 text-right">Vat</th>
                                <th className="p-2 md:p-3 text-right">Price</th>
                                <th className="p-2 md:p-3 text-right">Final Price</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {incomeEntries.length && incomeEntries.map((item, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
                                >
                                    <td className="p-2 md:p-3">
                                        <p>{date(item.date)}</p>
                                        {dayName(item.date)}
                                    </td>
                                    <td className="p-2 md:p-3">
                                        <p>{item.source}</p>
                                    </td>
                                    <td className="p-2 md:p-3">
                                        <p>15%</p>
                                    </td>
                                    <td className="p-2 md:p-3 text-right">
                                        <p>{item.amount}</p>
                                    </td>
                                    <td className="p-2 md:p-3 text-right">
                                        <span className="px-2 py-1 text-sm font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                                            {"item.vat"}
                                        </span>
                                    </td>
                                    <td className="p-2 md:p-3 text-right">
                                        <span className="px-2 py-1 text-sm font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                                            Pending
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
