import React ,{Component} from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import TimelinePage from "views/Pages/Timeline.jsx";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Image from "@material-ui/icons/Image";
// core components
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "components/Sidebar/Sidebar.jsx";
import Gridd from './Gridd'
import dashboardRoutes from "routes/dashboard.jsx";
import data from '../variables/data'
import appStyle from "assets/jss/material-dashboard-pro-react/layouts/dashboardStyle.jsx";

import image from "assets/img/sidebar-2.jpg";
import logo from "assets/img/logo-white.svg";

class Members extends Component {
  render() {
    const { classes } = this.props
    console.log("MEMBERS", data)
    console.log("LOCATION", this.props)
    return (
      <div className={classes.wrapper}>
        {/* <Header
          routes={data.dash}
        /> */}
      </div>
    )
  }
}

export default withStyles(appStyle)(Members)