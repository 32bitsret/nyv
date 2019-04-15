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

class Speech2Details extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container} style={{backgroundColor:"transparent"}}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <Card justify="center">
              <CardHeader>
                <h3 className={classes.title} style={{color:"green"}}><b><i>
                SPEECH DELIVERED BY FABONG JEMCHANG YILDAM (MBBS, FMCFM) ON THE OCCASION OF HIS SWEARING - IN AS CHAIRMAN PLATEAU STATE YOUTH COUNCIL OF NIGERIA.
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
                Permit me, distinguished members of the audience to extend fraternal greeting of honour, respect and obedience from the Executive arm of the youth council.
                Permit me also to recognize other members of the distinguished audience, particularly our special guests of honour, and other senior ranking members of the state government as well as agencies.
                </p>
                <p>
                Permit me further to extend my valued recognition to our youth local and national for whom this event is of paramount importance.
                </p>
                <p>
                Finally, permit me to recognize all invitees for the sacrifice of their time, resources and energy to witness this occasion despite their other equally important engagements, the swearing in and inauguration of the EXCO of Plateau State Youth Council.
                </p>
                <p>
                I must first salute the courage and resilience exhibited by His Excellency the Executive Governor of Plateau State towards ensuring the restoration of a platform for the youths of Plateau State. February 27th 2015, His Excellency came to the Larger House on invitation and promised the youths of Plateau State he would restore the youth council if elected. Today, history has been made. You kept to your words and we are extremely proud of you.  
                Your display of character, bravery and commitment towards the out of court resolution of the PYC case that lingered for more than a decade is unequalled. Your demonstration of responsibility and leadership played out when you met and supported all the candidates who contested for the post of the Chairman alongside me. 
                The assurances you gave of your neutrality in the election were a soothing balm to the wounds created by our poor understanding and a serious tranquillizer to the palpable tension. Your intervention was timely and a crisis was averted. In the place of fear, you chose compassion. When many were afraid of the Youth Council, you had compassion and gave us a way.
                </p>
                <p>
                We congratulate you and your team on the so many laudable achievements within these two years past, particularly in the restoration of peace and order on the Plateau. We salute your courage for appointing youths into your administration, and whose contributions to the success of this administration cannot be overemphasized. Your take on the appointment of youths is your recognition of the role of the youths in nation building and particular
                the role they played in the birth of the rescue administration. Worthy of mention is the mobilization of youth participation in the plateau project, and the mandate protection responsibility the youth took across all polling units, in the state to forestall the rigging of the election in recognition of the need for a united Plateau.
                </p>
                <p>
                The Youth Council election was characterized by the various challenges as we had seen with other elections. We had our fare share of propaganda, blackmails, name callings and quarrels. We had reasons to be apart for various interests, and we were infiltrated by so many power brokers like never before. We emerged stronger than what we had anticipated. 
                I appreciate my Co-contestants and all youths who contested across all the districts and Local Government Areas.  Many Identified and respected the zoning system, which guarantees the principle of accommodation and consideration for all and sundry.
                </p>
                <p>
                Now the elections are over. It’s time for leadership, and we must all sheath our swords, mend the fences and come together to form a formidable team. We understand the journey ahead is a herculean one. We need everyone on board.  
                </p>
                <p>
                Ladies and Gentlemen, we are not unaware of the grave responsibility and task ahead of us. The vacuum created over these 10 years past can be likened to a child who has lost milestones from a morbid disease. We as a people must learn how to walk all over again. We are not ignorant of the facts that we will be faced with so many hurdles, but we shall overcome if we believe. As Obama stated before, 
                “The road ahead will be long, our climb will be steep. We may not get there in one year or even in one term …” but we believe we will get there. Though we are not born with a fix amount of resilience, but we say today, that we must build this muscle so we can heap from this valley of despair hope for our people. 
                </p>
                <p>
                Understanding our mindsets and changing the value system through character content development is a sine qua non for achieving any set objective or meaningful goal. We will collectively take a leap of faith to correct the wrong impressions the world has about us as a people. We will also take a step in the right direction towards recreating ourselves. The plethora of issues that have bedeviled the youths of 
                Plateau State cannot be fully stated in this speech. We shall attempt to list or enumerate a few so we can establish the need for a turn in the searchlight to this critical and yet very important constituency. 
                </p>
                <p>
                Even as we stand here today, our brothers and sisters have been held captive by social vices such as drugs/substance abuse, deep rejection and isolation. The problem of unemployment is very much with us. Many more roam our streets because they are not engaged or empowered. The educational status is not encouraging. Entrepreneurship is lacking, and youth engagement is low. 
                This of course has not helped in the confidence building on the Plateau. The issues of religion and ethnicity are as old as the country itself. One would wonder which of these divides us more. The polarization across political parties or affiliations had made us worse. 
                </p>
                <p>
                The campaign was tagged ‘‘The Age of Reasoning’’. Agreeing on issues and finding a common front is not an option if we must survive. We need to think beyond the idea that has brought us this low. We must find a way of looking at our circumstances and finding the good in it. We cannot be the cradle of leadership in this great nation, a great people with a rich heritage, 
                an intelligent heterogeneous clusters with influence all over, and yet our blessings has turned into an entrapment. We must come together and agree on a way forward.
                </p>
                <p>
                1.  My first duty as Chairman of Plateau Youth Council is to call a Solemn Assembly of Plateau Youths tagged ‘PLATEAU YOUTH SUMMIT’ to be convened and supported by Government. The Plateau Peace Building Agency will be our major partner in this project. It’s time for reconciliation, recreation and reintegration. We shall gather as a people who seek to restart our lives all over again. 
                We need to acquire the skills to function properly in a post conflict society. Our prosperity will largely depend on these skills. The solutions to the issues that have plagued us will emanate from this summit. Arising also from this summit is a Youth Development Plan that would be formulated and adopted.
                </p>
                <p>
                2. We shall initiate the process for the creation and establishment of PLATEAU YOUTH DATA BANK, which will Commission a NEEDS assessment of the youth across the 17 Local Government Areas of the State and those in internal Diaspora. This will provide the essential template for the creation of a YOUTH COMMISSION on the Plateau. 
                Issues of youth engagement, education, empowerment, entrepreneurship and employment shall be addressed by the Youth Commission. The Youth Commission will coordinate, implement, supervise, monitor and evaluate programs for youths in collaboration with the State Ministry for Youths and Sports. 
                The Commission will work with government, nonprofit organizations, community leaders, faith based organizations and private entities to develop strategies to improve the lives of Plateau youths. 
                </p>
                <p>
                We shall engage the Federal Character Commission, our representatives at the national assembly, boards, and all stakeholders for job creation, and networking. We can be engaged with youth organizations, cultural organizations, sports, arts, music, volunteer work, career development, religion, politics, and social activism which can occur in almost any kind of setting.
                </p>
                <p>
                3. We shall work towards the inclusion of youth in governance at all levels of policy formulation and Implementation. We appreciate the current representation is however inadequate, though far better than we ever had. We shall work towards gender mainstreaming, ensuring that the female folks are equally and adequately represented.  
                </p>
                <p>
                4. Strategic Youth Empowerment through the various agricultural value chains and the Micro, Small and Medium Enterprises Agency (Plateau State Microfinance Development Agency). We shall facilitate Issues of Start Ups, Seed fund and equipment Support for vocational and skills acquisition programs and the Identification of best Business Plans/Proposal for funding under a repayment plan akin to the Federal Government Youth with Innovation Program. Also is the creation of linkages with Federal Agencies like the Industrial Training Fund for entrepreneurial training.
                </p>
                <p>
                5. Renovation of the Azi Nyako Youth Centre Dadin Kowa and the renovation of the Youth centers in Pankshin and Shendam is our priority. These will serve to generate revenue for the youths and reduction to the barest minimum the dependence on government for funding of smaller projects. 
                </p>
                <p>
                6. We will engage in legislative advocacy and lobbying for Good Governance Laws and resolutions while also ensuring that the usual practice of oversight and picketing all Federal Government recruitment quotas for the state is filled appropriately at the National level and for Federal Agencies in the state.
                </p>
                <p>
                Through our leadership, we intend to share the thoughts, hopes, expectations and fears of young people on the Plateau. We will ensure the authentic voices of young people are being heard by political actors, donors, civil society and the wider public. We will demonstrate that young people can rise above partisan politics, grasp the wider development issues at stake and make a useful contribution to the debate. Together, we shall counter the negative discourse around youth engagement in electoral processes, bring together like-minded organizations and individuals to share information and participate in a youth-led advocacy project.
                </p>
                <p>
                We assure government that Plateau Youth Council, though supported by Government will serve as a shadow government, contributing her suggestions on all aspects of good governance and would not be a pawn in the hands of any political class to the detriment of the youths of plateau. The PYC will be non Partisan and would be administered without any political, religious or ethnic bias. Plateau youths, it’s a new dawn for brotherhood, unity, peace and progress of plateau state. The ground with the new leadership is now set for building bridges and establishing new frontiers for a secured and guaranteed future for the Plateau Youth.
                </p>
                <p>
                Thomas Jefferson said, and I quote <quote><i>"We are not afraid to follow truth wherever it may lead, nor to tolerate any error so long as reason is left free to combat it."</i></quote><br/>
                  It’s the age of reason. Let reason prevail. Let reason be our watch. 
                </p>
                <p>
                Distinguished Ladies and Gentlemen, may I salute a fearless, humble and generous leader, Chief George Michael Maqual. The Chairman, Larger House of Plateau Youth Council. A man, whose belief and understanding birthed this movement. Chief Maqual, you are a creator of leaders and a maker of men. We are not ashamed to call you our mentor, friend and father. Your stance created a template for today’s event, and your sterling contributions will forever remain with us, we shall tell our children, children’s children and a thousand generations what you did for the youths of Plateau state. It was indeed a long walk to freedom.
                </p>
                <p>
                To the Chief of Staff, Chief John Dafaan, you were a lender of the last resort in this movement. We thank you for never letting us down despite the so many jobs on your hands. You filled the gap for His Excellency, and you have proven to be a dependable friend, leader and ally. God bless and keep you. To the Director of Research, Government House, Prof. John Wokton Wade, you are simply the best
                </p>
                <p>
                To Tsenba Bako, the ray of light towards the amicable consent judgment and out of court settlement came from you. You said it was possible. Your understanding that we were at a critical point in history was amazing. You collaborated with all stakeholders, and people in government to give us hope. Today, the youths of Plateau state salute you. 
                </p>
                <p>
                To the veterans who believed in us, to the veterans who stood on the side of truth against all odds, to the veterans who were never fatigued by our constant complains, to the veterans who staked everything despite the back lashings, to the veterans who said, this is your time to take over, we are eternally grateful. Telzing Miri, Amos Dombin, Dul Sunday Longbap, A A Madaki, Georgina Dashe et al, you are the heroes we celebrate today.
                </p>
                <p>
                To the Electoral Committee, we salute your courage and display of professionalism. You did a wonderful and amazing job. Thanks for standing your ground.
                </p>
                <p>
                To our Parent and supervising ministry, the Ministry of Youths and Sports Development, we are proud of you.  
                </p>
                <section>
                <quote>
                    <i>
                        <b>
                            "
                            Now the only way to avoid this shipwreck and to provide for our posterity is to follow the counsel of Micah, to do justly, to love mercy, to walk humbly with our God. For this end, we must be knit together in this work as one man, we must entertain each other in brotherly affection, we must be willing to abridge ourselves of our superfluities, for the supply of others necessities, we must uphold a familiar commerce together in all meekness, gentleness, patience and liberality. 
                            We must delight in each other, make others condition our own, rejoice together, mourn together, labour and suffer together, always having before our eyes our commission and community in the work, our community as members of the same body, so shall we keep the unity of the spirit in the bond of peace. The Lord will be our God and delight to dwell among us, as His own people and will command a blessing upon us in all our ways. So we shall see much more of His wisdom, power, goodness and truth than formerly we have been acquainted with. 
                            For we shall find that the God of the heavens is among us, when ten of us shall be able to resist a thousand of our enemies, when we shall make a praise and glory, that men shall say of succeeding plantations; the Lord make like that of Plateau state(paraphrased). For we must consider that we shall be as a city upon a hill, the eyes of all people are upon us; so that if we shall deal falsely with our God in His work we have undertaken and so cause Him to withdraw His present help from us…
                            "
                        </b>
                    </i>
                </quote><br/>
                <quote style={{alignSelf:"right"}}>
                    <i>
                        <b>
                        John Winthrop 
                        </b>
                    </i>
                </quote>
                </section>
                <p>
                We are the light of the world. A city that is set on a hill cannot be hidden. I have been guided my entire life by John Winthrop’s sermon before his shipmates on the flagship Arbella three hundred and eighty seven years ago, as we are faced with the task of building a new youth council on a perilous frontier. We cannot afford to disappoint because the eyes of the world is on us. We must rise and shine for the Glory of the Lord is upon us. Failure is not an option. 
                <br/>
                Thank you.
                </p>
              </CardHeader>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Speech2Details.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(pricingPageStyle)(Speech2Details);
