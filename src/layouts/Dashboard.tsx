import { Outlet } from "react-router-dom";
import { RiMenuUnfold3Fill } from "react-icons/ri";
import DashboardNavbar from "../pages/Shared/Navbar/DashboardNavbar";

const Dashboard = () => {
  return (
    <div className="drawer md:drawer-open">
      <input id="dashboard_drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col justify-center">
        <label
          htmlFor="dashboard_drawer"
          className="btn btn-outline drawer-button md:hidden fixed top-5 left-2 z-10"
        >
          <RiMenuUnfold3Fill />
        </label>
        <main className="py-10 px-5 min-h-screen">
          <Outlet />
        </main>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="dashboard_drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="w-64 h-full pt-20 bg-[#FF0000] text-white">
          <DashboardNavbar />
        </div>
      </div>
      <div className="flex md:hidden z-50">{/* <BottomNavbar /> */}</div>
    </div>
  );
};

export default Dashboard;
