import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logoutSuccess } from "../../../app/features/firebaseAuthentication/authSlice";
import { AppDispatch, RootState } from "../../../app/store/store";
import logo from "../../../assets/logo.png";
import { auth } from "../../../firebase/firebase.config";
import userPhoto from "../../../assets/revBoostSolutions.png";
import Swal from "sweetalert2";
import { useAppSelector } from "../../../app/hooks/useAppSelector";
import User from "../../../app/features/users/UserType";
import { getCurrentUser } from "../../../app/api/currentUserAPI";
import { useEffect } from "react";

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>(); // টাইপড useDispatch ব্যবহার করুন
  const user = useAppSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const userDetails = useAppSelector(
    (state: RootState) => state.currentUser?.user
  ) as User;

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
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(logoutSuccess());
      localStorage.removeItem("user-token");
      Swal.fire({
        position: "top-end",
        title: "Signed Out successfully!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      window.location.href = "/";
    } catch (error) {
      console.log("Error", error);
    }
  };
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
          <img src={logo} alt="RevBoost logo" className="w-40" />
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
          <div
            data-tip={"Company Name"}
            className="dropdown dropdown-end mr-1 tooltip tooltip-bottom tooltip-primary z-10"
          >
            {
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    src={userDetails?.photo ? userDetails?.photo : userPhoto}
                    alt="Logged user photo"
                  />
                </div>
              </div>
            }
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#b1b6c0] text-black rounded-box w-52 uppercase space-y-3"
            >
              <li>
                <Link to="/dashboard/admin">Admin Dashboard</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/dashboard/profile">Profile</Link>
              </li>
              <li onClick={handleSignOut}>
                <Link to="/">Sign Out</Link>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-outline font-bold mr-1 md:mr-5 text-logoMainColor text-sm px-5 py-2 rounded-3xl hover:bg-secondary hover:text-white hover:border-none">
              Sign In
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
