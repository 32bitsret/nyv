import React from "react";
import cx from "classnames";
import { connect } from "react-redux"
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Image from "@material-ui/icons/Image";
// core components
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Gridd from './Gridd'
import ProtectedRoute from '../utils/ProtectedRoute'
import appStyle from "assets/jss/material-dashboard-pro-react/layouts/dashboardStyle.jsx";
import image from "assets/img/sidebar-2.jpg";
import logo from "assets/img/logo.jpg";
import data from '../variables/data'
import Profile from './Profile'
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import Tablex from '../views/Tables/ReactTables'
import Snackbar from "components/Snackbar/Snackbar.jsx";
import AddAlert from "@material-ui/icons/AddAlert";
import NotificationItem from './notificationItem'
import User from '../variables/UserData'

var ps;

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      miniActive: false,
      isAdmin: false
    };
    this.resizeFunction = this.resizeFunction.bind(this);
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.mainPanel, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", this.resizeFunction);
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
    window.removeEventListener("resize", this.resizeFunction);
  }
  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0;
      if (this.state.mobileOpen) {
        this.setState({ mobileOpen: false });
      }
    }
  }


  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  getRoute() {
    return this.props.location.pathname !== "/maps/full-screen-maps";
  }
  sidebarMinimize() {
    this.setState({ miniActive: !this.state.miniActive });
  }
  resizeFunction() {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  }

  render() {
    const { classes, match, ...rest } = this.props;
    console.log(`${match.path}`+"/home")
    console.log("Notifications",this.props)
    const mainPanel =
      classes.mainPanel +
      " " +
      cx({
        [classes.mainPanelSidebarMini]: this.state.miniActive,
        [classes.mainPanelWithPerfectScrollbar]:
          navigator.platform.indexOf("Win") > -1
      });
    
    const route = this.state.isAdmin?data.dashAdmin:data.dashUser
    const display = this.state.isAdmin?(<Gridd/>):(<Profile dash={data.dashUser}/>)
    return (
      <div className={classes.wrapper}>
        <Sidebar
          routes={route}
          logoText={"PYC"}
          logo={logo}
          // image={image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color="green"
          bgColor="black"
          miniActive={this.state.miniActive}
          userData={User}
          {...rest}
        />
        <div className={mainPanel} ref="mainPanel">
          <Header
            sidebarMinimize={this.sidebarMinimize.bind(this)}
            miniActive={this.state.miniActive}
            routes={route}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />
        <div className={classes.content}>
            {/* <div className={classes.container}>
               <SnackbarContent
                    message={
                      'INFO - This is a regular notification made with color="info"'
                    }
                    close
                    color="info"
                  />
                <Snackbar
                    place="tl"
                    color="info"
                    icon={AddAlert}
                    message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
                    open={this.state.tl}
                    closeNotification={() => this.setState({ tl: false })}
                    close
                    />
            </div> */}      
          </div>
        </div>
      </div>
    );
  }
}

Notifications.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    ...state
  }
}
export default connect(mapStateToProps, {})(withStyles(appStyle)(Notifications));
