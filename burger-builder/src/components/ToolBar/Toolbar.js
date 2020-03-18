import React from 'react';

import classes from "./Toolbar.module.css";
import Logo from '../LOGO/Logo';

const toolbar = props => (
    <header className = {classes.Toolbar}>
        <div>MENU</div>
        <Logo/>
        <div>nav</div>
    </header>
)

export default toolbar;