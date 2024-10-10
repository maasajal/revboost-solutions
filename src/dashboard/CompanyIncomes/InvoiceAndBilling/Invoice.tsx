import { Controller, useFieldArray, useForm } from "react-hook-form";

// import axios from "axios";


type InvoiceData = {
  companyEmail: string;
  customerName: string;
  companyName: string;
  invoiceNumber: string;
  date: string;
  invoiceDueDate: string;
  customerAddress: string;
  items: {
    no: number;
    item: string;
    quantity: number;
    unitPrice: number;
    totalAmount: number;
  }[];
};
// Get Date
function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}

const Invoice = () => {
  // UseState for Date
  // const [currentDate, setCurrentDate] = useState(getDate());
 

  const { control, handleSubmit, register } = useForm<InvoiceData>({
    defaultValues: {
      companyEmail: "",
      customerName: "",
      companyName: "",
      invoiceNumber: "",
      date: "",
      invoiceDueDate: "",
      customerAddress: "",
      items: [{ no: 1, item: "", quantity: 0, unitPrice: 0, totalAmount: 0 }],
    },
  });

  const onSubmit = handleSubmit((data: InvoiceData) => {
    console.table(data);
    // axios
    //   .post("https://revboost-solutions.vercel.app/api/v1/invoices/create", data)
    //   .then((response) => {
    //     console.log("Invoice saved successfully:", response.data);

    //   })
    //   .catch((error) => console.error("Error saving invoice:", error));
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  return (
    <>
      <section className="container mx-auto mt-10 space-y-8">
        <h2>Company Income</h2>
        <div>
          <form onSubmit={onSubmit} className="space-y-4 shadow-lg p-4">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              <div className="space-y-4">
                <div>
                  <label className="text-sm">Company Email</label>
                  <input
                    {...register("companyEmail", { required: true })}
                    id="companyEmail"
                    placeholder="Your company @email"
                    className="w-full p-3 rounded dark:bg-gray-100 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label className="text-sm">Customer Name</label>
                  <input
                    {...register("customerName", { required: true })}
                    id="customerName"
                    placeholder="Customer Name"
                    className="w-full p-3 rounded dark:bg-gray-100 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label className="text-sm">Your Company Name</label>
                  <input
                    {...register("companyName", { required: true })}
                    id="companyName"
                    type="text"
                    className="w-full p-3 rounded dark:bg-gray-100 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm">Invoice Number</label>
                  <input
                    {...register("invoiceNumber", { required: true })}
                    id="invoiceNumber"
                    type="number"
                    placeholder=""
                    className="w-full p-3 rounded dark:bg-gray-100 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label className="text-sm">Invoice Creation Date</label>
                  <input
                    {...register("date")}
                    id="invoiceCreationDate"
                    // type="date"
                    defaultValue={getDate()}
                    placeholder={getDate()}
                    disabled
                    className="w-full p-3 rounded dark:bg-gray-100 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm">Due Date</label>
                  <input
                    {...register("invoiceDueDate", { required: true })}
                    id="InvoiceDueDate"
                    type="text"
                    placeholder=""
                    className="w-full p-3 rounded dark:bg-gray-100 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label className="text-sm">Customer Address</label>
                  <input
                    {...register("customerAddress", { required: true })}
                    id="customerAddress"
                    placeholder="Your address"
                    type="text"
                    className="w-full p-3 rounded dark:bg-gray-100 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
                  />
                </div>
              </div>
              {/* testing */}
              <h3 className="flex text-center justify-center items-center">
                Items:
              </h3>
              {fields.map((item, index) => (
                <div key={item.id} className="space-y-2">
                  <label>No</label>
                  <Controller
                    name={`items.${index}.no`}
                    control={control}
                    render={({ field }) => (
                      <input
                        type="number"
                        className="w-full p-3 rounded dark:bg-gray-100 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
                        {...field}
                      />
                    )}
                  />
                  <label>Item</label>
                  <input
                    {...register(`items.${index}.item`)}
                    className="w-full p-3 rounded dark:bg-gray-100 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
                    required
                  />
                  <label>Quantity</label>
                  <input
                    type="number"
                    {...register(`items.${index}.quantity`)}
                    className="w-full p-3 rounded dark:bg-gray-100 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
                    required
                  />
                  <label>Unit Price</label>
                  <input
                    type="number"
                    {...register(`items.${index}.unitPrice`)}
                    className="w-full p-3 rounded dark:bg-gray-100 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
                    required
                  />
                  <label>Total Amount</label>
                  <Controller
                    name={`items.${index}.totalAmount`}
                    control={control}
                    render={({ field }) => (
                      <input
                        type="number"
                        className="w-full p-3 rounded dark:bg-gray-100 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
                        defaultValue={item.quantity * item.unitPrice}
                        {...field}
                        readOnly
                      />
                    )}
                  />
                  <button
                    className="w-full mt-4 p-3 rounded  bg-red-200 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 "
                    type="button"
                    onClick={() => remove(index)}
                  >
                    Remove Item
                  </button>
                </div>
              ))}
              <div className="flex gap-2">
                <button
                  className="w-full p-3 rounded dark:bg-gray-100 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
                  type="button"
                  onClick={() =>
                    append({
                      no: fields.length + 1,
                      item: "",
                      quantity: 0,
                      unitPrice: 0,
                      totalAmount: 0,
                    })
                  }
                >
                  Add Item
                </button>
                <button
                  type="submit"
                  className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-red-400 dark:text-gray-50"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* Add Item */}

        {/* Table */}
        <div className="space-y-6 border-2 p-4 shadow-2xl rounded-lg">
          <h2 className="mb-4 text-center text-2xl font-bold leading-tight">
            Your Incomes
          </h2>
          <div className="flex justify-between">
            <div className="space-y-4">
              <div>
                <h5>From:</h5>
                <p>Company Name:</p>
              </div>
              <div>
                <h5 className="underline">Bill To:</h5>
                <p>Customer Name</p>
                <p>Customer Address</p>
              </div>
            </div>
            <div className="space-y-4">
              <p>invoice no:</p>
              <p>Invoice Creation Date:</p>
              <p className="text-red-400">Due Date:</p>
            </div>
          </div>
          <div className=" dark:text-gray-800">
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs">
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col className="w-24" />
                </colgroup>
                <thead className="dark:bg-red-400">
                  <tr className="text-left">
                    <th className="p-3">Invoice #</th>
                    <th className="p-3">Client</th>
                    <th className="p-3">Issued</th>
                    <th className="p-3">Due</th>
                    <th className="p-3 text-right">Amount</th>
                    <th className="p-3 text-right"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                    <td className="p-3">
                      <p>97412378923</p>
                    </td>
                    <td className="p-3">
                      <p>Microsoft Corporation</p>
                    </td>
                    <td className="p-3">
                      <p>14 Jan 2022</p>
                      <p className="dark:text-gray-600">Friday</p>
                    </td>
                    <td className="p-3">
                      <p>01 Feb 2022</p>
                      <p className="dark:text-gray-600">Tuesday</p>
                    </td>
                    <td className="p-3 text-right">
                      <p>$15,792</p>
                    </td>
                    <td className="p-3 text-right">
                      <span className="px-3 py-1 font-semibold rounded-md dark:bg-red-400 dark:text-gray-50">
                        <span>Delete</span>
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                    <td className="p-3">
                      <p>97412378923</p>
                    </td>
                    <td className="p-3">
                      <p>Tesla Inc.</p>
                    </td>
                    <td className="p-3">
                      <p>14 Jan 2022</p>
                      <p className="dark:text-gray-600">Friday</p>
                    </td>
                    <td className="p-3">
                      <p>01 Feb 2022</p>
                      <p className="dark:text-gray-600">Tuesday</p>
                    </td>
                    <td className="p-3 text-right">
                      <p>$275</p>
                    </td>
                    <td className="p-3 text-right">
                      <span className="px-3 py-1 font-semibold rounded-md dark:bg-red-400 dark:text-gray-50">
                        <span>Delete</span>
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                    <td className="p-3">
                      <p>97412378923</p>
                    </td>
                    <td className="p-3">
                      <p>Coca Cola co.</p>
                    </td>
                    <td className="p-3">
                      <p>14 Jan 2022</p>
                      <p className="dark:text-gray-600">Friday</p>
                    </td>
                    <td className="p-3">
                      <p>01 Feb 2022</p>
                      <p className="dark:text-gray-600">Tuesday</p>
                    </td>
                    <td className="p-3 text-right">
                      <p>$8,950,500</p>
                    </td>
                    <td className="p-3 text-right">
                      <span className="px-3 py-1 font-semibold rounded-md dark:bg-red-400 dark:text-gray-50">
                        <span>Delete</span>
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-opacity-20 dark:border-red-300 dark:bg-gray-50">
                    <td className="p-3">
                      <p>97412378923</p>
                    </td>
                    <td className="p-3">
                      <p>Nvidia Corporation</p>
                    </td>
                    <td className="p-3">
                      <p>14 Jan 2022</p>
                      <p className="dark:text-gray-600">Friday</p>
                    </td>
                    <td className="p-3">
                      <p>01 Feb 2022</p>
                      <p className="dark:text-gray-600">Tuesday</p>
                    </td>
                    <td className="p-3 text-right">
                      <p>$98,218</p>
                    </td>
                    <td className="p-3 text-right">
                      <span className="px-3 py-1 font-semibold rounded-md dark:bg-red-400 dark:text-gray-50">
                        <span>Delete</span>
                      </span>
                    </td>
                  </tr>

                  <tr className="border-b border-opacity-20">
                    <td className="p-3">
                      <p></p>
                    </td>
                    <td className="p-3">
                      <p></p>
                    </td>
                    <td className="p-3">
                      <p></p>
                      <p className="dark:text-gray-600"></p>
                    </td>
                    <td className="p-3">
                      <h5>Subtotal</h5>
                      <p className="dark:text-gray-600"></p>
                    </td>
                    <td className="p-3 text-right">
                      {/* Write Total Below  */}

                      <h5>$6000</h5>
                    </td>
                    <td className="p-3 text-right">
                      <span className="px-3 py-1 font-semibold rounded-md dark:text-gray-50">
                        <span></span>
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-opacity-20">
                    <td className="p-3">
                      <p></p>
                    </td>
                    <td className="p-3">
                      <p></p>
                    </td>
                    <td className="p-3">
                      <p></p>
                      <p className="dark:text-gray-600"></p>
                    </td>
                    <td className="p-3">
                      <h5>VAT(15%)</h5>
                      <p className="dark:text-gray-600"></p>
                    </td>
                    <td className="p-3 text-right">
                      {/* Write VAT Below  */}

                      <h5>$6000</h5>
                    </td>
                    <td className="p-3 text-right">
                      <span className="px-3 py-1 font-semibold rounded-md dark:text-gray-50">
                        <span></span>
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-red-50">
                    <td className="p-3">
                      <p></p>
                    </td>
                    <td className="p-3">
                      <p></p>
                    </td>
                    <td className="p-3">
                      <p></p>
                      <p className="dark:text-gray-600"></p>
                    </td>
                    <td className="p-3">
                      <h4>total</h4>
                      <p className="dark:text-gray-600"></p>
                    </td>
                    <td className="p-3 text-right">
                      {/* Write Total Below  */}

                      <h4>$7500</h4>
                    </td>
                    <td className="p-3 text-right">
                      <span className="px-3 py-1 font-semibold rounded-md dark:text-gray-50">
                        <span></span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Invoice;
