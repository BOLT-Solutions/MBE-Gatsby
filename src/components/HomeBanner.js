import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"
import logo from '../assets/img/logo (2).png';
import slide1 from '../assets/img/slide/slide-1.jpg';
import slide2 from '../assets/img/slide/slide-2.jpg';
import slide3 from '../assets/img/slide/slide-3.jpg';
import "./layout.css"
import mbeText16 from '../assets/img/MBE-text-16.png';


export default function HomeBanner() {
    const {allPrismicHomeheader} = useStaticQuery(graphql`
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
                }
              }
            }
          }
        }
        `)
    let image_carousel =allPrismicHomeheader.edges[0].node.data.image_carousel

    console.log(image_carousel );

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
        <section id="hero" className="hero homeBanner" >
                <div className="container">
                          <div className="row">
                              <div className="col-md-4 col-lg-4">
                                  <div className="main_logo">
                                      <img src={logo} style={{ width: '100%' }} />
                                  </div>
                              </div>
                              <div className="col-md-8 col-lg-8">
  
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
                                              {image_carousel.map((image, index)  => (
                                             
                                        // <img className="mySlides" src={image.banner_image.url} style={{ width: '100%' }} />
                                        <span className="w3-badge demo w3-border w3-transparent p-0 mx-1" onClick={() => { let n=index+1 ; currentDiv(n) }}></span>
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
)}


