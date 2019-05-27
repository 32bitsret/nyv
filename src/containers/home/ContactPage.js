import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from './common/Header';
import Footer from './common/Footer';

export default function ContactPage() {
  return (
    <div>
      {/* <div className="preloader d-flex align-items-center justify-content-center">
        <div className="line-preloader"></div>
      </div> */}
      <Header />
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

      <Footer />
    </div>
  )
}
