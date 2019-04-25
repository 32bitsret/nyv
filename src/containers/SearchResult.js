import React from "react";
import ReactTable from "react-table";
import withStyles from "@material-ui/core/styles/withStyles";
import Assignment from "@material-ui/icons/Assignment";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";
import { dataTable } from "variables/general.jsx";
import Heading from "components/Heading/Heading.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import { connect } from "react-redux"
import isEmpty from "../utils/isEmpty"
import UserPreview from "./components/UserPreview"
import {extractLGA} from "../utils/Gridd/Extraction"

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
      user:{},
      data: dataTable.dataRows.map((prop, key) => {
        return {
        //   id: key,
        //   name: prop[0],
        //   position: prop[1],
        //   office: prop[2],
        //   age: prop[3],
         name:"",
         DoB:"",
         gender:"",
         photo:"",
          actions: (
            <div className="actions-right">
              <Button
                round
                simple
                onClick={() => {
                  let obj = this.state.data.find(o => o.id === key);
                  console.log(obj) 
                  this.setState({
                        user:obj
                    })
                }}
                color="success"
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
    console.log("SELECTEDSER", this.state.user)
    const display = isEmpty(this.state.user) ?        
        <Card>
            <CardBody  className={classes.cardFooter}>
                <i className={classes.danger} /> No User Selected            
            </CardBody>
        </Card>
        :
        <UserPreview user={this.state.user}/> 
 
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
        <GridContainer >
            <GridItem xs={12} lg={6}>
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
                    defaultPageSize={16}
                    showPaginationTop
                    showPaginationBottom={false}
                />
                </CardBody>
            </Card>
            </GridItem>
            <GridItem xs={6} md={6} xs={6} lg={6}>
               {display}
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
