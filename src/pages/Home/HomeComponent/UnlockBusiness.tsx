import SectionTitle from "../../../components/SectionTitle";
import graphs from "../../../assets/features/Rectangle.png";
import financial from "../../../assets/features/financial-kpis 1.png";
import expense from "../../../assets/features/image 1.png";
import income from "../../../assets/features/image 2.png";
import role from "../../../assets/features/image 3.png";

interface UnlockBusinessItem {
  offerName: string;
  image: string;
}

const UnlockBusiness = () => {
  const unlockBusiness: UnlockBusinessItem[] = [
    {
      offerName: "Income Tracking",
      image: income,
    },
    {
      offerName: "Expense Tracking",
      image: expense,
    },
    {
      offerName: "Financial Reporting",
      image: financial,
    },
    {
      offerName: "Charts & Graph",
      image: graphs,
    },
    {
      offerName: "Role based Control",
      image: role,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-5">
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
            <figure className="pb-10">
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
