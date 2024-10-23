import { AxiosResponse } from "axios";
import { useState } from "react";
import User from "../../../app/features/users/UserType";
import { useAppSelector } from "../../../app/hooks/useAppSelector";
import useAxiosSecure from "../../../app/hooks/useAxiosSecure";
import { RootState } from "../../../app/store/store";
import VatFilter from "./VatFilter";
import VatTable from "./VatTable";
interface IncomeEntry {
    incomeId: string;
    amount: number;
    source: string;
    date: string;
    vat_status: string;
    tax_status: string;
    createdAt: string;
    updatedAt: string;
    vat_amount: number | null;

    _id: string;
}

interface DataResponse {
    _id: string;
    userId: string;
    userEmail: string;
    createdAt: string;
    updatedAt: string;
    incomeEntries: IncomeEntry[];
    __v: number;
}
const Vat = () => {
    const { _id: userId } = useAppSelector((state: RootState) => state.currentUser.user) as User;

    const axiosSecure = useAxiosSecure()
    const [incomes, setIncomes] = useState<DataResponse | null>(null);
    const [loading, setLoading] = useState(false)
    const [refetch, setRefetch] = useState(false)

    const years = [2020, 2021, 2022, 2023, 2024];
    const fetchIncomesData = async (selectedYear: number | null, selectedMonth: string | null): Promise<void> => {
        setLoading(true)
        try {
            const response: AxiosResponse<DataResponse> = await axiosSecure.post(`/incomes/filter`, { selectedYear, selectedMonth, userId });
            if (response.data) {
                setIncomes(response.data);
                console.log(response)
                setLoading(false)
            } else {
                setIncomes(null);
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <VatFilter years={years} fetchIncomesData={fetchIncomesData} loading={loading} refetch={refetch} />
            {incomes ? <VatTable incomes={incomes} refetch={refetch} setRefetch={setRefetch} /> : ""}
        </div>
    );
};

export default Vat;

