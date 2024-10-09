import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import About from "../pages/AboutPage/About";
import Contact from "../pages/ContactPage/Contact";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Register from "../pages/authentication/register/Register";
import Login from "../pages/authentication/login/Login";
import Dashboard from "../layouts/Dashboard";
import Pricing from "../pages/PricingPage/Pricing";
import Incomes from "../dashboard/CompanyIncomes/Incomes";
import Expense from "../dashboard/Expense/Expense";
import RevenueGrowth from "../dashboard/RevenueGrowth/RevenueGrowth";
import Payroll from "../dashboard/Payroll/Payroll";

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
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard/profile",
        element: <Home />, // User Profile component will be call here.
      },
      // // Income tracking Route: Invoice Route
      {
        path: "/dashboard/company-incomes",
        element: <Incomes />, // User Profile component will be call here.
      },
      // Expense tracking Route
      {
        path: "/dashboard/company-expenses",
        element: <Expense />,
      },
      // Revenue growth Route
      {
        path: "/dashboard/revenue-growth",
        element: <RevenueGrowth />,
      },
      {
        path: "/dashboard/payroll",
        element: <Payroll />,
      },
    ],
  },
]);
export default router;
