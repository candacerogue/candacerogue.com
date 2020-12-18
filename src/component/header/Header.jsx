import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FiX , FiMenu } from "react-icons/fi";


class Header extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded')
        })
    }

    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }

    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
    }


    render(){
        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        const { logo, color='default-color' } = this.props;
        let logoUrl;
        if(logo === 'light'){
            logoUrl = <img src="/assets/images/logo/Candace-Rogue-logo-white.png" alt="Candace Rogue Logo" />;
        }else if(logo === 'dark'){
            logoUrl = <img src="/assets/images/logo/Candace-Rogue-Logo-Dark.png" alt="Candace Rogue Logo" />;
        }else if(logo === 'symbol-dark'){
            logoUrl = <img src="/assets/images/logo/Candace-Rogue-Logo-Dark.png" alt="Candace Rogue Logo" />;
        }else if(logo === 'symbol-light'){
            logoUrl = <img src="/assets/images/logo/Candace-Rogue-logo-white.png" alt="Candace Rogue Logo" />;
        }else{
            logoUrl = <img src="/assets/images/logo/Candace-Rogue-logo-white.png" alt="Candace Rogue Logo" />;
        }
        
        return(
            <header className={`header-area formobile-menu header--transparent ${color}`}>
                <div className="header-wrapper" id="header-wrapper">
                    <div className="header-left">
                        <div className="logo">
                            <a href="/">
                                {logoUrl}
                            </a>
                        </div>
                    </div>
                    <div className="header-right">
                        <nav className="mainmenunav d-lg-block">
                            <ul className="mainmenu">
                            <li><a href="/">Home</a></li>
                                <li><a href="/about">About</a></li>
                                <li className="has-droupdown"><a href="/#service" >Services</a>
                                    <ul className="submenu">
                                        <li><a href="/web-development-details">Web Development & Design</a></li>
                                        <li><a href="/graphic-design-details">Graphic Design</a></li>
                                        <li><a href="/mobile-app-details">Mobile App Design</a></li>
                                    </ul>
                                </li>
                                <li className="has-droupdown"><a href="/portfolio">Portfolio</a></li>
                                <li><Link to="/shop" >Shop</Link></li>
                                <li><Link to="/contact" >Contact</Link></li>
                            </ul>
                        </nav>
                        <div className="header-btn">
                            <a className="rn-btn" href="https://calendly.com/candacerogue/dev" target="_blank" rel="noopener noreferrer">
                                <span>Book Consultation</span>
                            </a>
                        </div>
                        {/* Start Humberger Menu  */}
                        <div className="humberger-menu d-block d-lg-none pl--20">
                            <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                        </div>
                        {/* End Humberger Menu  */}
                        <div className="close-menu d-block d-lg-none">
                            <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;