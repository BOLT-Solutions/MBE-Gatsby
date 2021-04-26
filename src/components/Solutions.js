import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import solution1 from '../assets/img/Icons/solution1.png';
import solution2 from '../assets/img/Icons/solution2.png';
import solution3 from '../assets/img/Icons/solution3.png';
const Solutions = ({ siteTitle }) => {
    return (

    <>
         <section id="solutions" className="solutions">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="mainTitle center">
                                We are with you every step of the way
                            </div>
                        </div>
                        <div className="row">
                            <div className="title ">
                                Our solutions
                             </div>
                        </div>
                        <div className="row">
                            <div className=" colm col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                                <h4>Your trusted guide for minerals processing</h4>
                                <p>We draw upon 40 years of proven design and engineering experince. We analyze and understand processing challanges and design a customized and specicific solutions to meet business needs. </p>
                                <br />
                                <h4>We are customer first </h4>
                                <p>We work with you every step of the way to ensure your processing requirments are met in the most productive, efficient and sustainable way.</p>
                            </div>
                            <div className=" colm col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                                <a href="#industries" className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                    <h3 className="box-title">Industries
                                         <div className="icon">
                                            <img src={solution1} />
                                        </div>
                                    </h3>
                                    <p className="description">We have 40+ years of industry experince. we are minerals processing partner for the long term. We help you succeed in your current businessor transtitionto a new one.</p>
                                </a>
                                <a href="#services" className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                    <h3 className="box-title">Services
                                        <div className="icon">
                                            <img src={solution2} />
                                        </div>
                                    </h3>
                                    <p className="description">We provide a full suite of services. From process analysis to in-house testing in our R&D lab - we deliver a solution that works.</p>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">

                                <a href="#lifecycle" className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                    <h3 className="box-title">
                                        Lifecycle support
                                         <div className="icon">
                                            <img src={solution3} />
                                        </div>
                                    </h3>
                                    <p className="description"> We are process experts our highly skilled and experinced engineers know how to design solutions to deliver the best results for you. We offer life-cycle support From analysis, design, installationand beyond. We are with evert step of the way to deliver
                                        the best solutions to meet your needs. </p>
                                </a>

                            </div>

                        </div>

                    </div>
                </section>
    </>
)}


export default Solutions
