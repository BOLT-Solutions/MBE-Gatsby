import * as React from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"
import industies4 from '../assets/img/Icons/industies4.png';
import industies5 from '../assets/img/Icons/industies5.png';
import industies6 from '../assets/img/Icons/industies6.png';
import AdobeStockPreview from '../assets/img/AdobeStock_219100685_Preview.jpeg';

export default function Industries() {
const {allPrismicIndustries} = useStaticQuery(graphql`
query Industries {
    allPrismicIndustries {
      edges {
        node {
          data {
            banner_image {
              url
            }
            description {
              text
            }
            industries {
              first_paragph {
                text
              }
              industry_icon {
                url
              }
              industry_title {
                text
              }
              request_info_link {
                url
              }
              second_paragraph {
                text
              }
              see_more_link {
                url
              }
            }
            subtitle {
              text
            }
            title {
              text
            }
          }
        }
      }
    }
  }
  
 `)
let data =allPrismicIndustries.edges[0].node.data
let banner_image =allPrismicIndustries.edges[0].node.data.banner_image.url
let description =allPrismicIndustries.edges[0].node.data.description.text
// let section_two_title =allPrismicIndustries.edges[0].node.data.section_two_title.text
// let subtitle =allPrismicIndustries.edges[0].node.data.subtitle.text    
// let title =allPrismicIndustries.edges[0].node.data.title.text    
// let content_solution1 =allPrismicIndustries.edges[0].node.data.solutions[0]   
// let content_solution2 =allPrismicIndustries.edges[0].node.data.solutions[1]   
// let content_solution3 =allPrismicIndustries.edges[0].node.data.solutions[2]   
// let content_solution4 =allPrismicIndustries.edges[0].node.data.solutions[3]   
console.log(data );
console.log("data");
    return (

    < >
             <section id="industries" className="d-flex align-items-center hero2" style={{ background: `url(${AdobeStockPreview})` }}>
                    <div className="container" data-aos="zoom-out" data-aos-delay="100">
                        <h1> <span>Industries</span>
                        </h1>
                        <h2>We design machines for spices and for minerals</h2>
                        <p>We understand the challenges and opportunities accross the industries. We work with you to ensure you continue to derive a high-quality product and if you are looking to diversify we can help. </p>
                    </div>
                </section>

                <section id="featured-services" className="featured-services">
                    <div className="container" data-aos="fade-up">

                        <div className="row">
                            <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                    <h4 className="title"><a href="">Minerals </a></h4>
                                    <div className="icon">
                                        <img src={industies4} className="icoImage" />
                                    </div>
                                    <p className="description">
                                        <span>
                                            We extract primary raw material of geological origin from mine deposits in complex
                                            inorganic (ore) to
                                            organic (coal) forms to make it usable for different kinds of industrial products
                                            and applications.
                                </span> Minerals are vastly complex containing usable and non-usable components within the structure. We design solutions and machines to optimally extract the valuable fraction for further
                                industrial use.
                            </p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                    <h4 className="title"><a href="">Waste Recycling </a></h4>
                                    <div className="icon">
                                        <img src={industies6} className="icoImage" />
                                    </div>
                                    <p className="description">
                                        <span>
                                            We extract concentrates and sellable product streams from waste streams (used cars,
                                            household,
                                            electrical, industrial slags) to be reused for manufacturing and industrial
                                            processes.
                                         </span> Sustainable design is part of our DNA. Our solutions maximize the recovery of valuable concentrates and sellable product streams secondary raw materials from waste products and with
                                             the help of innovative
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                    <h4 className="title"><a href="">Chemicals, Food and Spices </a></h4>
                                    <div className="icon">
                                        <img src={industies5} className="icoImage" />
                                    </div>
                                    <p className="description">
                                        <span>
                                            In addition to traditional minerals processing, we provide solutions for industrial
                                            and consumer goods - chemicals, food and spices. We support our clients every step
                                            of the way as they
                                            evolve and diversify their processing portfolio.
                                        </span> Our deep understanding of equipment engineering and processing enables us to adapt our proprietary equipment to service new industries.
                                     </p>
                                </div>
                            </div>


                        </div>

                    </div>
                </section>

    </>
)}



