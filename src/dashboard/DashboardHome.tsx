import { AiOutlineCreditCard, AiTwotoneCalculator } from "react-icons/ai";
import { FaFileInvoiceDollar, FaHome } from "react-icons/fa";
import { GiExpense, GiTreeGrowth } from "react-icons/gi";
import { PiInvoiceBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import RevenueForecastChart from "./RevenueGrowth/RevenueForecastChart";
import RevenueComparisonPieChart from "./RevenueGrowth/RevenueComparisonPieChart";
import { Helmet } from "react-helmet";
import SectionTitle from "../components/SectionTitle";
import RevenueBarChart from "./RevenueGrowth/RevenueBarChart";

const DashboardHome: React.FC = () => {
  return (
    <div className="container mx-auto px-5">
      <Helmet>
        <meta charSet="utf-8" />
        <title>User Dashboard - RevBoost Solutions</title>
      </Helmet>
      <SectionTitle
        title="All at a glance"
        intro={"Dashboard"}
        content="Company Revenue Growth Live!"
      />
      <RevenueBarChart />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10">
        <div className="h-full py-10 px-5 rounded-xl border">
          <RevenueForecastChart />
        </div>
        <div className="h-full py-10 px-5 rounded-xl border">
          <RevenueComparisonPieChart />
        </div>
      </div>
      <SectionTitle
        title="Main Features"
        intro={"Dashboard"}
        content="Find-out more about the features!"
      />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 py-20">
        {dashNavLinks.map((nav) => (
          <div key={nav.path} className="p-10 rounded-xl shadow-xl">
            <NavLink
              to={nav.path}
              className="py-2 gap-4 flex flex-col items-center "
            >
              {nav.icon} {nav.navName}
            </NavLink>
          </div>
        ))}
      </section>
    </div>
  );
};

export default DashboardHome;

const dashNavLinks = [
  {
    navName: "Company Profile",
    path: "/dashboard/profile",
    icon: <FaHome className="text-2xl text-lightColor" />,
  },
  {
    navName: "Company Incomes",
    path: "/dashboard/incomes",
    icon: <PiInvoiceBold className="text-2xl text-lightColor" />,
  },
  {
    navName: "Company Expenses",
    path: "/dashboard/expenses",
    icon: <GiExpense className="text-2xl text-lightColor" />,
  },
  {
    navName: "Revenue Growth",
    path: "/dashboard/revenue-growth",
    icon: <GiTreeGrowth className="text-2xl text-lightColor" />,
  },
  {
    navName: "Payroll Management",
    path: "/dashboard/payroll",
    icon: <AiOutlineCreditCard className="text-2xl text-lightColor" />,
  },
  {
    navName: "VAT & TAX Calculation",
    path: "/dashboard/vat",
    icon: <AiTwotoneCalculator className="text-2xl text-lightColor" />,
  },
  {
    navName: "Invoice & Billing",
    path: "/dashboard/invoice-&-billing",
    icon: <FaFileInvoiceDollar className="text-2xl text-lightColor" />,
  },
];
