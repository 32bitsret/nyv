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
        <GridContainer>
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
                    {/* <Warning /> */}
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
                  {/* <DateRange /> */}
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
                  {/* <LocalOffer /> */}
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
                  {/* <LocalOffer /> */}
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
                  {/* <LocalOffer /> */}
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
                  {/* <LocalOffer /> */}
                    <p>
                      Employment statistics of members
                    </p>
                </div>
              </CardFooter>
              </a>
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