import { createBrowserRouter } from "react-router-dom";
import AdminDashboard from "../dashboard/Admin/AdminDashboard/AdminDashboard";
import Incomes from "../dashboard/CompanyIncomes/Incomes";
import DashboardHome from "../dashboard/DashboardHome";
import Expense from "../dashboard/Expense/Expense";
import Payroll from "../dashboard/Payroll/Payroll";
import UserProfile from "../dashboard/Profile/Profile";
import RevenueGrowth from "../dashboard/RevenueGrowth/RevenueGrowth";
import Dashboard from "../layouts/Dashboard";
import Main from "../layouts/Main";
import About from "../pages/AboutPage/About";
import Contact from "../pages/ContactPage/Contact";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Pricing from "../pages/PricingPage/Pricing";
import Login from "../pages/authentication/login/Login";
import Register from "../pages/authentication/register/Register";
import AdminRout from "./AdminRout";

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
        path: "/dashboard",
        element: <DashboardHome />, // User Profile component will be call here.
      },
      {
        path: "/dashboard/profile",
        element: <UserProfile />, // User Profile component will be call here.
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
      {
        path: "/dashboard/admin",
        element:<AdminRout> <AdminDashboard /> </AdminRout>,
      },
    ],
  },
]);
export default router;
