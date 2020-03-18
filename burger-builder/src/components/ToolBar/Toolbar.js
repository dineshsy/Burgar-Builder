import React from 'react';

import classes from "./Toolbar.module.css";
import Logo from '../LOGO/Logo';
import NavigationItems from '../Navigation/NavigationItems'

const toolbar = props => (
    <header className = {classes.Toolbar}>
        <div>MENU</div>
        <Logo/>
        <NavigationItems/>
    </header>
)

export default toolbar;