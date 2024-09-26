import { NavLink } from "react-router-dom";

const DashboardNavbar = () => {
  const navLinks = [
    {
      navName: "Company Profile",
      path: "/dashboard/profile",
    },
    {
      navName: "Company Incomes",
      path: "/dashboard/company-incomes",
    },
    {
      navName: "Company Expenses",
      path: "/dashboard/company-expenses",
    },
    {
      navName: "Revenue Growth",
      path: "/dashboard/revenue-growth",
    },
  ];
  return (
    <div className="pt-20 w-64 h-full bg-dashboardNavbarBG text-white font-bold">
      <ul className="menu space-y-4">
        {navLinks.map((nav) => (
          <li key={nav.path} className="bg-btnBgColor hover:bg-btnBgHoverColor rounded-lg">
            <NavLink to={nav.path} className="py-4">
              {nav.navName}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardNavbar;
