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

    console.log("******Products*******")
    console.log(products);

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


            <section className="container">

        {
            products.map( product => ( 
                <div className="row">              
                    <h1 className="ml-1" style={{fontSize:'40px'}}><strong>{product.product_title[0].text}</strong></h1>
                    <div className="d-inline-flex mt-5 row justify-content-around">
                        <div className="imgContainer mr-5 col-5">
                            <img  src={product.product_image.url} style ={ width: '100%'}/>
                        </div>
                        <div className="pl-5 ml5 col-6">
                            <h2 style={{fontSize:'30px'}}><strong>{product.product_title[0].text}</strong></h2>
                            <p style={{fontSize:'14px' , minHeight:'300px'}}><strong>{product.product_description[0].text}</strong></p>
                            <div className="d-flex justify-content-between" style={{width:'100%'}}>
                                <a style={{color:'#0BA5ED', fontSize:'17px'}}  href= {product.download_brochure_link.url}  ><strong>Download brochure</strong></a>
                                <a style={{color:'#0BA5ED', fontSize:'17px'}}  href= {product.request_info_link.url} ><strong>Request information</strong></a>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }


            </section>

        </Layout>
    )
}
