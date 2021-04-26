import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import solution1 from '../assets/img/Icons/solution1.png';
import solution2 from '../assets/img/Icons/solution2.png';
import solution3 from '../assets/img/Icons/solution3.png';
import services from '../assets/img/services.jpeg';

const Services = ({ siteTitle }) => {
    return (

        < >
      <section id="services" className="d-flex align-items-center hero2" style={{ background: `url(${services})` }}>
                    <div className="container" data-aos="zoom-out" data-aos-delay="100">
                        <h1><span>Services</span>
                        </h1>
                        <h2>We dn't just sell machines</h2>
                        <p>
                            We work with you from initial design concept to installation to spare part
                </p>
                    </div>
                </section>

                <section id="featured-services" className="featured-services">
                    <div className="container" data-aos="fade-up">

                        <div className="row">
                            <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                    <h4 className="title"><a href="">Process Design </a></h4>
                                    <div className="icon">
                                        <img src={solution1} className="icoImage" />
                                    </div>
                                    <p className="description">
                                        <span>
                                            We are with you every step of the way - starting with project conception and
                                            pre-sales advice. Our
                                            diverse team of globally experienced mining, process, mechanical engineers and
                                            mineralogists are on
                                            hand to provide you expert project consultancy. Our goal is to optimise your
                                            processes.
                                         </span>
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                    <h4 className="title"><a href="">Research and Development </a></h4>
                                    <div className="icon">
                                        <img src={solution2} className="icoImage" />
                                    </div>
                                    <p className="description">
                                        <span>
                                            We enable you to be confident In your process design We operate an industry leading
                                            world class
                                            Research & Development Centre and Laboratory facility. Our R&D engineers work
                                            alongside our process
                                            engineers to ensure the efficacy and efficiency of our designs and equipment. We
                                            simulate the complete
                                            industrial beneficiation process on a lab scale.
                                </span>

                                    </p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                    <h4 className="title"><a href="">Technical Services </a></h4>
                                    <div className="icon">
                                        <img src={solution3} className="icoImage" />
                                    </div>
                                    <p className="description">
                                        <span>
                                            We provide a safe pair of hands. We often say the hard work begins once a customer
                                            decides to purchase
                                            a machine - that's when our technical experts are on hand. Each customer will have a
                                            single contact
                                            who fully understands their challenges and ensures the solution design meets their
                                            requirements.
                                </span>
                                    </p>
                                </div>
                            </div>


                        </div>

                    </div>
                </section>
        </>
)}


export default Services
