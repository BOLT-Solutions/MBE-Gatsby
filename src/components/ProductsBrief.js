import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'

import logo from '../assets/img/logo (2).png';

const ProductsBrief = ({ data }) => {

    console.log("***ProductsBreif***");
    console.log(data);

    if (!data) return null
    const document = data.prismicProductsBreif.data

    const productsBreifContent = {
      firstParagraph: document.first_paragrah.raw,
      secondParagraph: document.first_paragrah.raw,
      thirdParagraph: document.first_paragrah.raw,
    }

    return (

    <>
    
                <section id="graph" className="graph">
                    <div className="container" data-aos="zoom-out" data-aos-delay="100">
                        <div className="row">
                            <div className="col-md-6 left-txt" data-aos="zoom-out">
                                <img src={logo} className="logo-graph" />
                                <p>
                                {RichText.asText(productsBreifContent.firstParagraph)}
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
                </section>
    </>
)}



export const query = graphql`
query Amr {
    allPrismicProductsbreif {
      edges {
        node {
          data {
            first_paragraph {
              raw
            }
            second_paragraph {
              raw
            }
            third_paragraph {
              raw
            }
          }
        }
      }
    }
  }  
`


export default ProductsBrief
