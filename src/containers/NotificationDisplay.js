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
import Close from "@material-ui/icons/Close";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import notificationsStyle from "assets/jss/material-dashboard-pro-react/views/notificationsStyle.jsx";
import {connect} from "react-redux"
import { getNotification } from "../redux/actions/notificationActions";
import Heading from "components/Heading/Heading.jsx";
import { getProfile } from "../redux/actions/dashboardAction"
import isEmpty from "../utils/isEmpty";
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import notificationData from "../variables/notificationData"

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
      queryData:{}
    };
  }

  componentDidMount(){
    this.props.getNotification({query:this.props.user})
  }

  componentWillReceiveProps(nextProps){
     if(!isEmpty(nextProps.notification.notifications)){
     
      this.setState({
        message: nextProps.notification.notifications,
        loadingMessages: false
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
    console.log("MESSAGES FROM STATE", this.props.notification.notifications)
    const display = this.state.loadingMessages ? 
      <GridContainer justify="center">
        loading messages...
      </GridContainer>
      :
      notificationData.map(dat => {
        <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardBody>
              <div className={classes.cardHeader}>
                <h4 className={classes.cardTitle}>Notifications Style</h4>
              </div>
              <br />
              <SnackbarContent
                message={"This is a plain notification"}
                color="info"
              />
              <SnackbarContent
                message={"This is a notification with close button."}
                close
                color="info"
              />
            </CardBody>
          </Card>
        </GridItem>
        </GridContainer>
      })
          
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
                  <Button
                    justIcon
                    className={classes.modalCloseButton}
                    key="close"
                    aria-label="Close"
                    color="transparent"
                    onClick={() => this.handleClose("classicModal")}
                  >
                    <Close className={classes.modalClose} />
                  </Button>
                  <h4 className={classes.modalTitle}>Modal title</h4>
                </DialogTitle>
                <DialogContent
                  id="classic-modal-slide-description"
                  className={classes.modalBody}
                >
                  <p>
                  {this.state.selectedMessage.title}
                  </p>
                </DialogContent>
                <DialogActions className={classes.modalFooter}>
                  <Button
                    onClick={() => this.handleClose("classicModal")}
                    color="danger"
                    simple
                  >
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
              <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6} lg={10}>
                <Card>
                  <CardBody>
                    {display}
                  </CardBody>
                </Card>
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
