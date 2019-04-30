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

class Speech6Details extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container} style={{backgroundColor:"transparent"}}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <Card justify="center">
              <CardHeader>
                <h3 className={classes.title} style={{color:"green"}}><b><i>
                SPEECH OF THE CHAIRMAN AT THE ZONAL YOUTH SUMMIT HELD IN 
                  THE THREE ZONES OF THE COUNCIL ON THE 7TH, 20TH AND 21ST OF 
                  FEBRUARY 2019 IN JOS, PANKSHIN AND SHENDAM RESPECTIVELY
                </i></b></h3>
                {/* <div xs={12} sm={12} md={4}>
                <img 
                    style={{width:"250px", height:"200px", alignSelf:"center"}}
                    src={img1}
                />
                </div> */}
                <p>
                Four years ago, we were in despair and also in a dire need for the resuscitation of the Council.  Today, we found ourselves grateful for the return of this platform through which the yearnings and aspirations and concerns of youths on the Plateau have echoed through the ages.  
                We bless God for the strength and grace to deliver to the youths on the promises we made while seeking their mandate as the first sets of executives after ten long years.
               </p>   
               <p>
               The theme for the year is, “working together, delivering together”. We have all come to the place of understanding that; we can do much and far beyond our imaginations when we work together. We have lost so much in this constituency, but it’s also possible to redeem the time through our collective efforts. 
               Our appreciation goes to the Captain of the Rescue Administration, the RT. Hon Dr. Simon Bako Lalong whose singular effort led to the restoration of a moribund Council. 
               We also appreciate the Governor for making sure the youths on the Plateau are self employed, engaged and empowered, through the massive skills acquisition and entrepreneurship trainings championed by PLASMIDA.
               </p>
               <p>
               Under our watch as officials of the Council, we have trained and equipped more than 11,000 youths in different skills and trainings across the state, which is evident by our reportage at the General Assembly which took place in August of 2018. The skills acquisition and entrepreneurship trainings are still very much in progress. We make bold to state here that, PLASMIDA is the biggest collaborator of Plateau State Youth Council. PLASMIDA is the Council and the Council is PLASMIDA. 
               These efforts are put in place to empower youths explore innovative ideas for tackling development challenges as government does not have the capacity to employ all the youths on the Plateau. These also serve to provide youth with the necessary tools to build and engage in impactful projects. The resultant effects are responsible citizenship we have seen and the harnessing of the great potentials that was locked in our youths.
               </p>
               <p>
               Plateau State Youth Council (PYC) continued with the sensitization of the teaming youths on the Plateau particularly in the place of opportunities in the Npower, with Dr Fadimatu Sumaye Hamza. In November of 2018, Plateau State also recorded a massive 11,000 youths enrolled in the Npower programme. This is an improvement over the 8090 we had in the month of August 2018. As part of creating space for the vulnerable, 
               Youth Council also visited the crises ravaged areas on the Plateau. We help take reliefs, and also established monitoring units in Riyom and Barkin Ladi Local Government Areas of the state. The Youth Council in Riyom and Barkin Ladi were supported by the State Youth Council to enable them mobilize and move round to monitor and assess the situations.
               </p>
               <p>
               The Youth council in collaboration with the Operation Safe Haven Headquarters has engaged the youths in so many dialogue forums and Peace walk all over the Plateau. Our partnership with the OPSH has proven to be one of the most productive in recent times, and we also seize this opportunity to pass a vote of confidence on the Commander, Operation Safe Haven for his breath taking initiatives towards lasting peace on the Plateau.
               </p>
               <p>
               In September of 2018, the Council collaborated with the British High Commission and Plateau Chevening Scholars to educate and sensitize our youths on scholarship opportunities in the United Kingdom. We also collaborated with PLASIEC and organized a one day event, where all district Chairmen were invited for a seminar on ‘‘say no to electoral violence.’’ The event provided a template where all districts Chairmen met for the first time in the history of the Youth Council. 
               Again, in collaboration with the Job Oboro Foundation, the Council organized a Youth Summit which took place for four days, hence mentorship opportunities were opened up for youths, and that served for the expansion of our networks and frontiers. The Council also worked with the World Health Organization, where we carried out a sensitization programme and awareness on Yellow Fever prevention and mass vaccination on the 19th of November 2018.
               </p>
               <p>
               Our quest for youth engagement and empowerment took us to the United Nations Development Fund. With the help and support of the UNDP, we had 100 youths trained at the Citizenship and Leadership Training Centre Shere Hill on character modeling. Presently, we have 100 youths who are currently training in Abuja and Kaduna in footwear production, Leather works and GSM repairs. Furthermore, in collaboration with the Interfaith Mediation Centre, we organized a two day capacity building workshop on the culture of forgiveness and reconciliation. 
               Over 500 youths from the entire Plateau had the opportunity of engaging themselves, and hence pledged to forgive each other. The commissioning of the Garden of Forgiveness last week is symbolic of our reflections on the subject of forgiveness, and was the hall mark of the event.
               </p>

               
               <p>
               The Plateau State Youth Council had programmes with the Humanitarian Dialogue in the three senatorial zones all towards achieving peaceful elections in 2019. We also had programmes with Independent National Electoral Commission (INEC), Youth Initiative against Violence and Human Rights Abuse (YIAVHA), Women and Positive Peace Building Initiative (WOPPI), Akedanvarsity, all in concerted efforts to have a peaceful election this year. We have also supported Plateau State Youth Council Kanam, Shendam, Mangu, Pankshin, Kanke in the various sensitization programmes they organized during these period in review.
               </p>
               <p>
               When we came on board in 2017 we pledged to bring a facelift to the events in the council, therefore taking the councils activities to the zones, Local Governments and Districts has been our priority. Most youths at the rural areas became aware of these constant engagements. Today, we are meeting at the zonal level (Violent Free Elections Summit) to build confidence and encourage youths to remain peaceful. We are encouraging the youths to also exhibit the highest level of responsible citizenship and steer away from violence during the 2019 elections. 
               Inasmuch as we appreciate the system that is running, we can only effect change if we remain alive and healthy. We must not be willing tools in the hands of desperate citizens, and we must shun substance abuse.
               </p>
               <p>
               More so, the participation of young people in the political space is at a new low. The current trend in politics proves to be an albatross for young people, and as such limit our participation. The youths must work hard to create a niche for themselves if we are to provide for posterity. Politicians must deliberately create a space for the young people who are unarguably the biggest portion of our population. Young people must strive to redeem the time and stay away from activities that make them tools in the hand of political racketeers and terrorists.
               </p>
               <p>
               We want to place on record, our profound gratitude to the Rescue Administration again for providing enormous safe spaces for youths on the Plateau. The engagement of the youths by this administration is at a new level. The Council has never had it this good. We are determined to provide support and play our role in nation building. We also appreciate the government for donating a car to the office of the Chairman, Plateau State Youth Council.
               </p>
               <p>
               Finally, whatever we have achieved is not possible without the support from you. The ever creative, innovative and hard working youths of Plateau state, you have remained a great source of encouragement and learning for us. We appreciate your patience and contributions to building the Council. Many thanks to the youths who have volunteer to serve at various capacities in the Council.
               </p>
               <p>
               Working together, delivering together is the new password…
               </p>
               <p>
                Dr. Fabong Jemchang Yildam<br/>
                MBBS, FMCFM<br/>
                Chairman
                </p>
              </CardHeader>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Speech6Details.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(pricingPageStyle)(Speech6Details);
