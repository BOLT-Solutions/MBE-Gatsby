
import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./style.css"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet"

//Modal Imports . 
import HubspotForm from 'react-hubspot-form'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";


export default function ClassificationPage() {

    //Modal event handlers.  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                      meta_tags {
                        meta_content {
                          text
                        }
                        meta_name {
                          text
                        }
                      }
                      page_title {
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

    console.log("*******CLassification********")
    console.log(allPrismicClassification.edges[0].node.data)


    let banner_image = allPrismicClassification.edges[0].node.data.banner_image.url
    let classification_products_title = allPrismicClassification.edges[0].node.data.classification_products_title.text
    let description = allPrismicClassification.edges[0].node.data.description.text
    let icon = allPrismicClassification.edges[0].node.data.icon.url
    let title = allPrismicClassification.edges[0].node.data.title.text
    let classification_products = allPrismicClassification.edges[0].node.data.classification_products
    let page_title = allPrismicClassification.edges[0].node.data.page_title.text
    let meta_tags = allPrismicClassification.edges[0].node.data.meta_tags




    return (
        <Layout>


            <Helmet>
                {
                    meta_tags.map(meta_tag => (
                        <meta name={meta_tag.meta_name.text} content={meta_tag.meta_content.text}></meta>
                    ))
                }

                <title>{page_title}</title>
            </Helmet>


            <div
                className="background"
                style={{
                    background: `url(${banner_image})`,
                    backgroundSize: "cover",
                    height: "60vh",
                }}
            ></div>

            <section className="container-fluid">

            <div className="imgContainer mr-5 TopIcon"
>               <img src={icon}/>
            </div>

                <h1 className="ml-5"  className="PageTitle" style={{color: "#FC9200"}} >
                    <strong>{title}</strong>
                </h1>

                <div className="d-flex mt-5 ml-5">

                    <div className="imgContainer mr-5 SideIcon" style={{ width: "200px" }}>
                        <img src={icon} />
                    </div>

                    <div
                        className="pl-4 ml4 d-flex align-content-center"
                        style={{ borderLeft: "2px solid #FC9200" }}
                    >
                        <p className="PageDescription" >
                            <strong>{description}</strong>
                        </p>
                    </div>
                </div>

            </section>


            

            <section className="ProductsSection" style={{ backgroundColor: "#EDEDED" }} >


              <h1 className="ml-3" className ="ProductTitle" style={{ color: "#FC9200" }} ><strong>{classification_products_title}</strong></h1>

                    {
                        classification_products.map(product => (

                            <div className="row " style={{ marginTop: '30px' }}>
                                  <div className="mt-5 row ProductSection"  >

                                      <div className="col-md-5 col-sm-12 ">
                                          <img src={product.side_image.url} />
                                      </div>

                                      <div className="ml5 col-md-6 col-sm-12">
                                          <h2 style={{ fontSize: '30px' }}><strong>{product.classification_product_title.text}</strong></h2>
                                          <p style={{ fontSize: '14px', minHeight: '300px' }}><strong>{product.classfication_product_description.text}</strong></p>
                                          <div className="d-flex justify-content-between" style={{ width: '100%' }}>
                                              <a style={{ color: "#FC9200", fontSize: '17px' }} href={product.download_brochure_link.url}  ><strong>Download Brochure</strong></a>
                                              <a style={{ color: "#FC9200", fontSize: '17px' }} onClick={handleShow}><strong>Request Information</strong></a>
                                          </div>
                                      </div>
                                  </div>      
                              </div>


                        ))
                    }

            </section>


            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <HubspotForm
                        portalId='19589739'
                        formId='04f6756d-7711-4612-9e80-49acb72fe4d2'
                        onSubmit={() => console.log('Submit!')}
                        onReady={(form) => console.log('Form ready!')}
                        loading={<div>Loading...</div>}
                    />
                </Modal.Body>
            </Modal>


            <Footer />

        </Layout>
    )
}
