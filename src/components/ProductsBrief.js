import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { RichText } from 'prismic-reactjs'

import logo from '../assets/img/logo (2).png';

const ProductsBrief = () => {

    const prismicData = useStaticQuery(graphql`
    query Amr {
        prismicProductsbreif {
          data {
            first_paragraph {
              text
            }
            second_paragraph {
              text
            }
            third_paragraph {
              text
            }
          }
        }
      } 
    ` )

    const document = prismicData.prismicProductsbreif.data.first_paragrah

  
    
    console.log("********ProductsBreif********")
    console.log(document);

    const productsBreifContent = {
        // firstParagraph: document.first_paragrah.text,
        // secondParagraph: document.first_paragrah.text,
        // thirdParagraph: document.first_paragrah.text,
      }

    return (

    <>
    
                {/* <section id="graph" className="graph">
                    <div className="container" data-aos="zoom-out" data-aos-delay="100">
                        <div className="row">
                            <div className="col-md-6 left-txt" data-aos="zoom-out">
                                <img src={logo} className="logo-graph" />
                                <p>
                                {RichText.asText(document.firstParagraph)}
                        </p>
                            </div>
                            <div className="col-md-6 right-txt" data-aos="zoom-out">
                                <div className="top-right-txt">
                                {RichText.asText(productsBreifContent.secondParagraph)}
                        </div>
                                <div className="bottom-right-txt" data-aos="zoom-out">
                                {RichText.asText(productsBreifContent.thirdParagraph)}
                        </div>
                            </div>
                        </div>
                    </div>
                </section> */}
    </>
)}

export default ProductsBrief
