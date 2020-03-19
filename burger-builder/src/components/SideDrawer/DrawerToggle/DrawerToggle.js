import React, { Component } from "react";
import classes from './DrawerToggle.module.css'

class DrawerToggle extends Component {

    state = {
        class_name : true
    }
  render() {
    return (
      <div className={[this.state.class_name ? classes.Container : classes.Change,classes.NoSelect].join(' ')} onClick={ this.props.toggle}>
        <div className={classes.Bar1}></div>
        <div className={classes.Bar2}></div>
        <div className={classes.Bar3}></div>
      </div>
    );
  }
}

export default DrawerToggle;
