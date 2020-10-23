import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import {FaGithub , FaDesktop, FaTwitter} from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

const SocialShare = [
    {Social: <FaDesktop /> , link: 'https://www.ketchcast.com/'},
    {Social: <FaGithub /> , link: 'https://github.com/candacerogue/ketchcast.com'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/ketchcast'}
]

class JohnKetchumDetails extends Component{
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
                <PageHelmet pageTitle='John Ketchum Project Details' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                
                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image"  data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">John Ketchum Website</h2>
                                    <p>Custom website for journalist & media boss, John Ketchum.</p>
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
                                        <h2>John Ketchum Project</h2>
                                        <p className="subtitle">Never underestimate a custom job.</p>
                                        <p>Have you ever tried building a site from scratch? If you're an aspiring developer, it's a must. Otherwise, 10 out of 10 do NOT recommend <span role="img" aria-label="crying emoji">😭</span>.</p>
                                        <p>It was the first time I'd build a site from scratch in some time. I greatly underestimated the work and undervalued my time. Like bruh, what was I trying to prove? I'll get into the painpoints soon for devs that are still reading</p>
                                        <h3>Design.</h3>
                                        <p>We were able to quickly narrow down to one of the three design directions I put together in Illustrator (which I prefer over Photoshop for quick prototying), and from there I created the high resolution mockup. I annotated what animations would be included, what the page would like on mobile and how the user would interact with his site.</p>
                                        <h3>Development.</h3>
                                        <p>Building the site from there was actually non eventful, and as any experienced developer would say, "The last 20$% of the project takes 80% of the time." That is exactly what happened <span role="img" aria-label="upside down emoji">🙃</span>.</p> 
                                        <p>The last 20% of the project almost broke me, because they felt like routine issues I had resolved before in other projects, but they just seemed to come back like a monster's third head! I spent a lot of time working through my initial implementation of the Slick npm module for Vue, and after trying a few other alternatives I soon realized it had more to do with how I was calling the images into the repository.</p> 
                                        <p>I initially used Google Drive to host the images, but Safari was not trying to hear all that. So my good developer friend, Denzel, created a partition of his server for me so that I could host my images there without any cross-browser funny business. While dealing with this hurdle, Safari CSS breakpoints was the part that had me punching walls in my head. I had to crate browser specific breakpoints in order to keep the content from distorting itself. I've never experienced such great disrepect from a browser like Safari did me! Anywho, I'm glad it's over, and I will NEVER take for granted how much I appreciate frameworks out there that create modular and mobile-friendly templates, so I don't have to put up with such nonsense. What has been the worst experience you've had while developing a project you thought would be easy? Drop me a line on <a href="https://www.twitter.com/candacerogue" target="_blank" rel="noopener noreferrer" style={{color: "#000073"}}>Twitter</a> and let me know what you think!</p>  
                                        <div className="portfolio-view-list d-flex flex-wrap">
                                            <div className="port-view">
                                                <span>Project Type</span>
                                                <h4>Logo Design, Web Design & Development </h4>
                                            </div>

                                            <div className="port-view">
                                                <span>Platforms & Technologies Used</span>
                                                <h4>Illustrator, Photoshop, Vue.js, CSS</h4>
                                            </div>

                                            <div className="port-view">
                                                <span>Skills</span>
                                                <h4>Illustration, Art Direction, Development</h4>
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
                                        <div className="thumb mb--30">
                                            <img src="/assets/images/portfolio/John-Design-Direction.png" alt="Portfolio Images"/>
                                        </div>
                                        <div className="thumb">
                                            <img src="/assets/images/portfolio/JK-Header.gif" alt="Portfolio Images"/>
                                        </div>
                                        <br/>
                                        <br/>           
                                        <div className="thumb position-relative mb--30">
                                            <img src="/assets/images/portfolio/JK-Website-Snapshot.png" alt="Portfolio Images"/>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='JFWDAmxYh1I' onClose={() => this.setState({isOpen: false})} />
                                            <button className="video-popup position-top-center" onClick={this.openModal}><span className="play-icon"></span></button>
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
                                        <a href="/danksweets-details">
                                            <img src="/assets/images/portfolio/related-image-02.png" alt="Portfolio-images"/>
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="/danksweets-details" style={{color:'#000073'}}>DankSweets Treats</a></h4>
                                        <span className="category">Web Application Design</span>
                                    </div>
                                </div>
                            </div>
                             {/* End Single Portfolio */}
                            {/* Start Single Portfolio */}
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <a href="/blended-details">
                                            <img src="/assets/images/portfolio/related-image-01.png" alt="Portfolio-images"/>
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="/blended-details" style={{color:'#000073'}}>Blended Sip Wine Game</a></h4>
                                        <span className="category">Mobile Application Design</span>
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
export default JohnKetchumDetails;
