import { NavLink } from "react-router-dom";
const VatTaxNav = () => {
  return (
    <div className="flex gap-4 justify-center">
      <NavLink
        to="/dashboard/vat"
        end
        className={({ isActive }) => (isActive ? "active" : "in-active")}
      >
        <span className="flex items-center gap-1"> VAT</span>
      </NavLink>
      <NavLink
        to="/dashboard/vat/tax"
        className={({ isActive }) => (isActive ? "active" : "in-active")}
      >
        <span className="flex items-center gap-1"> TAX</span>
      </NavLink>
    </div>
  );
};

export default VatTaxNav;
