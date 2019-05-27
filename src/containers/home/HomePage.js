import React from 'react'

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
                            <a href="/dashboard" className="open" data-toggle="tooltip" data-placement="bottom" title="Signin"> <span>Sign in</span></a>
                            
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
    </div>
  )
}
