import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import products13 from "../assets/img/Icons/products-13.png"
import products14 from "../assets/img/Icons/products-14.png"
import products15 from "../assets/img/Icons/products-15.png"
import AdobeStockPreview2 from "../assets/img/AdobeStock_383254182_Preview.jpeg"
import { useStaticQuery, graphql } from "gatsby"
import "./Products.css"
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"

 function Products() {
  const { allPrismicProducts } = useStaticQuery(graphql`
    query ProductsQuery {
      allPrismicProducts {
        edges {
          node {
            data {
              description {
                text
              }
              first_product_description {
                text
              }
              first_product_icon {
                url
              }
              first_product_title {
                text
              }
              second_product_description {
                text
              }
              second_product_icon {
                url
              }
              second_product_title {
                text
              }
              side_image {
                url
              }
              third_product_description {
                text
              }
              third_product_icon {
                url
              }
              third_product_title {
                text
              }
              title_part_one {
                text
              }
              title_part_two {
                text
              }
            }
          }
        }
      }
    }
  `)



  let title_part_one = allPrismicProducts.edges[0].node.data.title_part_one.text
  let title_part_two = allPrismicProducts.edges[0].node.data.title_part_two.text
  let description = allPrismicProducts.edges[0].node.data.description.text
  let first_product_title =
    allPrismicProducts.edges[0].node.data.first_product_title.text
  let first_product_description =
    allPrismicProducts.edges[0].node.data.first_product_description.text
  let first_product_icon =
    allPrismicProducts.edges[0].node.data.first_product_icon.url
  let second_product_title =
    allPrismicProducts.edges[0].node.data.second_product_title.text
  let second_product_description =
    allPrismicProducts.edges[0].node.data.second_product_description.text
  let second_product_icon =
    allPrismicProducts.edges[0].node.data.second_product_icon.url
  let third_product_title =
    allPrismicProducts.edges[0].node.data.third_product_title.text
  let third_product_description =
    allPrismicProducts.edges[0].node.data.third_product_description.text
  let third_product_icon =
    allPrismicProducts.edges[0].node.data.third_product_icon.url
  let side_image = allPrismicProducts.edges[0].node.data.side_image.url

  return (
    <div  id="products">
      <section className="products productsPC section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h3 style={{ fontSize: "50px" , color : "#464749" }}>
              <span style={{ fontSize: "50px" , color:"#00A1ED" }}>{title_part_one}</span> {title_part_two}
            </h3>
            <p>{description}</p>
          </div>

          <div className="row">
            <div className="col-lg-6" data-aos="zoom-out" data-aos-delay="100">
              <img src={side_image} className="img-fluid" alt="" />
            </div>
            <div
              className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <ul>
                <a className="itm-link" href="/CrushingPage">
                  <li>
                    <img
                      style={{ width: "75px", height: "75px" }}
                      src={first_product_icon}
                      className="icoImage"
                    />
                    <div>
                      <h5
                        style={{
                          color: "#00A1ED",
                          fontSize: "25px",
                          fontWeight: "bold",
                        }}
                      >
                        {first_product_title}
                      </h5>
                      <p>{first_product_description}</p>
                    </div>
                  </li>
                </a>

                <a href="/ClassificationPage" className="itm-link">
                  <li>
                    <img
                      style={{ width: "75px", height: "75px" }}
                      src={second_product_icon}
                      className="icoImage"
                    />
                    <div>
                      <h5
                        style={{
                          color: "#FC9200",
                          fontSize: "25px",
                          fontWeight: "bold",
                        }}
                      >
                        {second_product_title}
                      </h5>
                      <p>{second_product_description}</p>
                    </div>
                  </li>
                </a>

                <a href="/SeperationPage" className="itm-link">
                  <li>
                    <img
                      style={{ width: "75px", height: "75px" }}
                      src={third_product_icon}
                      className="icoImage"
                    />
                    <div>
                      <h5
                        style={{
                          color: "#962C17",
                          fontSize: "25px",
                          fontWeight: "bold",
                        }}
                      >
                        {third_product_title}
                      </h5>
                      <p>{third_product_description}</p>
                    </div>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </section>


                  
      <section className="products productsMobile" style={{ backgroundColor: "#EDEDED" }}>

        <div className="container" data-aos="fade-up">
          
          <div className="section-title">
            <h4 style={{ fontSize: "30px" ,  color:"#00A1ED", textAlign:"left" }}>
              {title_part_one}
            </h4>
            <h5 style={{ fontSize: "25px" , color : "#464749" , textAlign:"left" }}>
              {title_part_two}
            </h5>
            <p style={{ fontSize: "20px" , color : "#464749" , textAlign:"left" }} > 
              {description}
            </p>
          </div>

          <div className="row">

            <div
              className="col-lg-6  pt-lg-0 content d-flex flex-column justify-content-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <ul>

                <a className="itm-link" href="/CrushingPage">
                  <li className = "d-flex flex-column justify-content-start " >
                    <div className="d-flex flex-nowrap">
                      <img
                        style={{ width: "75px", height: "75px" }}
                        src={first_product_icon}
                        className="icoImage"
                      />
                      <h4
                          style={{
                            color: "#00A1ED",
                            fontWeight: "bold",
                            alignSelf:"flex-end",
                            fontSize: "25px",
                          }}
                        >
                          {first_product_title}
                        </h4>
                    </div>

                    <div>
                      <p style={{paddingLeft: "12px" , textAlign:"justify", textJustify:"inner-word"}} >{first_product_description}</p>
                    </div>
                  </li>
                </a>

                <a href="/ClassificationPage" className="itm-link">
                  <li className = "d-flex flex-column justify-content-start">

                  <div className="d-flex">
                    <img
                      style={{ width: "75px", height: "75px" }}
                      src={second_product_icon}
                      className="icoImage"
                    />

                     <h4
                        style={{
                          color: "#FC9200",
                          fontWeight: "bold",
                          alignSelf:"flex-end",
                          fontSize: "25px"
                        }}
                      >
                        {second_product_title}
                      </h4>

                  </div>

                  <div>
                    
                    <p style={{paddingLeft: "12px" , textAlign:"justify", textJustify:"inner-word"}}>{second_product_description}</p>

                  </div>

                  </li>
                </a>

                <a href="/SeperationPage" className="itm-link">
                  <li className = "d-flex flex-column justify-content-start">

                  <div className="d-flex" >

                    <img
                      style={{ width: "75px", height: "75px" }}
                      src={third_product_icon}
                      className="icoImage"
                    />


                    <h4
                      style={{
                        color: "#962C17",
                        fontWeight: "bold",
                        alignSelf:"flex-end",
                        fontSize: "25px"
                      }}
                    >
                      {third_product_title}
                    </h4>

                  </div>


                    <div>
                   
                      <p style={{paddingLeft: "12px" , textAlign:"justify", textJustify:"inner-word"}}>{third_product_description}</p>
                      
                    </div>


                  </li>
                </a>
                
              </ul>
            </div>
          </div>

        </div>

      </section>



    </div>
  )
}

export default withPrismicPreview(Products)
