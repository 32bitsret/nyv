import React from "react";
import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import pricingPageStyle from "assets/jss/material-dashboard-pro-react/views/pricingPageStyle.jsx";

class ContactusDetail extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container} style={{backgroundColor:"transparent"}}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <Card justify="center">
              <CardHeader>
                <h3 className={classes.title} style={{color:"green"}}><b><i>Contact Us</i></b></h3>
                <h4>
                  <b>
                   You can visit the Council at our office which is located  
                  </b>
                </h4>
                <h4>
                  <b>
                    Address:<i>Azi Nyako Youth Centre Dadin Kowa Jos.</i>
                  </b>
                </h4>
                <h4>
                  <b>
                   Our contact number:<i>+234 703 349 5786</i>
                  </b>
                </h4>  
                <h4>
                  <b>
                   Our visit days are Tuesdays and Thursdays from 10 am to 2 pm.
                  </b>
                </h4>          
              </CardHeader>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

ContactusDetail.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(pricingPageStyle)(ContactusDetail);
