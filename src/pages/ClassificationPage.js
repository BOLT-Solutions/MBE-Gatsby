import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./style.css"
import Footer from "../components/Footer"

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
    let classification_products_title = allPrismicClassification.edges[0].node.data.classification_products_title.text
    let description = allPrismicClassification.edges[0].node.data.description.text
    let icon = allPrismicClassification.edges[0].node.data.icon.url
    let title = allPrismicClassification.edges[0].node.data.title.text
    let classification_products = allPrismicClassification.edges[0].node.data.classification_products

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

            <section className="container-fluid">
                <h1 className ="ml-5" style={{ color: "#FC9200"  , fontSize: '40px' }}>
                    <strong>{title}</strong>
                </h1>
                <div className="d-flex mt-5 ml-5">
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
                        <p style={{fontSize: '25px'}} >
                            <strong>{description}</strong>
                        </p>
                    </div>
                </div>
            </section>


            <section className="container-fluid"  style={{backgroundColor:"#EDEDED"}} >

                {
                    classification_products.map( product => ( 
                        <div className="row" style={{marginTop: '30px'}}>              
                            <h1 className="ml-3" style={{fontSize:'40px' , color: "#FC9200"}}><strong>{classification_products_title}</strong></h1>
                            <div className="d-inline-flex mt-5 row justify-content-around" >
                                <div className="imgContainer mr-5 col-5">
                                    <img  src={product.side_image.url} style ={{ width: '100%'}}/>
                                </div>
                                <div className="pl-5 ml5 col-6">
                                    <h2 style={{fontSize:'30px'}}><strong>{product.classification_product_title.text}</strong></h2>
                                    <p style={{fontSize:'14px' , minHeight:'300px'}}><strong>{product.classfication_product_description.text}</strong></p>
                                    <div className="d-flex justify-content-between" style={{width:'100%'}}>
                                        <a style={{color: "#FC9200" , fontSize:'17px'}}  href= {product.download_brochure_link.url}  ><strong>Download Brochure</strong></a>
                                        <a style={{color: "#FC9200", fontSize:'17px'}}  href= {product.request_information_link.url} ><strong>Request Information</strong></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </section>


            

            <Footer/>

        </Layout>
    )
}
