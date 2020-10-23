import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import {FaTwitter ,FaInstagram , FaDesktop} from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

const SocialShare = [
    {Social: <FaDesktop /> , link: 'https://jessicalarel.com/music/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/p/ByWXtYOH5yh/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/jessica_larel'},
]

class JessicaDetails extends Component{
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
                <PageHelmet pageTitle='Jessica Lá Rel Project Details' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                
                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image"  data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">Album artwork for Jessica Lá Rel's f(lux)</h2>
                                    <p>This is what they meant when they said 10k hours makes mastery.</p>
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
                                        <h2>f(lux) Album Cover</h2>
                                        <p className="subtitle">Jessica new exactly what she wanted, so all I had to do was execute.</p>
                                        <p>Typically, there are 3 types of clients that I onboard. Those who know exactly what they want, those who don't know what they want and want to give you full artistic control, and others who don't know what they want and want to give you full artisitic control but don't actually mean that lol. Jessica knew what she wanted from our first encounter, so she made designing for her an absolute dream.</p>
                                        <h3>Design.</h3>
                                        <p>Jessica and I had actually worked together for another album cover of hers, so I was naturally excited to work with her again. She brought the artwork of <a href="https://www.behance.net/AndreLarcev" target="_blank" rel="noopener noreferrer" style={{color: "#000073"}}>Andre Larcev</a> to me along with a selection of professional photographs she'd taken with similar lighting and told me she wanted to recreate his work with her face.</p>
                                        <p>This was by far the most difficult Photoshop job I'd done to date. There was so much blending between the statue bust and the photographs she sent over and playing with the saturation, hue and color balance levels, but overall I'm so happy with the final product. Are y'all interested in the tools I used to recreate Andre Larev's masterpiece? Drop me a line on <a href="https://www.twitter.com/candacerogue" target="_blank" rel="noopener noreferrer" style={{color: "#000073"}}>Twitter</a>!</p>
                                        <p>You'll see how the phase one image started, but essentially she wanted it to be as close to Andre Larcev's original, so I started from his canvas and used the same techniques as stated above. As a client reading, please notate that it may be easier to start from another image conceptually, but it does not mean it takes less time in giving you the product you ask for. Lots of time goes into blending two photos together and making sure the lighting doesn't look fake. So remember that when you're supporting your local artists!</p>
                                        <div className="portfolio-view-list d-flex flex-wrap">
                                            <div className="port-view">
                                                <span>Project Type</span>
                                                <h4>Graphic Design</h4>
                                            </div>

                                            <div className="port-view">
                                                <span>Platforms & Technologies Used</span>
                                                <h4>Adobe Photoshop</h4>
                                            </div>

                                            <div className="port-view">
                                                <span>Skills</span>
                                                <h4>Photo Retouching</h4>
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
                                            <img src="/assets/images/portfolio/Jessica-Anderson-Phase1.png" alt="Portfolio Images"/>
                                        </div>
                                        <br/>
                                        <br/>           
                                        <div className="thumb position-relative mb--30">
                                            <img src="/assets/images/portfolio/Album-Cover-Jessica.png" alt="Portfolio Images"/>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='bw8jkK0pVX0' onClose={() => this.setState({isOpen: false})} />
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
                                        <a href="/reactopt-details">
                                            <img src="/assets/images/portfolio/ReactOpt-Thumbnail.png" alt="Portfolio-images"/>
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="/reactopt-details" style={{color:'#000073'}}>ReactOpt Logo</a></h4>
                                        <span className="category">Graphic Design</span>
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
export default JessicaDetails;
