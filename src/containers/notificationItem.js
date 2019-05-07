import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import AddAlert from "@material-ui/icons/AddAlert";
import Close from "@material-ui/icons/Close";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import notificationsStyle from "assets/jss/material-dashboard-pro-react/views/notificationsStyle.jsx";
import notify from "../variables/notificationData"
import {connect} from "react-redux"
import { getNotification } from "../redux/actions/notificationActions";
import ReactTable from "./Table"
// import Button from "components/CustomButtons/Button.jsx";
import { getProfile } from "../redux/actions/dashboardAction"

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
      message:{}
    };
  }

  componentDidMount(){
    // this.props.getProfile()
    let data = {
        lga:"Mangu",
        qualification:"MSC",
        marital_status:"Widowed",
        disability:"Disabled",
        gender:"male"
      }
    this.props.getNotification({ query: data})
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
    console.log("PROPS", this.props)
    const { classes } = this.props;
    const notificationDisplay = //notify.map( (one,key) =>(
          <GridContainer  >
            <GridItem
              xs={10}
              sm={10}
              md={10}
              lg={12}
              className={classes.center}
            >
            {/* <h3>TOPIC</h3> */}
              <GridItem
              xs={10}
              sm={10}
              md={10}
              lg={8}
              // className={classes.center}
            >
            <span>
                <div className="actions-right">
                  <p>
                   TOPIC: Dramatically visualize customer directed convergence
                  </p>
                </div>
                <hr/>
              </span>    
              </GridItem>   
            </GridItem>
              {/* <div className="actions-right"> */}
                  <Button
                    justIcon={false}
                    round
                    simple
                    color="info"
                    className="like"
                  >
                    View
                  </Button>{" "}
                {/* </div> */}
          </GridContainer>
        // ))
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
    state
  }
}

export default connect(mapStateToProps, {getNotification,getProfile })(withStyles(notificationsStyle)(Notifications));
