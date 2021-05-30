import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet"

//Modal Imports . 
import HubspotForm from 'react-hubspot-form'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";


export default function SeperationPage() {


  //Modal event handlers.  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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

  console.log("*******Separation*******");
  console.log(allPrismicSeperation)
  let description = allPrismicSeperation.edges[0].node.data.description[0].text
  let header_image = allPrismicSeperation.edges[0].node.data.header_image.url
  let icon = allPrismicSeperation.edges[0].node.data.icon.url
  let title = allPrismicSeperation.edges[0].node.data.title[0].text
  let separation_products = allPrismicSeperation.edges[0].node.data.separation_products
  let separation_products_title = allPrismicSeperation.edges[0].node.data.separation_products_title[0].text
  let page_title = allPrismicSeperation.edges[0].node.data.page_title.text
  let meta_tags = allPrismicSeperation.edges[0].node.data.meta_tags

  return <Layout>


    <Helmet>
        {
            meta_tags.map(meta_tag => (
                <meta name={meta_tag.meta_name[0].text} content={meta_tag.meta_content[0].text}></meta>
            ))
        }

        <title>{page_title}</title>
    </Helmet>


    <div className="background" style={{ background: `url(${header_image})`, backgroundSize: "cover", height: "60vh" }}></div>

    <section className="container-fluid">
      <h1 className="ml-5" style={{ color: "#962C17", fontSize: '40px' }}><strong>{title}</strong></h1>
      <div className="d-flex mt-5 ml-5">

        <div className="imgContainer mr-5" style={{ width: "200px" }}>
          <img src={icon} />
        </div>

        <div className="pl-5 ml5 d-flex align-content-center" style={{ borderLeft: "2px solid #962C17" }}>

          <p style={{ fontSize: '25px' }}><strong>{description}</strong></p>
        </div>
      </div>
    </section>


    <section className="container-fluid" style={{ backgroundColor: "#EDEDED" }} >


      {
        separation_products.map(product => (
          <div className="row" style={{ marginTop: '30px' }}>
            <h1 className="ml-3" style={{ fontSize: '40px', color: "#962C17" }}><strong>{separation_products_title}</strong></h1>
            <div className="d-inline-flex mt-5 row justify-content-around" >
              <div className="imgContainer mr-5 col-5">
                <img src={product.side_image.url} style={{ width: '100%' }} />
              </div>
              <div className="pl-5 ml5 col-6">
                <h2 style={{ fontSize: '30px' }}><strong>{product.separation_product_title[0].text}</strong></h2>
                <p style={{ fontSize: '14px', minHeight: '300px' }}><strong>{product.seperation_product_description[0].text}</strong></p>
                <div className="d-flex justify-content-between" style={{ width: '100%' }}>
                  <a style={{ color: "#962C17", fontSize: '17px' }} href={product.download_brochure_link.url}  ><strong>Download Brochure</strong></a>
                  <a style={{ color: "#962C17", fontSize: '17px' }} onClick={handleShow} ><strong>Request Information</strong></a>
                </div>
              </div>
            </div>
          </div>
        ))
      }

    </section>

    <Modal show={show} onHide={handleClose}>
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
}
