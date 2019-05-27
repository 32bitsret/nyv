import React from 'react'

export default function Footer() {
  return (
    <footer className="footer-area" style={{ padding: '0px 0' }}>

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
                    <li><a href="/"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Home</a></li>
                    <li><a href="about"><i className="fa fa-angle-double-right" aria-hidden="true"></i> About</a></li>
                    <li><a href="contact"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Contact</a></li>
                    <li><a href="gallery"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Gallery</a></li>
                    <li><a href="documentaries"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Documents</a></li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-footer-widget mb-70">
                <h5 className="widget-title">Contact Us</h5>

                <div className="contact-information">
                  <p><i className="fa fa-map-marker" aria-hidden="true"></i> Azi Nyako Youth Centre Dadin Kowa, Jos</p>
                  <a href="callto:+234 703 349 5786"><i className="fa fa-phone" aria-hidden="true"></i> +234 703 349 5786, +234 810 128 3769</a>
                  <a href="mailto:plateauyouthcouncil@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i>  plateauyouthcouncil@gmail.com</a>
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
  )
}
