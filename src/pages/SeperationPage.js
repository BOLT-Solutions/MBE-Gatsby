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
    

        let description =
            allPrismicSeperation.edges[0].node.data.description.text
        let header_image =
            allPrismicSeperation.edges[0].node.data.header_image.text   
        let icon = allPrismicSeperation.edges[0].node.data.icon.url
        let title = allPrismicSeperation.edges[0].node.data.title.text
        let separation_products = allPrismicSeperation.edges[0].node.data.separation_products
    
        return <Layout></Layout>
    }
    