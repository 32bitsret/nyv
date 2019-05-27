import React from 'react';
import 'assets/home/css/styles/style.css';
// import 'assets/home/js/jquery/jquery-2.2.4.min.js';
import $ from 'jquery';
// import 'assets/home/js/bootstrap/popper.min.js';
// import 'assets/home/js/bootstrap/bootstrap.min.js';
// import 'assets/home/js/bootstrap/plugins.js';

export default function HomePage() {
  return (
    <div>
        <header className="header-area">

            <div className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="top-header-content d-flex flex-wrap align-items-center justify-content-between">
                                <div className="top-header-meta d-flex flex-wrap">
                                    <a href="#" className="open" data-toggle="tooltip" data-placement="bottom" title="8 am to 4 pm"><i className="fa fa-clock-o" aria-hidden="true"></i> <span>Opening Hours - 8 am to 4 pm</span></a>
                                    <div className="top-social-info">
                                        <a href="https://web.facebook.com/1PlateauYouthCouncil1/" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                        <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                        <a href="https://www.youtube.com/channel/UCIurKJ5kAq3ILsTIHyv4Ffw" target="_blank"><i className="fa fa-youtube" aria-hidden="true"></i></a>

                                    </div>
                                </div>
                                
                                <div className="top-header-meta">
                                    <div className="top-header-meta d-flex flex-wrap">
                                        <a href="/login" className="open" data-toggle="tooltip" data-placement="bottom" title="Signin"> <span>Sign in</span></a>
                                        
                                        <div className="top-social-info">
                                            <a href="/dashboard" className="open" data-toggle="tooltip" data-placement="bottom" title="Signup"> <span>Sign up</span></a>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="crose-main-menu">
                <div className="classy-nav-container breakpoint-off">
                    <div className="container">
                        
                        <nav className="classy-navbar justify-content-between" id="croseNav">

                            
                            <a href="index" className="nav-brand"><img src="img/core-img/logo.png" alt=""/></a>

                            
                            <div className="classy-navbar-toggler">
                                <span className="navbarToggler"><span></span><span></span><span></span></span>
                            </div>

                            
                            <div className="classy-menu">

                                
                                <div className="classycloseIcon">
                                    <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                                </div>

                            
                                <div className="classynav">
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="about">About</a></li>
                                        <li><a href="contact">Contact</a></li>
                                        <li><a href="gallery">Gallery</a></li>
                                        <li><a href="documentries">Documentaries</a></li>

                                    </ul>


                                </div>
                            
                            </div>
                        </nav>
                    </div>
                </div>
    
                <div className="search-form-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <div className="searchForm">
                                    <form action="#" method="post">
                                        <input type="search" name="search" id="search" placeholder="Enter keywords &amp; hit enter..."/>
                                        <button type="submit" className="d-none"></button>
                                    </form>
                                    <div className="close-icon" id="searchCloseIcon"><i className="fa fa-close" aria-hidden="true"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
        <section className="hero-area hero-post-slides owl-carousel">
              
              <div className="single-hero-slide bg-img bg-overlay d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(img/rock.jpg)' }}>
                  
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

              
              <div className="single-hero-slide bg-img bg-overlay d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(img/slider1.jpg)' }}>                  
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

                                              <footer className="footer-area">
                                                  
        <div className="main-footer-area">
                                                      <div className="container">
                                                          <div className="row">

                                                              <div className="col-12 col-sm-6 col-lg-4">
                                                                  <div className="single-footer-widget mb-70">
                                                                      <a href="https://play.google.com/store/apps/details?id=com.plateauyouthcouncil.www" target="_blank" className="footer-logo widget-title"><img src="img/playstore.png" alt="" width="200px" height="150px"/><br/> Get Our Mobile App</a>
                           
                        </div>
                    </div>

                                                                      <div className="col-12 col-sm-6 col-lg-4">
                                                                          <div className="single-footer-widget mb-100">
                                                                              <h5 className="widget-title">Quick Links</h5>
                                                                              <nav className="footer-menu">
                                                                                  <ul>
                                                                                      <li><a href="/"><i className="fa fa-angle-double-righ" aria-hidden="true"></i> Home</a></li>
                                                                                      <li><a href="about"><i className="fa fa-angle-double-righ" aria-hidden="true"></i> About</a></li>
                                                                                      <li><a href="contact"><i className="fa fa-angle-double-righ" aria-hidden="true"></i>Contact</a></li>
                                                                                      <li><a href="gallery"><i className="fa fa-angle-double-righ" aria-hidden="true"></i> Gallery</a></li>
                                                                                      <li><a href="documentaries"><i className="fa fa-angle-double-right" aria-hidden="true"></i>Documents</a></li>
                                                                                  </ul>
                                                                              </nav>
                                                                          </div>
                                                                      </div>

                                                                      <div className="col-12 col-sm-6 col-lg-4">
                                                                          <div className="single-footer-widget mb-70">
                                                                              <h5 className="widget-title">Contact Us</h5>

                                                                              <div className="contact-information">
                                                                                  <p><i className="fa fa-map-marker" aria-hidden="true"></i>Azi Nyako Youth Centre Dadin Kowa, Jos</p>
                                                                                  <a href="callto:+234 703 349 5786"><i className="fa fa-phone" aria-hidden="true"></i> +234 703 349 5786, +234 810 128 3769</a>
                                                                                  <a href="mailto:plateauyouthcouncil@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i> plateauyouthcouncil@gmail.com</a>
                                                                                  <p><i className="fa fa-clock-o" aria-hidden="true"></i> Mon - Fri: 08.00am - 4.00pm</p>
                                                                              </div>

                                                                          </div>
                                                                      </div>

                                                                  </div>
                                                              </div>
                                                          </div>
                                                          <div className="copywrite-area">
                                                              <div className="container h-100">
                                                                  <div className="row h-100 align-items-center flex-wrap">
                                                                      
                    <div className="col-12 col-md-6">
                                                                          <div className="copywrite-text">
                                                                              <p>

                                                                                  Copyright &copy;
                                <script>
                                                                                      document.write(new Date().getFullYear());
                                </script>
                                                                                  All rights reserved | This site is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://pictda.plateaustate.gov.ng/" target="_blank">PICTDA</a>

                                                                              </p>
                                                                          </div>
                                                                      </div>

                                                                      
                    <div className="col-12 col-md-6">
                                                                          <div className="footer-social-icon">
                                                                              <a href="https://web.facebook.com/1PlateauYouthCouncil1/" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                                                              <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                                                              <a href="https://www.youtube.com/channel/UCIurKJ5kAq3ILsTIHyv4Ffw" target="_blank"><i className="fa fa-youtube" aria-hidden="true"></i></a>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
    </footer>
    </div>
  )
}
