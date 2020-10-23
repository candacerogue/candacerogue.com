import React, { Component } from 'react';
import Header from "../component/header/Header";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Footer from "../component/footer/FooterTwo";
import Slider from "react-slick";
import { portfolioSlick2 } from "../page-demo/script";

const PortfolioList2 = [
    {
        image: 'image-1',
        category: 'Web Design & Development',
        title: 'DankSweets Treats',
        href: 'danksweets-details'
    },
    {
        image: 'image-2',
        category: 'Graphic Design',
        title: 'f(lux Album Cover',
        href: 'jessica-details'
    },
    {
        image: 'image-3',
        category: 'Mobile App Design',
        title: ' Blended Sip',
        href: 'blended-details'
    },
    {
        image: 'image-4',
        category: 'Graphic Design',
        title: 'ReactOpt',
        href: 'reactopt-details'
    },
    {
        image: 'image-5',
        category: 'Web Design & Development',
        title: 'John Ketchum Portfolio',
        href: 'john-ketchum-details'
    },
    {
        image: 'image-6',
        category: 'Mobile App Design',
        title: 'Afrochella Concept',
        href: 'afrochella-details'
    }
]

 class error404 extends Component {
    
    render() {
        return (
            <>
                <Header headerPosition="header--transparent" color="color-white" logo="logo-light" />
                {/* Start Page Error  */}
                <div className="error-page-inner bg_color--4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner">
                                    <h1 className="title theme-gradient">404!</h1>
                                    <h3 className="sub-title">That's weird 🤨</h3>
                                    <p style={{color: 'white'}}>Check out some of my latest work before you head back home.</p>
                                    <div className="wrapper portfolio-sacousel-inner mb--55">
                                            <div className="portfolio-slick-activation mt--30 mt_sm--30">
                                                <Slider {...portfolioSlick2}>
                                                    {PortfolioList2.map((value , index) => (
                                                        <div className="portfolio portfolio-interior-design" key={index}>
                                                            <div className="thumbnail-inner">
                                                                <div className={`thumbnail ${value.image}`}></div>
                                                                <div className={`bg-blr-image ${value.image}`}></div>
                                                            </div>
                                                            <div className="content">
                                                                <div className="inner">
                                                                    <p>{value.category}</p>
                                                                    <h4><a href={`${value.href}`}>{value.title}</a></h4>
                                                                    <div className="portfolio-button">
                                                                        <a className="rn-btn" href={`${value.href}`}>View Details</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </Slider>
                                            </div>
                                        </div>
                                        <br/>
                                        <br/>
                                    <div className="error-button">
                                        <a className="rn-button-style--2 btn-solid" href="/">Back To Homepage</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Error  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer /> 
            </>
        )
    }
}
export default error404;
