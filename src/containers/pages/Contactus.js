import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import PagesHeader from "../PagesHeader";
import Footer from "../Footer";
import pagesStyle from "assets/jss/material-dashboard-pro-react/layouts/pagesStyle.jsx";
import bgImage from "assets/img/riyo.jpg";
import ContactusDetail from "./ContactusDetail"

class ContactUs extends React.Component {
  componentDidMount() {
    document.body.style.overflow = "unset";
  }
  render() {
    const { classes, ...rest } = this.props;
    console.log("STYLES", classes)
    return (
      <div>
        <PagesHeader {...rest} />
          <div className={classes.wrapper} ref="wrapper">
              <div
                  className={classes.fullPage}
                  style={{ backgroundImage: "url(" + bgImage + ")" }}
              >
              <ContactusDetail/>
              <Footer white/>
            </div>
          </div>
      </div>
    );
  }
}

ContactUs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(pagesStyle)(ContactUs);
