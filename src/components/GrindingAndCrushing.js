import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import AdobeStockPreview3 from '../assets/img/team/AdobeStock_225146875_Preview.jpeg';

const GrindingAndCrushing = ({ siteTitle }) => {
    return (

    < >
       <section id="crushing" className="team">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h3> <span>CRUSHING, GRINDING AND MILLING</span></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus metus in ex varius, tempor pulvinar tortor interdum. Cras rhoncus orci sit amet commodo convallis. Mauris ut orci vitae ex ullamcorper rhoncus. </p>
                        </div>

                        <div className="row">

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                                <div className="member">
                                    <div className="member-img">
                                        <img src={AdobeStockPreview3} className="img-fluid" alt="" />

                                    </div>
                                    <div className="member-info">
                                        <h4>PALLA®</h4>
                                        <span>
                                            Vibrating Mill Our industry recognized, proprietary vibrating mill, PALLA® provides
                                            ultra-fine
                                            grinding. PALLA® uses a swinging motion that works for over 160 different materials
                                            - either wet or
                                            dry grinding - from intermittent to continuous operation.
                                </span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                                <div className="member">
                                    <div className="member-img">
                                        <img src={AdobeStockPreview3} className="img-fluid" alt="" />

                                    </div>
                                    <div className="member-info">
                                        <h4>CALIBRATOR®</h4>
                                        <span>
                                            Our cone crusher is suitable for communition of semi-hard to extremely hard rock,
                                            different ores,
                                            slags, refractory and abrasive materials. It is suitable for extremely heavy-duty
                                            installation and
                                            provides a high performance secondary and tertiary crushing.
                                </span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                                <div className="member">
                                    <div className="member-img">
                                        <img src={AdobeStockPreview3} className="img-fluid" alt="" />

                                    </div>
                                    <div className="member-info">
                                        <h4>ROOLLSTAR® </h4>
                                        <span>Our Roller Press (HPGR) is designed for interparticle crushing of ores and other
                                        minerals to
                                        increase the specific surface area of concentrates for the pelletizing industry. The
                                        HPGR can be
                                        used for tertiary crushing, primary grinding or finish grinding for pelletizing.
                                </span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
    </>
)}


export default GrindingAndCrushing
