import SectionTitle from "../../../components/SectionTitle";
import business from "../../../assets/sectors/image 5.png";
import startup from "../../../assets/sectors/image 6.png";
import consultancy from "../../../assets/sectors/image 7.png";

const Sectors = () => {
  return (
    <div className="container mx-auto px-5">
      <SectionTitle
        title="Tailor your business with us"
        intro="Sectors"
        content="Checkout all sectors"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={business} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title pt-5">Small Business</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 ">
            <img src={startup} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Startup</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={consultancy} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Consultancy House</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectors;
