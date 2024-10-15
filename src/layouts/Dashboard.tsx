import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import type { Navigation, Router, Session } from "@toolpad/core";
import { Outlet, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import Typography from "@mui/material/Typography";
import User from "../app/features/users/UserType";
import { useAppSelector } from "../app/hooks/useAppSelector";
import { RootState } from "../app/store/store";
import { useAppDispatch } from "../app/hooks/useAppDispatch";
import { signOut } from "firebase/auth";
import { logoutSuccess } from "../app/features/firebaseAuthentication/authSlice";
import { auth } from "../firebase/firebase.config";
import logo from "../assets/logo.png";

// Define the navigation menu items
const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Company Details",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "dashboard/incomes",
    title: "Incomes",
    icon: <ShoppingCartIcon />,
  },
  {
    segment: "dashboard/expenses",
    title: "Expenses",
    icon: <ShoppingCartIcon />,
  },
  {
    segment: "dashboard/payroll",
    title: "Payroll Management",
    icon: <ShoppingCartIcon />,
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
    icon: <ShoppingCartIcon />,
  },
];

// Define a custom theme using Material UI's `createTheme` function
const revTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

// Define the `FeaturePages` component to display the content based on the current path
function FeaturePages({ pathname }: { pathname: string }) {
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <main className="py-10 px-5 min-h-screen">
        <Typography>Dashboard content for {pathname}</Typography>
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
  const userDetails = useAppSelector(
    (state: RootState) => state.currentUser?.user
  ) as User | null;

  const { name, email, photo } = userDetails || {};
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
        setPathname(String(path));
        navigate(String(path));
      },
    }),
    [pathname, navigate]
  );

  // For handling the window object when in an iframe
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      session={session}
      authentication={authentication}
      navigation={NAVIGATION}
      branding={{
        logo: <img src={photo ? photo : logo} alt="RevBoost Solutions logo" />,
        title: "RevBoost",
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
