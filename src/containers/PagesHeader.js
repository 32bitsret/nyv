import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Menu from "@material-ui/icons/Menu";
// core components
import Button from "components/CustomButtons/Button";
import pagesHeaderStyle from "assets/jss/material-dashboard-pro-react/components/pagesHeaderStyle.jsx";
import logo from '../assets/img/logo.jpg'

class PagesHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  handleDrawerToggle = () => {
    this.setState({ open: !this.state.open });
  };
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? true : false;
  }
  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.setState({ open: false });
    }
  }
  render() {
    const { classes, color } = this.props;
    const appBarClasses = cx({
      [" " + classes[color]]: color
    });
    const trial = (
        <List className={classes.list}>
          
          <ListItem className={classes.listItem}>
            <a href="/aboutus" className={classes.navLink}>
              <ListItemText
                color="success"
                primary={"About us"}
                disableTypography={true}
                className={classes.listItemText}
              />
            </a>
          </ListItem>

          <ListItem className={classes.listItem}>
            <a href="/login" className={classes.navLink}>
              <ListItemText
                primary={"Login"}
                disableTypography={true}
                className={classes.listItemText}
              />
            </a>
          </ListItem>

          <ListItem className={classes.listItem}>
            <a href="/register" className={classes.navLink}>
          <ListItemText
                primary={"Sign Up"}
                disableTypography={true}
                className={classes.listItemText}
              />
            </a>
          </ListItem>

        </List>
    )
    return (
      <AppBar position="static" className={classes.appBar + appBarClasses}>
        <Toolbar className={classes.container}>
          <Hidden smDown>
            <div className={classes.flex}>
              <a href="/" className={classes.title} color="transparent">
                PLATEAU YOUTH COUNCIL
              </a>
            </div>
          </Hidden>
          <Hidden mdUp>
            <div className={classes.flex}>
              <a href="/" className={classes.title} color="transparent">
                PYC
              </a>
            </div>
          </Hidden>
          <Hidden smDown>{trial}</Hidden>
          <Hidden mdUp>
            <Button
              className={classes.sidebarButton}
              color="transparent"
              justIcon
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
            >
              <Menu />
            </Button>
          </Hidden>
          <Hidden mdUp>
            <Hidden mdUp>
              <Drawer
                variant="temporary"
                anchor={"right"}
                open={this.state.open}
                classes={{
                  paper: classes.drawerPaper
                }}
                onClose={this.handleDrawerToggle}
                ModalProps={{
                  keepMounted: true // Better open performance on mobile.
                }}
              >
                {trial}
              </Drawer>
            </Hidden>
          </Hidden>
        </Toolbar>
      </AppBar>
    );
  }
}

PagesHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"])
};

export default withStyles(pagesHeaderStyle)(PagesHeader);
