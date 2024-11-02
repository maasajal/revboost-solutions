import {
  Controller,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store/store";
import {
  createInvoice,
  fetchIndivitualInvoices,
  fetchInvoices,
  InvoiceData,
} from "../../../app/features/companyIncome/invoiceSlice";
import { useEffect } from "react";
import { getCurrentUser } from "../../../app/api/currentUserAPI";
import { useAppSelector } from "../../../app/hooks/useAppSelector";
import User from "../../../app/features/users/UserType";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Helmet } from "react-helmet";
import OCRFeature from "./OCRFeature";
import SectionTitle from "../../../components/SectionTitle";
import RevButton from "../../../components/RevButton";

// type InvoiceData = {
//   companyEmail: string;
//   customerName: string;
//   companyName: string;
//   invoiceNumber: string;
//   date: string;
//   invoiceDueDate: string;
//   customerAddress: string;
//   items: {
//     no: number;
//     item: string;
//     quantity: number;
//     unitPrice: number;
//     totalAmount: number;
//   }[];
// };

// Get Date
function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}

const Invoice = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Get current user data
  const user = useAppSelector(
    (state: RootState) => state.currentUser.user
  ) as User;

  const { _id: userId, email: userEmail } = useAppSelector(
    (state) => state.currentUser.user
  ) as User;

  useEffect(() => {
    dispatch(getCurrentUser());
    if (user?._id) {
      dispatch(fetchIndivitualInvoices(user._id));
      dispatch(fetchInvoices());
    }
  }, [dispatch, user._id]);

  // // for user
  // useEffect(() => {
  //   dispatch(fetchInvoices());

  // }, [dispatch]);

  // const [currentDate, setCurrentDate] = useState(getDate());

  // Selectors
  const { loading, error, invoices } = useSelector(
    (state: RootState) => state.invoices
  );
  console.log(loading, error, invoices);

  // const [currentDate, setCurrentDate] = useState(getDate());

  // Initialize React Hook Form
  const { register, control, handleSubmit } = useForm<InvoiceData>({
    defaultValues: {
      companyEmail: "",
      customerName: "",
      companyName: "",
      invoiceNumber: "",
      invoiceDueDate: "",
      date: "",
      customerAddress: "",
      items: [{ no: 1, item: "", quantity: 0, unitPrice: 0, totalAmount: 0 }],
    },
  });

  // UseFieldArray for dynamic items
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  // Handle form submission
  const onSubmit: SubmitHandler<InvoiceData> = async (data) => {
    console.log(data);

    if (!userId || !userEmail) {
      console.error("User ID or email is missing");
      return;
    }

    // // Calculate totalAmount for each item
    // const updatedItems: Item[] = data.items.map((item) => ({
    //   ...item,
    //   totalAmount: item.quantity * item.unitPrice,
    // }));

    const invoiceData: InvoiceData = { ...data };
    const savedInvoice = await dispatch(createInvoice(invoiceData));

    // Dispatch the createInvoice thunk
    await dispatch(createInvoice(invoiceData));
    if (createInvoice.fulfilled.match(savedInvoice)) {
      dispatch(fetchIndivitualInvoices(userId));
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Invoicing & Billing - RevBoost Solutions</title>
      </Helmet>
      <section className="container mx-auto space-y-10 min-w-full max-w-32">
        <SectionTitle
          title="Company Invoice"
          intro="Invoice"
          content="Generate your invoice by uploading an image!"
        />
        {/* pdf reader */}
        <OCRFeature></OCRFeature>
        <div data-aos="zoom-in-down">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 shadow-lg px-4 lg:px-10 py-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-4">
                <div className="shadow-2xl rounded">
                  <label className="text-sm">Company Email</label>
                  <input
                    {...register("companyEmail", { required: true })}
                    id="companyEmail"
                    placeholder="Your company @email"
                    className="w-full p-3 rounded  focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
                  />
                </div>
                <div className="shadow-2xl rounded">
                  <label className="text-sm">Customer Name</label>
                  <input
                    {...register("customerName", { required: true })}
                    id="customerName"
                    placeholder="Customer Name"
                    className="w-full p-3 rounded  focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
                  />
                </div>
                <div className="shadow-2xl rounded">
                  <label className="text-sm">Your Company Name</label>
                  <input
                    {...register("companyName", { required: true })}
                    id="companyName"
                    type="text"
                    placeholder="Company name"
                    className="w-full p-3 rounded focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="shadow-2xl rounded">
                  <label className="text-sm">Invoice Number</label>
                  <input
                    {...register("invoiceNumber", { required: true })}
                    id="invoiceNumber"
                    type="number"
                    placeholder="Invoice maunally"
                    className="w-full p-3 rounded  focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
                  />
                </div>
                <div className="shadow-2xl rounded">
                  <label className="text-sm">Invoice Creation Date</label>
                  <input
                    {...register("date")}
                    id="invoiceCreationDate"
                    type="date"
                    className="w-full p-3 rounded  focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="shadow-2xl rounded">
                  <label className="text-sm">Due Date</label>
                  <input
                    {...register("invoiceDueDate", { required: true })}
                    id="InvoiceDueDate"
                    type="text"
                    placeholder={getDate()}
                    className="w-full p-3 rounded  focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
                  />
                </div>
                <div className="shadow-2xl">
                  <label className="text-sm">Customer Address</label>
                  <input
                    {...register("customerAddress", { required: true })}
                    id="customerAddress"
                    placeholder="Your address"
                    type="text"
                    className="w-full p-3 rounded focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
                  />
                </div>
              </div>
              {/* testing */}
            </div>
            <h3 className="py-5">Items:</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                {fields.map((item, index) => (
                  <div key={item.id} className="space-y-2 shadow-2xl">
                    <label>No</label>
                    <Controller
                      name={`items.${index}.no`}
                      control={control}
                      render={({ field }) => (
                        <input
                          type="number"
                          className="w-full p-3 rounded focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
                          {...field}
                        />
                      )}
                    />
                    <label>Item</label>
                    <input
                      {...register(`items.${index}.item`)}
                      className="w-full p-3 rounded focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
                      required
                    />
                    <label>Quantity</label>
                    <input
                      type="number"
                      {...register(`items.${index}.quantity`)}
                      className="w-full p-3 rounded  focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
                      required
                    />
                    <label>Unit Price</label>
                    <input
                      type="number"
                      {...register(`items.${index}.unitPrice`)}
                      className="w-full p-3 rounded  focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
                      required
                    />
                    <label>Total Amount</label>
                    <Controller
                      name={`items.${index}.totalAmount`}
                      control={control}
                      render={({ field }) => (
                        <input
                          type="number"
                          className="w-full p-3 rounded  focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
                          // defaultValue={item.quantity * item.unitPrice}
                          // placeholder={ `${item.quantity * item.unitPrice}`}
                          {...field}
                          readOnly
                        />
                      )}
                    />
                    <RevButton
                      name="Remove Item"
                      className="w-full rounded focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 "
                      type="button"
                      onClick={() => remove(index)}
                    />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-3 shadow-2xl">
                <button
                  className="w-full btn rounded  focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
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
                  Add Item (optional)
                </button>
                <RevButton
                  name={loading ? "Saving..." : "Save Invoice"}
                  type="submit"
                  className={
                    loading === true
                      ? `animate-bounce w-full btn text-sm font-bold tracking-wide uppercase rounded dark:text-gray-50`
                      : `w-full btn text-sm font-bold tracking-wide uppercase rounded`
                  }
                />
                {/* Error Message */}
                {/* {error && <p className="text-red-400">{error}</p>} */}
              </div>
            </div>
            {/* Error Message */}
          </form>
        </div>
        {/* Add Item */}

        {/* Table */}
        <div className="space-y-6 border-2 px-4 lg:px-10 py-12 shadow-2xl rounded-lg">
          <h2 className="mb-4 text-center text-2xl font-bold leading-tight">
            Your Invoice
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
          <TableContainer
            component={Paper}
            className="overflow-x-auto min-w-full max-w-32"
          >
            <Table>
              <TableHead className="bg-blue-300 border-b border-opacity-20">
                <TableRow>
                  <TableCell>
                    <strong>#invoice</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Client</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Issued</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Due</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Address</strong>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {invoices && invoices.length > 0 ? (
                  invoices.map((invoice) => (
                    <>
                      <TableRow key={invoice?.invoiceNumber}>
                        <TableCell>{invoice?.invoiceNumber}</TableCell>
                        <TableCell>{invoice?.companyName}</TableCell>
                        <TableCell>{invoice?.date}</TableCell>
                        <TableCell>{invoice?.invoiceDueDate}</TableCell>
                        <TableCell>$ {invoice?.customerAddress}</TableCell>
                      </TableRow>
                    </>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} align="center">
                      No invoice found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>

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
                <thead className="dark:bg-red-400"></thead>
                <tbody>
                  {/* <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
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
                  </tr> */}

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

                      <h5>$</h5>
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

                      <h5>$</h5>
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
                    <td className="p-3 text-right animate-bounce">
                      {/* Write Total Below  */}

                      <h4>$</h4>
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
