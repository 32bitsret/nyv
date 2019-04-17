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

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  }
};


const dataRows = [
    ["Barkin Ladi", 2, 13, 61],
    ["Bassa", "2", "12", "63"],
    ["Bokkos", "2", "67", "66"],
    ["Jos-East", "3", "78", "22"],
    ["Jos-North", "3", "45", "33"],
    ["Jos-South", "3", "23", "61"],
    ["Kanam", "3", "13", "59"],
    ["Kanke", "3", "13", "59"],
    ["Langtang-North", "3", "23", "55"],
    ["Langtang South", "33", "89", "39"],
    ["Mangu", "35", "23", "23"],
    ["Mikang", "33", "56", "30"],
    ["Pankshin", "54", "78", "22"],
    ["Qua'an Pan", "13", "67", "36"],
    ["Riyom", "56", "12", "43"],
    ["Shendam", "34", "89", "19"],
    ["Wase", "34", "34", "66"],
  ]

const pieChart = {
  data: {
    labels: ["62%"+" females", "32%"+" Males"],
    series: [62, 32]
  },
  options: {
    height: "230px"
  }
}


const extract = (arr1, arr2) => {
  let res1;
  let res2;
  res1 = arr1.map(o => {
    console.log(o[0])
  })
}

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
          males: prop[1],
          females: prop[2],
          age: prop[3],
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
    extract(dataRows, moreMembers)
  }
  render() {
    const { classes } = this.props;
    console.log("TYPE OF DATA",this.state.tableData)

    const display = this.state.isloading ? ( 
    <Card>
      <CardBody stats className={classes.cardFooter}>
        <i className={classes.danger} /> No LGA selected{` `}              
      </CardBody>
    </Card>
    ) : ( 
      <Card>
        <CardBody>
          <h1 className={classes.cardTitle}>{" "} BARKIN LADI</h1>
          <h4 className={classes.cardTitle}>TOTAL:{"  "} 65</h4>
          <h4 className={classes.cardTitle}>MALES:{"  "} 32</h4>
          <h4 className={classes.cardTitle}>FEMALES:{"  "} 33</h4>
          <hr/>
          <h3 className={classes.cardTitle}>PROFILE SUMMARY</h3>
          <h4 className={classes.cardTitle}>MARRIED:{"  "} 14</h4>
          <h4 className={classes.cardTitle}>SINGLE:{"  "} 7</h4>
          <h4 className={classes.cardTitle}>DISABLED:{"  "} 8</h4>
          <h4 className={classes.cardTitle}>NOT DISABLED:{"  "} 9</h4>
          <hr/>
          <h3 className={classes.cardTitle}>EDUCATIONAL SUMMARY</h3>
          <hr/>
          <h4 className={classes.cardTitle}>BSC:{"  "} 0</h4>
          <h4 className={classes.cardTitle}>BEng:{"  "} 6</h4>
          <h4 className={classes.cardTitle}>HND:{"  "} 3</h4>
          <h4 className={classes.cardTitle}>ND:{"  "} 2</h4>
          <h4 className={classes.cardTitle}>WAEC:{"  "} 3</h4>
          <h4 className={classes.cardTitle}>MSC:{"  "} 5</h4>
          <h4 className={classes.cardTitle}>PHD:{"  "} 3</h4>

        </CardBody>
        <CardFooter stats className={classes.cardFooter}>
          <i className={classes.danger} /> Windows
          Phone{` `}              
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
                    Header: "Males",
                    accessor: "males",
                    sortable: false,
                    filterable: false
                  },
                  {
                    Header: "Females",
                    accessor: "females",
                    sortable: false,
                    filterable: false
                  },
                  {
                    Header: "Age Average",
                    accessor: "age",
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
