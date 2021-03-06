import React from "react";
import cx from "classnames";
import { connect} from 'react-redux'
import PropTypes from "prop-types";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import withStyles from "@material-ui/core/styles/withStyles";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Gridd from './Gridd'
import appStyle from "assets/jss/material-dashboard-pro-react/layouts/dashboardStyle.jsx";
import image from "assets/img/riyo.jpg";
import logo from "assets/img/pyclogo.png";
import data from '../variables/data'
import Profile from './Profile'
import { getProfile } from "../redux/actions/dashboardAction"

import User from '../variables/UserData'


let newLGA = []
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      miniActive: false,
      isAdmin: false ,
      user: {}
    };
    this.resizeFunction = this.resizeFunction.bind(this);
  }
  componentDidMount() {
    this.setState({isAdmin: this.checkUserRole(this.props.auth.user)})
    this.props.getProfile(this.props.auth.user.phone)
    this.setState({user:this.props.auth.user })
    window.addEventListener("resize", this.resizeFunction);
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
      if(User.role === "Admin" || User.role === "admin"){
        return true
      }
      else if(User.role === "User" || User.role === "user" ){
        return false
      }
  }

  extract = (arr, value) => {
    arr.map(o => {
      if(o.lga === value){
        newLGA.push(o)
      }
    })
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
   
      
    const route = this.state.isAdmin?data.dashAdmin:data.dashUser
    const display = this.state.isAdmin?(<Gridd/>):(<Profile dash={User} value={this.state.user}/>)
     
    const main = this.props.dashboard.isWelcome ? ( 
      <div className={classes.wrapper}>
  
      </div>
    ) : (
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
          <div className={classes.container}>
            {display}
          </div>
      </div>
      </div>
    </div>
    )

  return (
      <div>
        {main}
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return{
     auth: state.auth,
     dashboard: state.dashboard
  }
}

export default connect(mapStateToProps,{getProfile})(withStyles(appStyle)(Dashboard));
