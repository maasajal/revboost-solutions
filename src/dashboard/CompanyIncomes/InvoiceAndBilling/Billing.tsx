import { useForm } from "react-hook-form";

const Billing = () => {
  const {
    register,
    handleSubmit,
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <>
      <form
        onSubmit={onSubmit}
        className="grid lg:grid-cols-5  grid-flow-row-dense gap-4 "
      >
        <div>
          <label htmlFor="name" className="text-lg font-bold">
            No
          </label>
          <input
           {...register("No", { required: true })}
            id="No"
            type="number"
            placeholder=""
            className="w-full p-3 rounded dark:bg-gray-100 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
          />
        </div>
        <div>
          <label htmlFor="name" className="text-lg font-bold">
            Client
          </label>
          <input
           {...register("Client", { required: true })}
            id="Client"
            type="text"
            placeholder=""
            className="w-full p-3 rounded dark:bg-gray-100 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
          />
        </div>
        <div>
          <label htmlFor="name" className="text-lg font-bold">
            Quantity
          </label>
          <input
           {...register("Quantity", { required: true })}
            id="Quantity"
            type="number"
            placeholder=""
            className="w-full p-3 rounded dark:bg-gray-100 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
          />
        </div>
        <div>
          <label htmlFor="name" className="text-lg font-bold">
            Unit Price
          </label>
          <input
           {...register("UnitPrice", { required: true })}
            id="UnitPrice"
            type="text"
            placeholder=""
            className="w-full p-3 rounded dark:bg-gray-100 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
          />
        </div>
        <div>
          <label htmlFor="name" className="text-lg font-bold">
            Total Amount
          </label>
          <input
           {...register("TotalAmount", { required: true })}
            id="TotalAmount"
            type="text"
            placeholder=""
            className="w-full p-3 rounded dark:bg-gray-100 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
          />
        </div>
        <button
          type="submit"
          className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-red-400 dark:text-gray-50 "
        >
          Add Item
        </button>
      </form>
    </>
  );
};

export default Billing;
