import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet"

//Modal Imports .
import HubspotForm from "react-hubspot-form"
import Modal from "react-bootstrap/Modal"
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react"
import "./style.css"
import { withPreview } from "gatsby-source-prismic"
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"

function SeperationPage() {

    //Modal event handlers.
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

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
                      hubspot_form_id {
                        text
                      }
                      icon {
                        url
                      }
                      meta_tags {
                        meta_content {
                          text
                        }
                        meta_name {
                          text
                        }
                      }
                      open_graph_tags {
                        meta_content {
                          text
                        }
                        meta_property {
                          text
                        }
                      }
                      page_title {
                        text
                      }
                      separation_products {
                        download_brochure_link {
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

    let description = allPrismicSeperation.edges[0].node.data.description.text
    let header_image = allPrismicSeperation.edges[0].node.data.header_image.url
    let icon = allPrismicSeperation.edges[0].node.data.icon.url
    let title = allPrismicSeperation.edges[0].node.data.title.text
    let separation_products = allPrismicSeperation.edges[0].node.data.separation_products
    let separation_products_title = allPrismicSeperation.edges[0].node.data.separation_products_title.text
    let page_title = allPrismicSeperation.edges[0].node.data.page_title.text
    let meta_tags = allPrismicSeperation.edges[0].node.data.meta_tags
    let open_graph_tags = allPrismicSeperation.edges[0].node.data.open_graph_tags
    let hubspot_form_id = allPrismicSeperation.edges[0].node.data.hubspot_form_id.text

    return (
        <Layout>
            <Helmet>

                {meta_tags.map(meta_tag => (
                    <meta
                        name={meta_tag.meta_name.text}
                        content={meta_tag.meta_content.text}
                    ></meta>
                ))}

                {open_graph_tags.map(open_graph_tag => (
                    <meta
                        property={open_graph_tag.meta_property.text}
                        content={open_graph_tag.meta_content.text}
                    ></meta>
                ))}

                <title>{page_title}</title>

            </Helmet>

            <div
                className="background"
                style={{
                    background: `url(${header_image})`,
                    backgroundSize: "cover",
                    height: "60vh",
                }}
            ></div>

            <section className="container">
                <div className="imgContainer mr-5 TopIcon">
                    {" "}
                    <img src={icon} />
                </div>

                <h1
                    className="ml-5"
                    className="PageTitle"
                    style={{ color: "#962C17" }}
                >
                    <strong>{title}</strong>
                </h1>

                <div className="d-flex mt-5 ml-5">
                    <div
                        className="imgContainer mr-5 SideIcon"
                        style={{ width: "200px" }}
                    >
                        <img src={icon} />
                    </div>

                    <div
                        className="pl-5 ml5 d-flex align-content-center"
                        style={{ borderLeft: "2px solid #962C17" }}
                    >
                        <p className="PageDescription">
                            <strong>{description}</strong>
                        </p>
                    </div>
                </div>
            </section>

            <section
                className="ProductsSection"
                style={{ backgroundColor: "#EDEDED" }}
            >
                <div className="container">
                    <h1
                        className="ml-3"
                        className="ProductTitle"
                        style={{ color: "#962C17" }}
                    >
                        <strong>{separation_products_title}</strong>
                    </h1>

                    {separation_products.map(product => (
                        <div className="row" style={{ marginTop: "30px" }}>
                            <div className="mt-5 row  ProductSection">
                                <div className=" col-md-5 col-sm-12 ">
                                    <img src={product.side_image.url} />
                                </div>
                                <div className="ml5 col-md-6 col-sm-12">
                                    <h2 style={{ fontSize: "30px" }}>
                                        <strong>
                                            {
                                                product
                                                    .separation_product_title
                                                    .text
                                            }
                                        </strong>
                                    </h2>
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            minHeight: "200px",
                                        }}
                                    >
                                        <strong>
                                            {
                                                product
                                                    .seperation_product_description
                                                    .text
                                            }
                                        </strong>
                                    </p>
                                    <div
                                        className="d-flex justify-content-between"
                                        style={{ width: "100%" }}
                                    >
                                        <a
                                            style={{
                                                color: "#962C17",
                                                fontSize: "17px",
                                            }}
                                            href={
                                                product.download_brochure_link
                                                    .url
                                            }
                                        >
                                            <strong>Download Brochure</strong>
                                        </a>
                                        <a
                                            style={{
                                                color: "#962C17",
                                                fontSize: "17px",
                                            }}
                                            onClick={handleShow}
                                        >
                                            <strong>Request Information</strong>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <HubspotForm
                        portalId="19589739"
                        formId= {hubspot_form_id}
                        onSubmit={() => console.log("Submit!")}
                        onReady={form => console.log("Form ready!")}
                        loading={<div>Loading...</div>}
                    />
                </Modal.Body>
            </Modal>

            <Footer />
        </Layout>
    )
}
export default withPrismicPreview(SeperationPage,
    [
           {
             repositoryName: 'mbecontent.prismic.io',
          },
    ])
