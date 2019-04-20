import React ,{Component} from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux"
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
import moreMembers from "../variables/moreMembers"
import {
  extractLGA,
  extractEducation,
  extractDisability,
  extractMaritalStatus,
  extractGender
} from "../utils/Gridd/Extraction"


let general
let gender
let education

class Gridd extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: 0,
      members: []
    }
  }

//   education = {
//     data: {
//       labels: [
//         "BSc",
//         "BEng",
//         "HND",
//         "ND",
//         "NCE",
//         "MASTERS",
//         "PHD",
//         "Olevel"
//       ],
//       series: [[
//         extractEducation(moreMembers, "BSc"), 
//         extractEducation(moreMembers, "BEng"), 
//         extractEducation(moreMembers, "HND"), 
//         extractEducation(moreMembers, "ND"), 
//         extractEducation(moreMembers, "NCE"), 
//         extractEducation(moreMembers, "MSC"), 
//         extractEducation(moreMembers, "PHD"),
//         extractEducation(moreMembers, "Olevel")
//       ]]
//     },
//     options: {
//       axisX: {
//         showGrid: false
//       },
//       low: 0,
//       high: 200,
//       chartPadding: {
//         top: 0,
//         right: 5,
//         bottom: 0,
//         left: 0
//       }
//     },
//     responsiveOptions: [
//       [
//         "screen and (max-width: 640px)",
//         {
//           seriesBarDistance: 5,
//           axisX: {
//             labelInterpolationFnc: function(value) {
//               return value[0];
//             }
//           }
//         }
//       ]
//     ],
//     animation: {
//       draw: function(data) {
//         if (data.type === "bar") {
//           data.element.animate({
//             opacity: {
//               begin: (data.index + 1) * 80,
//               dur: 500,
//               from: 0,
//               to: 1,
//               easing: "ease"
//             }
//           });
//         }
//       }
//     }
//   };
  
  
//  general = {
//     data: {
//       labels: [
//         "Total",
//         "Males",
//         "Females",
//         "Disabled",
//         "Not disabled",
//         "divorced",
//         "single",
//         "Widowed",
//         "married",
//       ],
//       series: [[
//         moreMembers.length, 
//         extractGender(moreMembers,"male"), 
//         extractGender(moreMembers,"female"), 
//         extractDisability(moreMembers,"yes"),       
//         extractDisability(moreMembers,"no"), 
//         extractMaritalStatus(moreMembers,"divorced"), 
//         extractMaritalStatus(moreMembers,"single"), 
//         extractMaritalStatus(moreMembers,"widowed"), 
//         extractMaritalStatus(moreMembers,"married")
//       ]]
//     },
//     options: {
//       axisX: {
//         showGrid: false
//       },
//       low: 0,
//       high: 200,
//       chartPadding: {
//         top: 0,
//         right: 5,
//         bottom: 0,
//         left: 0
//       }
//     },
//     responsiveOptions: [
//       [
//         "screen and (max-width: 640px)",
//         {
//           seriesBarDistance: 5,
//           axisX: {
//             labelInterpolationFnc: function(value) {
//               return value[0];
//             }
//           }
//         }
//       ]
//     ],
//     animation: {
//       draw: function(data) {
//         if (data.type === "bar") {
//           data.element.animate({
//             opacity: {
//               begin: (data.index + 1) * 80,
//               dur: 500,
//               from: 0,
//               to: 1,
//               easing: "ease"
//             }
//           });
//         }
//       }
//     }
//   };
  
//   gender = {
//     data: {
//       labels: [
//         "B/Ladi",
//         "Bassa",
//         "Bokkos",
//         "Jos/E",
//         "Jos/N",
//         "Jos/S",
//         "Kanam",
//         "Kanke",
//         "Langtang/N", 
//         "Langtang/S",
//         "Mangu",
//         "Mikang",
//         "Pankshin",
//         "Qua'an Pan",
//         "Riyom",
//         "Shendam",
//         "Wase",
//       ],
//       series: [[
//         extractLGA(moreMembers, "barkin ladi"), 
//         extractLGA(moreMembers, "bassa"),
//         extractLGA(moreMembers, "bokkos"), 
//         extractLGA(moreMembers, "jos-east"), 
//         extractLGA(moreMembers, "jos-north"), 
//         extractLGA(moreMembers, "jos-south"), 
//         extractLGA(moreMembers, "kanam"), 
//         extractLGA(moreMembers, "kanke"), 
//         extractLGA(moreMembers, "langtang-north"), 
//         extractLGA(moreMembers, "langtang-south"), 
//         extractLGA(moreMembers, "mangu"), 
//         extractLGA(moreMembers, "mikang"), 
//         extractLGA(moreMembers, "pankshin"), 
//         extractLGA(moreMembers, "qua'an pan"), 
//         extractLGA(moreMembers, "riyom"), 
//         extractLGA(moreMembers, "shendam"), 
//         extractLGA(moreMembers, "wase")
//       ]]
//     },
//     options: {
//       axisX: {
//         showGrid: false
//       },
//       low: 0,
//       high: 10,
//       chartPadding: {
//         top: 0,
//         right: 5,
//         bottom: 0,
//         left: 0
//       }
//     },
//     responsiveOptions: [
//       [
//         "screen and (max-width: 640px)",
//         {
//           seriesBarDistance: 5,
//           axisX: {
//             labelInterpolationFnc: function(value) {
//               return value[0];
//             }
//           }
//         }
//       ]
//     ],
//     animation: {
//       draw: function(data) {
//         if (data.type === "bar") {
//           data.element.animate({
//             opacity: {
//               begin: (data.index + 1) * 80,
//               dur: 500,
//               from: 0,
//               to: 1,
//               easing: "ease"
//             }
//           });
//         }
//       }
//     }
//   };

  componentDidMount(){
    this.props.getAllProfile()
  }

  componentWillReceiveProps(nextProps){
    console.log("DASHBOARD NEXTPROPS", nextProps.dashboard.allMembers)
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
    if(this.state.members !== null){
    console.log("INSIDE GRID", this.state.members)
}
  let members = this.state.members
  if(this.state.members !== null){   
  education = {
    data: {
      labels: [
        "BSc",
        "BEng",
        "HND",
        "ND",
        "NCE",
        "MASTERS",
        "PHD",
        "Olevel"
      ],
      series: [[
        extractEducation(moreMembers, "BSc"), 
        extractEducation(moreMembers, "BEng"), 
        extractEducation(moreMembers, "HND"), 
        extractEducation(moreMembers, "ND"), 
        extractEducation(moreMembers, "NCE"), 
        extractEducation(moreMembers, "MSC"), 
        extractEducation(moreMembers, "PHD"),
        extractEducation(moreMembers, "Olevel")
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
        "divorced",
        "single",
        "Widowed",
        "married",
      ],
      series: [[
        members.length, 
        extractGender(members,"Male"), 
        extractGender(members,"female"), 
        extractDisability(members,"yes"),       
        extractDisability(members,"no"), 
        extractMaritalStatus(members,"divorced"), 
        extractMaritalStatus(members,"Single"), 
        extractMaritalStatus(members,"widowed"), 
        extractMaritalStatus(members,"Married")
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
      series: [[
        extractLGA(moreMembers, "barkin ladi"), 
        extractLGA(moreMembers, "bassa"),
        extractLGA(moreMembers, "bokkos"), 
        extractLGA(moreMembers, "jos-east"), 
        extractLGA(moreMembers, "jos-north"), 
        extractLGA(moreMembers, "jos-south"), 
        extractLGA(moreMembers, "kanam"), 
        extractLGA(moreMembers, "kanke"), 
        extractLGA(moreMembers, "langtang-north"), 
        extractLGA(moreMembers, "langtang-south"), 
        extractLGA(moreMembers, "mangu"), 
        extractLGA(moreMembers, "mikang"), 
        extractLGA(moreMembers, "pankshin"), 
        extractLGA(moreMembers, "qua'an pan"), 
        extractLGA(moreMembers, "riyom"), 
        extractLGA(moreMembers, "shendam"), 
        extractLGA(moreMembers, "wase")
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
  }
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

export default connect(mapStateToProps, {
  getProfile, 
  getAllProfile
})(withStyles(dashboardStyle)(Gridd))