import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class NoExcuseTestimonial extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-12">
                        <Tabs>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Thank you to Candace Rogue for all that she has done. As a new entrepreneur who is still learning how to start a website, Candace was so helpful in walking me through the steps to make sure that I am up and running to accept new clients. Candace also ensured that my site was up and running and provided me with a one on one learning session on how to maintain my website as my business grows!</p>
                                    </div>
                                </div>
                            </TabPanel>
                            {/* <div className="take-it-from-overlay">
                                <img src="/assets/images/no-excuse/the-shy-chef.png" alt="The Shy Chef"/>
                            </div> */}
                            <h3 className="take-it-from-subheading" style= {{ fontStyle: "italic" }}>Valid points were made.</h3>
                            <button className="no-excuse-button">I'm Ready!</button>
                            <TabList className="testimonial-thumb-wrapper">
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            {/* <img src="/assets/images/no-excuse/the-shy-chef.png" alt="Testimonial Images"/> */}
                                        </div>
                                    </div>
                                </Tab>
                            </TabList>
                        </Tabs>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default NoExcuseTestimonial;