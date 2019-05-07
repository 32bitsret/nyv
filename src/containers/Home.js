import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import PagesHeader from "./PagesHeader";
import Footer from "./Footer";
import pagesStyle from "assets/jss/material-dashboard-pro-react/layouts/pagesStyle.jsx";
import {Redirect } from "react-router-dom";

class Pages extends React.Component {
  componentDidMount() {
    document.body.style.overflow = "unset";
  }
  render() {
    const { classes} = this.props;
    return (
      <div className={classes.wrapper} ref="wrapper">
        <Redirect  to="https://pycnewwebsite.herokuapp.com/index.html" />
      </div>
    );
  }
}

Pages.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(pagesStyle)(Pages);
