import React ,{Component} from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";
import { connect } from "react-redux"
import Store from "@material-ui/icons/Store";
// import InfoOutline from "@material-ui/icons/InfoOutline";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";
import Place from "@material-ui/icons/Place";
import ArtTrack from "@material-ui/icons/ArtTrack";
import Language from "@material-ui/icons/Language";
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts";
import Group from "@material-ui/icons/Group"
import Email from "@material-ui/icons/Email"
import Notifications from "@material-ui/icons/Notifications"
import Person from "@material-ui/icons/Person"


import ChartistGraph from "react-chartist";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import { getProfile } from "../redux/actions/dashboardAction"
import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";

class Gridd extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: 0
    }
  }

  componentDidMount(){

  }
    handleChange = (event, value) => {
        this.setState({ value });
    };
    handleChangeIndex = index => {
        this.setState({ value: index });
    };
    
  render() {
    const { classes } = this.props;
    console.log("INSIDE GRID", this.props.auth)
    return (
      <div>
        
        <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
            <Card chart className={classes.cardHover}>
              <CardHeader color="success" className={classes.cardHeaderHover}>
                <ChartistGraph
                  className="ct-chart-white-colors"
                  data={emailsSubscriptionChart.data}
                  type="Bar"
                  options={emailsSubscriptionChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                />
                
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Education Summary</h4>
                  For 17 Local Government Areas
                <p className={classes.cardCategory}>
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  
                </div>
              </CardFooter>
            </Card>
          </GridItem>

          {/* <GridItem xs={12} sm={12} md={12}>
            <Card chart className={classes.cardHover}>
              <CardHeader color="success" className={classes.cardHeaderHover}>
                <ChartistGraph
                  className="ct-chart-white-colors"
                  data={emailsSubscriptionChart.data}
                  type="Bar"
                  options={emailsSubscriptionChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Email Subscriptions</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  
                </div>
              </CardFooter>
            </Card>
          </GridItem> */}
        </GridContainer>

        <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
            <Card chart className={classes.cardHover}>
              {/* <CardHeader color="success" className={classes.cardHeaderHover}>
               <h1 className={classes.cardTitle}>GENERAL SUMMARY</h1>
              
              </CardHeader> */}
              <CardBody>
               <h4 className={classes.cardTitle}><Person/>TOTAL: 20</h4>
               <h4 className={classes.cardTitle}><Person/>MALES: 300</h4>
               <h4 className={classes.cardTitle}><Person/>FEMALES: 400</h4>
                <p className={classes.cardCategory}>
                  {/* Total */}
                </p>
              </CardBody>
              <CardFooter chart>               
                <h1 className={classes.cardTitle}>GENERAL SUMMARY</h1>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <Card chart className={classes.cardHover}>
              {/* <CardHeader color="transparent" className={classes.cardHeaderHover}>
               <h1 className={classes.cardTitle}>PROFILE SUMMARY</h1>
              </CardHeader> */}
              <CardBody>
               <h4 className={classes.cardTitle}><Person/>{"  "} 20 SINGLE</h4>
               <h4 className={classes.cardTitle}><Person/>{"  "}  300 MARRIED</h4>
               <h4 className={classes.cardTitle}><Person/>{"  "}  40 DISABLED</h4>
               <h4 className={classes.cardTitle}><Person/>{"  "}  245 NOT DISABLED</h4>
                <p className={classes.cardCategory}>
                  {/* Total */}
                </p>
              </CardBody>
              <CardFooter chart>
                <h1 className={classes.cardTitle}>PROFILE SUMMARY</h1>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <Card chart className={classes.cardHover}>
              {/* <CardHeader color="transparent" className={classes.cardHeaderHover}>
               <h1 className={classes.cardTitle}>EDUCATION SUMMARY</h1>
              </CardHeader> */}
              <CardBody>
              <h4 className={classes.cardTitle}>BSC: 20</h4>
               <h4 className={classes.cardTitle}>BEng: 300</h4>
               <h4 className={classes.cardTitle}>ND: 400</h4>
               <h4 className={classes.cardTitle}>HND: 45</h4>
               <h4 className={classes.cardTitle}>O' LEVEL: 45</h4>
               <h4 className={classes.cardTitle}>MSC: 45</h4>
               <h4 className={classes.cardTitle}>PHD: 45</h4>
                <p className={classes.cardCategory}>
                  {/* Total */}
                </p>
              </CardBody>
              <CardFooter chart>
                <h1 className={classes.cardTitle}>EDUCATION SUMMARY</h1>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.emailsSubscriptionChart
  }
}

export default connect(mapStateToProps, {getProfile})(withStyles(dashboardStyle)(Gridd))