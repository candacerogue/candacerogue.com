import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import { FaDesktop } from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

const SocialShare = [
    {Social: <FaDesktop /> , link: 'http://blendedsip.com'}
]

class BlendedDetails extends Component{
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
                <PageHelmet pageTitle='Blended Sip Project Details' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                
                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image"  data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">Blended Sip Wine Game</h2>
                                    <p>Blended Sip is a wine game currently in development, designed by muah <span role="img" aria-label="kisses emoji">😘</span>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Portfolio Details */}
                <div className="rn-portfolio-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-details">
                                    <div className="inner">
                                        <h2>Blended Sip Project</h2>
                                        <p className="subtitle">Letting the artist mastermind run free.</p>
                                        <p>Michael, the CEO of Blended Sip, is excited to be heading into development of his very first mobile app game but knew he had to have the visuals 100% first.</p>
                                        <h3>Research.</h3>
                                        <p>One thing I love to do with clients who are starting from scratch is give a road map of what it looks like to get to their end goal. As a multi-discplinary techie, it's easy to get caught up in the day to day but if you are clear on what technical and visual benchmarks you should be hitting before the deadline it gives the client a peace of mind knowing where they are in progress and gives me the push I need to make sure I'm acheiving timely benchmarks.</p>
                                        <p>Michael and I worked on what the userflow should like together with the wireframes I created. This is a very important step of the UI/UX process, and can be done numerous ways (i.e. card sorting). The process the user takes in your app may seem logical, but once you map out what you want the userflow to look like you no longer have to play the guessing game as to what the user's end goal should be and how to measure success.</p> 
                                        <p>For Blended Sip, our two monetization goals come from ad impressions during in-game interactions and click thru's from "Buy Wine" CTAs to partnering wine vendors. Throughout the userflow depicted below, you'll see we're taking advantage of our screen real-estate with our ad placements and "Buy" CTAs. Would you have done it differently? I'd love to hear feedback on how you might have improved! Drop me a line on <a href="https://www.twitter.com/candacerogue" target="_blank" rel="noopener noreferrer" style={{color: "#000073"}}>Twitter</a>!</p>  
                                        <h3>Design.</h3>
                                        <p>From the wireframes and userflow, I was given the opportunity to let my imagination run with the look and feel of the app. I won't be able to share the entire finished product until the mobile app has been released, but I have to share with you my absolute favorite detail about the completed design work. The countdown numbers! I had this idea of the countdown numbers filling with wine the closer each team gets to playing their round. It's giving me dangerous prohibition vibes! <a href="https://www.twitter.com/candacerogue" target="_blank" rel="noopener noreferrer" style={{color: "#000073"}}> What about you?</a></p>
                                        <p>Are you a future client? If you're interested in booking some time with me about mobile app design, please be sure to utilize my freebie resource of how to prepare your app idea prior to approaching a designer and/or developer!</p>
                                        <div className="portfolio-view-list d-flex flex-wrap">
                                            <div className="port-view">
                                                <span>Project Type</span>
                                                <h4>Logo Design, UI/UX Research, Mobile Application Design </h4>
                                            </div>

                                            <div className="port-view">
                                                <span>Platforms & Technologies Used</span>
                                                <h4>Illustrator</h4>
                                            </div>

                                            <div className="port-view">
                                                <span>Skills</span>
                                                <h4>UI/UX Researching, Illustration, Art Direction</h4>
                                            </div>
                                        </div>

                                        <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                                            <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15">
                                                {SocialShare.map((val , i) => (
                                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="portfolio-thumb-inner">
                                        <div className="thumb mb--30" style={{display: 'flex', justifyContent: 'center'}}>
                                            <img src="/assets/images/portfolio/Final-C3.png" alt="Portfolio Images"/>
                                        </div>
                                        <div className="thumb">
                                            <img src="/assets/images/portfolio/Blended-Sip-Userflow.jpg" alt="Portfolio Images"/>
                                        </div>
                                        <br/>
                                        <br/>
                                        <div className="thumb" style={{display: 'flex', justifyContent: 'center'}}>
                                            <img src="/assets/images/portfolio/Blended-Sip-Countdown.png" alt="Portfolio Images"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Start Related Work */}
                <div className="portfolio-related-work pb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="theme-color font--18 fontWeight600">Related Work</span>
                                    <h2>More Projects</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--10">
                            {/* Start Single Portfolio */}
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <a href="/afrochella-details">
                                            <img src="/assets/images/portfolio/Afrochella-UI-Concept-Thumbnail.png" alt="Portfolio-images"/>
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="/afrochella-details" style={{color:'#000073'}}>Afrochella Concept</a></h4>
                                        <span className="category">Mobile Application Design</span>
                                    </div>
                                </div>
                            </div>
                             {/* End Single Portfolio */}
                            {/* Start Single Portfolio */}
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <a href="/john-ketchum-details">
                                            <img src="/assets/images/portfolio/JK-GIF.gif" alt="Portfolio-images"/>
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="/john-ketchum-details" style={{color:'#000073'}}>John Ketchum Portfolio</a></h4>
                                        <span className="category">Web Application Design</span>
                                    </div>
                                </div>
                            </div>
                             {/* End Single Portfolio */}
                        </div>
                    </div>
                </div>
                {/* End Related Work */}

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
export default BlendedDetails;
