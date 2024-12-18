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
import logo from "../../../assets/RevLogo.jpg";
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
  // {
  //   navName: "Report",
  //   path: "/report",
  // },
  // {
  //   navName: "All Products",
  //   path: "/products",
  // },
  {
    navName: "Contact Us",
    path: "/contact-us",
  },
  {
    navName: "About US",
    path: "/about-us",
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
    <AppBar
      position="sticky"
      className="px-2 md:px-14 lg:px-20 top-0 z-20"
      sx={{ backgroundColor: "#2C3E5080" }}
    >
      <Container maxWidth="xl" className="py-2">
        <Toolbar disableGutters>
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt={userDetails?.name || "RevBoost Solutions logo"}
              className="w-24 rounded-xl hidden md:flex"
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            ></Typography>
          </Link>

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
            <img
              src={logo}
              alt={userDetails?.name || "RevBoost Solutions logo"}
              className="w-24 rounded-xl flex md:hidden mr-3"
            />
          </Link>
          <Typography
            variant="h5"
            noWrap
            component="a"
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
          ></Typography>

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
                {userDetails.role === "admin" ? (
                  <MenuItem
                    component={Link}
                    to="/dashboard/admin"
                    onClick={handleCloseUserMenu}
                  >
                    Admin Dashboard
                  </MenuItem>
                ) : (
                  <MenuItem
                    to="/dashboard"
                    component={Link}
                    onClick={handleCloseUserMenu}
                  >
                    Dashboard
                  </MenuItem>
                )}
                <MenuItem
                  to="/dashboard/profile"
                  component={Link}
                  onClick={handleCloseUserMenu}
                >
                  Profile
                </MenuItem>
                <MenuItem to="/" component={Link} onClick={handleSignOut}>
                  Sign Out
                </MenuItem>
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
