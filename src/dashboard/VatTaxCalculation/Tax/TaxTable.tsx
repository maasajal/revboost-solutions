import { Button, Tooltip } from "@mui/material";
import { useEffect } from "react";
import { getCurrentUser } from "../../../app/api/currentUserAPI";
import { fetchIncomes } from "../../../app/features/companyIncome/incomesSlice";
import User from "../../../app/features/users/UserType";
import { useAppDispatch } from "../../../app/hooks/useAppDispatch";
import { useAppSelector } from "../../../app/hooks/useAppSelector";
import { RootState } from "../../../app/store/store";
import { useDate } from "../../../useHook/useDate";

const TaxTable = () => {
    const dispatch = useAppDispatch();
    const date = useDate;
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
                            {
                                incomeEntries.length ? incomeEntries.map(income => {
                                    return <tr>
                                        <td className="border px-4 py-2"> <p>{date(income.date)}</p></td>
                                        <td className="border px-4 py-2">{<p>{income.source}</p>}</td>
                                        <td className="border px-4 py-2">{income.amount}</td>
                                        <td className="border px-4 py-2 ">5%</td>
                                        <td className="border px-4 py-2 text-primary cursor-pointer ">

                                            <Tooltip title="If you complete your tax then click" arrow>
                                                <Button>Pending</Button>
                                            </Tooltip>
                                        </td>
                                        <td className="border px-4 py-2">----</td>
                                    </tr>
                                }) : ""
                            }



                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default TaxTable;