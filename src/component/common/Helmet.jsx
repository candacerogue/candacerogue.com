import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || Portfolio Website </title>
                    <meta name="description" content="Candace Rogue – Portfolio Website" />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
