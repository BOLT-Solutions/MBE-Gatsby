import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import wallpaper1 from '../assets/img/mbe-wallpaper-2.png';
import wallpaper2 from '../assets/img/mbe-wallpaper-3.png';

const About = ({ siteTitle }) => {
    return (

    <>
    <section id="about-us" className="about-us-sec">
                    <div className="container about-us">
                        <div className="row">
                            <div className="title center">
                                We are minerals processing EXPERTS
                    </div>
                        </div>
                        <div className="row images">
                            <div className="col-md-6 col-lg-3 ">
                                <img src={wallpaper1} className="responsive" />
                            </div>
                            <div className="col-md-6 col-lg-3 ">
                                <img src={wallpaper2} className="responsive" />
                            </div>
                            <div className="col-md-6 col-lg-3 ">
                                <img src={wallpaper1} className="responsive" />
                            </div>
                            <div className="col-md-6 col-lg-3 ">
                                <img src={wallpaper2} className="responsive" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="title center">
                                We are an experienced management team.
                    </div>
                        </div>
                        <div className="row">

                            <div className="col-sm">
                                <p>
                                    We are commited to the coninued development and evolution of MBE Coal and Minerals Technology Holding GMBH.
                        </p>
                                <br />
                                <p>
                                    We are support our customers in traditional coal and mineral ore processing helping them to transtition to low-waste processing technologies.
                        </p>
                            </div>
                            <div className="col-sm">
                                <p>We also provide solutions to more sustainable & innovative processes such as waste recycling as well cryogenic grinding.</p>
                                <br />
                                <p>
                                    We are future-focused. We constantly evaluate new market trends, such as digitization to ensure we continue to provide market leading solutions for our customers.
                        </p>
                            </div>
                        </div>

                    </div>
                </section>
    </>
)}


export default About
