import bca from "../../../assets/companies-logo/bca-bank-central-asia.svg";
import deloitte from "../../../assets/companies-logo/deloitte-1.svg";
import ibm from "../../../assets/companies-logo/ibm.svg";
import fox from "../../../assets/companies-logo/fox-3.svg";
import microsoft from "../../../assets/companies-logo/microsoft-6.svg";
import oracle from "../../../assets/companies-logo/oracle-6.svg";
import siemens from "../../../assets/companies-logo/siemens-logo-2.svg";
import walmart from "../../../assets/companies-logo/walmart.svg";

const Banner = () => {
  return (
    <div>
      {/* banner */}
      <div>
        <section className="relative bg-bannerImg bg-repeat bg-cover w-full h-[490px] pt-16">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-evenly gap-6 lg:gap-0 h-full">
            <p className="text-white text-2xl text-center lg:text-5xl font-bold">
              Simplifying Revenue <br className="hidden lg:grid" /> Management{" "}
              <br className="grid lg:hidden" />
              for <br className="hidden lg:grid" />
              Smarter Growth.
            </p>
            <div className="*:bg-base-100 w-40 lg:*:w-56 *:h-10 lg:*:h-16 *:flex *:items-center *:justify-center *:font-medium lg:*:text-xl">
              <p className="rounded-t-lg ">Billing</p>
              <p className="">Expense</p>
              <p className="">Income</p>
              <p className="">Reporting</p>
              <p className="rounded-b-lg ">Tax</p>
            </div>
          </div>
        </section>
      </div>

      {/* companies */}
      <div className="bg-white shadow-lg p-5 rounded-2xl w-3/4 mx-auto -mt-10 relative z-10">
        <h1 className="text-2xl text-center mb-7">
          Trusted By{" "}
          <span className="text-[#FF0000CC]">Businesses and Companies</span>{" "}
          World Wide
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 space-y-7 md:space-y-0">
          <div className="flex flex-col items-center">
            <img src={bca} className="w-1/2 mb-5" alt="" />
            <img src={deloitte} className="w-1/2" alt="" />
          </div>
          <div className="flex flex-col items-center">
            <img src={ibm} className="w-1/4 mb-5" alt="" />
            <img src={fox} className="w-1/4" alt="" />
          </div>
          <div className="flex flex-col items-center">
            <img src={microsoft} className="w-1/2 mb-5" alt="" />
            <img src={oracle} className="w-1/2" alt="" />
          </div>
          <div className="flex flex-col items-center">
            <img src={siemens} className="w-1/2 mb-5" alt="" />
            <img src={walmart} className="w-1/2" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
