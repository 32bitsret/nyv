import React from 'react';
import 'assets/home/css/styles/style.css';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Header from './common/Header';
import Footer from './common/Footer';
import 'owl.carousel/dist/assets/owl.carousel.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
    items:1,
    rewind: true,
    autoplay: true,
    slideBy: 1,
    
};

export default function HomePage() {

  return (
    <div>
          {/* <div className="preloader d-flex align-items-center justify-content-center">
            <div className="line-preloader"></div>
          </div> */}
            <Header />
            <section className="hero-area hero-post-slides">
            <OwlCarousel loop  {...options} >
                <div className="single-hero-slide bg-img bg-overlay d-flex align-items-center justify-content-center" style={{backgroundImage: 'url(img/rock.jpg)'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="hero-slides-content">
                                    <h2 data-animation="fadeInUp" data-delay="100ms">Welcome to Plateau Youth Council</h2>
                                    <a href="about" className="btn crose-btn" data-animation="fadeInUp" data-delay="500ms">About Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-hero-slide bg-img bg-overlay d-flex align-items-center justify-content-center" style={{backgroundImage: 'url(img/slider1.jpg)'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="hero-slides-content">
                                    <h2 data-animation="fadeInUp" data-delay="100ms">Plateau Youth Council</h2>
                                    <p data-animation="fadeInUp" data-delay="300ms">The Umbrella Body of All Youths on the Plateau Irrespective of Their political affiliations, Tribal Extractions or Religious Beliefs</p>
                                    <a href="contact" className="btn crose-btn" data-animation="fadeInUp" data-delay="500ms">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </OwlCarousel>
            </section>

          <section className="about-area section-padding-100-0">
              <div className="container">
                  <div className="row">
                      
                <div className="col-12">
                          <div className="section-heading">
                              <h2>Welcome To Plateau Youth Council</h2>
                              <p>Plateau State Youth Council (PYC) is the umbrella body of all youths on the Plateau irrespective of their political affiliations, tribal extractions or religious beliefs. As a pressure group, it’s the platform through which the concerns and aspirations and prayers of all youths on the Plateau had echoed through the ages.</p>
                          </div>
                      </div>
                  </div>

                  <div className="row about-content justify-content-center">

                      
                <div className="col-12 col-md-6 col-lg-6">
                          <div className="about-us-content mb-100">
                               
                        <div className="about-text">
                                      <h4>Vision</h4>
                                      <p>To grow to be a Council with global best standards providing Empowerment initiatives, Employment opportunities, Engagement templates, Global services and products with core interest in Education for sustainable future for the youth without compromising integrity and hard work while leveraging on partnerships for development.</p>

                                  </div>
                    </div>
                          </div>

                          
                <div className="col-12 col-md-6 col-lg-6">
                              <div className="about-us-content mb-100">
                                  
                        <div className="about-text">
                                          <h4>Mission</h4>
                                          <p>Our Mission is to prepare and inspire a new generation of young people for positive engagement and empowerment for sustainable future. <br />Through pooled partnership, advocacy, lobbying and cultural exchange, we shall create an atmosphere of tolerance, shared values, and mutual understanding; Preparing our teaming youths for global challenges and the future. </p>

                        </div>
                                      </div>
                </div>
                              </div>
                          </div>
                </section>
                      
    <section className="call-to-action-area section-padding-100 bg-img bg-overlay" style={{ backgroundImage: 'url('+'img/gallery/zonal_summit/Asset_71icon.png'+')' }}>
                          <div className="container">
                              <div className="row">
                                  <div className="col-12">
                                      <div className="call-to-action-content text-center">
                                          <h6>A Place For You</h6>
                                          <h2>"We have all come to the place of understanding that; we can do much more and far beyond our imaginations when we work together"</h2>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>

                      <section className="latest-sermons-area section-padding-100-0">
                          <div className="container">
                              <div className="row">
                                  
                <div className="col-12">
                                      <div className="section-heading">
                                          <h2>Speeches of the Chairman</h2>
                                          <p>Below are some of the recent paper presentations by the chairman at different occasions</p>
                                      </div>
                                  </div>
                              </div>

                              <div className="row justify-content-center">
                                  
                <div className="col-12 col-md-6 col-lg-3">
                                      <div className="single-latest-sermons mb-100">
                                          <div className="sermons-thumbnail">
                                              <img src="img/gallery/zonal_summit/chairman.png" alt="chairman's speech at the zonal youth summit" />
                                                  
                            
                        </div>
                                              <div className="sermons-content">
                                                  <div className="sermons-cata">
                                                      <a href="speeches/zonalsummit.pdf" data-toggle="tooltip" target="_blank" data-placement="top" title="Read"><i className="fa fa-file" aria-hidden="true"></i></a>
                                                      <a href="speeches/zonalsummit.pdf" data-toggle="tooltip" data-placement="top" download="speeches/zonalsummit.pdf" title="Download"><i className="fa fa-cloud-download" aria-hidden="true"></i></a>
                                                  </div>
                                                  <h6> 2019 ZONAL YOUTH SUMMIT</h6>
                                              </div>
                                          </div>
                                      </div>

                                      
                <div className="col-12 col-md-6 col-lg-3">
                                          <div className="single-latest-sermons mb-100">
                                              <div className="sermons-thumbnail">
                                                  <img src="img/gallery/plateau youth summit/Asset 39icon.png" alt=""/>
                                                      
                            
                        </div>
                                                  <div className="sermons-content">
                                                      <div className="sermons-cata">
                                                          <a href="speeches/safehaven.pdf" target="_blank" data-toggle="tooltip" data-placement="top" title="Read"><i className="fa fa-file" aria-hidden="true"></i></a>
                                                          <a href="speeches/safehaven.pdf" data-toggle="tooltip" data-placement="top" download="safehaven.pdf" title="Download"><i className="fa fa-cloud-download" aria-hidden="true"></i></a>
                                                      </div>
                                                      <h6> 2018 CIVIL MILITARY RELIEF INITIATIVE </h6>
                                                  </div>
                                              </div>
                                          </div>

                                          
                <div className="col-12 col-md-6 col-lg-3">
                                              <div className="single-latest-sermons mb-100">
                                                  <div className="sermons-thumbnail">
                                                      <img src="img/assembly/assembly5.png" alt=""/>
                                                          
                            
                        </div>
                                                      <div className="sermons-content">
                                                          <div className="sermons-cata">
                                                              <a href="speeches/generalassembly.pdf" target="_blank" data-toggle="tooltip" data-placement="top" title="Read"><i className="fa fa-file" aria-hidden="true"></i></a>
                                                              <a href="speeches/generalassembly.pdf" data-toggle="tooltip" data-placement="top" download="generalassembly.pdf" title="Download"><i className="fa fa-cloud-download" aria-hidden="true"></i></a>
                                                          </div>
                                                          <h6>2018 GENERAL ASSEMBLY</h6>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>



                                          <div className="row justify-content-center">
                                              <div className="col-12 col-md-6 col-lg-3">
                                                  <div className="single-latest-sermons mb-100">
                                                      <div className="sermons-thumbnail">
                                                          <img src="img/assembly/assembly2.png" alt=""/>
                                                             
                               
                            </div>
                                                          <div className="sermons-content">
                                                              <div className="sermons-cata">
                                                                  <a href="speeches/communique.pdf" target="_blank" data-toggle="tooltip" data-placement="top" title="Read"><i className="fa fa-file" aria-hidden="true"></i></a>
                                                                  <a href="speeches/communique.pdf" data-toggle="tooltip" data-placement="top" download="communique.pdf" title="Download"><i className="fa fa-cloud-download" aria-hidden="true"></i></a>
                                                              </div>
                                                              <h6> 2018 GENERAL ASSEMBLY COMMUNIQUE</h6>
                                                          </div>
                                                      </div>
                                                  </div>

                                                  
                    <div className="col-12 col-md-6 col-lg-3">
                                                      <div className="single-latest-sermons mb-100">
                                                          <div className="sermons-thumbnail">
                                                              <img src="img/swearingin.jpg" alt="" />
                                                                 
                               
                            </div>
                                                              <div className="sermons-content">
                                                                  <div className="sermons-cata">
                                                                      <a href="speeches/swearingin.pdf" data-toggle="tooltip" target="_blank" data-placement="top" title="Read"><i className="fa fa-file" aria-hidden="true"></i></a>
                                                                      <a href="speeches/swearingin.pdf" data-toggle="tooltip" data-placement="top" download="speeches/zonalsummit.pdf" title="Download"><i className="fa fa-cloud-download" aria-hidden="true"></i></a>
                                                                  </div>
                                                                  <h6> SWEARING IN CEREMONY</h6>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      
                    <div className="col-12 col-md-6 col-lg-3">
                                                          <div className="single-latest-sermons mb-100">
                                                              <div className="sermons-thumbnail">
                                                                  <img src="img/inaug.png" alt=""/>
                                                                     
                                
                            </div>
                                                                  <div className="sermons-content">
                                                                      <div className="sermons-cata">
                                                                          <a href="speeches/lgainauguration.pdf" target="_blank" data-toggle="tooltip" data-placement="top" title="Read"><i className="fa fa-file" aria-hidden="true"></i></a>
                                                                          <a href="speeches/lgainauguration.pdf" data-toggle="tooltip" data-placement="top" download="safehaven.pdf" title="Download"><i className="fa fa-cloud-download" aria-hidden="true"></i></a>
                                                                      </div>
                                                                      <h6> LOCAL GOVERNMENT INAUGURATION LECTURE</h6>
                                                                  </div>
                                                              </div>
                                                          </div>

                                                      </div>


                                                  </div>
    </section>

    <Footer />
    </div>
  )
}
