import React from "react";
import ReactTable from "react-table";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";
import ChartistGraph from "react-chartist";
import CardFooter from "components/Card/CardFooter.jsx";
import lgaChartData from "../variables/lgaChartData"
import moreMembers from "../variables/moreMembers"
import isEmpty from "../utils/isEmpty"
import {
  extractEducation, 
  extractLGA, 
  extractGender,
  extractMaritalStatus,
  extractDisability
} from "../utils/Table/TableFunctions"


const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  }
};


const dataRows = [
    ["barkin ladi"],
    ["bassa"],
    ["bokkos"],
    ["jos-east"],
    ["jos-north"],
    ["jos-south"],
    ["kanam"],
    ["kanke"],
    ["langtang-north"],
    ["langtang south"],
    ["mangu"],
    ["mikang"],
    ["pankshin"],
    ["qua'an pan"],
    ["riyom"],
    ["shendam"],
    ["wase"],
  ]



class LgaTables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: {},
      isloading: true,
      data: dataRows.map((prop, key) => {
        return {
          id: key ,
          sn: key + 1,
          name: prop[0],
          males: extractGender(moreMembers, "Male", prop[0] ),
          females: extractGender(moreMembers, "female", prop[0] ),
          age: prop[3],
          total: extractLGA(moreMembers,prop[0]),
          married: extractMaritalStatus(moreMembers, "married", prop[0]),
          single:  extractMaritalStatus(moreMembers, "single", prop[0]),
          divorced: extractMaritalStatus(moreMembers, "divorced", prop[0]),
          widowed: extractMaritalStatus(moreMembers, "widowed", prop[0]),
          Bsc: extractEducation(moreMembers,"BSc", prop[0]),
          BEng: extractEducation(moreMembers,"BEng", prop[0]),
          HND: extractEducation(moreMembers,"HND", prop[0]),
          ND: extractEducation(moreMembers,"ND", prop[0]),
          NCE: extractEducation(moreMembers,"NCE", prop[0]),
          MSC: extractEducation(moreMembers,"MSC", prop[0]),
          PHD: extractEducation(moreMembers,"PHD", prop[0]),
          OLEVEL: extractEducation(moreMembers,"Olevel", prop[0]),
          Disabled: extractDisability(moreMembers, "yes", prop[0]),
          NotDisabled: extractDisability(moreMembers, "no", prop[0]),
          actions: (
            <div className="actions-right">
              <Button
                justIcon={false}
                round
                simple
                onClick={() => {
                  let obj = this.state.data.find(o => o.id === key);
                  this.setState({
                    tableData: obj,
                    isloading: false
                  })
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


  componentDidMount(){
    // extract(moreMembers,"Bassa")
  }
  render() {
    const { classes } = this.props;
    console.log("TYPE OF DATA",this.state.tableData)
    // console.log("RESULT", extract(moreMembers, "Bassa"))
    const display = this.state.isloading ? ( 
    <Card>
      <CardBody  className={classes.cardFooter}>
        <i className={classes.danger} /> No LGA selected              
      </CardBody>
    </Card>
    ) : ( 
      <Card>
        <CardBody>
          <h1 className={classes.cardTitle}>{" "} {this.state.tableData.name}</h1>
          <hr/>
          <h4 className={classes.cardTitle}>TOTAL:{"  "} {this.state.tableData.total}</h4>
          <h4 className={classes.cardTitle}>MALES:{"  "} {this.state.tableData.males}</h4>
          <h4 className={classes.cardTitle}>FEMALES:{"  "} {this.state.tableData.females}</h4>
          <hr/>
          <h3 className={classes.cardTitle}>PROFILE SUMMARY</h3>
          <h4 className={classes.cardTitle}>MARRIED:{"  "} {this.state.tableData.married}</h4>
          <h4 className={classes.cardTitle}>SINGLE:{"  "} {this.state.tableData.single}</h4>
          <h4 className={classes.cardTitle}>DIVORCED:{"  "} {this.state.tableData.divorced}</h4>
          <h4 className={classes.cardTitle}>WIDOWED:{"  "} {this.state.tableData.widowed}</h4>
          <h4 className={classes.cardTitle}>DISABLED:{"  "} {this.state.tableData.Disabled}</h4>
          <h4 className={classes.cardTitle}>NOT DISABLED:{"  "} {this.state.tableData.NotDisabled}</h4>
          <hr/>
          <h3 className={classes.cardTitle}>EDUCATIONAL SUMMARY</h3>
          <hr/>
          <h4 className={classes.cardTitle}>BSC:{"  "} {this.state.tableData.Bsc}</h4>
          <h4 className={classes.cardTitle}>BEng:{"  "} {this.state.tableData.BEng}</h4>
          <h4 className={classes.cardTitle}>HND:{"  "} {this.state.tableData.HND}</h4>
          <h4 className={classes.cardTitle}>ND:{"  "} {this.state.tableData.ND}</h4>
          <h4 className={classes.cardTitle}>NCE:{"  "} {this.state.tableData.NCE}</h4>
          <h4 className={classes.cardTitle}>OLEVEL:{"  "} {this.state.tableData.OLEVEL}</h4>
          <h4 className={classes.cardTitle}>MSC:{"  "} {this.state.tableData.MSC}</h4>
          <h4 className={classes.cardTitle}>PHD:{"  "} {this.state.tableData.PHD}</h4>

        </CardBody>
        <CardFooter stats className={classes.cardFooter}>
          <i className={classes.danger} /> {` `}              
          <Button
            className={classes.danger} 
            justIcon={false}
            round
            simple
            color="info"
            className="like"
          >
            View
          </Button>
        </CardFooter>
      </Card>
    )

    return (
      <GridContainer>
        <GridItem xs={6}>
          <Card>
            <CardHeader color="primary" icon>
              <h4 className={classes.cardIconTitle}>LGA DATA Summary</h4>
            </CardHeader>
            <CardBody>
              <ReactTable
                data={this.state.data}
                filterable
                columns={[
                {
                    Header: "S/N",
                    accessor: "sn",
                    sortable: false,
                    filterable: false
                    },
                  {
                    Header: "LGA Name",
                    accessor: "name",
                    sortable: false,
                    filterable: false
                  },
                  {
                    Header: "  View      ",
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
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={6} md={6} xs={6}>
            {display}
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(styles)(LgaTables);
