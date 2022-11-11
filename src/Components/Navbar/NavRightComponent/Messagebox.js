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
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';


export default function Messagebox() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const NotificationData = [
    {
      label: "Shubham",icon: <SettingsIcon />,desc:"profile has been verified"},
      {label: "Siddharth",icon: <SettingsIcon />,desc:"profile has been verified"},
      {label: "Ironman",icon: <SettingsIcon />,desc:"profile has been verified"},
      {label: "Airbender",icon: <SettingsIcon />,desc:"profile has been verified"}
   
  ];

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Badge badgeContent={4} color="error">
          <QuestionAnswerIcon  sx={{ width: 30, height: 25, color: "white" }} />
        </Badge>
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
        {NotificationData.map((item, i) =>(
          <MenuItem key={i} component={ListItem} onClick={handleClose}>
            <ListItemIcon><Avatar sx={{ width: 30, height: 25, color: "white" }}>{item.label[0].toUpperCase()}</Avatar></ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </MenuItem>
        ))}
         
      </Menu>
    </div>
  );
}
