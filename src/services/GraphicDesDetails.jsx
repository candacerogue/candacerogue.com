import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";


class GraphicDesDetails extends Component{
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
                                    <h2 className="title theme-gradient">GRAPHIC DESIGN</h2>
                                    <p>Ready for your imagination to run wild? This is the time!</p>
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
                                                    <img className="w-100" src="/assets/images/service/service-02.png" alt="Service Images"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <p>I don't have some romantic love story where my love for art & design began. I honestly just remember my brother drawing random things, and I followed suit because I did everything he did. He's always been so talented and made it easy to follow his lead.</p>
                                                    <p>Think of our working relationship in a similar light. You're leading with all of your bright, illustrative ideas and I'll follow your lead by transcribing your ideas into art concepts adding my personal & unique touches everywhere I feel welcomed to do so.</p>
                                                    <h4 className="title">Proceess Overview</h4>
                                                    <ul className="liststyle">
                                                        <li>Brand Discovery <span role="img" aria-label="investigator emoji">🕵🏾‍♀️</span></li>
                                                        <li>Design Concepts <span role="img" aria-label="artist emoji">👩🏾‍🎨</span></li>
                                                        <li>Revisons & Refinement <span role="img" aria-label="test tube emoji">🧪</span></li>
                                                        <li>Asset Delivery <span role="img" aria-label="rocket emoji">🚀</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content align-items-center">
                                            <div className="col-lg-6 col-12 order-2 order-lg-1">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <p>If you're looking to work on a graphic project with me, make sure you've taken the time to iron out your non-negotiables. Non-negotiables can look like, "My brand colors are electric blue and marigold, so I need those to be incoporated in my design." or, "I absolutely hate the text logos. I prefer abstract or picture-heavy designs that convey my message.</p>
                                                    <p>Make sense? If not, I talk about it a bit more in my video here<span role="img" aria-label="finger pointing right emoji"> 👉🏾</span>.</p>
                                                    <p>If you're feeling comfortable with getting started working together, <a href="https://calendly.com/candacerogue/dev" target="_blank" rel="noopener noreferrer" style={{color: "#000073"}}>book your consultation</a> now! What are you waiting for?</p>
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
                                                    <img className="w-100" src="/assets/images/portfolio/Album-Cover-Jessica.png" alt="Service Images"/>
                                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='bw8jkK0pVX0' onClose={() => this.setState({isOpen: false})} />
                                                    <button className="video-popup" onClick={this.openModal}><span className="play-icon"></span></button>
                                                    <p>Album artwork in action</p>
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
export default GraphicDesDetails;