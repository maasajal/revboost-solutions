import { createBrowserRouter } from "react-router-dom";
import AdminDashboard from "../dashboard/Admin/AdminDashboard/AdminDashboard";
import Incomes from "../dashboard/CompanyIncomes/Incomes";
import DashboardHome from "../dashboard/DashboardHome";
// import Expense from "../dashboard/Expense/Expense";
import Expenses from "../dashboard/Expense/Expenses";
import Payroll from "../dashboard/Payroll/Payroll";
import UserProfile from "../dashboard/Profile/Profile";
import RevenueGrowth from "../dashboard/RevenueGrowth/RevenueGrowth";
import Tax from "../dashboard/VatTaxCalculation/Tax/Tax";
import Vat from "../dashboard/VatTaxCalculation/Vat/Vat";
import VatTaxCalculation from "../dashboard/VatTaxCalculation/VatTaxCalculation";
import Dashboard from "../layouts/Dashboard";
import Main from "../layouts/Main";
import About from "../pages/AboutPage/About";
import Contact from "../pages/ContactPage/Contact";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Pricing from "../pages/PricingPage/Pricing";
import Login from "../pages/authentication/login/Login";
import Register from "../pages/authentication/register/Register";
import AdminRoute from "./AdminRoute";
import BasicRoute from "./BasicRoute";
import PrivateRoute from "./PrivateRoute";
import StandardRoute from "./StandardRoute";
import Invoice from "../dashboard/CompanyIncomes/InvoiceAndBilling/Invoice";
import PremiumRoute from "./PremiumRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />, // User Profile component will be call here.
      },
      {
        path: "/dashboard/profile",
        element: <UserProfile />, // User Profile component will be call here.
      },
      // // Income tracking Route
      {
        path: "/dashboard/incomes",
        element: (
          <BasicRoute>
            {" "}
            <Incomes />
          </BasicRoute>
        ), // User Profile component will be call here.
      },
      // Invoice & Billing Route
      {
        path: "/dashboard/invoice-&-billing",
        element: (
          <PremiumRoute>
            <Invoice />
          </PremiumRoute>
        ), // User Profile component will be call here.
      },
      // Expense tracking Route
      {
        path: "/dashboard/expenses",
        element: (
          <BasicRoute>
            {" "}
            <Expenses />
          </BasicRoute>
        ),
      },
      // Revenue growth Route
      {
        path: "/dashboard/revenue-growth",
        element: (
          <BasicRoute>
            {" "}
            <RevenueGrowth />
          </BasicRoute>
        ),
      },
      {
        path: "/dashboard/payroll",
        element: (
          <StandardRoute>
            {" "}
            <Payroll />
          </StandardRoute>
        ),
      },
      {
        path: "/dashboard/vat",
        element: <VatTaxCalculation />,
        children: [
          {
            index: true,
            element: <Vat />,
          },
          {
            path: "/dashboard/vat/tax",
            element: <Tax />,
          },
        ],
      },
      {
        path: "/dashboard/admin",
        element: (
          <AdminRoute>
            {" "}
            <AdminDashboard />{" "}
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;
