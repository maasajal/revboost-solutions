import Box from "@mui/material/Box";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import type { Navigation, Router, Session } from "@toolpad/core";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import Typography from "@mui/material/Typography";
import User from "../app/features/users/UserType";
import { useAppSelector } from "../app/hooks/useAppSelector";
import { RootState } from "../app/store/store";
import { useAppDispatch } from "../app/hooks/useAppDispatch";
import { signOut } from "firebase/auth";
import { logoutSuccess } from "../app/features/firebaseAuthentication/authSlice";
import { auth } from "../firebase/firebase.config";
import logo from "../assets/logo.png";
import { getCurrentUser } from "../app/api/currentUserAPI";
// material dashboard Icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import PaymentsIcon from "@mui/icons-material/Payments";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { FaFileInvoiceDollar } from "react-icons/fa";

import revTheme from "../components/utils/theme";
import { AiTwotoneCalculator } from "react-icons/ai";
import { Breadcrumbs } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import ChatIcon from "@mui/icons-material/Chat";

// Define the `FeaturePages` component to display the content based on the current path
function FeaturePages({ pathname }: { pathname: string }) {
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Breadcrumbs aria-label="breadcrumb" className="pl-5">
        <Typography sx={{ color: "text.primary" }}>Path: {pathname}</Typography>
      </Breadcrumbs>
      <main className="py-10 px-5 min-h-screen">
        <Outlet />
      </main>
    </Box>
  );
}

// Define the props interface for the Dashboard layout component
interface DemoProps {
  window?: () => Window; // Optional window prop for iframe handling
}

// Define the main `DashboardLayoutBasic` component
export default function DashboardLayoutBasic(props: DemoProps) {
  const { window } = props;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const userDetails = useAppSelector(
    (state: RootState) => state.currentUser?.user
  ) as User;

  const { name, email, photo, role } = userDetails || {};
  const [session, setSession] = useState<Session | null>({
    user: {
      name: name || "RevBoost Solutions",
      email: email || "revboost@solutions.com",
      image: photo || "https://avatars.githubusercontent.com/u/19550456",
    },
  });

  // Define the authentication logic using `useMemo` to manage user sign in and sign out
  const authentication = useMemo(() => {
    return {
      signIn: async () => {
        try {
          if (user && userDetails) {
            setSession({
              user: {
                name: name || "RevBoost Solutions",
                email: email || "revboost@solutions.com",
                image:
                  photo || "https://avatars.githubusercontent.com/u/19550456",
              },
            });
          } else {
            navigate("/login");
          }
        } catch (error) {
          console.error("Error: ", error);
        }
      },
      signOut: async () => {
        setSession(null);
        await signOut(auth);
        dispatch(logoutSuccess());
        localStorage.removeItem("user-token");
      },
    };
  }, [user, userDetails, dispatch]);

  // Manage the current path and navigation state
  const [pathname, setPathname] = useState("/dashboard");

  const router: Router = useMemo(
    () => ({
      pathname,
      searchParams: new URLSearchParams(), // Grabbing the current search params from the URL
      navigate: (path: string | URL) => {
        if (path === "/dashboard/admin" && role !== "admin") {
          navigate("/dashboard"); // Redirect non-admin users
        } else {
          setPathname(String(path));
          navigate(String(path));
        }
      },
    }),
    [pathname, navigate, role]
  );

  // For handling the window object when in an iframe
  const demoWindow = window !== undefined ? window() : undefined;

  const NAVIGATION: Navigation = [
    {
      kind: "header",
      title: "Company Details",
    },
    ...(role === "admin"
      ? [
          {
            segment: "dashboard",
            title: "Admin Dashboard",
            icon: <DashboardIcon />,
            children: [
              {
                segment: "admin",
                title: "Manage All User",
                icon: <DashboardIcon />,
              },
              {
                segment: "messages",
                title: "All Message",
                icon: <MessageIcon />,
              },
              {
                segment: "messages-details/:id",
                title: "Messages Details",
                icon: <ChatIcon />,
              },
            ],
          },
        ]
      : [
          {
            segment: "dashboard",
            title: "Dashboard",
            icon: <DashboardIcon />,
          },
        ]),
    {
      segment: "dashboard/incomes",
      title: "Incomes",
      icon: <MonetizationOnIcon />,
    },
    {
      segment: "dashboard/expenses",
      title: "Expenses",
      icon: <CurrencyExchangeIcon />,
    },
    {
      segment: "dashboard/payroll",
      title: "Payroll Management",
      icon: <PaymentsIcon />,
    },
    {
      segment: "dashboard/invoice-&-billing",
      title: "Invoice & Billing",
      icon: <FaFileInvoiceDollar className="text-2xl" />,
    },
    {
      kind: "divider",
    },
    {
      kind: "header",
      title: "Analytics",
    },
    {
      segment: "dashboard/revenue-growth",
      title: "Revenue Growth",
      icon: <AutoGraphIcon />,
    },
    {
      segment: "dashboard/vat",
      title: "VAT & TAX",
      icon: <AiTwotoneCalculator className="text-2xl" />,
    },
    {
      kind: "divider",
    },
    {
      kind: "header",
      title: "Settings",
    },
    {
      segment: "dashboard/profile",
      title: "Profile",
      icon: <AccountCircleIcon />,
    },
  ];

  return (
    <AppProvider
      session={session}
      authentication={authentication}
      navigation={NAVIGATION}
      branding={{
        logo: (
          <img
            src={photo ? photo : logo}
            alt="RevBoost Solutions logo"
            className="mr-3 rounded-xl"
          />
        ),
        title: `${name}`,
      }}
      router={router}
      theme={revTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <FeaturePages pathname={pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}
