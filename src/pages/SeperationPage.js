import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

    export default function SeperationPage() {
        const { allPrismicSeperation } = useStaticQuery(graphql`
            query SeperationPage {
                allPrismicSeperation {
                    edges {
                      node {
                        data {
                          description {
                            text
                          }
                          header_image {
                            url
                          }
                          icon {
                            url
                          }
                          separation_products {
                            download_brochure_link {
                              url
                            }
                            request_info_link {
                              url
                            }
                            separation_product_title {
                              text
                            }
                            seperation_product_description {
                              text
                            }
                            side_image {
                              url
                            }
                          }
                          separation_products_title {
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
    
console.log(allPrismicSeperation)
        let description =
            allPrismicSeperation.edges[0].node.data.description[0].text
        let header_image =
            allPrismicSeperation.edges[0].node.data.header_image.url   
        let icon = allPrismicSeperation.edges[0].node.data.icon.url
        let title = allPrismicSeperation.edges[0].node.data.title[0].text
        let separation_products = allPrismicSeperation.edges[0].node.data.separation_products
    
        return <Layout>
            <div className="background" style={{ background: `url(${header_image})`, backgroundSize:"cover",height:"60vh" }}></div>
            <section className="container">
                <h1 style={{color:"#962C17"}}><strong>{title}</strong></h1>
                <div className="d-flex mt-5">
                    <div className="imgContainer mr-5" style={{width:"200px"}}>

                    <img src={icon}/>
                    </div>
                    <div className="pl-5 ml5 d-flex align-content-center" style={{borderLeft:"2px solid #962C17"}}>

                       <p><strong>{description}</strong></p>
                    </div>
                </div>
            </section>
        </Layout>
    }
    