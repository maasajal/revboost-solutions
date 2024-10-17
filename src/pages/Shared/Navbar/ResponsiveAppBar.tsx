import { MouseEvent, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Toolbar,
  IconButton,
  Tooltip,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { useAppDispatch } from "../../../app/hooks/useAppDispatch";
import { getCurrentUser } from "../../../app/api/currentUserAPI";
import { useAppSelector } from "../../../app/hooks/useAppSelector";
import { RootState } from "../../../app/store/store";
import User from "../../../app/features/users/UserType";
import { auth } from "../../../firebase/firebase.config";
import { signOut } from "firebase/auth";
import { logoutSuccess } from "../../../app/features/firebaseAuthentication/authSlice";
import Swal from "sweetalert2";
import userPhoto from "../../../assets/revBoostSolutions.png";
import logo from "../../../assets/logo.png";
import { MdOutlineMenu } from "react-icons/md";

const navItems = [
  {
    navName: "Home",
    path: "/",
  },
  {
    navName: "Pricing",
    path: "/pricing",
  },
  {
    navName: "Report",
    path: "/report",
  },
  {
    navName: "All Products",
    path: "/products",
  },
  {
    navName: "Contact Us",
    path: "/contact-us",
  },
  {
    navName: "About US",
    path: "/about-us",
  },
];
const settings = [
  {
    navName: "Profile",
    path: "/dashboard/profile",
  },
  {
    navName: "Dashboard",
    path: "/dashboard",
  },
  {
    navName: "Logout",
    path: "",
  },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  const user = useAppSelector((state: RootState) => state.auth.user);
  const userDetails = useAppSelector(
    (state: RootState) => state.currentUser?.user
  ) as User;

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(logoutSuccess());
      localStorage.removeItem("user-token");
      Swal.fire({
        position: "top-end",
        title: "Signed Out successfully!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      window.location.href = "/";
    } catch (error) {
      console.log("Error signing out", error);
    }
  };

  return (
    <AppBar position="sticky" className="px-2 md:px-14 lg:px-20 top-0 z-20">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <Avatar
              alt={"Company logo"}
              src={logo}
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
          </Link>
          <Typography
            variant="h6"
            noWrap
            component="a"
            // to="/"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            RevBoost
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MdOutlineMenu />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {navItems.map((nav) => (
                <MenuItem key={nav.path} onClick={handleCloseNavMenu}>
                  <Typography top={nav.navName} sx={{ textAlign: "center" }}>
                    <NavLink
                      to={nav.path}
                      className={({ isActive }) =>
                        isActive
                          ? "border-b-2 border-primary pb-1 font-montserrat font-bold"
                          : "hover:border-b-2 border-primary pb-1 font-montserrat"
                      }
                    >
                      {nav.navName}
                    </NavLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link to="/">
            <Avatar
              alt={userDetails?.name || "User Photo"}
              src={logo}
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
          </Link>
          <Typography
            variant="h5"
            noWrap
            component="a"
            // to="/"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            RevBoost
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navItems.map((nav) => (
              <Button
                key={nav.path}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <NavLink
                  to={nav.path}
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-primary pb-1 font-montserrat font-bold"
                      : "hover:border-b-2 border-primary pb-1 font-montserrat"
                  }
                >
                  {nav.navName}
                </NavLink>
              </Button>
            ))}
          </Box>

          {user ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title={userDetails ? userDetails.name : "User"}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={userDetails?.name || "User Photo"}
                    src={userDetails?.photo ? userDetails.photo : userPhoto}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting.path}
                    onClick={
                      setting.navName === "Logout"
                        ? handleSignOut
                        : handleCloseUserMenu
                    }
                  >
                    {userDetails.role === "admin" && (
                      <Link to="/dashboard/admin" className="text-center">
                        Admin Dashboard
                      </Link>
                    )}
                    <Link to={setting.path} className="text-center">
                      {setting.navName}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Link to="/login">
              <button className="btn btn-outline font-bold mr-1 md:mr-5 text-logoMainColor text-sm px-5 py-2 rounded-3xl hover:bg-secondary hover:text-white hover:border-none uppercase">
                Sign In
              </button>
            </Link>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
