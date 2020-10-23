import React, { Component } from "react";
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn, FaYoutube} from "react-icons/fa";

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/iamcandacerogue/'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/in/candacerogue/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/candacerogue/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/candacerogue'},
    {Social: <FaYoutube /> , link: 'https://www.youtube.com/channel/UCox37w_PbYwnnwKzQSA62dA'}
]
class Footer extends Component{
    render(){
        return(
            <React.Fragment>
                <footer className="footer-area">
                    <div className="footer-wrapper">
                        <div className="row align-items-end row--0">
                            <div className="col-lg-6">
                                <div className="footer-left">
                                    <div className="inner">
                                        <span>Ready To Work?</span>
                                        <h2>Let's get <br /> it! I'm Ready.</h2>
                                        <div className="rn-button-style--2" href="/contact">
                                            <a href="https://calendly.com/candacerogue/dev" target="_blank" rel="noopener noreferrer"><span>Book Consultation</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="footer-right" data-black-overlay="6">
                                    <div className="row">
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-6 col-sm-6 col-12">
                                            <div className="footer-link">
                                                <h4>Quick Links</h4>
                                                <ul className="ft-link">
                                                    <li><a href="/#portfolio">My Work</a></li>
                                                    <li><a href="/about">About</a></li>
                                                    <li><a href="/contact">Let's Talk</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                                            <div className="footer-link">
                                                <h4>Drop a Line</h4>
                                                <ul className="ft-link">
                                                    <li><a href="mailto:candace@candacerogue.com">candace@candacerogue.com</a></li>
                                                </ul>

                                                <div className="social-share-inner" id="social-media">
                                                    <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                                                        {SocialShare.map((val , i) => (
                                                            <li key={i}><a href={`${val.link}`} target="_blank" rel="noopener noreferrer">{val.Social}</a></li>
                                                        ))}
                                                    </ul>
                                                </div> 
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}

                                        <div className="col-lg-12">
                                            <div className="copyright-text">
                                                <p>Customized by Candace Rogue.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}
export default Footer;