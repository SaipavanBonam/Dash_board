
import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ThemeContext } from '../ThemeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Navbar = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Admin Dashboard
        </Typography>
        <IconButton color="inherit" onClick={toggleTheme}>
          <Brightness4Icon />
        </IconButton>
      </Toolbar>
    </AppBar>
    
  );
};

export default Navbar;
