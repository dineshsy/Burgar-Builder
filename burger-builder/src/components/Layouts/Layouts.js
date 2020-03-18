import React from "react";
import Aux from '../../hoc/Auxilary'
import classes from './Layouts.module.css'
import Toolbar from '../ToolBar/Toolbar'

const layout = (props) => (
    <Aux>
    <Toolbar/>
    <main className ={classes.contents}>
        {props.children}
    </main>
    </Aux>
)

export default layout;