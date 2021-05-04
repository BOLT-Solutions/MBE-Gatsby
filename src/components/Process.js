import * as React from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"


 export default function Process() {
    const {allPrismicProcess} = useStaticQuery(graphql`
        query Process {
            allPrismicProcess {
                edges {
                  node {
                    data {
                      banner_image {
                        url
                      }
                      description {
                        text
                      }
                      process {
                        description {
                          text
                        }
                        icon {
                          url
                        }
                        request_info_link {
                          url
                        }
                        title {
                          text
                        }
                      }
                      subtitle {
                        text
                      }
                      title {
                        text
                        text
                      }
                    }
                  }
                }
              }
            }
            `)
        let data =allPrismicProcess.edges[0].node.data
        let banner_image =allPrismicProcess.edges[0].node.data.banner_image.url
        let description =allPrismicProcess.edges[0].node.data.description.text
        let subtitle =allPrismicProcess.edges[0].node.data.subtitle.text
        let title =allPrismicProcess.edges[0].node.data.title.text    
        let content_Processes=allPrismicProcess.edges[0].node.data.process
    
        console.log(data );
    
        return (
    
        < >
                <section id="lifecycle" className="d-flex align-items-center hero2" style={{ background: `url(${banner_image})` }} >
                        <div className="container" data-aos="zoom-out" data-aos-delay="100">
                            <h1> {title}
                            </h1>
                            <h2>{subtitle}</h2>
                            <p>
                                {description}
                            </p>
                        </div>
                    </section>
    
                    <section id="featured-services" className="featured-services">
                        <div className="container" data-aos="fade-up">
    
                            <div className="row">
                            {
                               content_Processes.map(process => (
                                 <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                                       <div className="icon-box d-flex flex-column justify-content-between" data-aos="fade-up" data-aos-delay="100">
                                           <div>
                                      <h4 className="title"><a href="">{process.title.text} </a></h4>
                                      <div className="icon">
                                          <img src={process.icon.url} className="icoImage" />
                                      </div>
                                      <p className="description">
                                          <span>
                                              {process.description.text}
                                           </span> 
                                          
                                      </p>
                                               </div>

                                           <p className="request mb-0">Request more Information
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
const mystyle = {
      backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
};