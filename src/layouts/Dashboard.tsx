import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import type { Navigation, Router, Session } from "@toolpad/core";
import { Outlet } from "react-router-dom";
import router from "../routes/Router";
// import { useAppSelector } from "../app/hooks/useAppSelector";
// import { RootState } from "../app/store/store";
// import User from "../app/features/users/UserType";

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
    segment: "dashboard/company-incomes",
    title: "Income",
    icon: <ShoppingCartIcon />,
  },
  {
    segment: "dashboard/company-expenses",
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

function FeaturePages({
  pathname,
}: {
  pathname: string;
  navigate: (path: string | URL) => void;
}) {
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
      <Typography>Dashboard content for {pathname}</Typography>
      <main className="py-10 px-5 min-h-screen">
        <Outlet />
      </main>
    </Box>
  );
}

interface DemoProps {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export default function DashboardLayoutBasic(props: DemoProps) {
  const { window } = props;
  // const user = useAppSelector((state: RootState) => state?.auth?.user);
  // const userDetails = useAppSelector(
  //   (state: RootState) => state.currentUser?.user
  // ) as User | null;

  const [session, setSession] = React.useState<Session | null>({
    user: {
      name: "RevBoost Solutions",
      email: "revboost@solutions.com",
      image: "https://avatars.githubusercontent.com/u/19550456",
    },
  });

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: "RevBoost Solutions",
            email: "revboost@solutions.com",
            image: "https://avatars.githubusercontent.com/u/19550456",
          },
        });
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  const [pathname, setPathname] = React.useState("/dashboard");

  const routes = React.useMemo<Router>(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);
  console.log(routes);

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // preview-start
    <AppProvider
      session={session}
      authentication={authentication}
      navigation={NAVIGATION}
      router={router}
      theme={revTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <FeaturePages pathname={pathname} />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}
