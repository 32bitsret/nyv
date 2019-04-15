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

class Speech4Details extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container} style={{backgroundColor:"transparent"}}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <Card justify="center">
              <CardHeader>
                <h3 className={classes.title} style={{color:"green"}}><b><i>
                GENERAL ASSEMBLY AUGUST 29TH 2018 THE AGE OF REASON II
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
                May 22nd 2018 was our first anniversary after 10 long years of despair and hopelessness. 
                I recall with nostalgia the endless struggle for the recreation of a Youth Council, and today, I found myself grateful for the existence of the council. 
                Leadership at the council has had a tremendous and unmeasured impact on my life. It has transformed every area of my life and I have experienced a quality and caliber of a council I never knew is possible. 
                Working with people from different backgrounds and philosophies has not been easy, but eventually finding a council of people that see and know each other’s wholeness and greatness is not only extraordinary, but very rare to come by. 
                Our continued commitment to awakening individuals to live their inherent power and purpose is high and ever burning. As a team, we shall continue to inspire human beings to create a sense of power and purpose…                
                </p>
                <p>
                Sure the journey was not an easy one. It was a period of recovery, and it has been very difficult. We must know today that every call of God upon our lives as young people has a global mandate. And because we are called by His name, we cannot afford to fail. 
                We live in interesting times with lots of challenges, which is why we must work to prove a point that we are global citizens and a beacon for the rest of the world. We must also know today that there is no nation on the face of the earth like Nigeria. 
                Nigerian youths are not as illiterate as most youths around the world. We can work from any place, speak any language on the face of the earth and no weather can prevent us from striving. But we must also know that the challenges we face as youths today is daunting. We must come to the place of understanding that as a country, we are living on borrowed time, and that we have survived this is a mystery. 
                </p>
                <p>
                It’s about time we stand up for something. The division amongst us is so palpable like never before. We have many political parties, religion and ethnicity to maim, kill and die for, but not one to love for. God gave us eyes to see the truth; He gave us ears to listen to our generations cry. He made us with feelings to feel the pain and gave us knowledge and wisdom to learn from our mistakes and to know our rights and responsibilities. 
                Abdicating on such responsibilities is a serious indictment and curse. We as young citizens have a right to know, we also have a duty to inform ourselves and God has given us the will to stand up and improve our lives beyond frivolous affiliations
                </p>
                <p>
                We have so many smart phones but we have not done courses online. We mismanage time forgetting time is everything. It’s a disregard for time that manifests itself in the plethora of baseless and unnecessary debates on social media. Rich men spend their money to create time and poor people spend their time trying to make money. 
                We must know today as young people that the greatest enemy of success is procrastination. Excellence is what makes the difference between persons. We can disagree on so many fronts, but excellence has a common denominator. We want to eat our seeds and that is leading us nowhere. We have to take responsibility, bring forth our visions and move forward. As young people, we must understand politics is the place to serve and not be served. 
                Contrary to what many young people think, politics is not a vacation, neither is it a job. It’s the future. We must all know that one can be a professional and still be successful. You don’t need a political office to be relevant. We keep complaining and cursing, but we are quick to forget that leadership is about an inward search. What price are we willing to pay as young people? What is our commitment as young people? Yes, we see politics as a short cut to wealth. We have got to change the narrative by putting Nigeria first...
                </p>
                <p>
                The demand for leadership is not the routine of insulting leaders or condemning them. It’s about creating solutions and also willing to take a leap of faith. How many of us sing the national anthem and say the pledge with all diligence and honour? Remember God does not take permission from anyone to bless you, which is why loyalty to country is the way forward. We have seen young people who want to contest, which is a welcomed development, but first, are we ready to run? where are the models? 
                What quality do we have? Have these models been tested against the odds? George Weah went back to school after 12 years, came back with a different vision and made it to the presidency. It’s a marathon and not a sprint. We are waiting for jobs which obviously are now the exclusive preserve of the elites. Where are the digitally relevant skills? Understood everybody aims for excellence and wants to make the difference but we must exist as though we are global citizens. Our competition is the world and not our country or state. 
                We must know that hard work and perspective planning is the way. Everybody talks of failure of leadership and organization, but people are not developing 
                </p>
                <p>
                Everything starts from the mind. We must have the mind power for productivity. We must be on top of the game. And we must be prepared to lead. It’s possible to convert everything around us into a learning system. No one knows it all, so many experts everywhere. We must talk less and listen more, getting our facts so that we don’t miss the point. For the pursuit of knowledge is power. The integrity system must be strengthened and we must have a reputation. So many people earn money without going to work and we are not asking questions. 
                What you say and do is what makes you great. Your name is all you have to protect, which is why you must build reliability around your name. We must have a vision and share a mental model. We must have the enterprise or power to execute. Team work makes a world of difference. I don’t get insecure because of the people around. People don’t commend you, rise and shine, be men of service and be quit a legacy....
                </p>
                <p>
                As young people, we must learn to appreciate things and people. It is a therapy that removes migraine, inherent exercise that helps you have peak performance, it kills transfer aggression and does magic. It’s a balm that soothes tension. You must appreciate if you don’t want to depreciate. Your support and engagement for creating a bigger council in 2018 and beyond is vital. We are entering into a new and exciting territory as we re-imagine our next best space. Until then, we ask for your love, admonishment, prayers and support, 
                knowing and affirming that our next right space is revealing itself with grace. If you have a specific skill or talent that you would like to contribute, to this process, please consider joining the council....
                </p>
                <p>
                When we assumed office on May 22, 2017, our first point of call was the Office of the Honourable Commissioner for Youths and Sports Development Plateau State. We established the needed relationship as our supervising ministry and we took off officially. We started confidence building through creating relationships by a way of courtesy calls on media outfits amongst which is the Nigerian Television Authority, Plateau Radio Television Authority, and other Radio Stations on the Plateau to help with sensitization of the youths. 
                As part of our contributions to the peace building process on the Plateau, we took advocacy visits to the Operation Safe Haven, the Nigeria Police, the Nigeria Security and Civil Defense Corps, and the Operation Rainbow. We then embarked on the inauguration of the Local Government Chapters and Districts officials. 
                During our movements round the 17 LGAs, we had the honour of meeting with the Emirs of Kanam and Wase, the Long Tehl, the Long Gamai and the Gbong Gwom Jos. We had robust interactions and series of meetings with the Plateau State Peace Building Agency which culminated in a one day retreat on the 18th January 2018. A communiqué was released to that effect which had gone a long way in helping young people and government in partnering, particularly in the place of peace building and maintaining same. 
                </p>
                <p>
                The Plateau State Youth Council also visited the National Identity Management Commission to chat ways towards improving the coverage and enrolment of Plateau youths for the purpose of obtaining the National Identification Number and issuance of the National Identity Card. We embarked on advocacy through the media to encourage youths to be deliberate about the process. We also appealed to government to assist the NIMC on the Plateau to deliver on their mandate. 
                The NIMC has since taken the steps to engage Local Government Chairmen of Plateau State Youth Council with the aim of taking the campaigns to the District levels of the Youth Council. We also took a courtesy call to the National Drug Law Enforcement Agency, The Ministry of Local Government and Chieftaincy Affairs, the Gbong Gwom Jos and the Traditional Council on the Plateau, the Teens Challenge, Plateau Intelligentsia Development Initiative and other relevant agencies all in attempt to combat alcohol and substances abuse. This led to a collaboration which birthed the Community Advocacy against Alcohol and Substance Abuse on the Plateau. 
                We have since commenced massive media campaigns which are yielding results. The UN Women has recognized the place of Plateau State Youth Council in leadership. We have had so many meaningful contacts with the training of our female folks.
                </p>
                <p>
                We visited the Sustainable Development Goals Coordinator Hon Sam Damla in his office on October 10, 2017 to make a case for the youths. We are aware over a third of the 169 SDG targets highlight the role of young people and we reiterated the facts that young people play a crucial role in achieving the SDGs by 2030. We are very hopeful that this too will bring the desired results in the future. 
                The EXCO also paid advocacy calls on the National Veterinary Research Institute Vom, the Plateau State University Bokkos, and the Federal College of Education Pankshin. These platforms created avenues to advocate for the teaming youths on the Plateau particularly those who seek spaces for growth and development. We also made advocacy on behalf of students studying in these citadels of learning. 
                To ensure adequate communication of government policies, and promoting patriotism and national unity, we paid a call to the National Orientation Agency Plateau State. 
                We witnessed a massive diffusion of tension when we participated in town hall meetings organized by the NOA Plateau State. The highlights of the partnership was a meeting at the School of Health Technology Zawan, where students were engaged and admonished on protecting public properties and were also educated on the need for responsible citizenship.
                </p>
                <p>
                We visited the Plateau State Medium and Small Enterprise Agency (PLASMEDA) and requested partnership in the place of entrepreneurship and skills acquisition training. This was in line with our mission of ensuring the youths are self employed and engaged. With the help of the Rescue Administration under the leadership of the Rt Hon S B Lalong, and the Director General of PLASMEDA, Haggai Gutap, we were able to train 2500 youths in various trades like cosmetology, poultry, catering, welding, photography, aluminum works, plumbing, etc in the first instance. 
                Through PLASMEDA, the Industrial Training Fund (ITF) have empowered 125 youths under the auspices of Plateau State Youth Council from the various districts and Local Governments. PLASMEDA also made it possible for the German Organization for Technical Cooperation (GTZ) to train some of our youths in the place of skill acquisition and entrepreneurship.  We have engaged the National Directorate of Employment Plateau State and had 15 youths trained in various trades. 
                SMEDAN launched the Government Enterprise and Empowerment Program (GEEP) here on the Plateau, which led to the opening of so many Mulpti-Purpose Cooperative Societies one of which is the Plateau State Youth Council Central Multi-Purpose Cooperative Society. 
                </p>
                <p>
                Plateau State Youth Council engaged the office of the Special Adviser to His Excellency the Executive Governor of Plateau State Social Investment Programme, Hajiya Dr Fadimatu Sumaye Hamza and an avenue was created to engage and educate the youths on the various empowerment programmes available. 
                Prior to that engagement, Plateau State had 2000+ total enrolment. After the engagement, Plateau State has a total of 8090 youths enrolled on the N-Power programme. We deeply appreciate Hajiya Dr Fadimatu Sumaye Hamza whose motherly guide led to this unprecedented progress in our constituency, and we deeply appreciate the Rescue Administration for finding her worthy to serve in such capacity. 
                The hallmark of these training was the emergence of a Plateau Youth as the overall best in the country with respect to business plan and proposals. She will take part in the training slated for the end of the year in Germany. Our visit to Fadama III Project under the leadership of Mr. Gideon Godam led to the donation of the tomato processing plant which is to be situated at the Azi Nyako Youth Centre Dadin Kowa Jos. This will serve as a source of income to the Council.
                </p>
                <p>
                We took our advocacy to the Disability Rights Commission of Plateau State, with the aim of giving youths living with disabilities the space to participate in our activities. This led to nomination of 5 youths living with disabilities to join a team of 230 youths who went on a trip to Abuja for two days on a National Prayer Retreat organized by the Forum of State Chairmen of the National Youth Council of Nigeria September 2017. 
                We have since created a directorate to take care of youths living with disabilities. The Youth Council visited the Citizenship and Leadership Training Centre in Shere Hills. We explored the possibilities there and created a partnership with the mountain school. A visit to the Plateau State House of Assembly to interact with the elected representatives at the state level was made. During our visits, Honourable members were charged on the need to sponsor people oriented bills into law to change the face of leadership on the Plateau.
                They were also encouraged to come close to the electorates, because the gap is much and this breeds mutual distrust and loss of confidence in the elected. As efforts to make sure the democratic process gets to the grassroots, the EXCO of Plateau State Youth Council visited the Plateau State Independent Electoral Commission, where we had a meeting with the Chairman. 
                We had since sustained our engagements and we kept advocating for the conduct of elections at the Local Government levels, so government can be brought to the grassroots.
                </p>
                <p>
                As activities to promote the Sustainable Development Goals on the Plateau, the Plateau State Youth Council went into collaboration with Model United Nations Development Organization (MUNDO) Plateau State. Under the leadership of Ponfa Miri, this has yielded results with the so many engagements MUNDO had with youths, students and Pupils across the Plateau. In a quest to encourage youths to be active participants in the political process, we embarked on a massive sensitization program on KT FM, J-FM, Peace 90.5 FM, Unity FM, SilverBird, Highland FM, and Tin City FM. Plateau State Youth Council anchored the 
                Campus book tour on “Love does not win election” by Aisha Osori the 18 of April 2018 all in process of encouraging the youths to be active participants in the political process and space.
                </p>
                <p>
                Even as darkness had threatened to overtake Plateau State, the Plateau State Youth Council played a very vital role in the maintenance of peace and stability through engagements of various communities in the place of confidence building, and speaking up for the people. The Youth Council engaged the security apparatus and agencies on the Plateau, government, and communities affected by the crises. The Youth Council also engaged the Christian Association of Nigeria, the Jaamatu Nasril Islam and the Plateau Initiative for Development and Advancement of the Natives (PIDAN). 
                We also had series of meeting with the Youth Ethnic Nationalities, the youth wing of JNI and CAN, Hausa Youth Communities, the Muslim Voluntary Youth Organizations, and the Christian Voluntary Youth Organizations. 
                This was concluded with a meeting on the 13 of July 2018 between the National and State elected representatives, the Civil Society Organizations, Operation Rainbow, and the Speaker of the Plateau State House of Assembly Rt Hon. Joshua Madaki esq, the Principal Officers of the PLSHA, youth groups, Traditional Council, Larger House and stakeholders. The meeting was the first in a series, and we hope to sustain same until peace is returned to the Plateau.
                </p>
                <p>
                Efforts were made by Plateau State Youth Council to visit the crises ravaged areas on the Plateau. The Youth Council in Riyom and Barkin Ladi were supported by the State Youth Council to enable them mobilize and move round to monitor and assess the situations. The Youth Council in collaboration with Plateau Intelligentsia Development Initiative took aids to affected communities in Riyom and Barkin Ladi Local Government of Plateau State. 
                The Youth Council with principal officers of the Central Working Committee visited Miango to commiserate with the Bra Ngwe and the Irigwe Youth Movement. Plateau State Youth Council made a strong appeal to His Excellency the President of the Federal Republic Muhammadu Buhari in March 2018 on the need to return our people who were displaced to their ancestral homes. We also appealed that Plateau State should be included in the Presidential Initaitive on Security in north central Nigeria, besides the creation of jobs and employment opportunities for the youths on the Plateau. 
                Plateau State Youth Council took immunization campaigns to Laranto and Busa Buji communities in Jos north local government. This was done in collaboration with representatives of UNICEF.
                </p>
                <p>
                As part of recognition to the growing talents on the Plateau and also considering the place of Plateau State in the entertainment industry, Plateau State Youth Council had a meeting with Performing Musicians Association of Nigeria (PMAN) Plateau State. Matters arising were forwarded to Plateau State Government and we are expecting a rapid turnaround and departure from the present situation. 
                As an EXCO, we have supported so many youth groups on the Plateau. We have supported an art exhibition with Simeon Bitson, an enterprising and heavily talented young man. We have extended support to the Girls Guide, AIESEC University of Jos, Man ‘O War Plateau State Command. We have also supported Plateau State Youth Council Kanam, Shendam, Mangu, Pankshin, Kanke in the various sensitization programmes they organized during these period in review. We also supported a Football Peace Tournament organized by Goodman Shedul Nanven in Langtang north Local Government Area. The Directorate of welfare organized a children Fan fare where we had close to 200 children in attendance at the last Children’s Day. 
                It provided an opportunity for us to meet with the children of our colleagues to foster the bond. The students were not left out. We make constant advocacy for the students particularly NAPSS and NANS.
                </p>
                <p>
                During the course of our leadership within the last one year, there were issues we stepped in to mediate on behalf of Plateau citizens and residents. It was the intervention of Plateau State Youth Council that prevented the total shut down of the Coca Cola plant in Jos. Our constant engagement with the management of Coca Cola as well as appeal to well placed Plateau people had helped in that regard. The Youth Council also intervened in the leadership tussle in National Veterinary Institute Vom, and also an industrial dispute at the Nigerian Institute of Mining and Geosciences Jos. We want to specially thank A A Madaki esq, who has not gotten tired with the myriads of litigations in the Youth Counsel. 
                During this period of one year, we have faced two law suits from youths on the Plateau. We came top in both cases, and never pushed for charges against the youths. 
                The Council through a unanimous decision of the Central Working Committee did a revalidation of the Voluntary Youths Organization registered with Plateau State Youth Council. This has restored sanity to the council and we are extremely proud of the revalidation committee and process.
                </p>
                <p>
                The Plateau State Youth Council wants to put it on record that at no point in time has the Council operated from a location call office. Under the leadership of Hon Victor Lapang, the Hon Commissioner of Youths and Sports Development Plateau State, an office was opened for running the administration of the Council. The Hon. Commissioner donated furniture to the Council for office use. We also want to put it on record that His Excellency did not forget the youths of Plateau State in state organized programs like pilgrimage and Sports. Under our leadership, His Excellency gave 8 slots for the youths of Plateau State to participate in the Holy Pilgrimage in Israel in December of 2017. 
                Prior to this, His Excellency also gave 5 Slots to the youths in October of 2016 even before the rebirth of Plateau State Youth Council. His Excellency Simon Bako Lalong did not stop there. He gave the youths of Plateau State 3 slots to participate in this year’s Hajj Operations in Mecca Kingdom of Saudi Arabia. The Chairman of the Youth Council was nominated by His Excellency to be part of the state team that went to Russia for the FIFA World Cup Mundial. 
                His Excellency took the advocacy of Plateau State Youth Council seriously when we went in respect of Rettong Silver Dakun who was diagnosed with Leukaemia. The sum of twelve million Naira (N12,000,000.00) was approved and released within aggressive time limit for the treatment of his condition.
                </p>
                <p>
                The Rescue Administration has done Plateau youths well. We salute the giant strides of this administration and we pledge our support to the rescue administration.
                During our inauguration, we made an appeal to His Excellency concerning the dilapidated states of the Youth Centres in Shendam and Pankshin. We also lamented the deplorable state of the Azi Nyako Youth Centre Dadin Kowa Jos. As at today, the Youth Centre in Shendam has been renovated and completed. The renovation of the Youth Centre in Pankshin will commence in a matter of days. And the Azi Nyako Youth Centre Dadin Kowa Jos has been visited by the Ministry of Urban and Regional Planning. Work will soon commence. Beyond that, we are still struggling in this period of recovery and we want to make some appeals.
                </p>
                <p>
                Your Excellency Sir, the Azi Nyako Youth Centre was handed over to Plateau State Youth Council to operate, manage and maintain same by the Dariye’s administration, and when you were the Speaker of PLSHA. That never came to fruition probably because of bureaucratic issues. It’s a very viable source of income if released to the Youth Council. As a maker of history, we appeal that the complete transfer, (though it remains the property of government) be made today. Sir, the Youth Council still awaits the promise of a Council Bus and official car of the Office of the Chairman, Plateau State Youth Council. It may also interest His Excellency that the Plateau State Youth Peace and Economic Summit is pending. 
                His Excellency had promised to sponsor such gigantic forum so the youths on the Plateau will have a template to engage each other better. Your Excellency Sir, the Youth Council has not been given a dime as part of the budgetary provisions to run the secretariat though provisions have been made for such from the Ministry of Youths and Sports Development Plateau State. We appeal that approval should also be given for the said purpose.
                </p>
                <p>
                The International Youth Day 2018 has been tagged “Safe Spaces for youth”. Youths needs safe spaces where they can come together and discuss issues related to them. As a listening governor, we appeal on behalf of youths contesting elections in 2019. The civic space which enables youths to engage in issues of governance should be provided. A lot of achievements have been made by this government in sports. The immediate rehabilitation and renovation of the Azi Nyako Youth Centre will make the public space more readily available for sports and other leisure activities. We also appeal to the state government to create digital spaces for the youths in the same youth centre, so they can interact virtually with each other across borders. 
                The provision of well planned physical spaces can help accommodate the needs of diverse youths especially those vulnerable to marginalization or violence, particularly those in crises prone regions. 
                </p>
                <p>
                Finally, We appreciate the Larger House for always serving as a whistle blower; we appreciate the rescue administration under the leadership of His Excellency Rt. Hon Simon Bako Lalong for keeping to its words; we appreciate the Plateau State Medium and Small Enterprise Development Agency, the Plateau Peace Building Agency, the National Directorate for Employment, The Industrial Training Fund, the National Orientation Agency, NDLEA, NIMC, GTZ, nHub Nigeria, Plateau State Traditional Council of Chiefs and Emirs, Ararocks, and AIESEC; University of Jos for providing platforms for youth engagements and empowerment. We appreciate all partners who sacrificed their time and resources and for standing with us at the council. 
                We appreciate our parent and supervising Ministry, the Ministry of Youths and sports Development, especially the Hon. Commissioner, Hon Victor Lapang. We appreciate government officials especially the Chief of Staff to the governor for always taking the pain to listen to us. We appreciate all volunteers in the Office of the Chairman, Plateau State Youth Council. We appreciate the CWC for the enormous support and we salute all Plateau youths for remaining steadfast and believing in the age of reasoning. 
                This General Assembly will provide a platform for new innovation for the Youth Council. Today we shall collectively take a decision to move the Council a step higher than we met it. I call on all Plateau youths to contribute. Let’s move the council forward. 
                We appreciate Tsenba Wummen Bako. Even in death, your legacy lives on
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

Speech4Details.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(pricingPageStyle)(Speech4Details);
