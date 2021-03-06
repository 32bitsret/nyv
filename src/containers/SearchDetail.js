import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";
import {getAllProfile} from "../redux/actions/dashboardAction"
import {connect} from "react-redux"
import SearchResult from "./SearchResult"
import Button from "components/CustomButtons/Button.jsx";
import {withRouter} from "react-router-dom"

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
                <Button
                  color="success"
                  onClick={() => this.props.history.push("/statistics")}
                >
                  Back
                </Button>
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

export default connect(mapStateToProps, {getAllProfile})(withRouter(withStyles(styles)(SearchDetail)));