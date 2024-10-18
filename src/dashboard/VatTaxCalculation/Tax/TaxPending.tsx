
import { TbCurrencyTaka } from "react-icons/tb";
const TaxPending = () => {
    return (
        <div>
            {/* <div className=" bg-gradient-to-tr from-lime-600 via-emerald-600 to-teal-800"> */}
<div > 
                <div className="flex flex-wrap gap-4 justify-center bg-gradient-to-tr from-sectionBgColor via-logoMainColor to-secondary max-w-2xl mx-auto py-10 rounded-2xl">

                    <div
                        className="flex flex-col gap-2 h-40 text-white rounded-xl shadow-md p-6 max-w-[240px] bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg">
                        <h5 className="">2024/10/31</h5>
                        <hr />
                        <h2 className=" tracking-tight flex items-center"><TbCurrencyTaka />1752000</h2>
                        <hr />
                        <div className="font-normal">pending</div>
                    </div>
                 

                   

                </div>

            </div>
        </div>
    );
};

export default TaxPending;