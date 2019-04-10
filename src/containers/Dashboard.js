import React from "react";
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
import Sidebar from "./Sidebar";
import Gridd from './Gridd'
import dashboardRoutes from "routes/dashboard.jsx";
import ProtectedRoute from '../utils/ProtectedRoute'
import appStyle from "assets/jss/material-dashboard-pro-react/layouts/dashboardStyle.jsx";

import image from "assets/img/sidebar-2.jpg";
import logo from "assets/img/mask.png";
import data from '../variables/data'
import Profile from './Profile'
import Tablex from '../views/Tables/ReactTables'

var ps;
const pages = 
  {
    path: "/timeline-page",
    name: "Timeline Page",
    mini: "TP",
    component: TimelinePage
  }

const dash = [    
  {
  collapse: false,
  path: "/",
  name: "Home",
  state: "openPages",
  icon: Image,
},
{
    collapse: false,
    path: "/login",
    name: "Settings",
    state: "openPages",
    icon: Image,
    views: pages
  },
  {
    collapse: false,
    path: "/register",
    name: "Notifications",
    state: "openPages",
    icon: Image,
    views: pages
  },
  {
    collapse: false,
    path: "/messages",
    name: "Messages",
    state: "openPages",
    icon: Image,
  },
  {
    collapse: false,
    path: "/filter",
    name: "Filter Members",
    state: "openPages",
    icon: Image,
    views: pages
  }
]

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      miniActive: false
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
    console.log("DASHBOARD",classes)
    const mainPanel =
      classes.mainPanel +
      " " +
      cx({
        [classes.mainPanelSidebarMini]: this.state.miniActive,
        [classes.mainPanelWithPerfectScrollbar]:
          navigator.platform.indexOf("Win") > -1
      });
    return (
      <div className={classes.wrapper}>
        <Sidebar
          routes={dash}
          logoText={"PYC"}
          logo={logo}
          // image={image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color="green"
          bgColor="black"
          miniActive={this.state.miniActive}
          {...rest}
        />
        <div className={mainPanel} ref="mainPanel">
          <Header
            sidebarMinimize={this.sidebarMinimize.bind(this)}
            miniActive={this.state.miniActive}
            routes={dashboardRoutes}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />
        <div className={classes.content}>
            <div className={classes.container}>
             {/* <Switch>
               <ProtectedRoute path={`${match.path}`+"/summary"} component/>
             </Switch> */}
             {/* <Gridd /> */}
              <Profile />
            </div>
        </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(appStyle)(Dashboard);
