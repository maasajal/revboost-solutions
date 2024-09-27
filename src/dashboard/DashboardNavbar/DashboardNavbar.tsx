import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaHome, FaSign, FaSignOutAlt } from "react-icons/fa";
import { GiExpense, GiTreeGrowth } from "react-icons/gi";
import { PiInvoiceBold } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store/store";
import { logoutSuccess } from "../../app/state/firebaseAuthentication/authSlice";

const DashboardNavbar = () => {
  const user = useSelector((state: RootState) => state?.auth?.user);
  const dispatch = useDispatch<AppDispatch>();
  const handleSignOut = () => {
    const logout = dispatch(logoutSuccess());
    console.log("logOut", logout);
    window.location.href = "https://revboost.business-easy.com";
  };
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
        </Link>
        <h3 className="flex items-center justify-center gap-5">
          {user ? "Company Dynamic Name" : "Company Name"}
        </h3>
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
      <hr />
      <div className="flex justify-end">
        {user ? (
          <button
            onClick={handleSignOut}
            className="hover:bg-secondary hover:text-white text-secondary font-bold px-5 py-2 rounded-3xl text-sm flex gap-2 items-center"
          >
            <FaSignOutAlt /> LogOut
          </button>
        ) : (
          <Link to="/login">
            <button className="font-bold mr-1 md:mr-5 text-secondary text-sm px-5 py-2 rounded-3xl hover:bg-secondary hover:text-white flex gap-2 items-center">
              <FaSign /> Sign In
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default DashboardNavbar;
