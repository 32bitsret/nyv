import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Close from "@material-ui/icons/Close";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import notificationsStyle from "assets/jss/material-dashboard-pro-react/views/notificationsStyle.jsx";
import {connect} from "react-redux"
import { getNotification } from "../redux/actions/notificationActions";
import Heading from "components/Heading/Heading.jsx";
import { getProfile } from "../redux/actions/dashboardAction"
import isEmpty from "../utils/isEmpty";

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classicModal: false,
      noticeModal: false,
      smallModal: false,
      message:{},
      loading: true
    };
  }

  componentDidMount(){
    this.props.getProfile(this.props.state.auth.user.phone)
  }

  componentWillReceiveProps(nextProps){
    console.log("USER PROFILE DETAILS", nextProps.state.dashboard.dashboard)
    if(!isEmpty(nextProps.state.dashboard.dashboard)){
      let user = nextProps.state.dashboard.dashboard
    let data = {
        lga:user.lga,
        qualification:user.education.educational_qualification,
        marital_status:user.marital_status,
        disability:user.disability,
        gender:user.gender
      }

      console.log("EXTRACTED DATA", data)
    this.props.getNotification({ query: data})
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
    const notificationDisplay = this.state.loading 
      ? 
      (
        <div>
          <GridContainer justify="center">
            <div>
              Loading Notifications...
            </div>
          </GridContainer>
        </div>
      )
      : 
      (
        <div>
          <Heading
            title="Notifications Results"
            textAlign="center"
            category={
                <span>
                    Total Notifications
                </span>
            }
          />
          <GridContainer justify="center">
            <div>
            Notifications
            </div>
          </GridContainer>
        </div>
      )
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

            <Card>
                  <Heading
                    title="Notifications"
                    textAlign="center"
                  />
              <CardBody>
                <div>
                  <GridContainer justify="center">
                    <GridItem xs={12} md={10} lg={10}>
                      <div
                        className={classes.cardHeader + " " + classes.center}
                      >
                      </div>
                    </GridItem>
                  </GridContainer>
                {notificationDisplay}
                </div>
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
    notification:state
  }
}

export default connect(mapStateToProps, {getNotification,getProfile })(withStyles(notificationsStyle)(Notifications));
