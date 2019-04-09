import React ,{Component} from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
// import ContentCopy from "@material-ui/icons/ContentCopy";
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

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts";

import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";

class Gridd extends Component {
    state = {
        value: 0
      };
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
        <GridContainer>
          <GridItem xs={12} sm={6} md={6} lg={4}>
            <Card >
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>content_copy</Icon>
                </CardIcon>
                <h1 className={classes.cardCategory}>EDUCATION</h1>
                <h3 className={classes.cardTitle}>
                  Category
                </h3>
              </CardHeader>
              <a href="#pablo" onClick={e => alert()}>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    {/* <Warning /> */}
                  </Danger>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    Education statistics of members
                  </a>
                </div>
              </CardFooter>
              </a>
            </Card>
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
              <CardFooter stats>
                <div className={classes.stats}>
                  {/* <DateRange /> */}
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    Gender statistics of members
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={4}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <Icon>info_outline</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>EMPLOYMENT STATUS</p>
                <h3 className={classes.cardTitle}>Category</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  {/* <LocalOffer /> */}
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    Employment statistics of members
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={4}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <i className="fab fa-twitter" />
                </CardIcon>
                <p className={classes.cardCategory}>APPLICANTS</p>
                <h3 className={classes.cardTitle}>Category</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={4}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <i className="fab fa-twitter" />
                </CardIcon>
                <p className={classes.cardCategory}>APPLICANTS</p>
                <h3 className={classes.cardTitle}>Category</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={4}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <i className="fab fa-twitter" />
                </CardIcon>
                <p className={classes.cardCategory}>APPLICANTS</p>
                <h3 className={classes.cardTitle}>Category</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12}>
            <Card>
              <CardHeader color="success" icon>
                <CardIcon color="success">
                  <Language />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>
                  Global Sales by Top Locations
                </h4>
              </CardHeader>
              <CardBody>
                <GridContainer justify="space-between">
                  <GridItem xs={12} sm={12} md={5}>
                    {/* <Table
                      tableData={[
                        [
                          <img src={us_flag} alt="us_flag" />,
                          "USA",
                          "2.920",
                          "53.23%"
                        ],
                        [
                          <img src={de_flag} alt="us_flag" />,
                          "Germany",
                          "1.300",
                          "20.43%"
                        ],
                        [
                          <img src={au_flag} alt="us_flag" />,
                          "Australia",
                          "760",
                          "10.35%"
                        ],
                        [
                          <img src={gb_flag} alt="us_flag" />,
                          "United Kingdom",
                          "690",
                          "7.87%"
                        ],
                        [
                          <img src={ro_flag} alt="us_flag" />,
                          "Romania",
                          "600",
                          "5.94%"
                        ],
                        [
                          <img src={br_flag} alt="us_flag" />,
                          "Brasil",
                          "550",
                          "4.34%"
                        ]
                      ]}
                    /> */}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <VectorMap
                      map={"world_mill"}
                      backgroundColor="transparent"
                      zoomOnScroll={false}
                      containerStyle={{
                        width: "100%",
                        height: "280px"
                      }}
                      containerClassName="map"
                      regionStyle={{
                        initial: {
                          fill: "#e4e4e4",
                          "fill-opacity": 0.9,
                          stroke: "none",
                          "stroke-width": 0,
                          "stroke-opacity": 0
                        }
                      }}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(dashboardStyle)(Gridd)