import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import Home from "@material-ui/icons/Home";
import Business from "@material-ui/icons/Business";
import AccountBalance from "@material-ui/icons/AccountBalance";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Accordion from "components/Accordion/Accordion.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import pricingPageStyle from "assets/jss/material-dashboard-pro-react/views/pricingPageStyle.jsx";

class AboutusDetails extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container} style={{backgroundColor:"transparent"}}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader>
                <h2 className={classes.title} style={{color:"black"}}><b><i>About Us</i></b></h2>
                <h4 className={classes.cardTitle} style={{color:"black"}}>
                <p>
                Plateau State Youth Council (PYC) is the umbrella body of all youths on the Plateau irrespective of their political affiliations,
                tribal extractions or religious beliefs. As a pressure group, it’s the platform through which the concerns and aspirations and 
                prayers of all youths on the Plateau had echoed through the ages.
                The Council was formed in the Mid 80’s with the sole aim of fighting for
                the rights of Plateau youths. The Council has its first Chairman as Dr Thomas 
                Anpe, who was succeeded by Hon Dr Sam Piwuna, then Hon Tanimu Adapson, followed by 
                Hon Dan Manjang, who was succeeded by Hon William Audu, then Sir Kevin Kesuwo,
                Mr Yakubu Itse and the Sir Emmanuel Dashe. The Council was proscribed by the 
                Jang’s administration over unsettled disputes and it went into limbo for 10 years. 
                The Rescue Administration under the leadership of Rt Hon Simon Bako Lalong called for 
                an out of court settlement leading to the passage of a consent judgment. The council had 
                its elections on April 22nd 2017 and Dr Fabong Jemchang Yildam was inaugurated as the first
                Chairman of the Council in 10 years on may 22nd 2017.
                In the absence of the Council, the Larger House which is the clearing house of the Council and the 
                place where veterans meet held sway. They were primarily responsible for the return of the Youth Council.
                Plateau State Youth Council has been a model for other states youth councils in Nigeria, because of its peculiar leadership Organogram, which 
                encourages the separation of powers and creates a model of all inclusiveness. 
                </p>
                </h4>
                <h3><b><i>Aims and Objectives of the Council</i></b></h3>
                <h4>
                  1. To coordinate the activities of the all youths on the Plateau starting from the District Councils, to the Local Government Councils and recognized affiliated Voluntary Youth Organizations throughout the state
                </h4>
                <h4>
                  2. To foster the spirit of oneness among youths in the state and the Council at large
                </h4>
                <h4>
                  3. To participate and encourage the youths in communal activities and other charitable enterprises
                </h4>
                <h4>
                  4. To explore, encourage and develop the hidden talents of the youth in all educational, political and socio economic and cultural enterprises
                </h4>
                <h4>
                  5. To liaise with the state ministry responsible for youth development in all matters affecting the youths and communicate same to the Local Government and Districts Youth Councils
                </h4>
                <h4>
                  6. To explore all the traditions and cultures in the state in order to preserve our traditional and cultural heritage
                </h4>
                <h4>
                  7. To liaise with the youths of other states and to work in conjunction with the National Youth Council of Nigeria as a Chapter for the promotion of youth activities in the country
                </h4>
                <h4>
                  8. To serve to integrate and create a template for all inclusiveness provided such youths are resident on the Plateau irrespective of their states of origin
                </h4>                
              </CardHeader>
              <CardBody>
                <h3>
                  <b>
                    <i>
                      The membership of the Council shall comprise of
                    </i>
                  </b>
                </h3>
                <h4>
                 - All Districts Youth Councils registered with the Plateau State Youth Council
                </h4>
                <h4>
                 - All Local Government Youth Councils registered with Plateau State Youth Council
                </h4>
                <h4>
                - All other Youth Organizations specialized in defined fields relative to youth development on the Plateau duly registered with the state ministry of Youths and Sports Development
                </h4>
                <h4>
                -  All Voluntary Youth Organizations registered with both Plateau State Youth Council and the state ministry of Youths and Sports Development
                </h4>
                <h4>
                - Honourary membership conferred on any individual who has been found in contributing to the promotion of youth activities in the state
                </h4>
                
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardBody>
                <h2><b>The Organ of the Council include</b></h2>
               <h4>
               The General Assembly which is the supreme organ of the Council
               </h4>
               <h4>
               The Central Working Committee CWC (two elected representatives from each Local Government Youth Council, Chairmen of Each Local Government Youth Council, and 
               the leadership of the Voluntary Youth Organizations) which is a quasi legislative arm of the Council
               </h4>
               <h4>
               The Executive which is responsible for the day to day running of the Council and Committees 
               </h4>
               <h4>
               The General Assembly comprises of the Central Working Committee, the Executives, 
               and all Secretaries of the Local Government Youth Councils, 5 elected representatives from each Local Government Youth Councils, All honourary members, and the leadership of the Voluntary Youth Organizations as stated above.
               </h4>
               <h4>
               The Youth Council is divided basically into zones. Zone A is the southern zone under the supervision of the zonal coordinator who reports all activities of the zone to the Executive quarterly.
               This is same for zone B which is the central zone and zone C which is the northern zone.
               </h4>
               <h4>
               The Chief Executive of the Council is <b><i>the Chairman</i></b>, who is the Chief spokesman of the Council,
               and presides over all meetings of the Executive and the General Assembly. He directs and supervises the activities of the Executive Committee. He is also the Chief accounting officer of the Council
               </h4>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader>
                <h2 className={classes.title} style={{color:"black"}}><b><i>Activities</i></b></h2>
              </CardHeader>
              <CardBody>
                <Accordion
                  active={0}
                  collapses={[
                    {
                      title: "Collapsible group Item #2",
                      content:
                        "Anim pariatur \n cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
                    },
                    {
                      title: "Collapsible group Item #3",
                      content:
                        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
                    }
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

AboutusDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(pricingPageStyle)(AboutusDetails);
