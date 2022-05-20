import React from 'react';
import Drawer from '@mui/material/Drawer';
import {
  Avatar,
  Collapse,
  CssBaseline,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material';
import List from '@mui/material/List';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function PermanentDrawerLeft() {
  const [open, setOpen] = React.useState(false);
  const handleClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setOpen(!open);
  };

  const handleProfileClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  const handleSettingsClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <div>
      <CssBaseline />
      <Drawer variant='permanent' anchor='left'>
        <Toolbar>
          <Typography align='center'>TAMK</Typography>
        </Toolbar>
        <Divider />
        <List>
          <ListItem>
            <Avatar
              alt='Remy Sharp'
              src='https://material-ui.com/static/images/avatar/1.jpg'
            />
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography align='center' color='textPrimary'>
                Your Name Here
              </Typography>
              <Typography align='center' color='textSecondary'>
                Add title or description here
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ViewQuiltIcon />
            </ListItemIcon>
            <ListItemText primary='Home' />
          </ListItem>
          <ListItem button onClick={handleClick}>
            <ListItemText primary='Menu' />
            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem button onClick={handleProfileClick}>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary='Profile View'></ListItemText>
              </ListItem>
              <ListItem button onClick={handleSettingsClick}>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary='Settings View'></ListItemText>
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Drawer>
    </div>
  );
}
