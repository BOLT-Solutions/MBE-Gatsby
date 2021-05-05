import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function CrushingPage() {
    const { allPrismicCrushingandgrinding } = useStaticQuery(graphql`
        query CrushingPage {
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
        allPrismicCrushingandgrinding.edges[0].node.data.description[0].text
    let icon = allPrismicCrushingandgrinding.edges[0].node.data.icon.url
    let title = allPrismicCrushingandgrinding.edges[0].node.data.title[0].text
    let products = allPrismicCrushingandgrinding.edges[0].node.data.products

    return (
        <Layout>
            <div className="background" style={{ background: `url(${banner_image})`, backgroundSize:"cover",height:"60vh" }}></div>
            <section className="container">
                <h1><strong>{title}</strong></h1>
                <div className="d-flex mt-5">
                    <div className="imgContainer mr-5">

                    <img src={icon}/>
                    </div>
                    <div className="pl-5 ml5" style={{borderLeft:"2px solid #0BA5ED"}}>

                    <p><strong>{description}</strong></p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
