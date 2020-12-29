import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
// import Breadcrumb from "../elements/common/Breadcrumb";
import Testimonial from "../elements/NoExcuseTestimonial";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp, FiCheck  } from "react-icons/fi";
import ModalVideo from 'react-modal-video';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
// import PersonalNoteBg from "../../public/assets/images/no-excuse/personal-note-bg.png";

const TabOne = [
    {
        image: '01',
        bigImage: '/assets/images/no-excuse/iMac-psd-mockup-template-1.png',
        prompt: 'Preview Template',
        title: 'CannaTherapy',
        title2: 'Buy CannaTherapy',
        href: 'https://www.canva.com/design/DAEMqIlS-So/GldWgsj9uV_T7TtTORGqxg/view?website#2:cannatherapy',
        href2: 'https://shop.candacerogue.com/product/canva-made-website-template'
    },
    {
        image: '02',
        bigImage: '/assets/images/no-excuse/iMac-mockup-template-Marisicles.png',
        prompt: 'Preview Template',
        title: 'Marisicles',
        title2: 'Buy Marisicles',
        href: 'https://www.canva.com/design/DAEN5xjOYW4/DUO1Nnuk9ETbaVHMve4lIg/view?website#2',
        href2: 'https://shop.candacerogue.com/product/canva-made-website-template-2'
    },
    {
        image: '03',
        bigImage: '/assets/images/no-excuse/iMac-mockup-template-2- Royal-Buns.png',
        prompt: 'Preview Template',
        title: 'Royal Buns',
        title2: 'Buy Royal Buns',
        href: 'https://www.canva.com/design/DAEQBC-c7mY/0Vvo8JIW0b6BLuraWuk50A/view?website#2:home',
        href2: 'https://shop.candacerogue.com/product/canva-made-website-template-3'
    }
    // {
    //     image: '04',
    //     bigImage: '/assets/images/no-excuse/CannaTherapy-Mockup-Poster.png',
    //     prompt: 'Preview Template',
    //     title: 'Wave Ride',
    //     title2: 'Buy Wave Ride',
    //     href: 'https://21ninety.com/',
    //     href2: 'https://shop.candacerogue.com/product/canva-made-website-template'
    // }
]

class NoExcuse extends Component{
    constructor () {
        super()
        this.state = {
          tab1: 0,
          isOpen: false,
          isOpen2: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
        this.setState({isOpen2: true})
    }
    render(){
        // let myHTML = `<div style="position: relative; width: 100%; height: 0; padding-top: 56.2500%; padding-bottom: 48px; overflow: hidden; border-radius: 8px; will-change: transform;"><iframe style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;" src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAENxQ13VWU&#x2F;view?embed"></iframe></div>`;
        const { tab1, isOpen2 } = this.state;

        return(
            <React.Fragment>
                <PageHelmet pageTitle='No Excuse Branding & Website Kit' />

                {/* <div dangerouslySetInnerHTML={{ __html: myHTML }} /> */}
                <div className="no-excuse-page">
                    {/* Start Header Area  */}
                    <div className="no-excuse-header" id="no-excuse-home">
                        <img src="/assets/images/no-excuse/No-Excuse-Header.png" alt="No Excuse Header"/>
                    </div>
                    {/* End Header Area  */}

                    {/* Start A Personal note Area  */}
                    <div className="no-excuse-personal-note" id="no-excuse-intro">
                        <div className="rn-about-area ptb--120">
                            <div className="rn-about-wrapper">
                                <div className="container">
                                    <div className="row row--35 align-items-center">
                                        <div className="col-lg-6">
                                            <div className="thumbnail">
                                                {/* <img className="w-100" src="/assets/images/about/about-3.jpg" alt="About Images"/> */}
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="about-inner inner">
                                                <div className="section-title no-excuse-personal-note-paragraph">
                                                    <h1>A personal note from <br/> the designer</h1>
                                                    <h2>Candace Rogue</h2>
                                                    <br/>
                                                    <br/>
                                                    <h3>I don’t want you to wait as long as I did to build a web presence *cough cough* It was 4 years.</h3>
                                                    <p>Because someone <span className="special-caps">NEEDS</span> exactly what you have to offer</p>
                                                    <p>Whether that’s consulting services, a subscription box or groundbreaking-product. They need you now.</p>
                                                    <p>Don’t you want to get out of your own way? Stop waiting until you take that one class that makes you an “expert”, or the perfect photographer to take your headshots/product pictures. Someone could see that IG Live where you were spittin’ hot fire and want to buy the service <span className="special-caps">NOW</span>.</p>
                                                    <p>Website up and product/service offerings ready to buy? Start <span className="special-caps">HERE</span> with this kit.</p>
                                                    <p>I want you to start pacing toward your 7 figure dreams today.</p>
                                                    <p>And that is why I designed this kit.</p>
                                                    <br/>
                                                    <h3 style= {{ fontStyle: "italic" }}>No more waiting. No more bullshit. Say “goodbye” to the excuses and “hello” to your no nonsense, money making landing page.</h3>
                                                    <a href="https://shop.candacerogue.com/category/digital-products" rel="noopener noreferrer"><button className="no-excuse-button">You Ready?</button></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            
                        </div>
                    </div>
                    {/* End A Personal note Area  */}

                    {/* Start Take A Look Area Part 1  */}
                    <div className="rn-columns-area ptb--120 bg_color--1 take-a-look" id="no-excuse-take-a-look-inside">
                        <div className="container">
                            <div className="take-a-look-heading">
                                    <h1>Take a Look</h1>
                                    <h2>Inside</h2>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="single-column">
                                        <br/>
                                        <h3>Here’s what you’ll find in the <span className="special-caps">platinum package</span>:</h3>
                                        <br/>
                                        <p><span role="img" aria-label="sun emoji">🔅</span>Desktop Canva Template</p>
                                        <br/>
                                        <p><span role="img" aria-label="sun emoji">🔅</span>Graphic Assets all personally designed by me. So no licensing restrictions when reusing assets.</p>
                                        <br/>
                                        <p><span role="img" aria-label="sun emoji">🔅</span>Icon Pack, keep the branding alive down to every…single…button.</p>
                                        <br/>
                                        <p><span role="img" aria-label="sun emoji">🔅</span>Website Customization Tutorial. I’ll walk you through how to quickly move in your beautiful product, service and stock images to tailor to your brand</p>
                                        <br/>
                                        <p><span role="img" aria-label="sun emoji">🔅</span><span className="special-caps">ADD-ON</span> Bonus Header. I often feel generous, so get this package today and extra header style option on me.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 mt_sm--30">
                                    <div className="single-column">
                                        <div className="thumb position-relative">
                                            <img className="no-excuse-video-img" src="/assets/images/no-excuse/CannaTherapy-Mockup-Poster.png" alt="CannaTherapy-Sample-2"/>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                            <button className="video-popup position-top-center black-color" onClick={this.openModal}><span className="play-icon"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Take A Look Area Part 1  */}

                    {/* Start Take A Look Area Part 2  */}
                    <div className="rn-columns-area ptb--120 bg_color--1 take-a-look-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12 mt_sm--30">
                                    <div className="single-column">
                                        <div className="thumb position-relative">
                                            <img className="no-excuse-video-img" src="/assets/images/no-excuse/CannaTherapy-Mockup-Poster.png" alt="CannaTherapy-Sample"/>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                            <button className="video-popup position-top-center black-color" onClick={this.openModal}><span className="play-icon"></span></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="single-column">
                                        <p><span role="img" aria-label="sun emoji">🔅</span><span className="special-caps">ADD-ON</span> Brand Guide. Providing the aesthetic so you don’t get lost in the sauce.</p>
                                        <br/>
                                        <p><span role="img" aria-label="sun emoji">🔅</span><span className="special-caps">ADD-ON</span> 6 Instagram Story Templates. Of course I didn’t have to, but I wanted to.</p>
                                        <br/>
                                        <p><span role="img" aria-label="sun emoji">🔅</span><span className="special-caps">ADD-ON</span> 6 Social Media Post Templates. Got content? Good, because I have the format</p>
                                        <br/>
                                        <p><span role="img" aria-label="sun emoji">🔅</span><span className="special-caps">ADD-ON</span> Example Jot Form. I’m handing you the entire system to make the bread. Don’t fumble the bag.</p>
                                        <br/>
                                        <p><span role="img" aria-label="sun emoji">🔅</span><span className="special-caps">ADD-ON</span> Add Jot Form Tutorial, I’ll get you going in no time!</p>
                                        <br/>
                                        <p><span role="img" aria-label="sun emoji">🔅</span><span className="special-caps">ADD-ON</span> Custom Domain Connection Service - You say when, and I’ll deploy your site myself on your custom domain.</p>
                                        <br/>
                                        <h3>See? No excuses.</h3>
                                        <a href="https://shop.candacerogue.com/category/digital-products" rel="noopener noreferrer"><button className="no-excuse-button">Snag Yours!</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Take A Look Area Part 2  */}

                    {/* Start Take It From Area */}
                    <div className="rn-testimonial-area bg_color--5 ptb--120 take-it-from" id="no-excuse-reviews">
                        <div className="take-it-from-heading">
                            <h1>Take it from</h1>
                            <h2>Shy Chef M</h2>
                        </div>
                        <br/>
                        <br/>
                        <div className="container">
                            <Testimonial />
                        </div>
                        </div>
                    {/* End Take It From Area */}

                    {/* Start Choose Your Vibe Area */}
                    <div className="choose-your-vibe" id="no-excuse-choose-template">
                        <div className="choose-your-vibe-content">
                            <div className="choose-your-vibe-heading">
                                <h1>Choose Your</h1>
                                <h2>Vibe</h2>
                            </div>
                        <div className="rn-portfolio-area ptb--120 bg_color--1 line-separator" style={{  backgroundColor: '#f4d44549'}}>
                            <div className="container" style={{  backgroundColor: '#f4d44549'}}>
                                <div className="row">
                                    {TabOne.map((value , index) => (
                                        <div className="col-lg-6" key={index}>
                                            {isOpen2 && (
                                                <Lightbox
                                                    mainSrc={TabOne[tab1].bigImage}
                                                    nextSrc={TabOne[(tab1 + 1) % TabOne.length]}
                                                    prevSrc={TabOne[(tab1 + TabOne.length - 1) % TabOne.length]}
                                                    onCloseRequest={() => this.setState({ isOpen2: false })}
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
                                                <div onClick={() => this.setState({ isOpen2: true, tab1: index })}>
                                                    <div className="portfolio-static">
                                                        <h2 className="template-name">{value.title}</h2>
                                                        <div className="thumbnail-inner">
                                                            <div className="thumbnail">
                                                                <a href="#portfolio-details">
                                                                    <img src={value.bigImage} alt="Portfolio Images"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="content text-center">
                                                            <div className="inner">
                                                                <p style={{ color: '#3B2317'}}><a href={`${value.href}`} target="_blank" rel="noopener noreferrer">{value.prompt}</a></p>
                                                                <a href={`${value.href2}`} target="_blank" rel="noopener noreferrer"><button className="no-excuse-button-buy">{value.title2}</button></a>
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
                        </div>
                    </div>
                    {/* End Choose Your Vibe Area */}

                    {/* Start Main Benefits Area */}
                    <div className="rn-columns-area ptb--120 bg_color--1 main-benefits" id="no-excuse-main-benefits">
                        <div className="container">
                            <div className="take-a-look-heading text-right">
                                <h1>Main Benefits of the</h1>
                                <h2>Product</h2>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="single-column">
                                        <br/>
                                        <h3>Reasons why you should choose this product:</h3>
                                        <br/>
                                        <p><span role="img" aria-label="sun emoji">🔅</span><span className="special-caps">Cost effective</span> - Spending money on a website can take thousands of dollars when working with a designer and developer. Get my guidance, my design skills and your very own website up in a day for a fraction of the cost.</p>
                                        <br/>
                                        <p><span role="img" aria-label="sun emoji">🔅</span><span className="special-caps">Time Saving</span> - Simplifying the road to a beautiful website takes you from a 4-10 week process to a ONE day process.</p>
                                        <br/>
                                        <p><span role="img" aria-label="sun emoji">🔅</span><span className="special-caps">Do It Yourself</span> - Challenging yourself to make your own website can be intimidating, but with the No Excuse Branding & Website Kit you’ll feel empowered to conquer this task.</p>
                                        <br/>
                                        <p><span role="img" aria-label="sun emoji">🔅</span><span className="special-caps">Website Design Included</span> - Don’t spend days scouring the internet for design ideas and html templates, this is a one-stop solution. Just add your product/service pictures, links to socials and checkout jot form. You’re only a few clicks away! </p>
                                        <br/>
                                        <p><span role="img" aria-label="sun emoji">🔅</span><span className="special-caps">Intuitive Workflow</span> - Once you click buy, you’re not alone! There are a number of resources and videos that will be shared with you that will walk you through each step of the way. You got this!</p>
                                        <br/>
                                        <p><span role="img" aria-label="sun emoji">🔅</span><span className="special-caps">Instant Updates</span> - Anytime you need to update links, social media handles product pictures, prices etc. It’s no problem! Your changes are saved and website updated  instantly. </p>
                                        <br/>
                                        <h3 style= {{ fontStyle: "italic" }}>No more waiting. No more bullshit. Say “goodbye” to the excuses and “hello” to your no nonsense, money making landing page.</h3>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 mt_sm--30">
                                    <div className="single-column">
                                        <div className="thumb position-relative">
                                            <img className="no-excuse-preview-img" src="/assets/images/no-excuse/single-screen-preview.png" alt="CannaTherapy-Sample"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="https://shop.candacerogue.com/category/digital-products" rel="noopener noreferrer"><button className="no-excuse-button">Buy Now</button></a>
                    </div>
                    {/* End Main Benefits Area */}

                    {/* Start Packages Available Area  */}
                    <div className="packages-available">
                        <div className="packages-available-heading text-center">
                            <h1>Packages</h1>
                            <h2>Available</h2>
                        </div>
                        <div className="rn-pricing-table-area ptb--120 bg_color--5">
                            <div className="container">
                                <div className="row">

                                    {/* Start Pricing Table Area  */}
                                    <div className="col-lg-4 col-md-6 col-12">
                                        <div className="rn-pricing">
                                            <div className="pricing-table-inner">
                                                <div className="pricing-header">
                                                    <h4 className="title">Basic</h4>
                                                    <div className="pricing">
                                                        <span className="price">159</span>
                                                        <span className="subtitle">USD</span>
                                                    </div>
                                                </div>
                                                <div className="pricing-body">
                                                    <ul className="list-style--1">
                                                        <li><FiCheck /> Desktop Canva Template</li>
                                                        <li><FiCheck /> Graphic Assets</li>
                                                        <li><FiCheck /> Icon Pack</li>
                                                        <li><FiCheck /> Add Custome Domain Tutorial</li>
                                                        <li><FiCheck /> Website Customization Tutorial</li>
                                                        <li><FiCheck /> ADD-ON Bonus Header</li>
                                                    </ul>
                                                </div>
                                                <div className="pricing-footer">
                                                    <a className="rn-btn" href="https://shop.candacerogue.com/category/digital-products">Purchase Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Pricing Table Area  */}

                                    {/* Start Pricing Table Area  */}
                                    <div className="col-lg-4 col-md-6 col-12">
                                        <div className="rn-pricing active">
                                            <div className="pricing-table-inner">
                                                <div className="pricing-header">
                                                    <h4 className="title">Premium</h4>
                                                    <div className="pricing">
                                                        <span className="price">199</span>
                                                        <span className="subtitle">USD</span>
                                                    </div>
                                                </div>
                                                <div className="pricing-body">
                                                    <ul className="list-style--1">
                                                        <li><FiCheck /> Desktop Canva Template</li>
                                                        <li><FiCheck /> Graphic Assets</li>
                                                        <li><FiCheck /> Icon Pack</li>
                                                        <li><FiCheck /> Add Custome Domain Tutorial</li>
                                                        <li><FiCheck /> Website Customization Tutorial</li>
                                                        <li><FiCheck /> ADD-ON Bonus Header</li>
                                                        <li><FiCheck /> ADD-ON Brand Guide</li>
                                                        <li><FiCheck /> ADD-ON 6 Instagram Story Templates</li>
                                                        <li><FiCheck /> ADD-ON Social Media Post Templates</li>
                                                        <li><FiCheck /> ADD-ON Example Jot Form</li>
                                                        <li><FiCheck /> ADD-ON Add Jot Form Tutorial</li>
                                                    </ul>
                                                </div>
                                                <div className="pricing-footer">
                                                    <a className="rn-btn" href="https://shop.candacerogue.com/category/digital-products">Purchase Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Pricing Table Area  */}

                                    {/* Start Pricing Table Area  */}
                                    <div className="col-lg-4 col-md-6 col-12">
                                        <div className="rn-pricing">
                                            <div className="pricing-table-inner">
                                                <div className="pricing-header">
                                                    <h4 className="title">Platinum</h4>
                                                    <div className="pricing">
                                                        <span className="price">259</span>
                                                        <span className="subtitle">USD</span>
                                                    </div>
                                                </div>
                                                <div className="pricing-body">
                                                    <ul className="list-style--1">
                                                        <li><FiCheck /> Desktop Canva Template</li>
                                                        <li><FiCheck /> Graphic Assets</li>
                                                        <li><FiCheck /> Icon Pack</li>
                                                        <li><FiCheck /> Add Custome Domain Tutorial</li>
                                                        <li><FiCheck /> Webstie Customization Tutorial</li>
                                                        <li><FiCheck /> ADD-ON Bonus Header</li>
                                                        <li><FiCheck /> ADD-ON Brand Guide</li>
                                                        <li><FiCheck /> ADD-ON 6 Instagram Story Templates</li>
                                                        <li><FiCheck /> ADD-ON Social Media Post Templates</li>
                                                        <li><FiCheck /> ADD-ON Example Jot Form</li>
                                                        <li><FiCheck /> ADD-ON Add Jot Form Tutorial</li>
                                                        <li><FiCheck /> ADD-ON Add Custom Domain Connection Service</li>
                                                    </ul>
                                                </div>
                                                <div className="pricing-footer">
                                                    <a className="rn-btn" href="https://shop.candacerogue.com/category/digital-products">Purchase Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Pricing Table Area  */} 
                            </div>
                        </div>
                    </div>
                    {/* End Packages Available Area  */}

                    {/* Start Faq Area */}
                    <div className="faq" id="no-excuse-faq">
                        <div className="pv-feaq-area bg_color--3 ptb--120">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2">
                                        <div className="section-title text-left pb--30">
                                        <div className="faq-heading text-left">
                                            <h1>Questions?</h1>
                                            <h2>FAQ</h2>
                                        </div>
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
                                                            Can I customize and add my own brand colors, fonts, and images?
                                                        </AccordionItemButton>
                                                    </AccordionItemHeading>
                                                    <AccordionItemPanel>
                                                        <p>You sure can! These templates are ready made. so once you download them into your canva account, you will have the freedom to customize every single element in these templates.</p>
                                                    </AccordionItemPanel>
                                                </AccordionItem>

                                                <AccordionItem>
                                                    <AccordionItemHeading>
                                                        <AccordionItemButton>
                                                            Can I use this template in a CMS like Wordpress, Shopify, Squarespace, or my own hosting platform?
                                                        </AccordionItemButton>
                                                    </AccordionItemHeading>
                                                    <AccordionItemPanel>
                                                        <p>These templates are stand alone landing pages with images and links. So you won't be able to import these template designs into your website on your own hosting platform. You will be able to forward your custom domain to the template or include a tab on your site that links to the landing page templates.</p>
                                                    </AccordionItemPanel>
                                                </AccordionItem>
                                                <AccordionItem>
                                                    <AccordionItemHeading>
                                                        <AccordionItemButton>
                                                            Can I use a custom domain?
                                                        </AccordionItemButton>
                                                    </AccordionItemHeading>
                                                    <AccordionItemPanel>
                                                        Yup! You can forward your custom domain to the template link you create. I teach you exactly how to do it. OR if you buy the platinum package, I will connect the custom domain to your landing page template myself!
                                                    </AccordionItemPanel>
                                                </AccordionItem>

                                                <AccordionItem>
                                                    <AccordionItemHeading>
                                                        <AccordionItemButton>
                                                            How long does it take to launch my landing page after buying?
                                                        </AccordionItemButton>
                                                    </AccordionItemHeading>
                                                    <AccordionItemPanel>
                                                        <p>If you have your brand colors, product/service images and copy ready right now, the process can take less than a day! After forwarding your custom domain to the template location it can take up to 48 hours for your DNS to propogate depending on your domain/hosting provider.</p>
                                                    </AccordionItemPanel>
                                                </AccordionItem>

                                                <AccordionItem>
                                                    <AccordionItemHeading>
                                                        <AccordionItemButton>
                                                            Can I use this as an e-commerce website?
                                                        </AccordionItemButton>
                                                    </AccordionItemHeading>
                                                    <AccordionItemPanel>
                                                        <p>These templates are perfect for budding entrepreneurs who have any of, but not limited to, the following goals:
                                                            <ul>
                                                                <li>Landing pages</li>
                                                                <li>Sales pages</li>
                                                                <li>Brand awareness of physical products & services</li>
                                                                <li>Adverstisement of a course, lead generation/email capture or product</li>
                                                            </ul> 
                                                             I would not recommend using these templates for an ecommerce website selling more than 3-5 products/services. These templates allow you to share your message, promote your products, present offers, generate leads, AND sell your services & products.</p>
                                                    </AccordionItemPanel>
                                                </AccordionItem>
                                                <AccordionItem>
                                                    <AccordionItemHeading>
                                                        <AccordionItemButton>
                                                            Are these templates made on the Canva platform?
                                                        </AccordionItemButton>
                                                    </AccordionItemHeading>
                                                    <AccordionItemPanel>
                                                        <p>Yes, they are made on the Canva platform!</p>
                                                    </AccordionItemPanel>
                                                </AccordionItem>
                                                <AccordionItem>
                                                    <AccordionItemHeading>
                                                        <AccordionItemButton>
                                                            How can I get the tech support for work completed?
                                                        </AccordionItemButton>
                                                    </AccordionItemHeading>
                                                    <AccordionItemPanel>
                                                        <p>If I have completed some work and you need technical maintenance/assistance, please reach out to me directly at <a href="mailto:candace@candacerogue.com">candace@candacerogue.com</a>.</p>
                                                        <p>If you need technical maintenance/assistance completed by another professional, please book some time on my calendar <a className="theme-gradient" href="https://calendly.com/candacerogue/dev" target="_blank" rel="noopener noreferrer">here</a> for us to connect and speak through your issues!</p>
                                                    </AccordionItemPanel>
                                                </AccordionItem>
                                                <AccordionItem>
                                                    <AccordionItemHeading>
                                                        <AccordionItemButton>
                                                            Does Canva host these website templates? 
                                                        </AccordionItemButton>
                                                    </AccordionItemHeading>
                                                    <AccordionItemPanel>
                                                        <p>Canva does not host or house websites. It does house links attached to your Canva website template. </p>
                                                    </AccordionItemPanel>
                                                </AccordionItem>
                                            <br/>    
                                            <h3>Payment & Refund Policies</h3>
                                                <AccordionItem>
                                                    <AccordionItemHeading>
                                                        <AccordionItemButton>
                                                            What happens after I purchase my template?
                                                        </AccordionItemButton>
                                                    </AccordionItemHeading>
                                                    <AccordionItemPanel>
                                                        <p>Open the digital downlad forwarded to you after purchase. In the folder, you'll find a PDF labeled "Shortcuts" with clickable links. Use these links to assist you in copying the original template, creating a jot form, customizing the template, and connecting your template to jot form and your domain. </p>
                                                    </AccordionItemPanel>
                                                </AccordionItem>

                                                <AccordionItem>
                                                    <AccordionItemHeading>
                                                        <AccordionItemButton>
                                                            Do you take refunds for these productss?
                                                        </AccordionItemButton>
                                                    </AccordionItemHeading>
                                                    <AccordionItemPanel>
                                                        <p>Due to the quality of work and delivery of these templates, I do not offer refunds. If you need assistance moving forward with these templates, please feel free to hit me up at <a href="mailto:candace@candacerogue.com">candace@candacerogue.com</a></p>
                                                    </AccordionItemPanel>
                                                </AccordionItem>

                                            </Accordion>
                                        </div>
                                    </div>
                                </div>
                            </div>        
                        </div>
                    </div>
                    {/* End Faq Area */}

                    {/* Start More Questions Area */}
                    <div className="text-center">                     
                        <h3 className="special-caps">Need a whole web experience?</h3>
                        <span style={{ color: '#3B2317', fontSize:'2em', fontWeight:'bolder'}}>Contact me at <a href="mailto:candace@candacerogue.com" style={{ color: '#3B2317'}}>candace@candacerogue.com</a></span>
                    </div>  
                    {/* End More Questions Area */}
                    <br/>
                    <br/>
                    {/* Start Back To Top */}
                    <div className="backto-top">
                        <ScrollToTop showUnder={160}>
                            <FiChevronUp />
                        </ScrollToTop>
                    </div>
                    {/* End Back To Top */}
                </div>
            </React.Fragment>
        )
    }
}
export default NoExcuse