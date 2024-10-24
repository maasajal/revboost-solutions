
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import User from "../../../app/features/users/UserType";
import { useAppSelector } from "../../../app/hooks/useAppSelector";
import { RootState } from "../../../app/store/store";

interface YearMonthSelectorProps {
    years: number[];
    fetchIncomesData: (year: number | null, month: string | null) => Promise<void>
    loading: boolean;
    refetch: boolean; 
}

const VatFilter: React.FC<YearMonthSelectorProps> = ({ years, fetchIncomesData, loading, refetch }) => {
    const { _id: userId } = useAppSelector((state: RootState) => state.currentUser.user) as User;
    const [selectedYear, setSelectedYear] = useState<number | null>(null);
    const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

    const months: string[] = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    // Handle year change
    const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const year = parseInt(event.target.value);
        setSelectedYear(year);
        setSelectedMonth(null); // Reset month selection when year changes
    };

    // Handle month change
    const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMonth(event.target.value);
    };
    const handleSearch = async () => {
        fetchIncomesData(selectedYear, selectedMonth)

    }
    useEffect(() => {
        fetchIncomesData(selectedYear, selectedMonth)
    }, [userId, refetch])
    if (loading) return <>Loading data </>
    return (
        <div className="flex flex-col gap-4 md:flex-row md:items-center my-12">
            {/* Year Dropdown */}
            <div className="w-full md:w-1/3">

                <select
                    id="year"
                    value={selectedYear || ""}
                    onChange={handleYearChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                >
                    <option value="" disabled>
                        Select Year
                    </option>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            {/* Month Dropdown */}
            <div className="w-full  md:w-1/3">

                <select
                    id="month"
                    value={selectedMonth || ""}
                    onChange={handleMonthChange}
                    disabled={!selectedYear}
                    className={`w-full p-2 border border-gray-300 rounded-md ${!selectedYear ? " cursor-not-allowed" : ""}`}
                >
                    <option value="" disabled>
                        Select Month
                    </option>
                    {months.map((month) => (
                        <option key={month} value={month}>
                            {month}
                        </option>
                    ))}
                </select>
            </div>

            <Button onClick={handleSearch} variant="contained">Search</Button>

        </div>
    );
};

export default VatFilter;
