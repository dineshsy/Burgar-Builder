import React, { Component } from "react";
import Aux from "../../hoc/Auxilary";
import classes from "./Layouts.module.css";
import Toolbar from "../ToolBar/Toolbar";
import SideDrawer from "../SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideBar: false
  };

  showSideBarHandler = () => {
    let showSideBar = this.state.showSideBar;
    showSideBar = !showSideBar;
    this.setState({ showSideBar: showSideBar });
  };

  render() {
    return (
      <Aux>
        <Toolbar toggler={this.showSideBarHandler} />
        <SideDrawer
          open={this.state.showSideBar}
          click={this.showSideBarHandler}
        />
        <main className={classes.contents}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
