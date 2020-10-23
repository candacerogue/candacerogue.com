import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import {FaTwitter ,FaInstagram , FaDesktop} from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

const SocialShare = [
    {Social: <FaDesktop /> , link: 'http://danksweetstreats.com/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/danksweets/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/DankSweets'},
]

class DankSweetsDetails extends Component{
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
                <PageHelmet pageTitle='DankSweets Treats Project Details' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                
                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image"  data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">Cannabis Confections x DankSweets Treats complete brand refresh</h2>
                                    <p>It's a journey over 4 years you'll want to see.</p>
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
                                        <h2>DankSweets Treats</h2>
                                        <p className="subtitle">The owner trusted me to give her business the rebrand it deserved.</p>
                                        <p>In 2016, the owner reached out to me with a rough sketch of what she wanted her logo to look like and I executed. I always respect my client's vision, but with a few more years of experience and confidence in 2020 I was able to elevate her vision in my own special way.</p>
                                        <h3>Branding & Design.</h3>
                                        <p>On my <a href="https://www.instagram.com/p/CDO997dnVRq/" target="_blank" rel="noopener noreferrer" style={{color: "#000073"}}>Instagram post</a>, you'll see the original logo created in 2016 next to the sketch she sent over. Thereafter, with little guidance (only her desire to include "Dank Fairies") I created three different variations in which she chose the middle as "The One". I was partial to all of them, each one I tried to give their own special touch. For instance, the third variation included a font that was almost identical to her handwriting. I heavily incorporate these types of details throughout my work.  I want my clients/friends to know I'm listening to their vision, but also going above and beyond to include details of how they came to the vision that will tell stories through the life of the brand.</p>
                                        <p>Logos truly are the foundation of a brand. Once you get into the intracies of the snapshot of the business in a logo, the branding becomes second nature. You will see how the logo variation selected allowed me to build the branding in the kit you'll also see below. The "Dank Fairie" led to 3 other "Dank Fairie" friends conjuring your favorite confections in the sky to be delivered to your doorstep.</p>
                                        <p>How do you like the rebrand? Drop a line to me on <a href="https://www.twitter.com/candacerogue" target="_blank" rel="noopener noreferrer" style={{color: "#000073"}}>Twitter</a> and inquire about how you can reinvent your brand with my services below!</p>
                                        <h3>Development.</h3>
                                        <p>After we felt good about the branding, I headed into building and customizing the website. DankSweets is a cannabis confectionary based in California. While California seems to be one of the leading states in cannabis legislation reform, the nation is still not in a place of complete legalization. The DankSweets' website featured a 21+ age verification modal, external/affiliate products and some other really clever ways for the business to educate consumers about it's products. I'm really looking forward to how the site grows it's reach and engaement with it's eye catching CTAs.</p>
                                        <p>If you'd like some tech resources to utilize in navigating the cannabis world as a business owner, please visit the Colored with Cannabis page to subscribe.</p>          
                                        <div className="portfolio-view-list d-flex flex-wrap">
                                            <div className="port-view">
                                                <span>Project Type</span>
                                                <h4>Branding, Web Design & Development</h4>
                                            </div>

                                            <div className="port-view">
                                                <span>Platforms & Technologies Used</span>
                                                <h4>Illustrator, Photoshop, Wordpress, WooCommerce, JotForm</h4>
                                            </div>

                                            <div className="port-view">
                                                <span>Skills</span>
                                                <h4>Project Management, Art Direction, Illustrator, Wordpress Whispering </h4>
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
                                            <img src="/assets/images/portfolio/portfolio-big-02.jpg" alt="Portfolio Images"/>
                                        </div>
                                        <div className="thumb">
                                            <img src="/assets/images/portfolio/portfolio-big-01.jpg" alt="Portfolio Images"/>
                                        </div>
                                        <br/>
                                        <br/>           
                                        <div className="thumb position-relative mb--30">
                                            <img src="/assets/images/portfolio/portfolio-big-03.jpg" alt="Portfolio Images"/>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='NYHXsV_Sgqs' onClose={() => this.setState({isOpen: false})} />
                                            <button className="video-popup position-top-center" onClick={this.openModal}><span className="play-icon"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Details */}

                {/* <!-- Calendly link widget begin --> */}
                {/* <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
                    <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"></script>
                    <a href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/candacerogue?hide_landing_page_details=1&hide_gdpr_banner=1'});return false;">Book Consultation</a>
                </link> */}
                {/* <!-- Calendly link widget end --> */}

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
export default DankSweetsDetails;
