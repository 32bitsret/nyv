import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import notificationsStyle from "assets/jss/material-dashboard-pro-react/views/notificationsStyle.jsx";
import {connect} from "react-redux"
import { getNotification } from "../redux/actions/notificationActions";
import { getProfile } from "../redux/actions/dashboardAction"
import isEmpty from "../utils/isEmpty";
import moment from "moment"

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class NotificationsDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classicModal: false,
      noticeModal: false,
      smallModal: false,
      message:[],
      loadingMessages: true,
      selectedMessage:{},
      queryData:{},
      isempty: true,
      queryDataAvailable: false
    };
  }

  componentWillMount(){
    if(!isEmpty(this.props.user.lga) && !isEmpty(this.props.user.qualification) && !isEmpty(this.props.user.marital_status) && !isEmpty(this.props.user.disability) && !isEmpty(this.props.user.gender)){
      this.setState({
        queryDataAvailable: true
      })
      this.props.getNotification({query:this.props.user})
    }
  }

  componentWillReceiveProps(nextProps){
    if(!isEmpty(nextProps.notification.notifications)){
      this.setState({
        message: nextProps.notification.notifications,
        isempty:false,
        loadingMessages: false
      })
    }
    else{
      this.setState({
        isempty: true
      })
    }
  }

  componentWillUnmount() {
    var id = window.setTimeout(null, 0);
    while (id--) {
      window.clearTimeout(id);
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
    const display = this.state.loadingMessages ? 
      <GridContainer justify="center">
        loading messages...
      </GridContainer>
      :
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6} lg={10}>
          <Card>
            <CardBody>
              { 
                isEmpty(this.props.notification.notifications)
                ?
                <GridContainer justify="center">
                 <h4>You have No Messages</h4> 
                </GridContainer>
                :
                this.state.message.map((mess ,i)=> ( 
                  <div key={i}>  
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <Card chart >
                          <CardFooter chart>
                            <div className={classes.stats}>
                            <h3><strong>{mess.title}</strong></h3>
                              {moment(mess.time).format('DD-MM-YYYY')}
                              {"  "}
                              <Button
                                justIcon={false}
                                round
                                simple
                                color="success"
                                onClick = {() => {
                                  let message = this.state.message.find(thisOne => thisOne._id === mess._id)
                                  this.setState({
                                    selectedMessage: message,
                                    classicModal: true
                                  })
                                }}
                                >
                                View
                              </Button>
                            </div>
                          </CardFooter>
                        </Card>
                      </GridItem>
                    </GridContainer>
                  </div>
                ))  
              }
            </CardBody>
          </Card>
        </GridItem>
        </GridContainer>

        
    const mainDisplay = this.state.queryDataAvailable 
    ? 
    display
    :
    <GridContainer justify="center">
      <h4>Please Update Your Profile</h4> 
    </GridContainer>

    return (
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8} lg={10}>
              <Dialog
                classes={{
                  root: classes.center + " " + classes.modalRoot,
                  paper: classes.modal
                }}
                open={this.state.classicModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => this.handleClose("classicModal")}
                aria-labelledby="classic-modal-slide-title"
                aria-describedby="classic-modal-slide-description"
              >
                <DialogTitle
                  id="classic-modal-slide-title"
                  disableTypography
                  className={classes.modalHeader}
                >
                  <h5 className={classes.modalTitle}>
                    <strong>
                      {this.state.selectedMessage.title}
                    </strong>
                  </h5>
                  <hr/>
                </DialogTitle>
                <DialogContent
                  id="classic-modal-slide-description"
                  className={classes.modalBody}
                >
                  <span>
                    <h3>
                      {this.state.selectedMessage.message}
                    </h3>
                  </span>
                  <br/>
                  {" "}
                  {moment(this.state.selectedMessage.time).format('DD-MM-YYYY')}
                </DialogContent>
                <DialogActions className={classes.modalFooter}>
                  <Button
                    color="danger"
                    simple
                    onClick={() => {
                      this.setState({
                        classicModal: false
                      })
                    }}
                  >
                    close
                  </Button>
                </DialogActions>
              </Dialog>
              <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6} lg={12}>
                {mainDisplay}
            </GridItem>
            </GridContainer>
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

export default connect(mapStateToProps, {getNotification,getProfile })(withStyles(notificationsStyle)(NotificationsDisplay));
