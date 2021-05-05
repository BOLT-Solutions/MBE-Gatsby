import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function CrushingPage() {
    const { allPrismicCrushingandgrinding } = useStaticQuery(graphql`
        query ProductsQuery {
            allPrismicCrushingandgrinding {
                edges {
                    node {
                        data {
                            banner_image {
                                url
                            }
                            description {
                                text
                            }
                            icon {
                                url
                            }
                            products {
                                download_brochure_link {
                                    url
                                }
                                product_description {
                                    text
                                }
                                product_image {
                                    url
                                }
                                product_title {
                                    text
                                }
                                request_info_link {
                                    url
                                }
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

    console.log("******Products*******")
    console.log(allPrismicCrushingandgrinding)

    let banner_image =
        allPrismicCrushingandgrinding.edges[0].node.data.banner_image.url
    let description =
        allPrismicCrushingandgrinding.edges[0].node.data.description.text
    let icon = allPrismicCrushingandgrinding.edges[0].node.data.icon.url
    let title = allPrismicCrushingandgrinding.edges[0].node.data.title.text
    let products = allPrismicCrushingandgrinding.edges[0].node.data.products

    return <Layout></Layout>
}
