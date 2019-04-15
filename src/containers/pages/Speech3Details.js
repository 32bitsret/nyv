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

class Speech3Details extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container} style={{backgroundColor:"transparent"}}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <Card justify="center">
              <CardHeader>
                <h3 className={classes.title} style={{color:"green"}}><b><i>
                SPEECH DELIVERED BY PLATEAU STATE YOUTH COUNCIL CHAIRMAN ON THE EVENT OF THE INAUGURATION OF LOCAL GOVERNMENT AND DISTRICTS EXCO
                PROTOCOLS
                </i></b></h3>
                {/* <div xs={12} sm={12} md={4}>
                <img 
                    style={{width:"250px", height:"200px", alignSelf:"center"}}
                    src={img1}
                />
                </div> */}
                <p>
                His Excellency, the Executive Governor of Plateau State, the Rt. Honourable Simon Bako Lalong,
                His Excellency, the Deputy Governor of Plateau State, Prof. Sunni Tyoden,
               </p>   
                <p>
                The Speaker of the House of Assembly,  Rt. Hon. Peter Azi,
                The Secretary to the Government of Plateau State,
                Honourable members of the national and state assemblies,
                The Chief of Staff Government House,
                Management Committee Chairmen,
                Royal Highnesses and Majesties present,
                Religious leaders,
                The Chairman Larger House of Plateau Youth Council
                The Chairman, Nigerian Medical Association,
                Other Guests present, men of the Security Agencies, Gentlemen of the press,
                Distinguished Ladies and Gentlemen

                </p>    
                <p>
                It is with great pleasure that I welcome everyone here today. Over the years, we have learned that every moment in history is transitory, and that such moments pass by very quickly. We have also been taught that these moments are not only rare, but also precious and unique.
                </p>
                <p>
                Permit me further to extend my valued recognition to our youth local and national for whom this event is of paramount importance.
                </p>
                <p>
                We do understand that some moments have often stood out as times in which causes were set in such a way that influences the course of history. I believe what is happening here today, is one of such unique moments, and I am very proud that you are here to be part of it.
                </p>
                <p>
                Permit me please to express my profound gratitude to the every indefatigable youths of Plateau State for working out this process peacefully. Permit also to thank you all for giving me and my team the opportunity to serve you. Finally, permit me to salute our veterans for the sacrifice they made over the years.
                </p>
                <p>
                Ladies and gentlemen, permit me to pay a glowing tribute to our amiable governor, the captain of the Rescue Administration in Plateau State, the Rt. Hon. Barr. Simon Bako Lalong for the courage exhibited in bringing back Plateau Youth Council. This constitutes part of your most enduring legacies. 
                We pledged to support your laudable policies and programs as long as they are poised to bring about an improvement in the socio-economic well-being of youths in particular, and citizens of our state in general.
                </p>
                <p>
                Our goal has always been to engender a more innovative, creative, enthusiastic, vibrant and confident generations of youth who are determined more than ever before, to contribute to the social, economic and political development of our dear state. 
                As we embark again on this journey to re-establish the Plateau youth as a strong and formidable voice, we are not ignorant of the so many distractions from within and without. But we are very determined, more than ever to deliver our promises to the youths.
                Our resourcefulness, strong leadership, resilience, openness, and humility to reposition the youth on the cusp of genuine change and transformation are our strengths.
                </p>
                <p>
                Statistically, young people account for between 60% - 70% of the population of any given society. And yet in the 21st century Nigeria, little or no opportunities abound for them to gain the requisite capacity and skills to achieve their dreams and aspirations. 
                Consequently, many of our youths have lost hope and thus become gullible and willing tools in the hand of political profiteers, swindlers, criminals and even terrorists.
                </p>
                <p>
                This indeed is our current situation on the Plateau. As unpleasant as it may sound, many of our Plateau youth are besieged by an unimaginable surge in sleaze, lack of patriotism, irresponsibility, and alcoholism and drug addiction. 
                This problem is caused by the failures of our families, traditional and religious institutions to provide proper guidance, mentorship and political empowerment over time. 
                While these vices continue to hold our youth back, they have further inflicted a serious damage that is unimaginable. Yet the response of our society has been rather docile, and if not, dismissive. For this reason, we have witnessed an erosion of moral values that once gave our society meaning and purpose.
                </p>
                <p>
                While government cannot provide all the answers or solutions to our growing problems as young people, it is incumbent on Plateau State Youth Council to assist and partner with both state and non-state actors to ensure that the youth finds his or her place in the scheme of things.
                </p>
                <p>
                Under my leadership, the Youth Council has started in earnest partnership with the Peace Building Agency and PLASMEDA in training, mentorship, education and empowerment schemes. Through this, we intend to create an egalitarian society where opportunities abound not just for those with the most money and influence, but for every youth on the Plateau who is willing to lead a meaningful and productive life.

                </p>
                <p>
                A major problem that has confronted our dear state for more than a decade ago is the issue of peace and security. Plateau state has gone through series of violent conflicts which left behind certain legacies that our people are still struggling to overturn. As Plateau Youths, we understand the role young people have played in either preventing or perpetrating these conflicts. 
                Yet it is quite unfortunate that the PYC has for more than a decade been unable to play any significant role in either preventing the outbreak of violent conflict or at least, contribute to deepening the peace that has returned since the advent of the Lalong Administration.
                </p>
                <p>
                Let me announce to you today that the focus of my administration for the next three years would be to partner with government to sustain or consolidate the gains of the fragile peace that has returned to our state as well as ensure that the vast majority of our youth are empowered economically and politically.
                </p>
                <p>
                Once again, I want to assure you that our doors will be wide open and our arms stretched forth to all our opponents and supporters alike as we work together to steer the ship of PYC away from troubled waters. I urge us all to move onward together steadfast in unity and firm purpose. The PYC has suffered a long night of turbulence but the good news is that, better days are here again.
                </p>
                <p>
                We shall engage the Federal Character Commission, our representatives at the national assembly, boards, and all stakeholders for job creation, and networking. We can be engaged with youth organizations, cultural organizations, sports, arts, music, volunteer work, career development, religion, politics, and social activism which can occur in almost any kind of setting.
                </p>
                <p>
                God bless Plateau State Youth Council<br/>
                God bless Plateau State<br/>
                God bless Nigeria.
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

Speech3Details.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(pricingPageStyle)(Speech3Details);
