
import React from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <List component="nav">
        <ListItem button component={Link} to="/">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/table">
          <ListItemText primary="Table" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/charts">
          <ListItemText primary="Charts" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/calendar">
          <ListItemText primary="Calendar" />
        </ListItem>
        {/* <Divider />
        <ListItem button component={Link} to="/kanban">
          <ListItemText primary="Kanban" />
        </ListItem> */}
      </List>
    </div>
  );
};

export default Sidebar;
