import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import Info from "@material-ui/icons/Info";
import LocationOn from "@material-ui/icons/LocationOn";
import Gavel from "@material-ui/icons/Gavel";
import HelpOutline from "@material-ui/icons/HelpOutline";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Accordion from "components/Accordion/Accordion.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";
import Table from './Table'
import {getAllProfile} from "../redux/actions/dashboardAction"
import {connect} from "react-redux"
import LgaTables from "./LgaTables"
import SearchResult from "./SearchResult"
import {FILTERATION_DONE} from "../redux/Constants"
import axios from "axios"
import store from "../store"


const styles = {
  cardTitle,
  pageSubcategoriesTitle: {
    color: "#3C4858",
    textDecoration: "none",
    textAlign: "center"
  },
  cardCategory: {
    margin: "0",
    color: "#999999"
  }
};

class SearchDetail extends React.Component {
   state = {
    arr:[]
  }
  componentDidMount(){
    this.props.getAllProfile()//needed for toggling displays

  }
  render() {
    const { classes } = this.props;
    const display = this.props.dashboard.isloading ? 
        <GridContainer>
          <GridItem xs={6} lg={8}>
            <Card>
               <CardHeader color="primary" icon>
               </CardHeader>
              <CardBody>
                <h4 className={classes.cardIconTitle}>Loading...</h4>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={6} md={6} xs={6} lg={12}>
              {display}
          </GridItem>
        </GridContainer>
        :
        <SearchResult/>
    return (
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader>
                <h4 className={classes.cardTitle}>
                  DATA STATISTICS FOR {} LOCAL GOVERNMENT AREA
                </h4>
                  <p className={classes.cardCategory}>                  
                </p>
              </CardHeader>
              <CardBody>
                {display}
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
   dashboard: state.dashboard
  }
}

export default connect(mapStateToProps, {getAllProfile})(withStyles(styles)(SearchDetail));