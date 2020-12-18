import React ,{ Component }from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { FiChevronUp } from "react-icons/fi";

const LinkTreeList = [
    {
        title: 'Shop',
        href: 'https://shop.candacerogue.com'
    },
    {
        title: 'Book Consultation',
        href: 'https://calendly.com/candacerogue/dev?month=2020-10'
    },
    {
        title: 'Pay Consultation',
        href: 'https://paypal.me/CandaceRogue/60'
    },
    {
        title: 'Portfolio',
        href: '/portfolio'
    },
    {
        title: 'UI/UX Prezi',
        href: 'https://prezi.com/mmasr-ngfk0n/why-is-uiux-so-damn-sexy/?present=1'
    }, 
    {
        title: '501 Rogueland',
        href: 'https://www.instagram.com/501rogueland/'
    }, 
    {
        title: 'WTFrontend',
        href: 'https://www.instagram.com/wtfrontend/'
    }, 
    {
        title: 'Instagram',
        href: 'https://www.instagram.com/candacerogue/'
    }, 
    {
        title: 'Twitter',
        href: 'https://www.twitter.com/candacerogue/'
    }, 
    {
        title: 'YouTube Channel',
        href: 'https://www.youtube.com/channel/UCox37w_PbYwnnwKzQSA62dA'
    },

]


class LinkTree extends Component{
    render(){
        const LinkTreeContent = LinkTreeList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <PageHelmet pageTitle='LinkTree' />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <Breadcrumb title={'LinkTree'}   />
                {/* End Breadcrump Area */}

                {/* Start LinkTree */}
                <div className="linktree-row col-lg-12 text-center">
                    {LinkTreeContent.map( (val , i) => (
                        <div className="content-container" key={i}>
                            <a href={`${val.href}`} target="_blank" rel="noopener noreferrer">
                                <div className="linktree linktree__style--1">
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
                 {/* End LinkTree */}
                 
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
export default LinkTree;
