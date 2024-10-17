import { Outlet } from "react-router-dom";
import vat_tax from "../../assets/vat&tax/vatTax.jpg";
import VatTaxNav from "./VatTaxNav";
 

const VatTaxCalculation = () => {
    return (
        <div>
            <div className="flex justify-center">
            <img  className="max-h-32 object-cover mb-6 md:mb-10 shadow-2xl rounded-lg p-4" src={vat_tax}alt="" />
            </div>
            <VatTaxNav />
            <Outlet />
        </div>
    );
};

export default VatTaxCalculation;