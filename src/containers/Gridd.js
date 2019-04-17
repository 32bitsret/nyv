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



const education = {
  data: {
    labels: [
      "BSc",
      "BEng",
      "HND",
      "ND",
      "NCE",
      "WAEC",
      "PRIMARY SCHOOL",
      "MASTERS",
      "PHD",
    ],
    series: [[20, 43, 32, 80, 55, 53, 32, 34, 68]]
  },
  options: {
    axisX: {
      showGrid: false
    },
    low: 0,
    high: 200,
    chartPadding: {
      top: 0,
      right: 5,
      bottom: 0,
      left: 0
    }
  },
  responsiveOptions: [
    [
      "screen and (max-width: 640px)",
      {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function(value) {
            return value[0];
          }
        }
      }
    ]
  ],
  animation: {
    draw: function(data) {
      if (data.type === "bar") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * 80,
            dur: 500,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};


const general = {
  data: {
    labels: [
      "Total",
      "Males",
      "Females",
      "Disabled",
      "Not disabled",
      "divorced",
      "single",
      "Widowed",
      "married",
    ],
    series: [[20, 43, 32, 80, 55, 53, 32, 34, 68]]
  },
  options: {
    axisX: {
      showGrid: false
    },
    low: 0,
    high: 200,
    chartPadding: {
      top: 0,
      right: 5,
      bottom: 0,
      left: 0
    }
  },
  responsiveOptions: [
    [
      "screen and (max-width: 640px)",
      {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function(value) {
            return value[0];
          }
        }
      }
    ]
  ],
  animation: {
    draw: function(data) {
      if (data.type === "bar") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * 80,
            dur: 500,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

const gender = {
  data: {
    labels: [
      "B/Ladi",
      "Bassa",
      "Bokkos",
      "Jos/E",
      "Jos/N",
      "Jos/S",
      "Kanam",
      "Kanke",
      "Langtang/N", 
      "Langtang/S",
      "Mangu",
      "Mikang",
      "Pankshin",
      "Qua'an Pan",
      "Riyom",
      "Shendam",
      "Wase",
    ],
    series: [[20, 43,20, 43, 32, 80, 55, 53, 32, 34, 68, 80, 55, 53, 32, 34, 68]]
  },
  options: {
    axisX: {
      showGrid: false
    },
    low: 0,
    high: 200,
    chartPadding: {
      top: 0,
      right: 5,
      bottom: 0,
      left: 0
    }
  },
  responsiveOptions: [
    [
      "screen and (max-width: 640px)",
      {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function(value) {
            return value[0];
          }
        }
      }
    ]
  ],
  animation: {
    draw: function(data) {
      if (data.type === "bar") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * 80,
            dur: 500,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

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
    console.log("INSIDE GRID", this.props.dashboard)

     const display = this.props.dashboard.isloading ? (       
     <GridContainer justify="center">
       <div>loading...</div>
    </GridContainer>
    ) :
      ( 
        <div>
        <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart >
            <CardHeader color="success" className={classes.cardHeaderHover}>
              <ChartistGraph
                className="ct-chart-white-colors"
                data={general.data}
                type="Bar"
                options={general.options}
                responsiveOptions={general.responsiveOptions}
                listener={general.animation}
              />
              
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>GENERAL PROFILE SUMMARY</h4>
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
        <GridItem xs={12} sm={12} md={6}>
          <Card chart >
            <CardHeader color="success" className={classes.cardHeaderHover}>
              <ChartistGraph
                className="ct-chart-white-colors"
                data={education.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
              
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>GENERAL EDUCATION SUMMARY</h4>
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
      </GridContainer>

      <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
          <Card chart >
            <CardHeader color="success" className={classes.cardHeaderHover}>
              <ChartistGraph
                className="ct-chart-white-colors"
                data={gender.data}
                type="Bar"
                options={education.options}
                responsiveOptions={education.responsiveOptions}
                listener={education.animation}
              />
              
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>GENERAL POPULATION SUMMARY</h4>
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
      </GridContainer>
      </div>
      )
    return (
      <div>
        {display}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
     dashboard: state.dashboard
  }
}

export default connect(mapStateToProps, {getProfile})(withStyles(dashboardStyle)(Gridd))