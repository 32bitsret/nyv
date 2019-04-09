
import React, { Component } from 'react'
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
// import Table from "components/Table/Table.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import imagee from '../assets/img/apple-icon.png'
import PropTypes from "prop-types";
import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";
//  import Table from "components/Table/Table.jsx";
import Table from './Table'

class Landing extends Component {
 state = {
    value: 0
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} >
            <Table/>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(dashboardStyle)(Landing)