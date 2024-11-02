import useAxiosSecure from "../../../app/hooks/useAxiosSecure";
import { useDate, useDayName } from "../../../useHook/useDate";
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
interface Income {
  incomes: DataResponse;
  setRefetch: React.Dispatch<React.SetStateAction<boolean>>;
  refetch: boolean;
}
const VatTable: React.FC<Income> = ({ incomes, setRefetch, refetch }) => {
  const userId = incomes._id;
  const date = useDate;
  const dayName = useDayName;
  const axiosSecure = useAxiosSecure();

  const handleVatAndStatus = async (productId: string) => {
    try {
      await axiosSecure.post(`/incomes/vat-status`, { productId, userId });
      setRefetch(!refetch);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full" data-aos="zoom-in-down">
      <div className="p-4 mx-auto">
        <h2 className="mb-4 text-lg font-semibold leading-tight md:text-xl">
          Invoices
        </h2>

        <div className="overflow-x-auto min-w-full max-w-32">
          <table className="max-w-full overflow-scroll table-auto text-sm md:text-base w-full">
            <thead>
              <tr className="bg-lightColor">
                <th className="p-2 md:p-3">Date</th>
                <th className="p-2 md:p-3">Product</th>
                <th className="p-2 md:p-3 text-right">Vat</th>
                <th className="p-2 md:p-3 text-right">Price</th>
                <th className="p-2 md:p-3 text-right">Final Price</th>
                <th className="p-2 md:p-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="">
              {incomes?.incomeEntries.length
                ? incomes.incomeEntries.map((item, index) => {
                    return (
                      <tr
                        key={index}
                        className="border-b border-opacity-20 dark:border-gray-300 hover:bg-gray-50 hover:text-black"
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
                          <span className="px-2 py-1 text-sm font-semibold rounded-md dark:bg-lightColor dark:text-gray-50">
                            {item?.vat_amount ? item.vat_amount : "NotYet"}
                          </span>
                        </td>
                        <td className="p-2 md:p-3 text-right">
                          <button
                            disabled={item.vat_status !== "pending"}
                            onClick={() => handleVatAndStatus(item.incomeId)}
                            className={`${item.vat_status === "pending" ? "bg-red-500" : "bg-midColor"} text-white p-2 text-sm font-semibold rounded-md`}
                          >
                            {item.vat_status}
                          </button>
                        </td>
                      </tr>
                    );
                  })
                : ""}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VatTable;
