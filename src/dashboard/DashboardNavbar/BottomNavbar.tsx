import { NavLink } from "react-router-dom";
import { GiExpense, GiTreeGrowth } from "react-icons/gi";
import { PiInvoiceBold } from "react-icons/pi";
import { MdDashboard } from "react-icons/md";

const BottomNavbar = () => {
  return (
    <div className="btm-nav">
      <NavLink
        to={"/dashboard/company-incomes"}
        className={({ isActive }) =>
          isActive
            ? "bg-footerBGColor text-white border-t-4 border-secondary font-semibold"
            : "font-semibold"
        }
      >
        <PiInvoiceBold />
        <span className="btm-nav-label">Incomes</span>
      </NavLink>
      <NavLink
        to={"/dashboard/company-expenses"}
        className={({ isActive }) =>
          isActive
            ? "bg-footerBGColor text-white border-t-4 border-secondary font-semibold"
            : "font-semibold"
        }
      >
        <GiExpense />
        <span className="btm-nav-label">Expenses</span>
      </NavLink>
      <NavLink
        to={"/dashboard/revenue-growth"}
        className={({ isActive }) =>
          isActive
            ? "bg-footerBGColor text-white border-t-4 border-secondary font-semibold"
            : "font-semibold"
        }
      >
        <GiTreeGrowth />
        <small className="btm-nav-label">Revenue Growth</small>
      </NavLink>

      <NavLink
        to={"/dashboard"}
        className={({ isActive }) =>
          isActive
            ? "bg-footerBGColor text-white border-t-4 border-secondary font-semibold"
            : "font-semibold"
        }
      >
        <MdDashboard />
        <small className="btm-nav-label text-xs text-center">Dashboard</small>
      </NavLink>
    </div>
  );
};

export default BottomNavbar;
