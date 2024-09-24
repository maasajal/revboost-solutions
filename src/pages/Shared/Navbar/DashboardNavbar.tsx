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
    <div className="pt-20 bg-[#FF0000] text-white">
      <ul className="menu space-y-4">
        {navLinks.map((nav) => (
          <li key={nav.path} className="bg-[#541E1B]">
            <NavLink to={nav.path} className="p-4">
              {nav.navName}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardNavbar;
