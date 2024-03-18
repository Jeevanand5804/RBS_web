import React, { useState , useEffect} from "react";
import { RoutePath } from "./Content";
import { NavLink,useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SettingsIcon from "@mui/icons-material/Settings";
import InputIcon from "@mui/icons-material/Input";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { useEmail } from './EmailContext';


const Title = styled(Typography)({
  flexGrow: 1,
});
const DrawerWrapper = styled(Drawer)({
  "& .MuiDrawer-paper": {
    width: "300px",
    marginTop: "69px",
  },
});
const DrawerHeader = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "8px 16px",
});

function Header() {
  const { email } = useEmail();
  const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);
  const [settingDrawerOpen, setSettingDrawerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down('md'));

 const handleSettingPoen = () => {
   setSettingDrawerOpen(true);
 };
 const handleSettingClose = () => {
   setSettingDrawerOpen(false);
 };
  const handleLeftDrawerOpen = () => {
    setLeftDrawerOpen(true);
  };

  const handleLeftDrawerClose = () => {
    setLeftDrawerOpen(false);
  };
  const handleLinkClick = (link) => {
    setActiveLink(link);
    handleLeftDrawerClose();
  };
  useState(() => {
    setActiveLink();
  },[]);


  
  return (
    <>
      <AppBar className="header" position="fixed" sx={{ backgroundColor: "rgba(300, 0, 0, 0.8)", padding: "0px",elevation: 4}}>
        <Toolbar>
        <RestaurantIcon className="ri" sx={{color:"silver",zIndex:"20",fontSize:"30px"}}/>
            <Title variant="h6" component="div" sx={{fontFamily:"cursive",fontWeight:"900",fontSize:"25px"}}>
              Food Bite
            </Title>
        {!isMobile && (
        <List sx={{display:"flex",flexDirection:"row" }}>
          <ListItem
            onClick={() => handleLinkClick(RoutePath.Home)}
            component={NavLink}
            to={RoutePath.Home}
            sx={{
              margin: "2px",
              // backgroundColor:
              //   activeLink === RoutePath.Home ? "yellow" : "inherit",
              color: activeLink === RoutePath.Home ? "yellow" : "inherit",
              borderRadius:"10px",
              textDecoration: activeLink === RoutePath.Home ? "underline" : "none",
              textDecorationThickness: "3px", // Adjust thickness as needed
              textDecorationSkipInk: "none", 
            }}
          >
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            onClick={() => handleLinkClick(RoutePath.Gallery)}
            component={NavLink}
            to={RoutePath.Gallery}
            sx={{
              margin: "2px",
              color: activeLink === RoutePath.Gallery ? "yellow" : "inherit",
              borderRadius:"10px",
              textDecoration: activeLink === RoutePath.Gallery ? "underline" : "none",
              textDecorationThickness: "3px", // Adjust thickness as needed
              textDecorationSkipInk: "none", 
            }}
          >
           
            <ListItemText primary="Gallery" />
          </ListItem>
          <ListItem
            onClick={() => handleLinkClick(RoutePath.Reservation)}
            component={NavLink}
            to={RoutePath.Reservation}
            sx={{
              margin: "2px",
              color: activeLink === RoutePath.Reservation ? "yellow" : "inherit",
              borderRadius:"10px",
              textDecoration: activeLink === RoutePath.Reservation ? "underline" : "none",
              textDecorationThickness: "3px", // Adjust thickness as needed
              textDecorationSkipInk: "none", 
            }}
          >
      
            <ListItemText primary="Reservation" />
          </ListItem>
          <ListItem
            onClick={() => handleLinkClick(RoutePath.OrderFood)}
            component={NavLink}
            to={RoutePath.OrderFood}
            sx={{
              margin: "2px",
              color: activeLink === RoutePath.OrderFood ? "yellow" : "inherit",
              borderRadius:"10px",
              textDecoration: activeLink === RoutePath.OrderFood ? "underline" : "none",
              textDecorationThickness: "3px", // Adjust thickness as needed
              textDecorationSkipInk: "none", 
            }}
          >
           
            <ListItemText primary="OrderFood" />
          </ListItem>
          <ListItem
            onClick={() => handleLinkClick(RoutePath.History)}
            component={NavLink}
            to={RoutePath.History}
            sx={{
              margin: "2px",
              color: activeLink === RoutePath.History ? "yellow" : "inherit",
              borderRadius:"10px",
              textDecoration: activeLink === RoutePath.History ? "underline" : "none",
              textDecorationThickness: "3px", // Adjust thickness as needed
              textDecorationSkipInk: "none", 
            }}
          >
          
            <ListItemText primary="History" />
          </ListItem>
          <ListItem
            onClick={() => handleLinkClick(RoutePath.AboutUs)}
            component={NavLink}
            to={RoutePath.AboutUs}
            sx={{
              margin: "2px",
              color: activeLink === RoutePath.AboutUs ? "yellow" : "inherit",
              borderRadius:"10px",
              textDecoration: activeLink === RoutePath.AboutUs ? "underline" : "none",
              textDecorationThickness: "3px", // Adjust thickness as needed
              textDecorationSkipInk: "none", 
            }}
          >
          
            <ListItemText primary="AboutUs" />
          </ListItem>
        </List>
        )}
          {/* Show menu icon only in mobile view */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleLeftDrawerOpen}
            sx={{ display: { sm: "block", md: "none" } }} // Hide on md and above
          >
            <MenuIcon />
          </IconButton>
          <SettingsIcon
            sx={{ marginLeft: "30px", fontSize: "30px" }}
            onClick={handleSettingPoen}
          />
        </Toolbar>
      </AppBar>
      <div className="shadow-line"></div>
      <DrawerWrapper anchor="left" open={leftDrawerOpen} onClose={handleLeftDrawerClose}>
        <DrawerHeader sx={{ backgroundColor: "rgba(300, 0, 0, 0.8)", color: "white" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            MENU
          </Typography>
          <IconButton onClick={handleLeftDrawerClose} sx={{ color: "white" }}>
            <ArrowBackIosIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem
            onClick={() => handleLinkClick(RoutePath.Home)}
            component={NavLink}
            to={RoutePath.Home}
            sx={{
              margin: "4px",
              backgroundColor:
                activeLink === RoutePath.Home ? "red" : "inherit",
                color: activeLink === RoutePath.Home ? "yellow" : "inherit",
            }}
          >
            <ListItemIcon>
              <HomeIcon
                sx={{
                  color: "violet",
                  backgroundColor: "white",
                  borderRadius: "40px",
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            onClick={() => handleLinkClick(RoutePath.Reservation)}
            component={NavLink}
            to={RoutePath.Reservation}
            sx={{
              margin: "4px",
              backgroundColor:
                activeLink === RoutePath.Reservation ? "red" : "inherit",
              color: activeLink === RoutePath.Reservation ? "yellow" : "inherit",
            }}
          >
            <ListItemIcon>
              <PersonAddIcon
                sx={{
                  color: "purple",
                  backgroundColor: "white",
                  borderRadius: "40px",
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Reservation" />
          </ListItem>
          <ListItem
            onClick={() => handleLinkClick(RoutePath.Gallery)}
            component={NavLink}
            to={RoutePath.Gallery}
            sx={{
              margin: "4px",
              backgroundColor:
                activeLink === RoutePath.Gallery ? "red" : "inherit",
              color: activeLink === RoutePath.Gallery ? "yellow" : "inherit",
            }}
          >
            <ListItemIcon>
              <InputIcon
                sx={{
                  color: "red",
                  backgroundColor: "white",
                  borderRadius: "40px",
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Gallery" />
          </ListItem>
          <ListItem
            onClick={() => handleLinkClick(RoutePath.OrderFood)}
            component={NavLink}
            to={RoutePath.OrderFood}
            sx={{
              margin: "4px",
              backgroundColor:
                activeLink === RoutePath.OrderFood ? "red" : "inherit",
              color: activeLink === RoutePath.OrderFood ? "yellow" : "inherit",
            }}
          >
            <ListItemIcon>
              <InputIcon
                sx={{
                  color: "red",
                  backgroundColor: "white",
                  borderRadius: "40px",
                }}
              />
            </ListItemIcon>
            <ListItemText primary="OrderFood" />
          </ListItem>
          <ListItem
            onClick={() => handleLinkClick(RoutePath.History)}
            component={NavLink}
            to={RoutePath.History}
            sx={{
              margin: "4px",
              backgroundColor:
                activeLink === RoutePath.History ? "red" : "inherit",
              color: activeLink === RoutePath.History ? "yellow" : "inherit",
            }}
          >
            <ListItemIcon>
              <InputIcon
                sx={{
                  color: "red",
                  backgroundColor: "white",
                  borderRadius: "40px",
                }}
              />
            </ListItemIcon>
            <ListItemText primary="History" />
          </ListItem>
          <ListItem
            onClick={() => handleLinkClick(RoutePath.AboutUs)}
            component={NavLink}
            to={RoutePath.AboutUs}
            sx={{
              margin: "4px",
              backgroundColor:
                activeLink === RoutePath.AboutUs ? "red" : "inherit",
              color: activeLink === RoutePath.AboutUs ? "yellow" : "inherit",
            }}
          >
            <ListItemIcon>
              <InputIcon
                sx={{
                  color: "red",
                  backgroundColor: "white",
                  borderRadius: "40px",
                }}
              />
            </ListItemIcon>
            <ListItemText primary="AboutUs" />
          </ListItem>
        </List>
      </DrawerWrapper>
      <DrawerWrapper
        anchor="right"
        sx={{
          "& .MuiDrawer-paper": {
            marginLeft: "400px",
            width: "300px",
          },
        }}
        open={settingDrawerOpen}
        onClose={handleSettingClose}
      >
        <DrawerHeader sx={{ backgroundColor: "gray" }}>
          <IconButton onClick={handleSettingClose} sx={{ color: "white" }}>
            <ArrowBackIcon />
          </IconButton>
        </DrawerHeader>
        <List>
          <ListItem>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem
            onClick={() => handleLinkClick(RoutePath.LogIn)}
            component={NavLink}
            to={RoutePath.LogIn}
            sx={{
              margin: "4px",
              backgroundColor:
                activeLink === RoutePath.LogIn ? "red" : "inherit",
              color: activeLink === RoutePath.LogIn ? "yellow" : "inherit",
            }}
          >
            <ListItemIcon>
              <InputIcon
                sx={{
                  color: "red",
                  backgroundColor: "white",
                  borderRadius: "40px",
                }}
              />
            </ListItemIcon>
            <ListItemText primary="LogOut" />
          </ListItem>
        </List>
      </DrawerWrapper>
    </>
  );
}

export default Header;