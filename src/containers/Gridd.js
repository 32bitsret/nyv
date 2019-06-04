import React ,{Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux"
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
import Heading from "components/Heading/Heading.jsx";
import {
  extractLGA,
  extractEducation,
  extractDisability,
  extractMaritalStatus,
  extractGender,
  extractEmployment,
} from "../utils/Gridd/Extraction"
import isEmpty from "../utils/isEmpty";
import _ from "lodash"


let general
let lga
let education
let employment
let users

class Gridd extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: 0,
      members: [],
      admins:[],
      mobile:[],
      web:[]
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
  
  countWeb = (total) => {
    total.map(o => {
      if(isEmpty(o.expo_token)){
        this.state.web.push(o)
      }
    })
  }

  countMobile = (total) => {
    total.map(o => {
      if(!isEmpty(o.expo_token)){
        this.state.mobile.push(o)
      }
    })
  }

  countAdmin = (total) => {
    total.map(o => {
      console.log(o)
      if(isEmpty(o.expo_token)){
        this.state.admins.push(o)
      }
    })
  }

  render() {
    const { classes } = this.props;
    let members = this.state.members
    this.countWeb(members)
    this.countMobile(members)
    // this.countAdmin(members)

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
        extractEducation(members, "DEGREE"), 
        extractEducation(members, "MSC"), 
        extractEducation(members, "PHD")
      ]]
    },
    options: {
      axisX: {
        showGrid: false
      },
      low: 0,
      high: members.length / 2,
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
        
        extractEmployment(members, "Employed"), 
        extractEmployment(members, "Not Employed")
      ]]
    },
    options: {
      axisX: {
        showGrid: false
      },
      low: 0,
      high: members.length + 5,
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

  users = {
    data: {
      labels: [
        "Mobile Users",
        " Web Users",
      ],
      series: [[
        _.uniq(this.state.mobile).length, 
        _.uniq(this.state.web).length
      ]]
    },
    options: {
      axisX: {
        showGrid: false
      },
      low: 0,
      high: members.length + 5,
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
          seriesBarDistance: 3,
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
        "Not Disabled",
        "Divorced",
        "Single",
        "Widowed",
        "Married",
      ],
      series: [[
        members.length, 
        extractGender(members,"male"), 
        extractGender(members,"female"), 
        extractDisability(members,"Disabled"),       
        extractDisability(members,"Not Disabled"), 
        extractMaritalStatus(members,"Divorced"), 
        extractMaritalStatus(members,"Single"), 
        extractMaritalStatus(members,"Widowed")||extractMaritalStatus(members,"Widowed"), 
        extractMaritalStatus(members,"Married")
      ]]
    },
    options: {
      axisX: {
        showGrid: false
      },
      low: 0,
      high: members.length + 20,
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

  lga = {
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
      high: members.length / 5,
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
  
  const display = this.props.dashboard.isloading ? (       
      <GridContainer justify="center">
        <div>loading...</div>
      </GridContainer>
      ) 
    :
      ( 
      <div>
        <Heading
          title="GENERAL ANALYTICS"
          textAlign="center"
          category={
            <span>
                <a href="/dashboard">Refresh</a>
            </span>
        }
        />
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
                {/* For 17 Local Government Areas */}
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
            <CardHeader color="info" className={classes.cardHeaderHover}>
              <ChartistGraph
                className="ct-chart-white-colors"
                data={education.data}
                type="Bar"
                options={education.options}
                responsiveOptions={education.responsiveOptions}
                listener={education.animation}
              />
              
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>GENERAL EDUCATION SUMMARY</h4>
                {/* For 17 Local Government Areas */}
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
            <CardHeader color="warning" className={classes.cardHeaderHover}>
              <ChartistGraph
                className="ct-chart-white-colors"
                data={lga.data}
                type="Bar"
                options={lga.options}
                responsiveOptions={lga.responsiveOptions}
                listener={lga.animation}
              />
              
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>GENERAL POPULATION SUMMARY</h4>
                {/* For 17 Local Government Areas */}
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
        <GridItem xs={12} sm={12} md={6} lg={4}>
          <Card chart >
            <CardHeader color="danger" className={classes.cardHeaderHover}>
              <ChartistGraph
                className="ct-chart-white-colors"
                data={employment.data}
                type="Bar"
                options={employment.options}
                responsiveOptions={employment.responsiveOptions}
                listener={employment.animation}
              />
              
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>EMPLOYMENT SUMMARY</h4>
                {/* For 17 Local Government Areas and others */}
              <p className={classes.cardCategory}>
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6} lg={4}>
          <Card chart >
            <CardBody>
              <h1>{members.length}{" "}TOTAL</h1>
              <hr/>
              <h4>{!isEmpty(this.state.mobile)?_.uniq(this.state.mobile).length:"0"}{" "}(MOBILE USERS)</h4>
              <hr/>
              <h4>{!isEmpty(this.state.web)?_.uniq(this.state.web).length:"0"}{" "}(WEB USERS)</h4>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6} lg={4}>
          <Card chart >
            <CardHeader color="danger" className={classes.cardHeaderHover}>
              <ChartistGraph
                className="ct-chart-white-colors"
                data={users.data}
                type="Bar"
                options={users.options}
                responsiveOptions={employment.responsiveOptions}
                listener={employment.animation}
              />
              
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>USERS SUMMARY</h4>
                {/* For 17 Local Government Areas and others */}
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


