import React from 'react';

import burgerLogo from '../../assets/Images/burger-logo.png' ;
import classes from './logo.module.css'
const logo = props => (
    <div className= {classes.Logo}>
        <img src={burgerLogo} alt="Logo"/>
    </div>
);

export default logo;