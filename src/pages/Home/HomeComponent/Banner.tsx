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
      {/* red colored banner */}
      <div className="hero bg-[#FF0000CC] min-h-screen">
        <div className="hero-content flex-col lg:flex-row justify-between w-3/4">
          <h1 className="text-5xl font-bold text-white">
            Your Personal <br></br> Billing Operator
          </h1>
          <div>
            <div className="bg-white rounded-3xl">
              <div className="py-10 px-32">
                <ul className="text-center font-medium space-y-3">
                  <li>Billing</li>
                  <li>Expense</li>
                  <li>Income</li>
                  <li>Reporting</li>
                  <li>Tax</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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
