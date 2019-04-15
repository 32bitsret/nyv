import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import PagesHeader from "../PagesHeader";
import Footer from "../Footer";
import pagesStyle from "assets/jss/material-dashboard-pro-react/layouts/pagesStyle.jsx";
import bgImage from "assets/img/riyo.jpg";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Accordion from "components/Accordion/Accordion.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Speech5Details from "./Speech5Detail"

class Speech5 extends React.Component {
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
              <Speech5Details/>
              <Footer white/>
            </div>
          </div>
      </div>
    );
  }
}

Speech5.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(pagesStyle)(Speech5);
