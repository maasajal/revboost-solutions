import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink to="/home" className="hover:border-b-2 border-[#FF0000] pb-1">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pricing"
          className="hover:border-b-2 border-[#FF0000] pb-1"
        >
          Pricing
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/report"
          className="hover:border-b-2 border-[#FF0000] pb-1"
        >
          Report
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          className="hover:border-b-2 border-[#FF0000] pb-1"
        >
          All Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className="hover:border-b-2 border-[#FF0000] pb-1"
        >
          Contact us
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="hover:border-b-2 border-[#FF0000] pb-1">
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 px-20">
      <div className="mr-3">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu-sm font-medium dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <a className="text-2xl font-bold mr-5">
          Rev<span className="text-[#FF0000]">Boost</span>{" "}
        </a>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu-horizontal flex-nowrap flex-1 font-medium px-1 space-x-5">
          {navItems}
        </ul>
      </div>
      <div className="ml-auto">
        <button className="font-medium mr-5 text-[#FF0000] text-sm">
          Sign In
        </button>
        <button className="bg-[#FF0000] font-medium py-1 px-2 rounded-3xl text-white text-sm">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
