import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
// import ModalVideo from 'react-modal-video';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";


class MobileAppDetails extends Component{
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){
        return(
            <React.Fragment>
                
                {/* Start Pagehelmet  */}
                <PageHelmet pageTitle='Service Details' />
                {/* End Pagehelmet  */}

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--5"  data-black-overlay="5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">MOBILE APPLICATION DESIGN</h2>
                                    <p>Every click matters.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Page Wrapper */}
                <div className="rn-service-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="service-details-inner">
                                    <div className="inner">
                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content pb--80 align-items-center">
                                            <div className="col-lg-6 col-12">
                                                <div className="thumb">
                                                    <img className="w-100" src="/assets/images/service/service-03.png" alt="old cellphone"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <p>When you begin learning good website design, mobile design should never be too far. In fact, when I started designing for the web I was taught "Mobile first."</p>
                                                    <p>During my stint at an online media publication geared toward black millenials close to 90% of our users were mobile, for most e-commerce businesses the same is true. If you knew most of your potential business were more likely to buy, browse & read on cellphones than their desktops, wouldn't you want to increase the odds of higher cart values, click thrus ad impressions? I know I would.</p>
                                                    <p>That's why when we collaborate on mobile design it will always include the user experience and interaction design process that will get to the deepest desires of your target users and we'll turn that into meaningful design choices for your application.</p>
                                                    <h4 className="title">Proceess Overview</h4> 
                                                    <ul className="liststyle">
                                                        <li>Brand Discovery <span role="img" aria-label="investigator emoji">🕵🏾‍♀️</span></li>
                                                        <li>Strategy & Content<span role="img" aria-label="artist emoji">👩🏾‍🎨</span></li>
                                                        <li>Wireframing & Prototyping <span role="img" aria-label="developer emoji">👩🏾‍💻</span></li>
                                                        <li>Testing & Analysis <span role="img" aria-label="test tube emoji">🧪</span></li>
                                                        <li>Iteration <span role="img" aria-label="rocket emoji">♾</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content align-items-center">
                                            <div className="col-lg-6 col-12 order-2 order-lg-1">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <p>If you're a beginner designer and want to learn more about the UI/UX process checkout my Prezi, "Why is UI/UX so damn sexy?"</p>
                                                    <p>If you're a potential client, whatcha waiting for? Let's get it. You can book your consultation <a href="https://calendly.com/candacerogue/dev" target="_blank" rel="noopener noreferrer" style={{color: "#000073"}}>here</a>!</p>
                                                    <h4 className="title">My Promise</h4>
                                                    <ul className="liststyle">
                                                        <li>Timely Communication</li>
                                                        <li>Attractive Designs</li>
                                                        <li>Intuitive User Experience</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="thumb position-relative">
                                                    <img className="w-100" src="/assets/images/portfolio/Blended-Sip-Countdown.png" alt="Blended Sip Countdown Screen" style={{height: '700px', objectFit: 'contain'}}/>
                                                    <p style={{textAlign: 'center'}}>Mobile Screen Example</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Wrapper */}
                
                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />

            </React.Fragment>
        )
    }
}
export default MobileAppDetails;