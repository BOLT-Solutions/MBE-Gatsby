import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import products13 from '../assets/img/Icons/products-13.png';
import products14 from '../assets/img/Icons/products-14.png';
import products15 from '../assets/img/Icons/products-15.png';
import AdobeStockPreview2 from '../assets/img/AdobeStock_383254182_Preview.jpeg';

const Products = ({ siteTitle }) => {
    return (

    <>
       <section id="products" className="products section-bg">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h3><span>Our Products</span> are the orignal equipment designers </h3>
                            <p>Sustainable production is part of our DNA. From the initial concept design, we ensure our products are built to last, deliver maximum efficiencies, and solve your business challenges. We support our customers through all stages of
                        minerals processing. </p>
                        </div>

                        <div className="row">
                            <div className="col-lg-6" data-aos="zoom-out" data-aos-delay="100">
                                <img src={AdobeStockPreview2} className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">

                                <ul>
                                    <a href="#crushing" className="itm-link">
                                        <li>
                                            <img src={products13} className="icoImage" />
                                            <div>
                                                <h5>CRUSHING, GRINDING AND MILLING </h5>
                                                <p>Our proprietary equipment is used to break the valuable mineral grains free of gangue minerals. Our solutions engineers help to select the best processes to extract the highest quantity and quality of valuable minerals.
                                        </p>
                                            </div>
                                        </li>
                                    </a>
                                    <a href="#classification" className="itm-link">
                                        <li>
                                            <img src={products14} className="icoImage" />
                                            <div>
                                                <h5>CLASSIFICATION - JIGS/SCREENS </h5>
                                                <p>Our linear and circular vibrating screens are used to sort materials into required sizes. The high-quality and accuracy of our machines allow for quick and efficient processing. </p>
                                            </div>
                                        </li>
                                    </a>
                                    <a href="#segregation" className="itm-link">
                                        <li>
                                            <img src={products15} className="icoImage" />
                                            <div>
                                                <h5>SEGREGATION AND SEPARATION </h5>
                                                <p>Our range of products provides materials sorting using wet and dry separation using both magnetic or pneumatic techniques. We ensure you get the best out of your materials to positively impact business </p>
                                            </div>
                                        </li>
                                    </a>
                                </ul>

                            </div>
                        </div>

                    </div>
                </section>
    </>
)}


export default Products
