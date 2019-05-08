import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import notificationsStyle from "assets/jss/material-dashboard-pro-react/views/notificationsStyle.jsx";
import {connect} from "react-redux"
import { getNotification } from "../redux/actions/notificationActions";
import Heading from "components/Heading/Heading.jsx";
import { getProfile } from "../redux/actions/dashboardAction"
import isEmpty from "../utils/isEmpty";
import NotificationDisplay from "./NotificationDisplay"

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      getMessages: false,
      queryData:{}
    };
  }

  componentDidMount(){
    this.props.getProfile(this.props.auth.user.phone)
  }

  componentWillReceiveProps(nextProps){
    if(!isEmpty(nextProps.dashboard.dashboard)){
      let user = nextProps.dashboard.dashboard
      let data = {
          lga:user.lga,
          qualification:user.education.educational_qualification,
          marital_status:user.marital_status,
          disability:user.disability,
          gender:user.gender
        }
      this.setState({
        queryData: {...data},
        loading:false
      })
    }
  }

  componentWillUnmount() {
    var id = window.setTimeout(null, 0);
    while (id--) {
      window.clearTimeout(id);
    }
  }
  showNotification(place) {
    if (!this.state[place]) {
      var x = [];
      x[place] = true;
      this.setState(x);
      setTimeout(
        function() {
          x[place] = false;
          this.setState(x);
        }.bind(this),
        6000
      );
    }
  }
  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }
  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }
  render() {
    const { classes } = this.props;
    console.log("QUERY DATA", this.state.queryData)
    const notificationDisplay = this.state.loading 
      ? 
      (
        <div>
          <GridContainer justify="center">
          {/* <GridItem xs={12} md={10} lg={10}>
            <div
              className={classes.cardHeader + " " + classes.center}
            >
              <div> */}
                Loading user data...
              {/* </div>
            </div>
          </GridItem> */}
          </GridContainer>
        </div>
      )
      : 
      (
        <div>
          <NotificationDisplay user={this.state.queryData}/>
        </div>
      )
    return (
      <div>
        <GridContainer justify="center">                
          <GridItem xs={12} sm={12} md={8} lg={10}>
            <Heading
              title="Notifications"
              textAlign="center"
              category={
                <span>
                  <a href="/notifications">
                   refresh
                  </a>
                </span>
              }
            />
            {notificationDisplay}
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    notification:state.notification,
    dashboard: state.dashboard
  }
}

export default connect(mapStateToProps, {getNotification,getProfile })(withStyles(notificationsStyle)(Notifications));
