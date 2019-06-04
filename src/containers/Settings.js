import React from "react";
import cx from "classnames";
import { connect } from "react-redux"
import PropTypes from "prop-types";
import {Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "./Header";
import Sidebar from "./Sidebar";
import appStyle from "assets/jss/material-dashboard-pro-react/layouts/dashboardStyle.jsx";
import logo from "assets/img/pyclogo.png";
import data from '../variables/data'
import User from '../variables/UserData'
import SettingsDetail from "./SettingsDetail"
import image from "assets/img/riyo.jpg";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      miniActive: false,
      isAdmin: true
    };
    this.resizeFunction = this.resizeFunction.bind(this);
  }
  componentDidMount() {
    this.setState({isAdmin: this.checkUserRole(User)[0]})
    window.addEventListener("resize", this.resizeFunction);
  }
  componentWillUnmount() {
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

    checkUserRole = User => {
    let status = User.map(user => {
      if(user.userRole === "Admin" || user.userRole === "admin"){
        return true
      }
      else if(user.userRole === "User" || user.userRole === "user" ){
        return false
      }
    })
    return status
  }

  render() {
    const { classes, match, ...rest } = this.props;
    // console.log(`${match.path}`+"/home")
    // console.log("Settings",this.props.user.role)
    const mainPanel =
      classes.mainPanel +
      " " +
      cx({
        [classes.mainPanelSidebarMini]: this.state.miniActive,
        [classes.mainPanelWithPerfectScrollbar]:
          navigator.platform.indexOf("Win") > -1
      });
    
    const route = this.props.user.role === "admin" ? data.dashAdmin:data.dashUser
    // const display = this.props.user.role === "admin" ? <SettingsDetail/> : <Redirect to="/"/>
    return (
      <div className={classes.wrapper}>
        <Sidebar
          routes={route}
          logoText={"PYC"}
          logo={logo}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          image={image}
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
            <div className={classes.container}>
             <SettingsDetail />
            </div>
        </div>
        </div>
      </div>
    );
  }
}

Settings.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return{
    user:state.auth.user
  }
}
export default connect(mapStateToProps, {})(withStyles(appStyle)(Settings));

