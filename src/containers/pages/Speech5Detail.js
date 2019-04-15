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
                <p>
                It’s no longer news that 60 - 70% of the entire population of any given society is in the youth constituency. Again the UNICEF puts it that 45 – 50% is under the age of 30 and close to 89% of this population is under the age of 17 years. The crises on the Plateau had taken different dimensions, but it started actively in 2001, so I may be right to state here that these under 17’s know nothing beside violence to our shame. 
                Many seated here today have a little idea on the concept of peace, but most importantly is our poor understanding of the concept of Truth, Mercy, Justice and Peace. I shall share with you from my continuous studies on the concept of peace from this great book they titled ‘RECONCILE’ written by John Paul Lederach. 
                </p>
                <p>
                  <b>
                    <i>
                      “Greatly distressed in the midst of the midst of a nasty conflict, I kept hearing voices appealing to Truth, Mercy, Justice and Peace. The arguments and blows had gone round and round. So finally, I made a proposal. “What if,” I asked the people in this awful fight, “what if we invited our four friends to join us and asked them to openly discuss their views about conflict?”
                      </i>
                  </b>
                </p>
                <p>
                Locked in their righteous stances, the people looked at me, stunned with such an absurd idea. But I pressed ahead without paying much attention. “I have seen them come and go in other fights. I could ask them to try to clear up a few things.” Nobody objected, so I brought Truth, Mercy, Justice and Peace into our room and sat them down in front of the belligerent crowd. I addressed the four. “We want to know what concerns you each have in the midst of conflict. May we hear your views?” 
                </p>
                <p>
                Truth stood and spoke first. “I am truth,” she said. “I am like light that cast so all may see. In times of conflict, I want to bring forward what really happened, putting it out in the open. Not the watered – down version. Not a partial recounting. My handmaidens are transparency, honesty, and clarity. I am set apart from my three colleagues here,” Truth gestured towards Mercy, Justice and Peace, “because they need me first and foremost. Without me, they cannot go forward. When I am found, I set people free.”
                </p>
                <p>
                “Sister Truth,” I interjected hesitantly, not wanting to question her integrity, “You know I have been around a lot of conflict. There’s one thing I am always curious about. When I talk to one side, like these people over here, they say that you are with them. When I talk to the others, like our friends over there, they claim you are on their side. Yet in the middle of all this pain, you seem to come and go. Is there only one Truth?” 
                </p>
                <p>
                “There is only one Truth, but can be experienced in many different ways. I reside within each person, yet nobody owns me,” “if discovering you is so crucial, “I asked Sister Truth, “why are you so hard to find?” She thought for a while before replying. “I can only appear where the search is genuine and authentic. I come forward only when each person shares with others what they know of me, and when each person respects the other’s voices. Where I am strutted before others, like a hand puppet on a child’s stage, I am abused and shattered, and I disappear.”
                </p>
                <p>
                “Of these three friends,” I pointed to the three colleagues seated around her, “whom do you fear the most?” Without hesitation she pointed to Mercy. “I fear him,” she said quietly. “In his haste to heal, he covers my light and clouds my clarity. He forgets that Forgiveness is our child, not his alone.” Next I turned to Mercy. “I am sure you have things to say. What concerns you?”
                </p>
                <p>
                Mercy rose slowly and said, “I am Mercy.” He seemed to begin with a plea, as though he knew that he, among them all, was under tight scrutiny. “I am the new beginning. I am concerned with people and their relationships. Acceptance, compassion, and support stand with me. I know the frailty of the human condition. Who among them is perfect?” He turned to Truth and continued, with his eyes on her. “She knows that her light can bring clarity, but too often it blinds and burns. What freedom is there without life and relationship? 
                Forgiveness is indeed our child, but not when people are arrogantly clubbed into humiliation and agony with their imperfections and weaknesses, our child Forgiveness was birthed to provide healing.”
                </p>
                <p>
                I could not resist posing an urgent question: “But, Brother Mercy, in your rush to accept, support, and move ahead, do you not abort this child?” He reacted quickly: “I do not cover Truth’s light. You must understand. I am Mercy. I am build of steadfast love that supports life itself. It’s my purpose in life to bring forward the eternal grace of new beginnings.”
                </p>
                <p>
                  <b><i>“And whom do you fear the most?” .</i></b>
                  I asked
                </p>
                <p>
                Mercy turned, faced Justice, and spoke clearly: “My Brother Justice, in his haste to change and make things right, forgets his roots lie in real people and relationships. “So Brother,” I said, “what do you have to say?”
                </p>
                <p>
                “I am Justice,” he responded as he rose to his feet. His strong voice was accompanied by a deep smile. “Mercy is correct. I am concern about making things right. I consider myself a person who looks beneath the surface and behind the issues about which people seem to fight. The roots of most conflicts are tangled in inequality, greed, and wrongdoing. “I stand with Truth, who shed her light to expose the paths of wrongdoing. 
                My task is to make sure that something is done to repair the damage wrecked, especially on the victims and the downtrodden. We must restore relationships, but never while failing to acknowledge and rectify what broke the relationship in the first place.”
                </p>
                <p>
                A question chewed at my mind, and I had to ask it: “But, Brother Justice, everybody in this room feels they have been wronged. Most are willing to justify their actions, even violent deeds, as doing your bidding. Is this not true?” “It is indeed,” Justice responded. “Most do not understand.” He paused as he thought for a minute. “You see, I am most concerned about accountability. Often we think that anything and everything is acceptable. True and committed relationships have accounting and steadfast love. 
                Love without accountability is nothing but words. Love with accountability is changed behavior and action. This is the real meaning of restoration.  My purpose is to bring action and accountability to words.”
                </p>
                <p>
                “Then whom do you fear?” I inquired.
                </p>
                <p>
                “My Children,” he chuckled, remembering years of experience. “I fear that my children, Mercy and Peace, see themselves as parents.” His voice carried a hint of gentle provocation. “Yet they are actually the fruit of my labour.”
                </p>
                <p>
                Peace burst into a glowing smile. Before I could speak, she stepped forward. “I am Peace, and I agree with all three,” she began. “I am the child to whom they give birth, the mother who labours to give them life, and the spouse who accompanies them on the way. I hold the community together, with the encouragement of security, respect, and well-being.”
                </p>
                <p>
                Truth and Justice began to protest. “That is precisely the problem,” said Truth in a frustrated voice. “You see yourself as greater and bigger than the rest of us.”
                “Arrogance!” Justice pointed his fingers towards Peace. “You do not place yourself where you belong. You follow us. You do not precede us.” “That is true, Brother Justice and Sister Truth,” Peace responded. “I am more fully expressed through and after you both. But it is also true that without me, there is no space cleared for Truth to be heard.”
                </p>
                <p>
                Peace turned towards Justice. “And without me, there is no way to break out of the vicious cycle of accusation, bitterness, and bloodshed. You yourself, Justice cannot be fully embodied without my presence. I am before and after. There is no other way to reach me. I myself am the way.”
                </p>
                <p>
                Silence fell for a moment.
                “And whom do you fear?” I asked.
                </p>
                <p>
                “Not whom, but what and when.” Peace replied. “I fear manipulation. I fear the manipulation of people using Sister Truth for their own purposes. Some ignore her, some use her as a whip, and some claim to own her. I fear times where Brother Justice is sacrificed for the sake of Brother Mercy. I fear the blind manipulation when some will sacrifice life itself in trying to reach the ideal of Brother Justice. When such trickery takes place, I am violated and left as an empty shell.”
                </p>
                <p>
                I focused my attention on all four. “How would it be possible for you four to meet? What would you need from each other?”
                </p>
                <p>
                Truth looked first at Mercy. “You must slow down, Brother Mercy. Give me a chance to emerge. Our child cannot be born without the slow development in the womb of the mother.” Mercy nodded. “Shine bright, dear Sister Truth. But please take care not to blind and burn. Remember that each person is a child of God. Each is weak and needs support to grow.” Justice was eager to speak. “I have been partly reassured by the words of Sister Peace. I need a clear statement that she gives a place for accountability and action. 
                Remember when Micah spoke to us: ‘Love Mercy and do Justice’. You Sister Peace must allow room for us to come forward. If not you will be aborted.”
                </p>
                <p>
                Peace responded on the heels of his last words. “Brother Justice, our lips will meet if we recognize that we need one another. Do not let your heart of compassion fall into bitterness that rages without purpose. I will provide the soil for you to work and bear fruits.”
                </p>
                <p>
                The four were huddled into a small circle. “And what,” I asked, “is this place called where you stand together?”
                </p>
                <p>
                “This place,” they responded in unison, “is reconciliation.”
                </p>
                <p>
                Then suddenly and without signal, they touched hands and danced. It was as if the dance came only rarely, like the weaving of lines and bodies around a Maypole. I could hardly distinguish one from the other as they swung from the room. No one said a word. No music was in the air, only the images of the interwoven bodies of Truth, Mercy, Justice and Peace.
                </p>
                <p>
                Reconciliation requires us to take up the primary practical task of creating the dynamic social space where Truth, Mercy, Justice and Peace can genuinely meet and wrestle things out, much like Jacob in the long night…
                </p>
                <p>
                We must pay attention and give space to the different energies represented by the voices of Truth, Mercy, Justice and Peace. When these voices are heard as contradictory forces, we find ourselves mired in erupting conflict and paralyzed by it. We argue endlessly over which is more important, justified, or proper. When we hear these four voices as contradictory, we are forced into a false position of choosing one or the other. It is as if they were in a boxing match that only leaves winners and losers. Such tunnel vision should not exist. 
                We are not asked to choose between rain and sunshine. Each is different, but both are needed for sustaining life and growth. Such is the case with Truth and Mercy, Justice and Peace.
                </p>
                <p>
                Great youths of Plateau state and Nigeria, we can borrow a leaf from this great narrative and work together as a people. We can’t be asking for justice when we have soiled our hands in blood. We can’t be asking for justice when we have killed innocent people. Our elected representatives are not representing us, but their pockets and families. I have been to these villages and the rags I saw on people can’t be used to clean the floor of our representatives. They keep manipulating us, with our permission. 
                Stepping out of here today, we refuse to be willing tools in the hands of desperate citizens. We will take that leap of faith and make things work. We are most determined to heap from these valleys of despair, hope for our communities.
                </p>
                <p>
                God bless the Operation Safe Haven, God bless the Civil Military Initiative, God bless Plateau State Youth Council, God bless Plateau state, and God bless Nigeria.
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

Speech5Details.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(pricingPageStyle)(Speech5Details);
