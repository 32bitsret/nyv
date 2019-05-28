import React, { Component } from 'react'
import 'assets/home/css/styles/style.css';
import Header from "./common/Header"
import Footer from "./common/Footer"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
    items:1,
    rewind: true,
    autoplay: true,
    slideBy: 1,
    
};

export default class About extends Component {
    
    render() {
    return (
      <div>
          <Header/>
          <div className="breadcrumb-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">About</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
          </div>
        
          <div className="about-us-area about-page">
          <div className="container">
              <div className="row align-items-center justify-content-between">
                  <div className="col-12 col-lg-5">
                      <div className="about-content">
                          <h2>Welcome To PYC</h2>
                          <p>
                              Welcome to Plateau State Youth Council. Here, It’s very important you know that you’re the one who makes the Council worth it. In the Council, we aim to take a different approach in reaching out and helping youths attain their potentials with limited resources. We stress cultural relevancy and utilize all medias and means to communicate the growth and development message. It’s very important to believe that you’re the one with whom we can go places. 
                          </p>
                          <p>
                              Welcome!
                          </p>
                          <div className="opening-hours-location mt-30 d-flex align-items-center">
                              <div className="opening-hours">
                                  <h6><i className="fa fa-clock-o"></i> Opening Hours</h6>
                                  <p> Mon - Fri: 08.00am - 4.00pm</p>
                              </div>
                              <div className="location">
                                  <h6><i className="fa fa-map-marker"></i> Location</h6>
                                  <p>Azi Nyako Youth Centre Dadin Kowa, Jos</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-12 col-lg-4">
                      <div className="about-thumbnail">
                          <img src="img/chairman-about.png" alt=""></img>
                      </div>
                  </div>
              </div>
          </div>
          </div>

          <section className="call-to-action-area section-padding-100 bg-img bg-overlay" style={{backgroundImage: "url(img/wall.png)"}}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="call-to-action-content text-center">
                            <h2>"All we need and must do as a people is to create that common ground, to enable us fight the common enemy, to safeguard our common wealth, for the common good"</h2>
                        </div>
                    </div>
                </div>
            </div>
          </section>

              <div className="why-choose-us bg-gray section-padding-100-0">
                <div className="container">
                  <div className="row">
                      <div className="col-12">
                          <div className="section-heading">
                              <h2>our  values</h2>
                          </div>
                      </div>
                  </div>
                  
                  <div className="row">
                      <div className="col-12">
                          <div className=" mb-100">
                              <img src="img/values.png" alt="" /> 
                          </div>
                      </div>
                  </div> 
                </div>
              </div>

              <section className="upcoming-events-area section-padding-0-10">
                <div className="upcoming-events-heading bg-img bg-overlay bg-fixed" style={{backgroundImage: "url(img/bg-image.jpeg)"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-heading text-left white">
                                    <h2>Executive members</h2>
                                    <p>The council comprises of the following distinguished as executive members serving under respective portfolios</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
        <div className="upcoming-events-slides-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <OwlCarousel
                            className="owl-theme"
                            loop
                           // margin={10}
                            nav
                            {...options} 
                        >   
                                
                            <div className="single-slide">
                             
                                <div className="row align-items-center upcoming-events-content d-flex flex-wrap align-items-center">
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="single-team-members text-center">
                                            <div className="team-thumb" style= {{backgroundImage: 'url(img/chairabout.png)'}}>
                                            </div>
                                            <h6>Dr. Fabong J. Yildam</h6>
                                            <span>Chairman</span>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="single-team-members text-center">
                                            <div className="team-thumb" style={{backgroundImage: 'url(img/deputychairman.png)'}}>
                                            </div>
                                            <h6>Othniel Gongden </h6>
                                            <span>Deputy Chairman</span>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="single-team-members text-center">
                                            <div className="team-thumb" style={{backgroundImage: 'url(img/excos/azi.png)'}}>
                                            </div>
                                            <h6>Hafsat Azi Yakubu</h6>   
                                            <span> Secretary </span>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                    
                            <div className="single-slide">
                                              
                                <div className=" upcoming-events-content d-flex flex-wrap align-items-center" >
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="single-team-members text-center mb-100">
                                            <div className="team-thumb" style={{backgroundImage: "url(img/excos/fabian.png)"}}>
                                            </div>
                                            <h6> Fabian Parlong </h6>           
                                            <span>Assistant Secretary</span>
                                        </div>
                                    </div>
                                    
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="single-team-members text-center mb-100">
                                            <div className="team-thumb" style={{backgroundImage: "url(img/finsec.png)"}}>
                                            </div>
                                            <h6>Saidu Raiyyanu </h6>
                                            <span>Financial Secretary </span>
                                        </div>
                                    </div>
                                    
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="single-team-members text-center mb-100">
                                            <div className="team-thumb" style={{backgroundImage: "url(img/excos/lot.png)"}}>
                                            </div>
                                            <h6>Mangam Lot Adakson</h6>
                                            <span>Treasurer</span>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                                          
                            <div className="single-slide">
                                <div className=" upcoming-events-content d-flex flex-wrap align-items-center" >
                                    <div className="col-12">
                                        <div className="single-team-members text-center mb-100">
                                            <div className="team-thumb" style={{backgroundImage: "url(img/excos/exofficio.png)"}}>
                                            </div>
                                            <h6>Sir Emmanuel Dashe Ksm</h6>
                                            <span>Ex Officio </span>
                                        </div>
                                    </div>
                                </div>
                              
                            </div>
                            
                            <div className="single-slide">
                                
                                <div className=" upcoming-events-content d-flex flex-wrap align-items-center">
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        
                                        <div className="single-team-members text-center mb-100">
                                            <div className="team-thumb" style={{backgroundImage: "url(img/excos/dos.png)"}}>
                                            </div>
                                            <h6>Azi Aware </h6>
                                            <span>Director of Socials</span>
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="single-team-members text-center mb-100">
                                            <div className="team-thumb" style={{backgroundImage: "url(img/excos/victorchuwang.png)"}}>
                                            </div>
                                            <h6>Victor Chuwang</h6>
                                            <span>Auditor</span>
                                        </div>
                                    </div>
                                    
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="single-team-members text-center mb-100">
                                            <div className="team-thumb" style={{backgroundImage: "url(img/pro.png)"}}>
                                            </div>
                                            <h6>Sam datiri </h6>
                                            <span>Public Relations Officer </span>
                                        </div>
                                    </div>
                                </div>
                          
                            </div>
                            
                            <div className="single-slide">
                                
                                <div className="upcoming-events-content d-flex flex-wrap align-items-center">
                                    
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="single-team-members text-center mb-100">
                                            <div className="team-thumb" style={{backgroundImage: "url(img/excos/fwet.png)"}}>
                                            </div>
                                            <h6>Mwadkon Fwet </h6>
                                            <span>Northern Zone Coordinator </span>
                                        </div>
                                    </div>
                                    
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="single-team-members text-center mb-100">
                                            <div className="team-thumb" style={{backgroundImage: "url(img/excos/rotgak.png)"}}>
                                            </div>
                                            <h6>Rotgak Danjuma  </h6>
                                            <span>Central Zone Coordinator</span>
                                        </div>
                                    </div>
                                    
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="single-team-members text-center mb-100">
                                            <div className="team-thumb" style={{backgroundImage: "url(img/excos/richardnyelong.png)"}}>
                                            </div>
                                            <h6>Richard Nyelong </h6>
                                            <span>Southern Zone Coordinator</span>
                                        </div>
                                    </div>
                                        
                             
                                </div>
                            </div>
                        </OwlCarousel>    
                    </div>
                </div>
            </div>
        </div>
    </section>

      <section className="upcoming-events-area section-padding-0-10">
        <div className="upcoming-events-heading bg-img bg-overlay bg-fixed" style={{backgroundImage: "url(img/bg-image.jpeg)"}}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-heading text-left white">
                            <h2>Central Working Committee</h2>
                            <p>The Central Working Committee is the quasi legislative arm of the Council. 
                                It's comprises of the </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="team-members-area section-padding-100-0">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="single-team-members text-center mb-100">
                            <div className="team-thumb" style={{backgroundImage: "url(img/excos/speaker.png)"}}>
                            </div>
                            <h6>Moses Y. Garba Esq</h6>
                            <span>Speaker</span>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="single-team-members text-center mb-100">
                            <div className="team-thumb" style={{backgroundImage: "url(img/excos/deputyspeaker.png)"}}>
                            </div>
                            <h6>Aminu Abba</h6>
                            <span>Deputy Speaker </span>
                        </div>
                    </div>
                    
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="single-team-members text-center mb-100">
                            <div className="team-thumb" style={{backgroundImage: "url(img/clerk.png)"}}>
                            </div>
                            <h6>Jonathan K. Zingzhi </h6>   
                            <span> Clerk </span>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="single-team-members text-center mb-100">
                            <div className="team-thumb" style={{backgroundImage: "url(img/excos/chiefwhip.png)"}}>
                            </div>
                            <h6>Alphonsus G. Dilzang</h6>    
                            <span> Chief Whip </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
          <Footer />
      </div>
    )
  }
}
