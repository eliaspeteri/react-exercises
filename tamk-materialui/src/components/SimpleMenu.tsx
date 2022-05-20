import React from 'react';
import {
  Avatar,
  Button,
  Divider,
  Menu,
  MenuItem,
  Typography
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const SimpleMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'flex-end' }}>
      <Button
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <Avatar
          alt='Remy Sharp'
          src='https://material-ui.com/static/images/avatar/1.jpg'
        />
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Avatar
            alt='Remy Sharp'
            src='https://material-ui.com/static/images/avatar/1.jpg'
          />{' '}
          <Typography>Remy Sharp</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <PersonIcon />
          Profile View
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <SettingsIcon />
          Settings View
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <LogoutIcon />
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default SimpleMenu;
