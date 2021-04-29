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
let subtitle =allPrismicIndustries.edges[0].node.data.subtitle.text
let title =allPrismicIndustries.edges[0].node.data.title.text    
let content_industries=allPrismicIndustries.edges[0].node.data.industries


    return (

    < >
             <section id="industries" className="d-flex align-items-center hero2" style={{ background: `url(${banner_image})` }}>
                    <div className="container" data-aos="zoom-out" data-aos-delay="100">
                        <h1> <span>{title}</span>
                        </h1>
                        <h2>{subtitle}</h2>
                        <p>{description} </p>
                    </div>
                </section>

                <section id="featured-services" className="featured-services">
                    <div className="container" data-aos="fade-up">

                        <div className="row">
                        {
                           content_industries.map(content_industry => (
                             <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                  <h4 className="title"><a href="">{content_industry.industry_title.text} </a></h4>
                                  <div className="icon">
                                      <img src={content_industry.industry_icon.url} className="icoImage" />
                                  </div>
                                  <p className="description">
                                      <span>
                                          {content_industry.first_paragph.text}
                                       </span> 
                                       {content_industry.second_paragraph.text}
                                    </p>
                              </div>
                          </div>
                            ))
                        }
                         
                      </div>

                    </div>
                </section>

    </>
)}



