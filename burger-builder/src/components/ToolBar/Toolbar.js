import React from 'react';

import classes from "./Toolbar.module.css";
import Logo from '../LOGO/Logo';
import NavigationItems from '../Navigation/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
const toolbar = props => (
  <header className={classes.Toolbar}>
    <DrawerToggle toggle = {props.toggler}/>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;