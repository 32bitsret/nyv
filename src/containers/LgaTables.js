import React from "react";
// react component for creating dynamic tables
import ReactTable from "react-table";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import { dataTable } from "variables/general.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";
//import 
import ProfileCard from "./ProfileCard"

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  }
};

class LgaTables extends React.Component {
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
              <Button
                justIcon={false}
                round
                simple
                onClick={() => {
                  let obj = this.state.data.find(o => o.id === key);
                  alert(
                    "You've clicked LIKE button on \n{ \nName: " +
                      obj.name +
                      ", \nposition: " +
                      obj.position +
                      ", \noffice: " +
                      obj.office +
                      ", \nage: " +
                      obj.age +
                      "\n}."
                  );
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
        <GridItem xs={6}>
          <Card>
            <CardHeader color="primary" icon>
              <h4 className={classes.cardIconTitle}>Members Based on LGA</h4>
            </CardHeader>
            <CardBody>
              <ReactTable
                data={this.state.data}
                filterable
                columns={[
                  {
                    Header: "Local Goverment",
                    accessor: "position",
                    sortable: false,
                    filterable: false
                  },
                  {
                    Header: "Male",
                    accessor: "office",
                    sortable: false,
                    filterable: false
                  },
                  {
                    Header: "Female",
                    accessor: "age",
                    sortable: false,
                    filterable: false
                  },
                  {
                    Header: "Average Age",
                    accessor: "age",
                    sortable: false,
                    filterable: false
                  }, 
                  {
                    Header: "disabled",
                    accessor: "age",
                    sortable: false,
                    filterable: false
                  },
                  {
                    Header: "employed",
                    accessor: "age",
                    sortable: false,
                    filterable: false
                  },
                  {
                    Header: "Actions",
                    accessor: "actions",
                    sortable: false,
                    filterable: false
                  }
                ]}
                defaultPageSize={17}
                showPaginationTop={false}
                showPaginationBottom
                className="-striped -highlight"
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={6} md={6} xs={6}>
          <ProfileCard/>
        </GridItem>
        
      </GridContainer>
    );
  }
}

export default withStyles(styles)(LgaTables);
