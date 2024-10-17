
import React, { useState } from "react";

interface YearMonthSelectorProps {
    years: number[];
}

const VatFilter: React.FC<YearMonthSelectorProps> = ({ years }) => {
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

    return (
        <div className="flex flex-col gap-4 md:flex-row md:items-center my-12">
            {/* Year Dropdown */}
            <div className="w-full md:w-1/3">
                <label htmlFor="year" className="block text-gray-700 text-sm font-bold mb-2">
                    Year:
                </label>
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
            <div className="w-full md:w-1/3">
                <label htmlFor="month" className="block text-gray-700 text-sm font-bold mb-2">
                    Month:
                </label>
                <select
                    id="month"
                    value={selectedMonth || ""}
                    onChange={handleMonthChange}
                    disabled={!selectedYear}
                    className={`w-full p-2 border border-gray-300 rounded-md ${!selectedYear ? "bg-gray-100 cursor-not-allowed" : ""}`}
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

            {/* Display selected year and month */}
            <div className="w-full md:w-1/3 text-gray-700 text-sm mt-4 md:mt-0">
                <h5>
                    Selected Year: {selectedYear ? selectedYear : "None"}, Month:{" "}
                    {selectedMonth ? selectedMonth : "None"}
                </h5>
            </div>
        </div>
    );
};

export default VatFilter;
