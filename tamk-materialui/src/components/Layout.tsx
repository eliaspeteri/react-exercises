import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';
import PermanentDrawer from './PermanentDrawer';
import SimpleMenu from './SimpleMenu';

const Layout = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <PermanentDrawer />
          <SimpleMenu />
        </Toolbar>
      </AppBar>
      <span>Home View</span>
      <Outlet />
    </>
  );
};

export default Layout;
