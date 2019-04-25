import React ,{Component} from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux"
import Timeline from "@material-ui/icons/Timeline";
import CardIcon from "components/Card/CardIcon.jsx";
import {
  emailsSubscriptionChart,
} from "variables/charts";
import ChartistGraph from "react-chartist";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import { getProfile , getAllProfile} from "../redux/actions/dashboardAction"
import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";
import members from "../variables/moreMembers"
import {
  extractLGA,
  extractEducation,
  extractDisability,
  extractMaritalStatus,
  extractGender,
  extractEmployment
} from "../utils/Gridd/Extraction"
import chartsStyle from "assets/jss/material-dashboard-pro-react/views/chartsStyle.jsx";


let general
let gender
let education
let employment

class Gridd extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: 0,
      members: []
    }
  }

  componentDidMount(){
    this.props.getAllProfile()
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      members: nextProps.dashboard.allMembers
    })
  }

  handleChange = (event, value) => {
      this.setState({ value });
  };

  handleChangeIndex = index => {
      this.setState({ value: index });
  };
  
  render() {
    const { classes } = this.props;
    let members = this.state.members
    if(this.state.members !== null){   
    education = {
    data: {
      labels: [
        "CERT",
        "Olevel",
        "ND",
        "HND",
        "NCE",
        "Degree",
        "MSC",
        "PHD"
      ],
      series: [[
        extractEducation(members, "CERT"), 
        extractEducation(members, "OLEVEL"), 
        extractEducation(members, "ND"), 
        extractEducation(members, "HND"), 
        extractEducation(members, "NCE"),
        extractEducation(members, "Degree"), 
        extractEducation(members, "MSC"), 
        extractEducation(members, "PHD")
      ]]
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

   employment = {
    data: {
      labels: [
        "Employed",
        "Not Employed",
      ],
      series: [[
        extractEmployment(members, "employed"), 
        extractEmployment(members, "not employed")
      ]]
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
  
  
 general = {
    data: {
      labels: [
        "Total",
        "Males",
        "Females",
        "Disabled",
        "Not disabled",
        "Divorced",
        "Single",
        "Widowed",
        "Married",
      ],
      series: [[
        members.length, 
        extractGender(members,"male"), 
        extractGender(members,"female"), 
        extractDisability(members,"yes"),       
        extractDisability(members,"no"), 
        extractMaritalStatus(members,"divorced"), 
        extractMaritalStatus(members,"single"), 
        extractMaritalStatus(members,"widowed")||extractMaritalStatus(members,"Widowed"), 
        extractMaritalStatus(members,"married")
      ]]
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
  
  const pieChart = {
    data: {
      labels: ["62%", "32%"],
      series: [
        62,
         32]
    },
    options: {
      height: "230px"
    }
  };
  

  
  // const employment = {
  //   data: {
  //     labels: ["%", "32%"],
  //     series: [
  //       extractEmployment(members,"employed"), 
  //       extractEmployment(members,"not employed")]
  //   },
  //   options: {
  //     height: "230px"
  //   }
  // };


  gender = {
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
        "Lang/N", 
        "Lang/S",
        "Mangu",
        "Mikang",
        "Pankshin",
        "Qua'an Pan",
        "Riyom",
        "Shendam",
        "Wase",
        "Other"
      ],
      series: [[
        extractLGA(members, "Barkin Ladi"), 
        extractLGA(members, "Bassa"),
        extractLGA(members, "Bokkos"), 
        extractLGA(members, "Jos East"), 
        extractLGA(members, "Jos North"), 
        extractLGA(members, "Jos South"), 
        extractLGA(members, "Kanam"), 
        extractLGA(members, "Kanke"), 
        extractLGA(members, "Langtang North"), 
        extractLGA(members, "Langtang South"), 
        extractLGA(members, "Mangu"), 
        extractLGA(members, "Mikang"), 
        extractLGA(members, "Pankshin"), 
        extractLGA(members, "Qua'an Pan"), 
        extractLGA(members, "Riyom"), 
        extractLGA(members, "Shendam"), 
        extractLGA(members, "Wase"),
        extractLGA(members, "Others")
      ]]
    },
    options: {
      axisX: {
        showGrid: false
      },
      low: 0,
      high: 10,
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
  
  console.log("PIE CHART", extractEmployment(members,"employed"))
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
          <GridItem xs={12} sm={12} md={6} lg={4}>
          <Card chart >
            <CardHeader color="success" className={classes.cardHeaderHover}>
              <ChartistGraph
                className="ct-chart-white-colors"
                data={employment.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
              
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>EMPLOYMENT SUMMARY</h4>
                For 17 Local Government Areas and others
              <p className={classes.cardCategory}>
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </div>
      )
    return (
      <div>
        {display}
      </div>
    )
  }
}}

const mapStateToProps = (state) => {
  return {
    dashboard: state.dashboard
  }
}

export default connect(mapStateToProps, {
  getProfile, 
  getAllProfile
})(withStyles(dashboardStyle)(Gridd))