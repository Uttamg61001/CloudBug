import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaBell,
  FaCaretDown,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Avatar, CssBaseline } from "@mui/material";
import images from "../assets/images/imagesExport";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/slices/drawerSlice";
import { IoMdAdd } from "react-icons/io";
import { MdDashboard } from "react-icons/md";


const navItems = [
  { name: "Dashboard", icon: images.Dashboard, link: "/" },
  { name: "Cloud", icon: images.Cloud, link: "/cloud" },
  { name: "Services", icon: images.Services, link: "/services" },
  { name: "Issues", icon: images.Issues, link: "/issues" },
  { name: "Usages", icon: images.Usages, link: "/usages" },
  { name: "Billing", icon: images.Billing, link: "/billing" },
  { name: "Alert", icon: images.Alert, link: "/alert" },
];

const drawerWidth = 250;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  WebkitOverflowScrolling: "touch", // Enable smooth scrolling on WebKit browsers
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  WebkitOverflowScrolling: "touch", // Enable smooth scrolling on WebKit browsers
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 1),
  zIndex: 1,
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  height: 100,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  background: "transparent",
  boxShadow: "none",
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      ...openedMixin(theme),
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      // Hide WebKit scrollbar
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": {
      ...closedMixin(theme),
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      // Hide WebKit scrollbar
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  }),
  border: "none",
}));

const FaAngleDoubleLeftIcon = styled(FaAngleDoubleLeft, {
  shouldForwardProp: (prop) => true,
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  position: "absolute",
}));

const FaAngleDoubleRightIcon = styled(FaAngleDoubleRight, {
  shouldForwardProp: (prop) => true,
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  position: "absolute",
}));

const Sidebar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.drawerReducer);

  const handleDrawerOpen = () => {
    dispatch(setOpen(true));
  };

  const handleDrawerClose = () => {
    dispatch(setOpen(false));
  };

  return (
    <div className="relative h-full border-none shadow-lg ">
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <div className="px-6 py-4 flex justify-between">
          <div className={open ? "text-black" : "text-black ml-12"}>
            <h6 className="text-2xl hidden sm:block font-semibold">Welcome, John</h6>
            <p className="text-xs hidden sm:block">Here is your NeuraBug Report</p>
          </div>
          <div className="flex justify-between items-center gap-6">
            <FaBell size={25} color="#5041BC" />
            <div className="flex justify-center items-center text-black gap-4">
              <Avatar sx={{ bgcolor: "#51459E" }}>J</Avatar>
              <span className="hidden sm:block0.0">John Doe</span>
              <FaCaretDown color="#51459E" />
            </div>
          </div>
        </div>
      </AppBar>
      <Drawer variant="permanent" open={open} className="relative hidden sm:block">
        <DrawerHeader className="my-4">
          {open ? (
            <img src={images.logo} alt="" className="h-8 w-40 my-4" />
          ) : (
            <img src={images.smalllogo} alt="" className="h-10 w-52 my-8" />
          )}
        </DrawerHeader>
        {open ? (
          <div className="addservicebtn flex justify-center my-2">
            <Link
              to="/select-service"
              className="bg-[#51459E] text-white px-14 py-2 rounded-xl"
            >
              Add Service
            </Link>
          </div>
        ) : (
          <div className="addservicebtn flex justify-center my-8">
            <Link
              to="/select-service"
              className="bg-[#51459E] text-white p-2 rounded-md shadow-lg"
            >
              <IoMdAdd size={25} />
            </Link>
          </div>
        )}
        {open ? (
          <div className="navlist mt-8 grid grid-cols-2 px-12 gap-10 justify-center place-items-center">
            {navItems?.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className="flex flex-col justify-between gap-2 items-center"
              >
                <div
                  className={`navitem flex items-center justify-center p-4 ${
                    window.location.pathname == item.link
                      ? "bg-[#51459E]"
                      : "bg-[#ECEFF7] "
                  } rounded-lg shadow-md`}
                >
                  <img src={item?.icon} color="black" alt="" />
                </div>
                <p className="text-xs font-semibold">{item?.name}</p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="navlist mt-4 flex flex-col justify-center px-2">
            {navItems?.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className="flex flex-col justify-between gap-2 items-center my-2"
              >
                <div
                  className={`navitem flex items-center justify-center p-2 ${
                    window.location.pathname == item.link
                      ? "bg-[#51459E]"
                      : "bg-[#ECEFF7] "
                  } rounded-lg shadow-md`}
                >
                  <img src={item?.icon} color="black" alt="" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </Drawer>
      {open ? (
        <FaAngleDoubleLeftIcon
          onClick={handleDrawerClose}
          size={35}
          className={`absolute -right-3 top-16 p-2 shadow-lg cursor-pointer rounded-full bg-slate-200`}
        />
      ) : (
        <FaAngleDoubleRightIcon
          onClick={handleDrawerOpen}
          size={35}
          className={`absolute -right-3 top-24   p-2 shadow-lg cursor-pointer rounded-full bg-slate-200`}
        />
      )}
    </div>
  );
};

export default Sidebar;
