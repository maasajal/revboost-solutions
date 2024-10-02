
const Billing = () => {
    return (
        <>
            <form className="grid lg:grid-cols-5  grid-flow-row-dense gap-4 ">
            <div>
              <label htmlFor="name" className="text-lg font-bold">
                No
              </label>
              <input
                id="name"
                type="text"
                placeholder=""
                className="w-full p-3 rounded dark:bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="name" className="text-lg font-bold">
                Client
              </label>
              <input
                id="name"
                type="text"
                placeholder=""
                className="w-full p-3 rounded dark:bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="name" className="text-lg font-bold">
                Quantity
              </label>
              <input
                id="name"
                type="text"
                placeholder=""
                className="w-full p-3 rounded dark:bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="name" className="text-lg font-bold">
                Unit Price
              </label>
              <input
                id="name"
                type="text"
                placeholder=""
                className="w-full p-3 rounded dark:bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="name" className="text-lg font-bold">
                Total Amount
              </label>
              <input
                id="name"
                type="text"
                placeholder=""
                className="w-full p-3 rounded dark:bg-gray-100"
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-red-400 dark:text-gray-50"
            >
              Add Item
            </button>
          </form>
        </>
    );
};

export default Billing;