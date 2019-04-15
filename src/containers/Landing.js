import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import pricingPageStyle from "assets/jss/material-dashboard-pro-react/views/pricingPageStyle.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import priceImage2 from "assets/img/card-3.jpeg";
import img1 from "../assets/img/img1.jpg"
import img2 from "../assets/img/img2.jpg"
import img3 from "../assets/img/img3.jpg"
import img4 from "../assets/img/img4.jpg"

class Landing extends React.Component {
  render() {
    const { classes } = this.props;
    console.log("LANDING", classes)
    return (
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <h2 className={classes.title}>PLATEAU YOUTH COUNCIL</h2>
            <h5 className={classes.description}>
             reducing unemployment....
            </h5>
          </GridItem>
        </GridContainer>

        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Card product className={classes.cardHover}>
              <CardHeader image className={classes.cardHeaderHover}>
                <a href="/COMMUNIQUÉ ISSUED AT THE END OF THE GENERAL ASSEMBLY OF PLATEAU STATE YOUTH 
                    COUNCIL HELD ON WEDNESDAY 29TH OF AUGUST 2018 AT THE AZI NYAKO YOUTH CENTRE 
                    DADIN KOWA" >
                  <img src={img1} alt="..." />
                </a>
              </CardHeader>
              <CardBody>
                <div className={classes.cardHoverUnder}>
                </div>
                <h4 className={classes.cardProductTitle}>
                  <a href="/COMMUNIQUÉ ISSUED AT THE END OF THE GENERAL ASSEMBLY OF PLATEAU STATE 
                  YOUTH COUNCIL HELD ON WEDNESDAY 29TH OF AUGUST 2018 AT 
                  THE AZI NYAKO YOUTH CENTRE  DADIN KOWA" >
                    COMMUNIQUÉ ISSUED AT THE END OF THE GENERAL ASSEMBLY OF PLATEAU STATE YOUTH 
                    COUNCIL HELD ON WEDNESDAY 29TH OF AUGUST 2018 AT THE AZI NYAKO YOUTH CENTRE 
                    DADIN KOWA
                  </a>
                </h4>
                <p className={classes.cardProductDesciprion}>
                After the business meeting of the General Assembly of Plateau State Youth Council which held for 
                2 hours 30 minutes, and after exhaustive deliberations on issues, the delegates (270) of the 
                General Assembly of Plateau State Youth Council agreed as follows;
                </p>
              </CardBody>
              <CardFooter product>
              <a href="/COMMUNIQUÉ ISSUED AT THE END OF THE GENERAL ASSEMBLY OF PLATEAU STATE YOUTH 
                    COUNCIL HELD ON WEDNESDAY 29TH OF AUGUST 2018 AT THE AZI NYAKO YOUTH CENTRE 
                    DADIN KOWA" >
               <h5>READ MORE>></h5>
               </a>
              </CardFooter>
            </Card>
          </GridItem>


          <GridItem xs={12} sm={12} md={4}>
            <Card product className={classes.cardHover}>
              <CardHeader image className={classes.cardHeaderHover}>
              <a href="/SPEECH DELIVERED BY FABONG JEMCHANG YILDAM ON THE OCCASION OF HIS SWEARING - IN AS CHAIRMAN PLATEAU STATE YOUTH COUNCIL OF NIGERIA">
                <img src={img2} alt="..." />
                </a>
              </CardHeader>
              <CardBody>
                <div className={classes.cardHoverUnder}>
                </div>
                <h4 className={classes.cardProductTitle}>
                <a href="/SPEECH DELIVERED BY FABONG JEMCHANG YILDAM ON THE OCCASION OF HIS SWEARING - IN AS CHAIRMAN PLATEAU STATE YOUTH COUNCIL OF NIGERIA">
                   SPEECH DELIVERED BY FABONG JEMCHANG YILDAM (MBBS, FMCFM) ON THE OCCASION OF HIS SWEARING - IN AS CHAIRMAN PLATEAU STATE YOUTH COUNCIL OF NIGERIA.
                  </a>
                </h4>
                <p className={classes.cardProductDesciprion}>
                We congratulate you and your team on the so many laudable achievements within
                 these two years past, particularly in the restoration of peace and order on the Plateau.
                  We salute your courage for appointing youths into your administration, and whose contributions
                   to the success of this administration cannot be overemphasized. 
               </p>
              </CardBody>
              <CardFooter product>
              <a href="/SPEECH DELIVERED BY FABONG JEMCHANG YILDAM ON THE OCCASION OF HIS SWEARING - IN AS CHAIRMAN PLATEAU STATE YOUTH COUNCIL OF NIGERIA">
               <h5>READ MORE>></h5>
               </a>
              </CardFooter>
            </Card>
          </GridItem>


          <GridItem xs={12} sm={12} md={4}>
            <Card product className={classes.cardHover}>
              <CardHeader image className={classes.cardHeaderHover}>
              <a href="/SPEECH DELIVERED BY PLATEAU STATE YOUTH COUNCIL CHAIRMAN ON THE EVENT OF THE INAUGURATION OF LOCAL GOVERNMENT AND DISTRICTS EXCO
                        PROTOCOLS">
                  <img src={img3} alt="..." />
                </a>
              </CardHeader>
              <CardBody>
                <div className={classes.cardHoverUnder}>
                </div>
                <h4 className={classes.cardProductTitle}>
                <a href="/SPEECH DELIVERED BY PLATEAU STATE YOUTH COUNCIL CHAIRMAN ON THE EVENT OF THE INAUGURATION OF LOCAL GOVERNMENT AND DISTRICTS EXCO
                        PROTOCOLS">
                  SPEECH DELIVERED BY PLATEAU STATE YOUTH COUNCIL CHAIRMAN ON THE EVENT OF THE INAUGURATION OF LOCAL GOVERNMENT AND DISTRICTS EXCO
                  PROTOCOLS
                  </a>
                </h4>
                <p className={classes.cardProductDesciprion}>
                It is with great pleasure that I welcome everyone here today. 
                Over the years, we have learned that every moment in history is 
                transitory, and that such moments pass by very quickly. We have also 
                been taught that these moments are not only rare, but also precious and unique.

                </p>
              </CardBody>
              <CardFooter product>
              <a href="/SPEECH DELIVERED BY PLATEAU STATE YOUTH COUNCIL CHAIRMAN ON THE EVENT OF THE INAUGURATION OF LOCAL GOVERNMENT AND DISTRICTS EXCO
                        PROTOCOLS">
               <h5>READ MORE>></h5>
               </a>
              </CardFooter>
            </Card>
          </GridItem>


          <GridItem xs={12} sm={12} md={4}>
            <Card product className={classes.cardHover}>
              <CardHeader image className={classes.cardHeaderHover}>
                  <a href="/GENERAL ASSEMBLY AUGUST 29TH 2018 THE AGE OF REASON II" >
                  <img src={img4} alt="..." />
                </a>
              </CardHeader>
              <CardBody>
                <div className={classes.cardHoverUnder}>
                </div>
                <h4 className={classes.cardProductTitle}>
                  <a href="/GENERAL ASSEMBLY AUGUST 29TH 2018 THE AGE OF REASON II" >
                  GENERAL ASSEMBLY AUGUST 29TH 2018 THE AGE OF REASON II
                  </a>
                </h4>
                <p className={classes.cardProductDesciprion}>
                May 22nd 2018 was our first anniversary after 10 long years of despair
                 and hopelessness. I recall with nostalgia the endless struggle for the 
                 recreation of a Youth Council, and today, I found myself grateful for the 
                </p>
              </CardBody>
              <CardFooter product>
              <a href="/GENERAL ASSEMBLY AUGUST 29TH 2018 THE AGE OF REASON II" >
               <h5>READ MORE>></h5>
               </a>
              </CardFooter>
            </Card>
          </GridItem>


          <GridItem xs={12} sm={12} md={4}>
            <Card product className={classes.cardHover}>
              <CardHeader image className={classes.cardHeaderHover}>
              <a href="/SPEECH DELIVERED AT THE YOUTH SUMMIT ORGANIZED BY THE OPERATION
                   SAFE HAVEN IN COLLABORATION WITH THE CIVIL MILITARY RELIEF 
                   INITIATIVE ON TUESDAY 18TH DECEMBER 2018 AT HILL STATION JOS NIGERIA">
                  <img src={img2} alt="..." />
                </a>
              </CardHeader>
              <CardBody>
                <div className={classes.cardHoverUnder}>
                </div>
                <h4 className={classes.cardProductTitle}>
                  <a href="/SPEECH DELIVERED AT THE YOUTH SUMMIT ORGANIZED BY THE OPERATION
                   SAFE HAVEN IN COLLABORATION WITH THE CIVIL MILITARY RELIEF 
                   INITIATIVE ON TUESDAY 18TH DECEMBER 2018 AT HILL STATION JOS NIGERIA">
                  SPEECH DELIVERED AT THE YOUTH SUMMIT ORGANIZED BY THE OPERATION
                   SAFE HAVEN IN COLLABORATION WITH THE CIVIL MILITARY RELIEF 
                   INITIATIVE ON TUESDAY 18TH DECEMBER 2018 AT HILL STATION JOS NIGERIA
                  </a>
                </h4>
                <p className={classes.cardProductDesciprion}>
                The Commander Operation Safe Haven Gen. ACC Agundu, 
                the representative of the Chief of Defense Staff 
                 </p>
              </CardBody>
              <CardFooter product>
              <a href="/SPEECH DELIVERED AT THE YOUTH SUMMIT ORGANIZED BY THE OPERATION
                   SAFE HAVEN IN COLLABORATION WITH THE CIVIL MILITARY RELIEF 
                   INITIATIVE ON TUESDAY 18TH DECEMBER 2018 AT HILL STATION JOS NIGERIA">
               <h5>READ MORE>></h5>
               </a>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <Card product className={classes.cardHover}>
              <CardHeader image className={classes.cardHeaderHover}>
                <a href="/SPEECH OF THE CHAIRMAN AT THE ZONAL YOUTH SUMMIT HELD IN 
                  THE THREE ZONES OF THE COUNCIL ON THE 7TH, 20TH AND 21ST OF 
                  FEBRUARY 2019 IN JOS, PANKSHIN AND SHENDAM RESPECTIVELY" >
                  <img src={img4} alt="..." />
                </a>
              </CardHeader>
              <CardBody>
                <div className={classes.cardHoverUnder}>
                </div>
                <h4 className={classes.cardProductTitle}>
                  <a href="/SPEECH OF THE CHAIRMAN AT THE ZONAL YOUTH SUMMIT HELD IN 
                  THE THREE ZONES OF THE COUNCIL ON THE 7TH, 20TH AND 21ST OF 
                  FEBRUARY 2019 IN JOS, PANKSHIN AND SHENDAM RESPECTIVELY" >
                  SPEECH OF THE CHAIRMAN AT THE ZONAL YOUTH SUMMIT HELD IN 
                  THE THREE ZONES OF THE COUNCIL ON THE 7TH, 20TH AND 21ST OF 
                  FEBRUARY 2019 IN JOS, PANKSHIN AND SHENDAM RESPECTIVELY
                  </a>
                </h4>
                <p className={classes.cardProductDesciprion}>
                Four years ago, we were in despair and
                 also in a dire need for the resuscitation of the Council.  
                   </p>
              </CardBody>
              <CardFooter product>
              <a href="/SPEECH OF THE CHAIRMAN AT THE ZONAL YOUTH SUMMIT HELD IN 
                  THE THREE ZONES OF THE COUNCIL ON THE 7TH, 20TH AND 21ST OF 
                  FEBRUARY 2019 IN JOS, PANKSHIN AND SHENDAM RESPECTIVELY" >
               <h5>READ MORE>></h5>
               </a>
              </CardFooter>
            </Card>
          </GridItem>

          
        </GridContainer>
      </div>
    );
  }
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(pricingPageStyle)(Landing);
