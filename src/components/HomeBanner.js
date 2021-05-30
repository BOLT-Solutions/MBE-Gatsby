import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"
import logo from '../assets/img/logo (2).png';
import slide1 from '../assets/img/slide/slide-1.jpg';
import slide2 from '../assets/img/slide/slide-2.jpg';
import slide3 from '../assets/img/slide/slide-3.jpg';
import "./layout.css"
import mbeText16 from '../assets/img/MBE-text-16.png';
import { Helmet } from "react-helmet"


export default function HomeBanner() {
    const { allPrismicHomeheader } = useStaticQuery(graphql`
    query HomeBanner {
        allPrismicHomeheader {
            edges {
              node {
                data {
                  image_carousel {
                    banner_image {
                      url
                    }
                    banner_title {
                      text
                    }
                    read_more_link {
                      url
                    }
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
                }
              }
            }
          }
        }
        `)

    let image_carousel = allPrismicHomeheader.edges[0].node.data.image_carousel
    let page_title = allPrismicHomeheader.edges[0].node.data.page_title[0].text
    let meta_tags = allPrismicHomeheader.edges[0].node.data.meta_tags

    console.log(image_carousel);

    let slideIndex = 1

    const plusDivs = (n) => {
        console.log(n, slideIndex)
        showDivs(slideIndex += n);
    };
    const currentDiv = (n) => {
        console.log(n)

        showDivs(slideIndex = n);
    };
    const showDivs = (n) => {

        var i;
        var x = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        if (n > x.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = x.length;
        }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" w3-grey", "");
        }
        console.log("test", x[slideIndex - 1])
        if (x[slideIndex - 1] !== undefined) {

            x[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " w3-grey";
        }
    }
    useEffect(() => {

        showDivs(slideIndex);
    });
    return (

        <>

            <Helmet>
                {
                    meta_tags.map(meta_tag => (
                        <meta name={meta_tag.meta_name[0].text} content={meta_tag.meta_content[0].text}></meta>
                    ))



                }

                <title>{page_title}</title>

            </Helmet>


            <section id="hero" className="hero homeBanner" >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 col-lg-5">
                            <div className="main_logo">
                                <img src={logo} style={{ width: '75%', marginLeft: "15%" }} />
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-7">

                            <div className="slider">
                                <div className="w3-content w3-display-container">
                                    {image_carousel.map(image => (

                                        <img className="mySlides" src={image.banner_image.url} style={{ width: '100%' }} />
                                    ))
                                    }
                                    {/* <img className="mySlides" src={slide2} style={{ width: '100%' }} />
                                          <img className="mySlides" src={slide3} style={{ width: '100%' }} /> */}
                                    <div className="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle" style={{ width: '100%' }}>
                                        {/* <div className="w3-left w3-hover-text-khaki" onClick={() => { plusDivs(-1) }}>&#10094;</div>
                                              <div className="w3-right w3-hover-text-khaki" onClick={() => { plusDivs(1) }}>&#10095;</div> */}
                                        {image_carousel.map((image, index) => (

                                            // <img className="mySlides" src={image.banner_image.url} style={{ width: '100%' }} />
                                            <span className="w3-badge demo w3-border w3-transparent p-0 mx-1" onClick={() => { let n = index + 1; currentDiv(n) }}></span>
                                        ))
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="underHero">
                <div className=" container inner">
                    <div className="row">
                        <div className="col-md stext">
                            <img src={mbeText16} />

                        </div>
                        <div className="col-md social-right">
                            <a className="link" href="#">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a className="link" href="#">
                                <i className="fab fa-telegram"></i>
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}


