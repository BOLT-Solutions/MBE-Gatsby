import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/Footer"



//Modal Imports . 
import HubspotForm from 'react-hubspot-form'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

export default function CrushingPage() {

  //Modal event handlers.  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const { allPrismicCrushingandgrinding } = useStaticQuery(graphql`
    query crushingQuery {
        allPrismicCrushingandgrinding {
          edges {
            node {
              data {
                banner_image {
                  url
                }
                crurshing_products_title {
                  text
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

    let banner_image = allPrismicCrushingandgrinding.edges[0].node.data.banner_image.url
    let description = allPrismicCrushingandgrinding.edges[0].node.data.description[0].text
    let icon = allPrismicCrushingandgrinding.edges[0].node.data.icon.url
    let title = allPrismicCrushingandgrinding.edges[0].node.data.title[0].text
    let crurshing_products_title = allPrismicCrushingandgrinding.edges[0].node.data.crurshing_products_title[0].text
    let products = allPrismicCrushingandgrinding.edges[0].node.data.products




    return (
        <Layout>

            <div className="background" style={{ background: `url(${banner_image})`, backgroundSize:"cover",height:"60vh" }}></div>
            <section className="container-fluid">
                <h1  className="ml-5" style={{fontSize: '40px'}}><strong>{title}</strong></h1>
                <div className="d-flex mt-5 ml-5">
                    <div className="imgContainer mr-5">

                    <img src={icon}/>
                    </div>
                    <div className="pl-5 ml5" style={{borderLeft:"2px solid #0BA5ED"}}>

                    <p style={{fontSize: '25px'}}><strong>{description}</strong></p>
                    </div>
                </div>
            </section>


            <section className="container-fluid" style={{backgroundColor:"#EDEDED"}} >

             
        {
            products.map( product => ( 
                <div className="row" style={{marginTop: '30px'}}>   
                <h1 className="ml-3" style={{fontSize:'40px'}}><strong>{crurshing_products_title}</strong></h1>           
                    <div className="d-inline-flex mt-5 row justify-content-around" >
                        <div className="imgContainer mr-5 col-5">
                            <img  src={product.product_image.url} style ={{ width: '100%'}}/>
                        </div>
                        <div className="pl-5 ml5 col-6">
                            <h2 style={{fontSize:'30px'}}><strong>{product.product_title[0].text}</strong></h2>
                            <p style={{fontSize:'14px' , minHeight:'300px'}}><strong>{product.product_description[0].text}</strong></p>
                            <div className="d-flex justify-content-between" style={{width:'100%'}}>
                                <a style={{color:'#0BA5ED', fontSize:'17px'}}  href= {product.download_brochure_link.url}  ><strong>Download Brochure</strong></a>
                                <a style={{color:'#0BA5ED', fontSize:'17px'}}  onClick={handleShow} ><strong>Request Information</strong></a>
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

         <Footer/>

        </Layout>
    )
}
