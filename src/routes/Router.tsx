import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import About from "../pages/AboutPage/About";
import Contact from "../pages/ContactPage/Contact";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Register from "../pages/authentication/register/Register";
import Login from "../pages/authentication/login/Login";
import Dashboard from "../layouts/Dashboard";
import RevenueGrowth from "../pages/RevenueGrowth/RevenueGrowth";

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
      // Income tracking Route
      // Expense tracking Route
      // Revenue growth Route
      {
        path: "/dashboard/revenue-growth",
        element: <RevenueGrowth />,
      },
    ],
  },
]);
export default router;
