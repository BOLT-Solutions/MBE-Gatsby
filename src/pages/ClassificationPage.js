import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./style.css"

export default function ClassificationPage() {
    const { allPrismicClassification } = useStaticQuery(graphql`
        query ClassificationPage {
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
        allPrismicClassification.edges[0].node.data
            .classification_products_title.text
    let description =
        allPrismicClassification.edges[0].node.data.description.text
    let icon = allPrismicClassification.edges[0].node.data.icon.url
    let title = allPrismicClassification.edges[0].node.data.title.text
    let classification_products =
        allPrismicClassification.edges[0].node.data.classification_products

    return (
        <Layout>
            <div
                className="background"
                style={{
                    background: `url(${banner_image})`,
                    backgroundSize: "cover",
                    height: "60vh",
                }}
            ></div>
            <section className="container">
                <h1 style={{ color: "#FC9200" }}>
                    <strong>{title}</strong>
                </h1>
                <div className="d-flex mt-5">
                    <div
                        className="imgContainer mr-5"
                        style={{ width: "200px" }}
                    >
                        <img src={icon} />
                    </div>
                    <div
                        className="pl-5 ml5 d-flex align-content-center"
                        style={{ borderLeft: "2px solid #FC9200" }}
                    >
                        <p>
                            <strong>{description}</strong>
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
