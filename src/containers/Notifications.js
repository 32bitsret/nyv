import React from "react";
import cx from "classnames";
import { connect } from "react-redux"
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import withStyles from "@material-ui/core/styles/withStyles";
import Header from "./Header";
import Sidebar from "./Sidebar";
import appStyle from "assets/jss/material-dashboard-pro-react/layouts/dashboardStyle.jsx";
import logo from "assets/img/pyclogo.png";
import data from '../variables/data'
import NotificationItem from './notificationItem'
import User from '../variables/UserData'
import image from "assets/img/riyo.jpg";
import { getProfile } from "../redux/actions/dashboardAction"


class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      miniActive: false,
      isAdmin: false,
      user:{}
    };
    this.resizeFunction = this.resizeFunction.bind(this);
  }
  componentDidMount() {
    // if (navigator.platform.indexOf("Win") > -1) {
    //   ps = new PerfectScrollbar(this.refs.mainPanel, {
    //     suppressScrollX: true,
    //     suppressScrollY: false
    //   });
    //   document.body.style.overflow = "hidden";
    // }
    window.addEventListener("resize", this.resizeFunction);
    this.props.getProfile(this.props.user.phone)
  }

  componentWillReceiveProps(nextProps){
    // console.log("NOTIFICATIONS:",nextProps)
  }

  omponentWillUnmount() {
    // if (navigator.platform.indexOf("Win") > -1) {
    //   ps.destroy();
    // }
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
    const mainPanel =
      classes.mainPanel +
      " " +
      cx({
        [classes.mainPanelSidebarMini]: this.state.miniActive,
        [classes.mainPanelWithPerfectScrollbar]:
          navigator.platform.indexOf("Win") > -1
      });
    
    const route = this.props.user.role === "user" ? data.dashUser : data.dashAdmin 
    const display = this.props.user.role === "user" ? (<NotificationItem/> ) : (<Redirect to="/"/>)
    return (
      <div className={classes.wrapper}>
        <Sidebar
          routes={route}
          logoText={"PYC"}
          logo={logo}
          image={image}
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
          {display}   
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
    user:state.auth.user
  }
}
export default connect(mapStateToProps, {getProfile})(withStyles(appStyle)(Notifications));
