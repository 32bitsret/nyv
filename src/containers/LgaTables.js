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
import CardAvatar from "components/Card/CardAvatar.jsx";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";
//import 
import ProfileCard from "./ProfileCard"
import ChartistGraph from "react-chartist";import {
    dailySalesChart,
    emailsSubscriptionChart,
    completedTasksChart
  } from "variables/charts";
  import CardFooter from "components/Card/CardFooter.jsx";
import lgaChartData from "../variables/lgaChartData"


const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  }
};

const dataRows = [
    ["Barkin Ladi", "2", "13", "61"],
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

class LgaTables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataRows.map((prop, key) => {
        return {
          id: key + 1,
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
                  alert(
                    "You've clicked LIKE button on \n{ \nLGA: " +
                      obj.name +
                      ", \nnumber of males: " +
                      obj.males +
                      ", \nnumber of females: " +
                      obj.females +
                      ", \nage average: " +
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
                    accessor: "id",
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
            <Card chart className={classes.cardHover}>
              <CardHeader color="warning" className={classes.cardHeaderHover}>
                <ChartistGraph
                  className="ct-chart-white-colors"
                  data={lgaChartData.data}
                  type="Bar"
                  options={lgaChartData.options}
                  responsiveOptions={lgaChartData.responsiveOptions}
                  listener={lgaChartData.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>BASSA LGA SUMMARY</h4>
                <p className={classes.cardCategory}>
                  Data Summary
                </p>
              </CardBody>
              <CardFooter chart>
              </CardFooter>
            </Card><Card chart className={classes.cardHover}>
              <CardHeader color="warning" className={classes.cardHeaderHover}>
                <ChartistGraph
                  className="ct-chart-white-colors"
                  data={lgaChartData.data}
                  type="Bar"
                  options={lgaChartData.options}
                  responsiveOptions={lgaChartData.responsiveOptions}
                  listener={lgaChartData.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>BASSA LGA SUMMARY</h4>
                <p className={classes.cardCategory}>
                  Data Summary
                </p>
              </CardBody>
              <CardFooter chart>
              </CardFooter>
            </Card><Card chart className={classes.cardHover}>
              <CardHeader color="warning" className={classes.cardHeaderHover}>
                <ChartistGraph
                  className="ct-chart-white-colors"
                  data={lgaChartData.data}
                  type="Bar"
                  options={lgaChartData.options}
                  responsiveOptions={lgaChartData.responsiveOptions}
                  listener={lgaChartData.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>BASSA LGA SUMMARY</h4>
                <p className={classes.cardCategory}>
                  Data Summary
                </p>
              </CardBody>
              <CardFooter chart>
              </CardFooter>
            </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(styles)(LgaTables);
