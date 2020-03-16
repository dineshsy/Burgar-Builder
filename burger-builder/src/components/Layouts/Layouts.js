import React from "react";
import Aux from '../../hoc/Auxilary'
import classes from './Layouts.module.css'

const layout = (props) => (
    <Aux>
    <div>ToolBAr, SideDrawer , Controls</div>
    <main className ={classes.contents}>
        {props.children}
    </main>
    </Aux>
)

export default layout;