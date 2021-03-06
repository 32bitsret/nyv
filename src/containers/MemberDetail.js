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
import LgaTables from "./LgaTables"
import Heading from "components/Heading/Heading.jsx";


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

class MemberDetail extends React.Component {

  componentDidMount(){
    this.props.getAllProfile()
  }
  render() {
    const { classes } = this.props;
    const display = this.props.dashboard.isloading ? 
        <GridContainer>
          <GridItem xs={6} lg={6}>
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
        <LgaTables stat={this.props.dashboard}/>
    return (
      <div>
        <Heading
          title="GENERAL STATISTICS"
          textAlign="center"
          category={
              <span>
                <a href="/statistics">Refresh</a>
              </span>
          }
        />
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader>
                <h4 className={classes.cardTitle}>
                  DATA STATISTICS FOR LOCAL GOVERNMENT AREA
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

export default connect(mapStateToProps, {getAllProfile})(withStyles(styles)(MemberDetail));