const Invoice = () => {
  return (
    <>
      <section className="container mx-auto mt-10">
        <h2>Invoice</h2>
        <div>
          <form className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm">
                  Customer Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder=""
                  className="w-full p-3 rounded dark:bg-gray-100"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm">
                  Your Company Name
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-3 rounded dark:bg-gray-100"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm">
                  Invoice Number
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder=""
                  className="w-full p-3 rounded dark:bg-gray-100"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm">
                 Invoice Creation Date
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-3 rounded dark:bg-gray-100"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm">
                 Due Date
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder=""
                  className="w-full p-3 rounded dark:bg-gray-100"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm">
                 Customer Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-3 rounded dark:bg-gray-100"
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Invoice;
