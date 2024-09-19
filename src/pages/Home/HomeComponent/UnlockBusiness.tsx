import SectionTitle from "../../../components/SectionTitle";

interface UnlockBusinessItem {
  offerName: string;
  image: string;
}

const UnlockBusiness = () => {
  const unlockBusiness: UnlockBusinessItem[] = [
    {
      offerName: "Income Tracking",
      image: "https://static2.bigstockphoto.com/7/0/1/large1500/107546081.jpg",
    },
    {
      offerName: "Expense Tracking",
      image: "https://static2.bigstockphoto.com/7/0/1/large1500/107546081.jpg",
    },
    {
      offerName: "Financial Reporting",
      image: "https://static2.bigstockphoto.com/7/0/1/large1500/107546081.jpg",
    },
    {
      offerName: "Charts & Graph",
      image: "https://static2.bigstockphoto.com/7/0/1/large1500/107546081.jpg",
    },
    {
      offerName: "Role based Control",
      image: "https://static2.bigstockphoto.com/7/0/1/large1500/107546081.jpg",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto">
      <SectionTitle
        title="Unlock your business with us"
        intro="Why choose us"
        content="Check out what are we offering"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {unlockBusiness.map((item, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.offerName}</h2>
            </div>
            <figure className="p-10">
              <img
                src={item.image}
                alt={item.offerName}
                className="rounded-xl"
              />
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UnlockBusiness;
