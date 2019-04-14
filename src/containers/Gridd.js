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

import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";

class Gridd extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: 0
    }
  }
    handleChange = (event, value) => {
        this.setState({ value });
    };
    handleChangeIndex = index => {
        this.setState({ value: index });
    };
    
  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* <GridContainer xs={12} sm={12} md={12} lg={12}>
          <GridItem xs={12} sm={6} md={6} lg={4}>
            <Card >
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Icon>content_copy</Icon>
                </CardIcon>
                <h1 className={classes.cardCategory}>EDUCATION</h1>
                <h3 className={classes.cardTitle}>
                  Category
                </h3>
              </CardHeader>
              <CardBody>
                <div >
                  <h1>431</h1>
                </div>
              </CardBody>
              <a href="/dashboard/education-summary" >
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                  </Danger>
                  <p>
                    Education statistics of members
                  </p>
                </div>
              </CardFooter>
              </a>
            </Card>pageXOffset
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={4}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Store />
                </CardIcon>
                <p className={classes.cardCategory}>GENDER</p>
                <h3 className={classes.cardTitle}>Category</h3>
              </CardHeader>
              <CardBody>
                <div>
                  <h1>431</h1>
                </div>
              </CardBody>
              <a href="#pablo">
              <CardFooter stats>
                <div className={classes.stats}>
                
                   <p>
                     Gender statistics of members
                   </p>
                </div>
              </CardFooter>
              </a>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={4}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Icon>info_outline</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>EMPLOYMENT STATUS</p>
                <h3 className={classes.cardTitle}>Category</h3>
              </CardHeader>
              <CardBody>
                <div >
                  <h1>431</h1>
                </div>
              </CardBody>
              <a href="#pablo">
              <CardFooter stats>
                <div className={classes.stats}>
                 
                    <p>
                      Employment statistics of members
                    </p>
                </div>
              </CardFooter>
              </a>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={4}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <i className="fab fa-twitter" />
                </CardIcon>
                <p className={classes.cardCategory}>APPLICANTS</p>
                <h3 className={classes.cardTitle}>Category</h3>
              </CardHeader>
              <CardBody>
                <div >
                  <h1>431 people</h1>
                </div>
              </CardBody>
              <a href="#pablo">
              <CardFooter stats>
                <div className={classes.stats}>
                 
                    <p>
                      Employment statistics of members
                    </p>
                </div>
              </CardFooter>
              </a>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={4}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <i className="fab fa-twitter" />
                </CardIcon>

                <p className={classes.cardCategory}>APPLICANTS</p>
                <h3 className={classes.cardTitle}>Category</h3>
              </CardHeader>
              <CardBody>
                <div>
                  <h1>431</h1>
                </div>
              </CardBody>
              <a href="#pablo" >
              <CardFooter stats>
                <div className={classes.stats}>
                 
                    <p>
                      Employment statistics of members
                    </p>
                </div>
              </CardFooter>
              </a>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={4}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <i className="fab fa-twitter" />
                </CardIcon>
                <h1 className={classes.cardCategory}>APPLICANTS</h1>
                <h4 className={classes.cardTitle}>Category</h4>
              </CardHeader>
              <CardBody>
                <div >
                  <h1>431</h1>
                </div>
              </CardBody>
              <a href="#pablo" >
              <CardFooter stats>
                <div className={classes.stats}>
                 
                    <p>
                      Employment statistics of members
                    </p>
                </div>
              </CardFooter>
              </a>
            </Card>
          </GridItem>
        </GridContainer> */}

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart className={classes.cardHover}>
              <CardHeader color="info" className={classes.cardHeaderHover}>
                <ChartistGraph
                  className="ct-chart-white-colors"
                  data={dailySalesChart.data}
                  type="Line"
                  options={dailySalesChart.options}
                  // listener={dailySalesChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Daily Sales</h4>
                <p className={classes.cardCategory}>
                  {/* <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                  </span>{" "} */}
                  increase in today sales.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                 234 {/* <AccessTime /> updated 4 minutes ago */}
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart className={classes.cardHover}>
              <CardHeader color="warning" className={classes.cardHeaderHover}>
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
                <div className={classes.cardHoverUnder}>
                  <Tooltip
                    id="tooltip-top"
                    title="Refresh"
                    placement="bottom"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button simple color="info" justIcon>
                      <Refresh className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                  <Tooltip
                    id="tooltip-top"
                    title="Change Date"
                    placement="bottom"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button color="transparent" simple justIcon>
                      <Edit className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                </div>
                <h4 className={classes.cardTitle}>Email Subscriptions</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart className={classes.cardHover}>
              <CardHeader color="danger" className={classes.cardHeaderHover}>
                <ChartistGraph
                  className="ct-chart-white-colors"
                  data={completedTasksChart.data}
                  type="Line"
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                />
              </CardHeader>
              <CardBody>
                <div className={classes.cardHoverUnder}>
                  <Tooltip
                    id="tooltip-top"
                    title="Refresh"
                    placement="bottom"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button simple color="info" justIcon>
                      <Refresh className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                  <Tooltip
                    id="tooltip-top"
                    title="Change Date"
                    placement="bottom"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button color="transparent" simple justIcon>
                      <Edit className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                </div>
                <h4 className={classes.cardTitle}>Completed Tasks</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart className={classes.cardHover}>
              <CardHeader color="success" className={classes.cardHeaderHover}>
                <ChartistGraph
                  className="ct-chart-white-colors"
                  data={dailySalesChart.data}
                  type="Line"
                  options={dailySalesChart.options}
                  listener={dailySalesChart.animation}
                />
              </CardHeader>
              <CardBody>
                <div className={classes.cardHoverUnder}>
                  <Tooltip
                    id="tooltip-top"
                    title="Refresh"
                    placement="bottom"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button simple color="info" justIcon>
                      <Refresh className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                  <Tooltip
                    id="tooltip-top"
                    title="Change Date"
                    placement="bottom"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button color="transparent" simple justIcon>
                      <Edit className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                </div>
                <h4 className={classes.cardTitle}>Daily Sales</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                  </span>{" "}
                  increase in today sales.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
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
                <div className={classes.cardHoverUnder}>
                  <Tooltip
                    id="tooltip-top"
                    title="Refresh"
                    placement="bottom"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button simple color="info" justIcon>
                      <Refresh className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                  <Tooltip
                    id="tooltip-top"
                    title="Change Date"
                    placement="bottom"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button color="transparent" simple justIcon>
                      <Edit className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                </div>
                <h4 className={classes.cardTitle}>Email Subscriptions</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart className={classes.cardHover}>
              <CardHeader color="danger" className={classes.cardHeaderHover}>
                <ChartistGraph
                  className="ct-chart-white-colors"
                  data={completedTasksChart.data}
                  type="Line"
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                />
              </CardHeader>
              <CardBody>
                <div className={classes.cardHoverUnder}>
                  <Tooltip
                    id="tooltip-top"
                    title="Refresh"
                    placement="bottom"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button simple color="info" justIcon>
                      <Refresh className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                  <Tooltip
                    id="tooltip-top"
                    title="Change Date"
                    placement="bottom"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button color="transparent" simple justIcon>
                      <Edit className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                </div>
                <h4 className={classes.cardTitle}>Completed Tasks</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
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
    ...state
  }
}

export default connect(mapStateToProps, {})(withStyles(dashboardStyle)(Gridd))