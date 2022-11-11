import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Notificationbell from './NavRightComponent/Notificationbell';
import Profile from './NavRightComponent/Profile';
import Messagebox from "./NavRightComponent/Messagebox"
import {IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
 
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{backgroundColor:"#07635E"}}>
      <Toolbar>
      <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         ARIA
        </Typography>
        
        <Notificationbell></Notificationbell>
        <Messagebox></Messagebox>
        <Profile></Profile>
      </Toolbar>
    </AppBar>
  </Box>
  );
}
