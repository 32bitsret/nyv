import React from "react";
import ReactTable from "react-table";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import {
  extractEducation, 
  extractLGA, 
  extractGender,
  extractMaritalStatus,
  extractDisability,
  extractEmployment
} from "../utils/Table/TableFunctions"
import {connect} from "react-redux"
import {getAllProfile} from "../redux/actions/dashboardAction"

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  }
};


const dataRows = [
    ["Barkin Ladi"],
    ["Bassa"],
    ["Bokkos"],
    ["Jos East"],
    ["Jos North"],
    ["Jos South"],
    ["Kanam"],
    ["Kanke"],
    ["Langtang North"],
    ["Langtang South"],
    ["Mangu"],
    ["Mikang"],
    ["Pankshin"],
    ["Qua'an Pan"],
    ["Riyom"],
    ["Shendam"],
    ["Wase"],
    ["Others"],
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
          males: extractGender(this.props.dashboard.allMembers, "male", prop[0] ),
          females: extractGender(this.props.dashboard.allMembers, "female", prop[0] ),
          age: prop[3],
          total: extractLGA(this.props.dashboard.allMembers,prop[0]),
          married: extractMaritalStatus(this.props.dashboard.allMembers, "married", prop[0]),
          single:  extractMaritalStatus(this.props.dashboard.allMembers, "single", prop[0]),
          divorced: extractMaritalStatus(this.props.dashboard.allMembers, "divorced", prop[0]),
          widowed: extractMaritalStatus(this.props.dashboard.allMembers, "widowed", prop[0]),
          Degree: extractEducation(this.props.dashboard.allMembers,"degree", prop[0]),
          SCHOOL_CERT: extractEducation(this.props.dashboard.allMembers,"school cert", prop[0]),
          HND: extractEducation(this.props.dashboard.allMembers,"hnd", prop[0]),
          ND: extractEducation(this.props.dashboard.allMembers,"nd", prop[0]),
          NCE: extractEducation(this.props.dashboard.allMembers,"nce", prop[0]),
          MSC: extractEducation(this.props.dashboard.allMembers,"msc", prop[0]),
          PHD: extractEducation(this.props.dashboard.allMembers,"phd", prop[0]),
          OLEVEL: extractEducation(this.props.dashboard.allMembers,"olevel", prop[0]),
          Disabled: extractDisability(this.props.dashboard.allMembers, "yes", prop[0]),
          NotDisabled: extractDisability(this.props.dashboard.allMembers, "no", prop[0]),
          employed:extractEmployment(this.props.dashboard.allMembers,"employed",prop[0]),
          notEmployed:extractEmployment(this.props.dashboard.allMembers,"not employed",prop[0]),
          actions: (
            <div className="actions-right">
              <Button
                justIcon={false}
                round
                simple
                onClick={() => {
                  let obj = this.state.data.find(o => o.id === key);
                  console.log("DATA", obj)
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


  componentWillReceiveProps(nextProps){
    this.setState({
      // tableData:nextProps.dashboard.allMembers
    })
  }
  render() {
    const { classes } = this.props;
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
          <h4 className={classes.cardTitle}>SCHOOL CERT:{"  "} {this.state.tableData.Bsc}</h4>
          <h4 className={classes.cardTitle}>OLEVEL:{"  "} {this.state.tableData.BEng}</h4>
          <h4 className={classes.cardTitle}>ND:{"  "} {this.state.tableData.HND}</h4>
          <h4 className={classes.cardTitle}>HND:{"  "} {this.state.tableData.ND}</h4>
          <h4 className={classes.cardTitle}>NCE:{"  "} {this.state.tableData.NCE}</h4>
          <h4 className={classes.cardTitle}>Degree:{"  "} {this.state.tableData.OLEVEL}</h4>
          <h4 className={classes.cardTitle}>MSC:{"  "} {this.state.tableData.MSC}</h4>
          <h4 className={classes.cardTitle}>PHD:{"  "} {this.state.tableData.PHD}</h4>
         
          <h3 className={classes.cardTitle}>EMPLOYMENT SUMMARY</h3>
          <hr/>
          <h4 className={classes.cardTitle}>EMPLOYED:{"  "} {this.state.tableData.employed}</h4>
          <h4 className={classes.cardTitle}>NOT EMPLOYED:{"  "} {this.state.tableData.notEmployed}</h4>
          
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
                defaultPageSize={18}
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

const mapStateToProps = state => {
  return {
    dashboard: state.dashboard
  }
}
export default connect(mapStateToProps, {getAllProfile})(withStyles(styles)(LgaTables));
