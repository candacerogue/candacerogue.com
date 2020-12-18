import React, { Component } from 'react'
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/FooterTwo";
import PortfolioList from "../elements/portfolio/PortfolioList";

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const TabOne = [
    {
        image: '01',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-01.png',
        category: 'Web Development',
        title: 'Blavity - Fulltime Job - Website',
        href: 'https://blavity.com/'
    },
    {
        image: '02',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-02.png',
        category: 'Web Development',
        title: 'Travel Noire - Fulltime Job - Website',
        href: 'https://travelnoire.com/'
    },
    {
        image: '03',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-03.png',
        category: 'Web Development',
        title: 'Afrotech - Fulltime Job - Landing Page',
        href: 'https://afrotech.com/'
    },
    {
        image: '04',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-04.png',
        category: 'Web Development',
        title: '21Ninety - Fulltime Job - Landing Page',
        href: 'https://21ninety.com/'
    },
    {
        image: '05',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-05.png',
        category: 'Web Design & Development',
        title: 'DankSweets Treats - Freelance - Website',
        href: 'https://danksweetstreats.com/'
    },
    {
        image: '06',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-06.png',
        category: 'Web Design & Development',
        title: 'Prepped & Plated - Freelance - Website',
        href: 'https://preppedandplated.org/'
    },
    {
        image: '07',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-07.png',
        category: 'Web Development',
        title: 'blkcreatives - Freelance - Website Homepage',
        href: 'https://blkcreatives.com/'
    },
    {
        image: '08',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-08.png',
        category: 'Web Design & Development',
        title: 'Anika Marie - Freelance - Portfolio Landing Page',
        href: 'https://www.anika-marie.com/'
    },
    {
        image: '09',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-09.png',
        category: 'Web Design & Development',
        title: 'John Ketchum - Freelance - Portfolio Landing Page',
        href: 'http://www.ketchcast.com/'
    },
    {
        image: '10',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-10.png',
        category: 'Web Design & Development',
        title: 'Fluid Life Global - Freelance - Website',
        href: 'http://www.fluidlifeglobal.com/'
    },
]

class PortfolioHub extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab1: 0,
            isOpen: false,
        };
    }
    render() {
        const { tab1, isOpen } = this.state;
        return (
            <div>

            <PageHelmet pageTitle='Portfolio' />

            {/* Start Header Area  */}
            <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
            {/* End Header Area  */}
            
            {/* Start Breadcrump Area */}
            <Breadcrumb title={'Portfolio'}   />
            {/* End Breadcrump Area */}

            {/* Start Page Wrapper  */}
            <main className="page-wrapper">

                {/* Start Portfolio Area  */}
                <div className="rn-portfolio-area ptb--120 bg_color--1 line-separator">
                    <div className="container">
                        <div className="row">
                            {TabOne.map((value , index) => (
                                <div className="col-lg-6" key={index}>
                                    {isOpen && (
                                        <Lightbox
                                            mainSrc={TabOne[tab1].bigImage}
                                            nextSrc={TabOne[(tab1 + 1) % TabOne.length]}
                                            prevSrc={TabOne[(tab1 + TabOne.length - 1) % TabOne.length]}
                                            onCloseRequest={() => this.setState({ isOpen: false })}
                                            onMovePrevRequest={() =>
                                            this.setState({
                                                tab1: (tab1 + TabOne.length - 1) % TabOne.length,
                                            })
                                            }
                                            onMoveNextRequest={() =>
                                                this.setState({
                                                    tab1: (tab1 + 1) % TabOne.length,
                                                })
                                            }
                                        />
                                    )}
                                    <div className="item-portfolio-static">
                                        <div onClick={() => this.setState({ isOpen: true, tab1: index })}>
                                            <div className="portfolio-static">
                                                <div className="thumbnail-inner">
                                                    <div className="thumbnail">
                                                        <a href="#portfolio-details">
                                                            <img src={value.bigImage} alt="Portfolio Images"/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <div className="inner">
                                                        <p>{value.category}</p>
                                                        <h4><a href={`${value.href}`} target="_blank" rel="noopener noreferrer">{value.title}</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Portfolio Area  */}

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
                                            <a className="rn-button-style--2 btn-solid" href="/portfolio"><span>View More</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Area */}

            </main>
            {/* End Page Wrapper  */}

            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
            
            {/* Start Footer Area  */}
            <Footer />
            {/* End Footer Area  */}                
            </div>
        )
    }
}


export default PortfolioHub;