import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import {FaInstagram , FaDesktop, FaTwitter} from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

const SocialShare = [
    {Social: <FaDesktop /> , link: 'https://afrochella.com/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/afrochella/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/afrochella'}
]

class AfrochellaDetails extends Component{
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
                <PageHelmet pageTitle='Afrochella Project Details' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                
                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image"  data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">Afrochella Concept Pitch</h2>
                                    <p>This is what Afrochella dreams are made of.</p>
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
                                        <h2>Conceptual Mockups</h2>
                                        <p className="subtitle">Don't stop shooting your shot.</p>
                                        <p>Afrochella is a fairly new festival created to bring black people from all around the world to Ghana to celebrate their diversity and African heritage. COVID won't let me great this year, but I will most definitely be there next year.</p>
                                        <p>This brand was actually started by one of my homies from NY, Abdul and his compadres, so I thought I'd use my extra time to put together a design pitch and slide in his DMs to see what he thought. I never did. The imposter syndrome set in and I never got the gall to pitch it to them. Regardless of me standing in my own way at the time, I still stand-by these designs in their entirety.</p>
                                        <h3>Design.</h3>
                                        <p>These mockups were done in 2016, so imagine how fire I am now. (It's like I pulled the confidence from thin air! lol) No, but seriously. From the exaggereated limbs on the sans-serif font, to the contrasting color scheme of the grayscale against the blue & yellow, to lines of the characters drawing your eyes to the next programmed interaction. I really rock with this one and I will never sit on this type of gold again. I will be sharing my work and shooting my shot effortlessly from here on out!</p> 
                                        <p>Fellow designers, have y'all been practicing? I've heard the Adobe CC design challenge is very legit, and I'm wanting to try it out! If you have tried it before, please let me know what you think on <a href="https://www.twitter.com/candacerogue" target="_blank" rel="noopener noreferrer" style={{color: "#000073"}}>Twitter</a> and if not let me know what you do to improve your skills or practice. </p>
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
                                            <img src="/assets/images/portfolio/Afrochella-UI-Concept.png" alt="Portfolio Images"/>
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
export default AfrochellaDetails;
