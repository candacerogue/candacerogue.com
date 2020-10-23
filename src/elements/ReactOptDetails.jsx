import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import {FaGithub , FaDesktop} from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

const SocialShare = [
    {Social: <FaDesktop /> , link: 'http://www.reactopt.com/'},
    {Social: <FaGithub /> , link: 'https://github.com/reactopt/reactopt#readme'}
]

class ReactOptDetails extends Component{
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
                                    <h2 className="title theme-gradient">ReactOpt</h2>
                                    <p>Taking React tool, ReactOpt, to animated levels.</p>
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
                                        <h2>ReactOpt Project</h2>
                                        <p className="subtitle">Quick logo for a big development push.</p>
                                        <p>ReactOpt is a CLI React performance optimization tool that identifies potential unnecessary re-rendering that I built with 3 other amazing friends & developers 3 years ago. S/o to the Cache Money team!</p>
                                        <h3>Design.</h3>
                                        <p>I didn't have much time to think through a lot of branding, because that was not the focus of the project. We wanted to build a tool that would showcase are developer skills in React, while helping the development community with what we felt was lacking in the React realm.</p>
                                        <p>We had finally finished the tool, after weeks of work and testing and the team asked me to design and build the landing page and I was happy to oblige. It started out as a sketch that I just couldn't get out of my mind, so when it came to design time I knew exactly how I wanted it to look on print and web! </p> 
                                        <p>The green and black color scheme and the radar look was heavy on my creative conscience, so after I whipped up the logo in Illustrator. I wanted to try using CTX on the website, which is techie for an HTML canvas element used to draw graphics on a web page. The landing page is no longer up, but I'll depict what that CTX graphic looked like on top of the logo I made. Spolier alert it's <span role="img" aria-label="fire emoji">🔥</span>. Drop me a line on <a href="https://www.twitter.com/candacerogue" target="_blank" rel="noopener noreferrer" style={{color: "#000073"}}>Twitter</a> and let me know what you think!</p>  
                                        <div className="portfolio-view-list d-flex flex-wrap">
                                            <div className="port-view">
                                                <span>Project Type</span>
                                                <h4>Logo Design, Web Design & Development </h4>
                                            </div>

                                            <div className="port-view">
                                                <span>Platforms & Technologies Used</span>
                                                <h4>Illustrator, HTML, Javascript, CSS</h4>
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
                                            <img src="/assets/images/portfolio/Reactopt-Black.png" alt="Portfolio Images"/>
                                        </div>
                                        <br/>
                                        <br/>           
                                        <div className="thumb position-relative mb--30">
                                            <img src="/assets/images/portfolio/Reactopt-Movement.png" alt="Portfolio Images"/>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='R7EZ2Q-L3eQ' onClose={() => this.setState({isOpen: false})} />
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
                                        <span className="category">Graphic Design</span>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Portfolio */}
                            {/* Start Single Portfolio */}
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <a href="/jessica-details">
                                            <img src="/assets/images/portfolio/Jessica-Thumbnail.png" alt="Portfolio-images"/>
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="/jessica-details" style={{color:'#000073'}}>f(lux) Album Cover</a></h4>
                                        <span className="category">Graphic Design</span>
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
export default ReactOptDetails;
