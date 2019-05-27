import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ContactPage() {
  return (
    <div>
      {/* <div className="preloader d-flex align-items-center justify-content-center">
        <div className="line-preloader"></div>
      </div> */}
      <header className="header-area">

        <div className="top-header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="top-header-content d-flex flex-wrap align-items-center justify-content-between">
                  <div className="top-header-meta d-flex flex-wrap">
                    <a href="#" className="open" data-toggle="tooltip" data-placement="bottom" title="8 am to 4 pm">
                      {/* <i className="fa fa-clock-o" aria-hidden="true"></i>  */}
                      <FontAwesomeIcon icon="fa fa-clock-o" aria-hidden="true" />
                      <span>Opening Hours - 8 am to 4 pm</span></a>
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


                <a href="index" className="nav-brand"><img src="img/core-img/logo.png" alt="" /></a>


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
                      <input type="search" name="search" id="search" placeholder="Enter keywords &amp; hit enter..." />
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
      <div className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#"><i className="fa fa-home"></i> Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Contact</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="map-area mt-30">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2006727.2888194898!2d8.266957100869702!3d10.781471108209868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1053749234efde83%3A0x42642bd6421dea21!2sAzi+Nyako+Youth+Centre%2C+Jos!5e0!3m2!1sen!2sng!4v1556800160053!5m2!1sen!2sng"
          width="600" height="450" frameborder="0" style={{ border: 0  }} allowfullscreen></iframe>
      </div>

      <section className="contact-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-content-area">
                <div className="row">
                  <div className="col-12 col-md-3">
                    <div className="contact-content contact-information">
                      <h4>Contact</h4>
                      <p>plateauyouthcouncil@gmail.com</p>
                      <p>+234 703 349 5786</p>
                      <p>+234 810 128 3769</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-3">
                    <div className="contact-content contact-information">
                      <h4>Address</h4>
                      <p>Azi Nyako Youth Centre </p>
                      <p>Dadin Kowa,  Jos</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-3">
                    <div className="contact-content contact-information">
                      <h4>Opening Hours</h4>
                      <p>Mon-Fri: 8 am to 4 pm</p>
                      <p>Sat - Sunday: Close</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-3">
                    <div className="contact-content contact-information">
                      <h4>Visiting Hours</h4>
                      <p>Tues && Thurs: </p>
                      <p>10 Am to 2 Pm</p>
                    </div>
                  </div>
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
                  <a href="https://play.google.com/store/apps/details?id=com.plateauyouthcouncil.www" target="_blank" className="footer-logo widget-title"><img src="img/playstore.png" alt="" width="200px" height="150px" /><br /> Get Our Mobile App</a>

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
