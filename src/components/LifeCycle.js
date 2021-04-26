import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import solution1 from '../assets/img/Icons/solution1.png';
import solution2 from '../assets/img/Icons/solution2.png';
import solution3 from '../assets/img/Icons/solution3.png';
import AdobeStockPreview2 from '../assets/img/AdobeStock_383254182_Preview.jpeg';

const LifeCycle = ({ siteTitle }) => {
    return (

    < >
     <section id="lifecycle" className="d-flex align-items-center hero2" style={{ background: `url(${AdobeStockPreview2})` }} >
                    <div className="container" data-aos="zoom-out" data-aos-delay="100">
                        <h1> <span>Life Cycle</span> Support
                        </h1>
                        <h2>You are in safe hands</h2>
                        <p>
                            We support you throughout your joarney to ensure you have a robust, reliable and sustainable solution.
                          </p>
                    </div>
                </section>

                <section id="featured-services" className="featured-services">
                    <div className="container" data-aos="fade-up">

                        <div className="row">
                            <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                    <h4 className="title"><a href="">Customer Support </a></h4>
                                    <div className="icon">
                                        <img src={solution1} className="icoImage" />
                                    </div>
                                    <p className="description">
                                        We support our customers throughout the whole life cycle of our equipment. After supplying the equipment. we make sure it is fully integrated in the existing plant or working smoothly in a new plant. We stock and supply a full range of wear and spare
                                        parts. We provide maintenance and advice to ensure equipment productivity and efficiency remain high.
                            </p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                    <h4 className="title"><a href="">Wear Parts </a></h4>
                                    <div className="icon">
                                        <img src={solution2} className="icoImage" />
                                    </div>
                                    <p className="description">
                                        Sustainable design is part of our DNA. Our solutions maximize the recovery of valuable concentrates and sellable product streams from waste products and with the help of innovative process designs - density. magnetic separation. selective grinding & flotation
                                        - we achieve the global targets of the circular resource economy.
                            </p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                    <h4 className="title"><a href="">Spare Parts </a></h4>
                                    <div className="icon">
                                        <img src={solution3} className="icoImage" />
                                    </div>
                                    <p className="description">
                                        Our deep understanding of equipment engineering and processing enables us to adapt our proprietary equipment to service new industries. Our deep understanding of equipment engineering and processing enables us to adapt our proprietary equipment to service
                                        new industries.
                            </p>
                                </div>
                            </div>



                        </div>

                    </div>
                </section>
    </>
)}


export default LifeCycle
