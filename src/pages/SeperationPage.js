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
    
    console.log("*******Separation*******");
    console.log(allPrismicSeperation)
    let description = allPrismicSeperation.edges[0].node.data.description[0].text
    let header_image = allPrismicSeperation.edges[0].node.data.header_image.url   
    let icon = allPrismicSeperation.edges[0].node.data.icon.url
    let title = allPrismicSeperation.edges[0].node.data.title[0].text
    let separation_products = allPrismicSeperation.edges[0].node.data.separation_products
    let separation_products_title = allPrismicSeperation.edges[0].node.data.separation_products_title[0].text
    
        return <Layout>


            <div className="background" style={{ background: `url(${header_image})`, backgroundSize:"cover",height:"60vh" }}></div>

            <section className="container">
                <h1 style={{color:"#962C17" , fontSize: '40px'}}><strong>{title}</strong></h1>
                <div className="d-flex mt-5">
                    <div className="imgContainer mr-5" style={{width:"200px"}}>

                    <img src={icon}/>
                    </div>
                    <div className="pl-5 ml5 d-flex align-content-center" style={{borderLeft:"2px solid #962C17"}}>

                       <p style={{fontSize: '25px'}}><strong>{description}</strong></p>
                    </div>
                </div>
            </section>


            <section className="container" >

            <h1 className="ml-1" style={{fontSize:'40px' , color: "#962C17"}}><strong>{separation_products_title}</strong></h1>
                {
                    separation_products.map( product => ( 
                        <div className="row" style={{marginTop: '30px'}}>              
                            {/* <h1 className="ml-1" style={{fontSize:'40px'}}><strong>{product.product_title[0].text}</strong></h1> */}
                            <div className="d-inline-flex mt-5 row justify-content-around" >
                                <div className="imgContainer mr-5 col-5">
                                    <img  src={product.side_image.url} style ={{ width: '100%'}}/>
                                </div>
                                <div className="pl-5 ml5 col-6">
                                    <h2 style={{fontSize:'30px'}}><strong>{product.separation_product_title[0].text}</strong></h2>
                                    <p style={{fontSize:'14px' , minHeight:'200px'}}><strong>{product.seperation_product_description[0].text}</strong></p>
                                    <div className="d-flex justify-content-between" style={{width:'100%'}}>
                                        <a style={{color: "#962C17" , fontSize:'17px'}}  href= {product.download_brochure_link.url}  ><strong>Download Brochure</strong></a>
                                        <a style={{color: "#962C17", fontSize:'17px'}}  href= {product.request_info_link.url} ><strong>Request Information</strong></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </section>




        </Layout>
    }
    