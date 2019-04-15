import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import img1 from "../../assets/img/img1.jpg"

import pricingPageStyle from "assets/jss/material-dashboard-pro-react/views/pricingPageStyle.jsx";

class Speech5Details extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container} style={{backgroundColor:"transparent"}}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <Card justify="center">
              <CardHeader>
                <h3 className={classes.title} style={{color:"green"}}><b><i>
                SPEECH DELIVERED AT THE YOUTH SUMMIT ORGANIZED BY THE OPERATION
                   SAFE HAVEN IN COLLABORATION WITH THE CIVIL MILITARY RELIEF 
                   INITIATIVE ON TUESDAY 18TH DECEMBER 2018 AT HILL STATION JOS NIGERIA
                </i></b></h3>
                {/* <div xs={12} sm={12} md={4}>
                <img 
                    style={{width:"250px", height:"200px", alignSelf:"center"}}
                    src={img1}
                />
                </div> */}
                <p>
                The Commander Operation Safe Haven Gen. ACC Agundu, the representative of the Chief of Defense Staff Gen. John Agim, Sector Commanders, 
                Director General’s, Royal Highnesses, Religious Leaders, great youths of Plateau state and Nigeria, and finally the Speaker of the Plateau State House of Assembly Rt. Hon. Joshua Madaki Esq, whom I deliberately left behind because he is so important and yet a part of my constituency, distinguished guest Ladies and Gentlemen.
               </p>   
                <p>
                I bring you greetings from the Plateau State Youth Council, the umbrella body of all youths on the Plateau irrespective of one’s political affiliation, tribal extraction or religious beliefs, the place where the aspirations, worries, cries and prayer of the youths have echoed through the ages. I unequivocally salute the courage of the Commander of the OPSH and salute his resilience in putting together this all important summit. 
                What is happening here today is history and as I walked in, I saw youths from the nook and cranny of Plateau state and I wondered how the General achieve this. 
                The question of peace building is our collective responsibility as a people, and the one way to survive this carnage is to come together as we just did today to agree on the way forward. I deliberately coined my campaign slogan the age of reason. So many at times as a people, we have put cleverness before common sense, and in which case, we have not progressed as a people.
                </p>
              </CardHeader>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Speech5Details.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(pricingPageStyle)(Speech5Details);
