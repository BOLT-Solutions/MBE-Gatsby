import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from '../assets/img/logo (2).png';

const About = ({ siteTitle }) => {
    return (

    <>
                  <section id="graph" className="graph">
                    <div className="container" data-aos="zoom-out" data-aos-delay="100">
                        <div className="row">
                            <div className="col-md-6 left-txt" data-aos="zoom-out">
                                <img src={logo} className="logo-graph" />
                                <p>
                                    We have 40+ years of industry experience. We are your minerals processing partner for the long-term. We help you succeed in your curreni business or transition to a new one.
                        </p>
                            </div>
                            <div className="col-md-6 right-txt" data-aos="zoom-out">
                                <div className="top-right-txt">
                                    We have 40+ years of industry experience. We are your minerals processing partner for the long-term. We help you succeed in your curreni business or transition to a new one.
                        </div>
                                <div className="bottom-right-txt" data-aos="zoom-out">
                                    We have 40+ years of industry experience. We are your minerals processing partner for the long-term. We help you succeed in your curreni business or transition to a new one.
                        </div>
                            </div>
                        </div>
                    </div>
                </section>
    </>
)}


export default About
