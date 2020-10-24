import React, {Component, Fragment} from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import {
    FiChevronUp
} from "react-icons/fi";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';


class FAQ extends Component {
    render() {
        return (
            <Fragment>
                <PageHelmet pageTitle='FAQ' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                {/* Start Breadcrump Area */}
                <Breadcrumb title={'FAQ'}   />
                {/* End Breadcrump Area */}

                {/* Start Faq Area */}
                <div className="pv-feaq-area bg_color--3 ptb--120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="section-title text-left pb--30">
                                <h2 className="theme-gradient">Do you have any questions?</h2>
                                <p>Check out my FAQ section to see if I can help.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="faq-area">
                                <Accordion className="accodion-style--1" preExpanded={'0'}>
                                <h3>General</h3>
                                    <AccordionItem >
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Who/What is Candace Rogue? What services and iniatives does she advertise?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>Welcome to Candace Rogue LLC, my brand encompasses development, design, fashion, art and 6 tablespoons of blackity-blackness in everything I do. To break it down, think of my brand under these prongs:</p>
                                            <ul>
                                                <li><h4>Candace Rogue</h4>Renassiance Woman & Jill of All Trades offering Web Design & Development, Graphic Design and Mobile App Design services. </li>
                                                <li><h4>WTFrontend</h4> A YouTube playlist and social media platform with cool tips and tricks to navigate your code and workplace. </li>
                                                <li><h4>501 Rogueland</h4> A creative wonderland in the making. Look out for real estate & financial dos and don'ts on the social media platform and walk with me through my journey from ideation to execution of your new favorite space. </li>
                                                <li><h4>Outta State Outta My Mind</h4> My shop for all of the amazing fashion and art pieces that fall out of my head.</li>
                                                <li><h4>Black Barter</h4> A landing spot for black creatives and entrepreneurs to help source talent to scale their businesses in exchange for their own talents and aptitudes.</li>
                                            </ul>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Do you currently do art commissions?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>If you're interested in commissioning me for a one of a kind art or fashion piece, please reach out to me <a href="mailto:candace@candacerogue.com" style={{color: '#000073'}}>here</a> so we can speak through your vision!</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                <br/>
                                <h3>Development & Design</h3>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                What technologies and frameworks do you use?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <img className="w-100" src="/assets/images/portfolio/technologies.png" alt="Technology & Frameworks"/>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                How long is the development or design process?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>Timelines always depend on the client! While I am great at streamlining these processes to meet your tightest deadlines, I do want to make sure you take your time with feedback so I can encapsulate all of your feedback in your checkpoints and you walk off with a product you will be proud of.</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                What's the difference between a revision and modification?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>A modification is usually a slight change whereas revision can be a complete change of the original. Please make sure that you make your checkpoints as meaningful as possible. If we step outside of the scope specified in the contract for revisions, as opposed to a modification, there will be an additional costs to be submitted before revision is made to ensure the work is being adequately compensated.</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                How can I get the tech support for work completed?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>If I have completed some work and you need technical maintenance/assistance, please reach out to me directly at <a className="theme-gradient" href="mailto:candace@candacerogue.com">candace@candacerogue.com</a>.</p>
                                            <p>If you need technical maintenance/assistance completed by another professional, please book some time on my calendar <a className="theme-gradient" href="https://calendly.com/candacerogue/dev" target="_blank" rel="noopener noreferrer">here</a> for us to connect and speak through your issues!</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                <br/>    
                                <h3>Payment & Refund Policies</h3>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                How much do you charge for websites, logos, graphic work in general?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>I promise you I'm not trying to be elusive, but I absolutely will never do flat rates ever again in my life without hearing your complete vision. Pricing depends on the scope, which includes the complexity of the work, the timeline in which the work needs to be done and I try my very best to give you options within the budget you provide!</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                               Are consultations free of charge?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>Consultations are currently $60, which goes toward the balance of whichever service you choose. Otherwise, the consultation is payment for the time spent gathering resources, research and any other information to solve your technical and creative problems. </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Do you take refunds for any of your digital or physical products?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>I don't take refunds for any items I sell, but am happy to try and accommodate in any other way that I can. If there is an issue with quality, please reach out to me so we can speak through you needs and I can try and rectify.</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>        
                </div>
                {/* Start Faq Area */}
                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

                <Footer />

            </Fragment>
        )
    }
}
export default FAQ;