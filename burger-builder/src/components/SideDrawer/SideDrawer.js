import React from "react";

import Logo from "../LOGO/Logo";
import NavigationItems from "../Navigation/NavigationItems";
import classes from "./SideDrawer.module.css";
import BackDrop from "../UI/BackDrop/BackDrop";
import Aux from "../../hoc/Auxilary";

const sideDrawer = props => {
  return (
    <Aux>
      <BackDrop show={props.open} clicked={props.click} />
      <div
        className={[
          classes.SideDrawer,
          props.open ? classes.Open : classes.Close
        ].join(" ")}
      >
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
