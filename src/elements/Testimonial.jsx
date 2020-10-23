import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
class Testimonial extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-12">
                        <Tabs>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Working with Candace has been a dream come true. Not all designers are able to bring to life and execute your vision but she truly has a gift.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>CHELSEA</span> - CEO, DANKSWEETS TREATS</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>In my experience Candace has been the best teammate I have ever had working in the Software Engineering Industry.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>ARTHUR</span> - CTO, DEEPER THAN CODE</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>I had a vision, but wasn't technology savvy enough to bring it full circle. Candace was able to do exactly what I wanted with a few calls & e-mails.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>ERIN</span> - MULTI-HYPENATE ENTREPRENEUR</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Through our work I became accustomed to Candace’s thirst for knowledge, proactivity, strategic and solution oriented thinking. I believe these qualities have helped her develop not only into a strong and growing engineer, but also, a product leader with an impressive skillset.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>BRYLAN</span> - FASHION PARTNERSHIPS @ AFFIRM INC.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Candace patiently walked me through the process of identifying what worked for me, and diligently ensured throughout the design process that she was producing a product I was comfortable with and proud of.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>SHAMBREIA</span> - CEO, HEAVY</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>When I came on board, she was serving as a more than capable senior engineer. But when the need called for it, she proactively put on the hat of Product Manager to reorganize our internal UX/Engineering teams in order to bridge gaps in knowledge across the board. </p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>ANDRE</span> - ASSOCIATE DATA SCIENTIST, SPOTIFY</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>I had the privilege of working with Candace and found her to have the skillset of multiple people.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>JO</span> - SOFTWARE ENGINEER, MICROSOFT</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            
                            <TabList className="testimonial-thumb-wrapper">
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-1.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-2.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-3.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-4.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-5.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-6.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-7.jpg" alt="Testimonial Images"/>
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
export default Testimonial;