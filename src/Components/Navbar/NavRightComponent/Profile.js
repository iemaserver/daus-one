import * as React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Badge,
  Menu,
  Fade,
  Button,
  MenuItem,
  ListItemIcon,
  ListItemText,
  ListItem,
  Avatar,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Profile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dropDownData = [
    {
      label: "Settings",
      icon: <SettingsIcon />,
    },
    { label: "Logout", icon: <LogoutIcon /> },
  ];

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        startIcon={<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuk205GMngZ-3S68a9_nc-XoBP0VWs8aNkFg&usqp=CAU" alt="profile Picture"  sx={{ width: 35, height: 35 }} ></Avatar>}
      >
       
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {dropDownData.map((item, i) =>(
          <MenuItem key={i} component={ListItem} onClick={handleClose}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </MenuItem>
        ))}
         
      </Menu>
    </div>
  );
}
