import React from "react";
// react component for creating dynamic tables
import ReactTable from "react-table";
import withStyles from "@material-ui/core/styles/withStyles";
import Assignment from "@material-ui/icons/Assignment";
import Dvr from "@material-ui/icons/Dvr";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import { dataTable } from "variables/general.jsx";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
import Close from "@material-ui/icons/Close";

// core components
import Heading from "components/Heading/Heading.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import Snackbar from "components/Snackbar/Snackbar.jsx";
import Instruction from "components/Instruction/Instruction.jsx";

import notificationsStyle from "assets/jss/material-dashboard-pro-react/views/notificationsStyle.jsx";

import noticeModal1 from "assets/img/card-1.jpeg";
import noticeModal2 from "assets/img/card-2.jpeg";
import isEmpty from "../utils/isEmpty"
import { connect } from "react-redux"
import Dialogs from "./Dialog"

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  }
};

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataTable.dataRows.map((prop, key) => {
        return {
          id: key,
          name: prop[0],
          position: prop[1],
          office: prop[2],
          age: prop[3],
          actions: (
            // we've added some custom button actions
            <div className="actions-right">
    
              {/* use this button to add a edit kind of action */}
              <Button
                // justIcon
                round
                simple
                onClick={() => {
                  let obj = this.state.data.find(o => o.id === key);
                //   alert(
                //     "You've clicked EDIT button on \n{ \nName: " +
                //       obj.name +
                //       ", \nposition: " +
                //       obj.position +
                //       ", \noffice: " +
                //       obj.office +
                //       ", \nage: " +
                //       obj.age +
                //       "\n}."
                //   );
                //   <Button
                //   color="info"
                //   round
                //   className={classes.marginRight}
                //   onClick={() => this.handleClickOpen("noticeModal")}
                // >
                //   Notice Modal
                // </Button>
                <Dialogs />
                }}
                color="warning"
                className="edit"
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
    return (
        <div>
        <Heading
            title="Search Results"
            textAlign="center"
            category={
                <span>
                    Bassa
                </span>
            }
        />
        <GridContainer justify="center">
            <GridItem xs={12} lg={10}>
            <Card>
                <CardHeader color="success" icon>
                <CardIcon color="success">
                    <Assignment />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>Search Result</h4>
                </CardHeader>
                <CardBody>
                <ReactTable
                    data={this.state.data}
                    columns={[
                    {
                        Header: "Name",
                        accessor: "name"
                    },
                    {
                        Header: "Position",
                        accessor: "position"
                    },
                    {
                        Header: "Office",
                        accessor: "office"
                    },
                    {
                        Header: "Age",
                        accessor: "age"
                    },
                    {
                        Header: "Actions",
                        accessor: "actions",
                        sortable: false,
                        filterable: false
                    }
                    ]}
                    defaultPageSize={10}
                    showPaginationTop
                    showPaginationBottom={false}
                    className="-striped -highlight"
                />
                </CardBody>
            </Card>
            </GridItem>
        </GridContainer>
        </div>
    );
  }
}

const mapStateToProps = state => {
    return{
        state
    }
}

export default connect(mapStateToProps, {})(withStyles(styles)(SearchResult));
