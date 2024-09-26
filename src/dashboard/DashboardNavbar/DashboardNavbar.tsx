import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaHome } from "react-icons/fa";
import { GiExpense, GiTreeGrowth } from "react-icons/gi";
import { PiInvoiceBold } from "react-icons/pi";

const DashboardNavbar = () => {
  const navLinks = [
    {
      navName: "Company Profile",
      path: "/dashboard/profile",
      icon: <FaHome className="text-lg" />,
    },
    {
      navName: "Company Incomes",
      path: "/dashboard/company-incomes",
      icon: <PiInvoiceBold className="text-lg" />,
    },
    {
      navName: "Company Expenses",
      path: "/dashboard/company-expenses",
      icon: <GiExpense className="text-lg" />,
    },
    {
      navName: "Revenue Growth",
      path: "/dashboard/revenue-growth",
      icon: <GiTreeGrowth className="text-lg" />,
    },
  ];
  return (
    <header className="pt-20 w-64 h-full bg-dashboardNavbarBG font-bold space-y-5">
      <div className="text-center">
        <Link to={"/"}>
          <img
            src={logo}
            alt="company logo"
            className="mx-auto mb-5 max-w-48"
          />
          <h3 className="flex items-center justify-center gap-5">
            Company Name
          </h3>
        </Link>
      </div>
      <hr className="w-3/4 mx-auto" />
      <ul className="menu space-y-2">
        {navLinks.map((nav) => (
          <li
            key={nav.path}
            className="hover:bg-btnBgHoverColor hover:text-white rounded-lg"
          >
            <NavLink to={nav.path} className="py-2 gap-4">
              {nav.icon} {nav.navName}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default DashboardNavbar;
