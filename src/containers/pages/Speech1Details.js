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

class Speech1Details extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container} style={{backgroundColor:"transparent"}}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <Card justify="center">
              <CardHeader>
                <h3 className={classes.title} style={{color:"green"}}><b><i>
                COMMUNIQUÉ ISSUED AT THE END OF 
                THE GENERAL ASSEMBLY OF PLATEAU STATE YOUTH COUNCIL 
                HELD ON WEDNESDAY 29TH OF AUGUST 2018 AT THE AZI NYAKO YOUTH CENTRE DADIN KOWA    
                </i></b></h3>
                {/* <div xs={12} sm={12} md={4}>
                <img 
                    style={{width:"250px", height:"200px", alignSelf:"center"}}
                    src={img1}
                />
                </div> */}
                <p>
                After the business meeting of the General Assembly of Plateau State Youth Council which held for 2 hours 30 minutes, and after exhaustive deliberations on issues, the delegates (270) of the General Assembly of Plateau State Youth Council agreed as follows;
                </p>   
                <p>
                1.  That the entire youths on the Plateau appreciate the Government of Plateau state for showing interest in youth activities and providing platforms for youth empowerment through entrepreneurship training and skill acquisition programs. The Council also appreciates the Government for providing facilities for the teaming youths on the Plateau and serving as guarantor for the loan schemes delivered through PLASMIDA
                </p>    
                <p>
                2.  Plateau State Youth Council speaks with one voice calling for the end of the needless bloodletting on the Plateau, and condemns unequivocally the continuous and sustained attacks on the good and peace loving people of Plateau state. And we call on Government to increase surveillance in areas under attacks.
                </p>
                <p>
                3.  That Plateau State Youth Council is the umbrella body of all youths on the Plateau irrespective of their tribal extraction, religious beliefs or political affiliations.    
                </p>
                <p>
                4.  That Plateau State Youth Council is the state Chapter of the National Youth Council of Nigeria Plateau State, and that there is no dichotomy between same, as many Plateau Youths have held offices at the national level of the National Youth Council of Nigeria from Plateau State Youth Council, and documentary evidence available shows this to be true.
                </p>
                <p>
                5.   That the Government of Plateau State only recognizes Plateau State Youth Council as the only youth body responsible for youth activities and also serves as the clearing house of all youth activities on the Plateau.
                </p>
                <p>
                6.   The General Assembly which is the highest decision making body of the Council unanimously voted that matter of impersonation by some unscrupulous elements will be vehemently resisted and that security agencies should be put on alert concerning the activities of these elements who claimed they are the officers of the National Youth Council of Nigeria, Plateau State    
                </p>
                <p>
                 7.   That the State Ministry of Youth and Sports Development is the only authorized body who gives clearance to any youth organization to operate on the Plateau and not the DSS as claimed by some of these desperate youths.
                </p>
                <p>
                 8.   That youths who are parading themselves as officials of the National Youth Council of Nigeria should desist from doing so with immediate effect as the youths on the Plateau will not take that anymore.   
                </p>
                <p>
                9.    That all Local Government and District meetings should henceforth stop until the zonal meetings of the Council are concluded within the next three weeks. 
                </p>
                <p>
                10.    The Plateau State Youth Council continues to pledge it support in the place of peace building and we promised to be law abiding as stakeholders in nation building.
                </p>
                <p>
                11.     The Youth Council thanked the veterans who were part of the first General Assembly after 16 years. The Council appreciates their contributions.
                </p>
                <p>
                12.     That the Council should explore other means of funding to the Council.
                </p>
                <p>
                13.     The General Assembly unanimously voted that Government should return the Azi Nyako Youth Centre Dadin Kowa to Plateau State Youth Council as was done by the Dariye’s administration in 2006
                </p>
                <p>
                14.     The Council pledges its support to the Government of Plateau state.
                </p>
                <p>
                15.     That an extra ordinary General Assembly to asses and follow up on the issues discussed at the General Assembly be called after three (3) months.
                </p>
              </CardHeader>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Speech1Details.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(pricingPageStyle)(Speech1Details);
