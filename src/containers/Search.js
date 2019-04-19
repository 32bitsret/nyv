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
import User from '../variables/UserData'
var ps;

class Search extends React.Component {
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
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.mainPanel, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }
    this.setState({isAdmin: this.checkUserRole(User)[0]})
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

    checkUserRole = User => {
    console.log("CONSOLE", User)
    let status = User.map(user => {
      if(user.userRole === "Admin" || user.userRole === "admin"){
        return true
      }
      else if(user.userRole === "User" || user.userRole === "user" ){
        return false
      }
    })
    console.log("CONSOLE STATUS", status)
    return status
  }

  render() {
    const { classes, match, ...rest } = this.props;
    console.log(`${match.path}`+"/home")
    console.log("Search",this.props.user.role)
    const mainPanel =
      classes.mainPanel +
      " " +
      cx({
        [classes.mainPanelSidebarMini]: this.state.miniActive,
        [classes.mainPanelWithPerfectScrollbar]:
          navigator.platform.indexOf("Win") > -1
      });
    
    const route = this.props.user.role === "admin" ? data.dashAdmin:data.dashUser
    // const display = this.props.user.role === "admin" ? <SearchDetail/> : <Redirect to="/"/>
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
            <div className={classes.container}>
              {/* {display} */}
            </div>
        </div>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return{
    user:state.auth.user
  }
}
export default connect(mapStateToProps, {})(withStyles(appStyle)(Search));
