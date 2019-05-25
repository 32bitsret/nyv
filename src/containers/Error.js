import React, { Component } from 'react'
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import loginPageStyle from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.jsx";

export default class Error extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardAnimaton: "cardHidden",
    };
  }
  render() {
    return (
      <div>
            <div>
          <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4}>
            <form>
              <Card login className={loginPageStyle[this.state.cardAnimaton]}>
                <CardBody>
                <Button color="danger" simple size="lg" block disabled>
                     
                     {/* <h1> PYC</h1> */}
                      <h1> ERROR PAGE</h1>
                    </Button>
                </CardBody>
                <CardFooter className={loginPageStyle.justifyContentCenter}>
                </CardFooter>
              </Card>
            </form>
          </GridItem>
        </GridContainer>
      </div>
      </div>
    )
  }
}
