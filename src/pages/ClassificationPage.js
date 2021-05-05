import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./style.css"

export default function ClassificationPage() {
    const { allPrismicClassification } = useStaticQuery(graphql`
        query ProductsQuery {
            allPrismicClassification {
                edges {
                  node {
                    data {
                      banner_image {
                        url
                      }
                      classification_products {
                        classfication_product_description {
                          text
                        }
                        classification_product_title {
                          text
                        }
                        download_brochure_link {
                          url
                        }
                        request_information_link {
                          url
                        }
                        side_image {
                          url
                        }
                      }
                      classification_products_title {
                        text
                      }
                      description {
                        text
                      }
                      icon {
                        url
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

    let banner_image =
        allPrismicClassification.edges[0].node.data.banner_image.url
    let classification_products_title =
        allPrismicClassification.edges[0].node.data.classification_products_title.text
    let description =
        allPrismicClassification.edges[0].node.data.description.text
    let icon = allPrismicClassification.edges[0].node.data.icon.url
    let title = allPrismicClassification.edges[0].node.data.title.text
    let classification_products = allPrismicClassification.edges[0].node.data.classification_products

    return <Layout>

    </Layout>
}
