import React from 'react'
import ScrollToTop from 'react-scroll-up';
import TextLoop from "react-text-loop";
import FooterTwo from "../component/footer/FooterTwo";
import { FiChevronUp} from "react-icons/fi";
import Header from "../component/header/HeaderThree";
import PortfolioList from "../elements/portfolio/PortfolioList";
import ServiceList from "../elements/service/ServiceList";
import Helmet from "../component/common/Helmet";

const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Welcome to my World',
        description: '',
        buttonText: '',
        buttonLink: ''
    }
]

const DesignerPortfolio = () => {
    return (
        <div>
            <Helmet pageTitle="Follow Your Curiousity" />
            {/* Start Header Area  */}
            <Header headerPosition="header--static" logo="symbol-dark" color="color-black"/>
            {/* End Header Area  */}

            {/* Start Slider Area   */}
            <div id="home" className="fix">
                <div className="slider-wrapper" id="home">
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25" key={index}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            <h1 className="title">Hi, I’m Candace Rogue <br/>
                                            <TextLoop>
                                                <span> UI/UX Designer.</span>
                                                <span> Multimedia Artist.</span>
                                                <span> Web Developer.</span>
                                                <span> Jill of All Trades.</span>
                                            </TextLoop>{" "}
                                            </h1>
                                            <h2 style={{color: "#000073"}}>based in USA.</h2>
                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                            {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                </div>
            </div>
            {/* End Slider Area   */} 
            
            {/* Start Service Area  */}
            <div id="service" className="fix">
                <div className="service-area creative-service-wrapper ptb--120 bg_color--5" style={{backgroundColor: "#000073"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                    <h2 className="title" style={{color: "white"}}>Official Service List</h2>
                                    <p>My talents go far beyond design and development. If you'd like to read more about my processes in these discplines below click the service that peaks your interest. If you're curious about what I do in the "Upside-Down", follow your curiousity to my secret menu <a href="/linktree" target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>LinkTree</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            <div className="col-lg-12">
                                <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            {/* End Service Area  */} 

            {/* Start Portfolio Area */}
            <div id="portfolio" className="fix">
                <div className="portfolio-area ptb--120 bg_color--1">
                    <div className="portfolio-sacousel-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                        <h2 className="title" style={{color: "#000073"}} id="portfolio">My Latest Projects</h2>
                                        <p style={{color: "#000073"}}>Everyday I'm hustling. These are the projects I've been working on recently and I'm so proud to see my brain children out in the world flourishing!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <PortfolioList styevariation="text-center mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="6" />
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="view-more-btn mt--60 mt_sm--30 text-center">
                                        <a className="rn-button-style--2 btn-solid" href="/#portfolio"><span>View More</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Portfolio Area */}

            {/* Start Footer Style  */}
            <FooterTwo />
            {/* End Footer Style  */}
            
            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}

        </div>
    )
}

export default DesignerPortfolio
