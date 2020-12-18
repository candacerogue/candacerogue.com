// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

// Common Layout
// import Layout from "./component/common/App";


// Home layout
// import Demo from './page-demo/Demo';
// import MainDemo from './home/MainDemo';
// import Startup from './home/Startup';
// import Paralax from './home/Paralax';
// import HomePortfolio from './home/HomePortfolio';
// import DigitalAgency from './home/DigitalAgency';
// import CreativeAgency from './home/CreativeAgency';
// import PersonalPortfolio from './home/PersonalPortfolio';
// import Business from './home/Business';
// import StudioAgency from './home/StudioAgency';
// import PortfolioLanding from './home/PortfolioLanding';
// import CreativeLanding from './home/CreativeLanding';
// import HomeParticles from './home/HomeParticles';
// import CreativePortfolio from './home/CreativePortfolio';
import DesignerPortfolio from './home/DesignerPortfolio';
// import InteriorLanding from './home/Interior';
// import CorporateBusiness from './home/CorporateBusiness';

// Dark Home Layout 
// import DarkMainDemo from './dark/MainDemo';
// import DarkPortfolioLanding from './dark/PortfolioLanding';

// Element Layout
// import Service from "./elements/Service";
import LinkTree from "./elements/LinkTree";
import FAQ from "./elements/FAQ";
// import ServiceDetails from "./elements/ServiceDetails";
import About from "./elements/About";
import Contact from "./elements/Contact";
// import PortfolioDetails from "./elements/PortfolioDetails";
// import Blog from "./elements/Blog";
// import BlogDetails from "./elements/BlogDetails";
import error404 from "./elements/error404";

//Service Pages
import WebDevDetails from "./services/WebDevDetails";
import GraphicDesDetails from "./services/GraphicDesDetails";
import MobileAppDetails from "./services/MobileAppDetails";

//Portfolio & Projects
import PortfolioHub from "./blocks/PortfolioHub";
import DankSweetsDetails from "./elements/DankSweetsDetails";
import JessicaDetails from "./elements/JessicaDetails";
import BlendedDetails from "./elements/BlendedDetails";
import ReactOptDetails from "./elements/ReactOptDetails";
import JohnKetchumDetails from "./elements/JohnKetchumDetails";
import AfrochellaDetails from "./elements/AfrochellaDetails";

// Blocks Layout

// import Team from "./blocks/Team";
// import Counters from "./blocks/Counters";
// import Testimonial from "./blocks/Testimonial";
// import Portfolio from "./blocks/Portfolio";
// import VideoPopup from "./blocks/VideoPopup";
// import Gallery from "./blocks/Gallery";
// import Brand from "./blocks/Brand";
// import ProgressBar from "./blocks/ProgressBar";
// import ContactForm from "./blocks/ContactForm";
// import GoogleMap from "./blocks/GoogleMap";
// import Columns from "./blocks/Columns";
// import PricingTable from "./blocks/PricingTable";

import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

//Google Analytics 
import ReactGA from 'react-ga';
ReactGA.initialize('UA-185807553-1'); // add your tracking id here.
ReactGA.pageview(window.location.pathname + window.location.search);

class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={DesignerPortfolio}/>
                    {/* <Route exact path={`${process.env.PUBLIC_URL}/main-demo`} component={MainDemo}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/dark-main-demo`} component={DarkMainDemo}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/startup`} component={Startup}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/paralax`} component={Paralax}/> */}

                    {/* <Route exact path={`${process.env.PUBLIC_URL}/digital-agency`} component={DigitalAgency}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/creative-agency`} component={CreativeAgency}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/personal-portfolio`} component={PersonalPortfolio}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/studio-agency`} component={StudioAgency}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/business`} component={Business}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio-home`} component={HomePortfolio}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio-landing`} component={PortfolioLanding}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/creative-landing`} component={CreativeLanding}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/home-particles`} component={HomeParticles}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/dark-portfolio-landing`} component={DarkPortfolioLanding}/> */}
                    {/* <Route exact path={`${process.env.PUBLIC_URL}/designer-portfolio`} component={DesignerPortfolio}/> */}
                    {/* <Route exact path={`${process.env.PUBLIC_URL}/creative-portfolio`} component={CreativePortfolio}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/interior-landing`} component={InteriorLanding}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/corporate-business`} component={CorporateBusiness}/> */}


                    {/* Element Layout */}
                    {/* <Route exact path={`${process.env.PUBLIC_URL}/service`} component={Service}/> */}
                    <Route exact path={`${process.env.PUBLIC_URL}/linktree`} component={LinkTree}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/faq`} component={FAQ}/>
                    {/* <Route exact path={`${process.env.PUBLIC_URL}/service-details`} component={ServiceDetails}/> */}
                    <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About}/>
                    {/* <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details`} component={PortfolioDetails}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog`} component={Blog}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog-details`} component={BlogDetails}/> */}

                    {/* Service Pages */}
                    <Route exact path={`${process.env.PUBLIC_URL}/web-development-details`} component={WebDevDetails}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/graphic-design-details`} component={GraphicDesDetails}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/mobile-app-details`} component={MobileAppDetails}/>
                    

                    {/* Portfolio & Projects */}
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio`} component={PortfolioHub}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/danksweets-details`} component={DankSweetsDetails}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/jessica-details`} component={JessicaDetails}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blended-details`} component={BlendedDetails}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/reactopt-details`} component={ReactOptDetails}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/john-ketchum-details`} component={JohnKetchumDetails}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/afrochella-details`} component={AfrochellaDetails}/>


                    {/* Blocks Elements  */}
                    {/* <Route exact path={`${process.env.PUBLIC_URL}/team`} component={Team}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/counters`} component={Counters}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/testimonial`} component={Testimonial}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio`} component={Portfolio}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/video-popup`} component={VideoPopup}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/gallery`} component={Gallery}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/clint-logo`} component={Brand}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/progressbar`} component={ProgressBar}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/contact-form`} component={ContactForm}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/google-map`} component={GoogleMap}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/columns`} component={Columns}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/pricing-table`} component={PricingTable}/> */}


                    <Route path='/shop' component={() => { 
                        window.location.href = 'https://shop.candacerogue.com'; 
                        return null;
                    }}/>
                    <Route path='/wtfrontend' component={() => { 
                        window.location.href = 'https://www.candacerogue.com/faq'; 
                        return null;
                    }}/>
                    <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
                    <Route component={error404}/>

                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();