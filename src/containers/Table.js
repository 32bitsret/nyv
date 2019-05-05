import React from "react";
import ReactTable from "react-table";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Slide from "@material-ui/core/Slide";
import Close from "@material-ui/icons/Close";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import notificationsStyle from "assets/jss/material-dashboard-pro-react/views/notificationsStyle.jsx";
import notificationData from "../variables/notificationData"

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  }
};

function Transition(props) {
  return <Slide direction="down" {...props} />;
}
class ReactTables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: notificationData.h.map((prop, key) => {
        return {
          id: key,
          name: prop,
          actions: (
            <div className="actions-right">
              <Button
                justIcon={false}
                round
                simple
                onClick={() => {
                  let obj = this.state.data.find(o => o.id === key);
                  // alert(
                  //   "You've clicked LIKE button on \n{ \nName: " +
                  //     obj.name +
                  //     ", \nposition: " +
                  //     obj.position +
                  //     ", \noffice: " +
                  //     obj.office +
                  //     ", \nage: " +
                  //     obj.age +
                  //     "\n}."
                  // );
                 
                }}
                color="info"
                className="like"
              >
                View
              </Button>{" "}
            </div>
          )
        };
      })
    };
  }
  render() {
    const { classes } = this.props;
    console.log("FROM TABLE")
    return (
      <GridContainer>
         <Dialog
                    classes={{
                      root: notificationsStyle.center + " " + notificationsStyle.modalRoot,
                      paper: notificationsStyle.modal
                    }}
                    open={false}
                    TransitionComponent={Transition}
                    keepMounted
                    // onClose={() => this.handleClose("classicModal")}
                    aria-labelledby="classic-modal-slide-title"
                    aria-describedby="classic-modal-slide-description"
                  >
                    <DialogTitle
                      id="classic-modal-slide-title"
                      disableTypography
                      className={notificationsStyle.modalHeader}
                    >
                      <Button
                        justIcon
                        className={notificationsStyle.modalCloseButton}
                        key="close"
                        aria-label="Close"
                        color="transparent"
                        // onClick={() => this.handleClose("classicModal")}
                      >
                        <Close className={notificationsStyle.modalClose} />
                      </Button>
                      <h4 className={notificationsStyle.modalTitle}>Modal title</h4>
                    </DialogTitle>
                    <DialogContent
                      id="classic-modal-slide-description"
                      className={notificationsStyle.modalBody}
                    >
                      <p>
                      {/* {one.message} */}we are here for entertainment
                      </p>
                    </DialogContent>
                    <DialogActions className={notificationsStyle.modalFooter}>
                      <Button
                        // onClick={() => this.handleClose("classicModal")}
                        color="danger"
                        simple
                      >
                        Close
                      </Button>
                    </DialogActions>
                  </Dialog>
        <ReactTable
          data={this.state.data}
          filterable
          columns={[
            {
              Header: "Message",
              accessor: "name",
              sortable: false,
              filterable: false
            },
            // {
            //   Header: "Date",
            //   accessor: "office",
            //   sortable: false,
            //   filterable: false
            // },
            // {
            //   Header: "Female",
            //   accessor: "age",
            //   sortable: false,
            //   filterable: false
            // },
            {
              Header: "Actions",
              accessor: "actions",
              sortable: false,
              filterable: false
            }
          ]}
          defaultPageSize={17}
          showPaginationTop={false}
          showPaginationBottom={false}
          className="-striped -highlight"
        />
      </GridContainer>
    );
  }
}

export default withStyles(styles)(ReactTables);
