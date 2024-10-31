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
    <div data-aos="fade-down">
      {/* red colored banner */}
      <div>
        <section className="relative bg-bannerImg bg-repeat bg-cover bg-center py-28 w-full">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-evenly gap-10 container mx-auto px-4">
            {/* <p className="text-white text-5xl font-bold">Simplifying Revenue <br /> Management for <br />Smarter
          Growth.</p> */}
            <h1 className="text-white leading-normal max-w-xl text-center">
              Simplifying Revenue Management for Smarter Growth.
            </h1>
            <div className="">
              <p className="bg-base-100 w-56 rounded-t-lg text-center h-16 items-center flex justify-center font-medium text-xl ">
                Billing
              </p>
              <p className="bg-base-100 w-56 text-center h-16 items-center flex justify-center font-medium text-xl ">
                Expense
              </p>
              <p className="bg-base-100 w-56 text-center h-16 items-center flex justify-center font-medium text-xl ">
                Income
              </p>
              <p className="bg-base-100 w-56 text-center h-16 items-center flex justify-center font-medium text-xl ">
                Reporting
              </p>
              <p className="bg-base-100 w-56 rounded-b-lg text-center h-16 items-center flex justify-center font-medium text-xl ">
                Tax
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* companies */}
      <div className="bg-white shadow-lg p-5 rounded-2xl w-3/4 mx-auto mt-10 md:-mt-10 relative z-10" data-aos="fade-down" data-aos-duration="2000">
        <h1 className="text-center mb-7 leading-normal">
          Trusted By{" "}
          <span className="text-primary">Businesses and Companies</span> World
          Wide
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
