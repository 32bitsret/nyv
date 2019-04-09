import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import PagesHeader from "./PagesHeader";
// core components
import Footer from "./Footer";

import pagesRoutes from "routes/pages.jsx";

import pagesStyle from "assets/jss/material-dashboard-pro-react/layouts/pagesStyle.jsx";

import bgImage from "assets/img/register.jpeg";
import Landing from './Landing'
class Pages extends React.Component {
  componentDidMount() {
    document.body.style.overflow = "unset";
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <PagesHeader {...rest} />
        <div className={classes.wrapper} ref="wrapper">
            <div
                className={classes.fullPage}
                style={{ backgroundImage: "url(" + bgImage + ")" }}
            >
             <Landing />
            <Footer white />
          </div>
        </div>
      </div>
    );
  }
}

Pages.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(pagesStyle)(Pages);
