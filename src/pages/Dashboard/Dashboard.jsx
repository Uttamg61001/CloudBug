import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaBell,
  FaCaretDown,
} from "react-icons/fa";
import images from "../../assets/images/imagesExport";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import ServiceBarGraph from "./ServiceBarGraph";
import TotalCloud from "./TotalClouds";
import SubscriptionCard from "./SubscriptionCard";
import Sidebar from "../../components/Sidebar";
import useWIndowWidth from "../../hooks/useWIndowWidth";

const navItems = [
  { name: "Dashboard", icon: images.Dashboard, link: "/" },
  { name: "Cloud", icon: images.Cloud, link: "/cloud" },
  { name: "Services", icon: images.Services, link: "/services" },
  { name: "Issues", icon: images.Issues, link: "/issues" },
  { name: "Usages", icon: images.Usages, link: "/usages" },
  { name: "Billing", icon: images.Billing, link: "/billing" },
  { name: "Alert", icon: images.Alert, link: "/alert" },
];

const drawerWidth = 280;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
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
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center ",
  padding: theme.spacing(0, 1),
  zIndex: 1,
  // necessary for content to be below app bar
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
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const FaAngleDoubleLeftIcon = styled(FaAngleDoubleLeft, {
  shouldForwardProp: (prop) => true,
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 5,
}));
const FaAngleDoubleRightIcon = styled(FaAngleDoubleRight, {
  shouldForwardProp: (prop) => true,
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 5,
}));

export default function MiniDrawer() {
  const width = useWIndowWidth();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ width: "100%", display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1  , minHeight:"100vh"}} className="logoBg pt-10 p-5 ">
        <DrawerHeader />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="graph-wrapper  ">
            <ServiceBarGraph />
          </div>
          <div className=" ">
            <TotalCloud />
          </div>
          <div className="">
            <SubscriptionCard />
          </div>
        </div>
      </Box>
    </Box>
  );
}
