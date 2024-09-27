import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logoutSuccess } from "../../../app/state/firebaseAuthentication/authSlice";
import { AppDispatch, RootState } from "../../../app/store/store";
import logo from "../../../assets/logo.png";
const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>(); // টাইপড useDispatch ব্যবহার করুন

  const user = useSelector((state: RootState) => state.auth.user);
  const navItems = [
    {
      navName: "Home",
      path: "/",
    },
    {
      navName: "Pricing",
      path: "/pricing",
    },
    {
      navName: "Report",
      path: "/report",
    },
    {
      navName: "All Products",
      path: "/products",
    },
    {
      navName: "Contact Us",
      path: "/contact-us",
    },
    {
      navName: "About US",
      path: "/about-us",
    },
  ];
const handleSignOut = ()=>{
  dispatch(logoutSuccess())

}
  return (
    <div className="navbar bg-base-100 px-2 md:px-14 lg:px-20 sticky top-0 z-20 shadow-lg">
      <div className="mr-3">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden pl-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-primaryRed"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu-sm font-medium dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-3"
          >
            {navItems.map((nav) => (
              <li key={nav.path}>
                <NavLink
                  to={nav.path}
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-primary pb-1 font-montserrat font-bold"
                      : "hover:border-b-2 border-primary pb-1 font-montserrat"
                  }
                >
                  {nav.navName}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/" className="text-2xl font-bold mr-5">
          <img src={logo} alt="RevBoost logo" className="w-52" />
        </Link>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu-horizontal flex-nowrap flex-1 font-medium px-1 space-x-5">
          {navItems.map((nav) => (
            <li key={nav.path}>
              <NavLink
                to={nav.path}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-primary pb-1 font-montserrat font-bold"
                    : "hover:border-b-2 border-primary pb-1 font-montserrat"
                }
              >
                {nav.navName}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="ml-auto">
        {user ? (
          <button onClick={handleSignOut} className="hover:bg-secondary hover:text-white text-secondary font-bold px-5 py-2 rounded-3xl text-sm">
            Sign Out
          </button>
        ) : (
          <Link to="/login">
            <button className="font-bold mr-1 md:mr-5 text-secondary text-sm px-5 py-2 rounded-3xl hover:bg-secondary hover:text-white">
              Sign In
            </button>
          </Link>
        )}
        {/* <Link to="/login">
          <button className="font-medium mr-1 md:mr-5 text-[#FF0000] text-sm py-1 px-2 rounded-3xl hover:bg-[#FF0000] hover:text-white">
            Sign In
          </button>
        </Link>
        <Link to="/register">
          <button className="hover:bg-[#FF0000] hover:text-white text-[#FF0000] font-medium py-1 px-2 rounded-3xl text-sm">
            Sign Up
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
