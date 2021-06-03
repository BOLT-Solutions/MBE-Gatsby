import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"
import logo from "../assets/img/logo (2).png"
import slide1 from "../assets/img/slide/slide-1.jpg"
import slide2 from "../assets/img/slide/slide-2.jpg"
import slide3 from "../assets/img/slide/slide-3.jpg"
import "./layout.css"
import mbeText16 from "../assets/img/MBE-text-16.png"
import { Helmet } from "react-helmet"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"
import { linkedin } from "@fortawesome/free-solid-svg-icons"

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

  console.log(image_carousel)

  let slideIndex = 1

  const plusDivs = n => {
    console.log(n, slideIndex)
    showDivs((slideIndex += n))
  }
  const currentDiv = n => {
    console.log(n)

    showDivs((slideIndex = n))
  }
  const showDivs = n => {
    var i
    var x = document.getElementsByClassName("mySlides")
    var dots = document.getElementsByClassName("demo")
    if (n > x.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-grey", "")
    }
    console.log("test", x[slideIndex - 1])
    if (x[slideIndex - 1] !== undefined) {
      x[slideIndex - 1].style.display = "block"
      dots[slideIndex - 1].className += " w3-grey"
    }
  }
  useEffect(() => {
    showDivs(slideIndex)
  })
  return (
    <>
      <Helmet>
        {meta_tags.map(meta_tag => (
          <meta
            name={meta_tag.meta_name[0].text}
            content={meta_tag.meta_content[0].text}
          ></meta>
        ))}

        <title>{page_title}</title>
      </Helmet>
<div id="homeBanner">


      <section id="hero" className="hero ">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-lg-5">
              <div className="main_logo">
                <img src={logo} style={{ width: "75%", marginLeft: "15%" }} />
              </div>
            </div>
            <div className="col-md-7 col-lg-7">
              <div className="slider">
                <div className="w3-content w3-display-container">
                  {image_carousel.map(image => (
                    <img
                      className="mySlides"
                      src={image.banner_image.url}
                      style={{ width: "100%" }}
                    />
                  ))}
                  {/* <img className="mySlides" src={slide2} style={{ width: '100%' }} />
                                          <img className="mySlides" src={slide3} style={{ width: '100%' }} /> */}
                  <div
                    className="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle"
                    style={{ width: "100%" }}
                  >
                    {/* <div className="w3-left w3-hover-text-khaki" onClick={() => { plusDivs(-1) }}>&#10094;</div>
                                              <div className="w3-right w3-hover-text-khaki" onClick={() => { plusDivs(1) }}>&#10095;</div> */}
                    {image_carousel.map((image, index) => (
                      // <img className="mySlides" src={image.banner_image.url} style={{ width: '100%' }} />
                      <span
                        className="w3-badge demo w3-border w3-transparent p-0 mx-1"
                        onClick={() => {
                          let n = index + 1
                          currentDiv(n)
                        }}
                      ></span>
                    ))}
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
              <a className="link mr-3" href="#">
                <img style={{width:'25px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABVklEQVRIS+2WsS5EQRiFv/MAgkKjolXRk/AEaCUSGwUlnQ5PIDodEomSFxBCL1TafQSS7Y/MZm3u/XfXLpmbldhpbu6dufPdOf+ZOVcMqWlIXP4W2PYWMAXcSXquQpWOFdt+AhYLsE1JV7nhJbDtHeAsQN4kzVUNPgSOAqQhaaxq8BLwGCDXkjYqBafJbe8CB8A0cANsS2pUDs4N6DVf1n1sex4Yb8FeJb0PBLa9DNyHwceSmoazna7JgO0mSbbXgBNgJrx7C+xLqscPiNvpx2CgBpx/U6IEXYirzwFOck708cappL2SUsWb30gdgB+FGhe76pJmqwDXJF20fNCtXKlrsih3DqkvJaVQaTfbyVSrQY0VSQ9fz3KA1yUlUBHc4X4gO7g0Ya9tNwLnqPFI6q5n+shc0VzpsE+ZGs/ZZqzZTrEXo+8lJs8g47L+CPRJqFL3/wN/AkiwCS5DL29KAAAAAElFTkSuQmCC" />
              </a>
              <a  className="link" href="#">
              <img style={{width:'25px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAB3UlEQVRIS+1V0VECUQzcrUCsQO3ADsQKtAOlArEDrECoQK1ArUDpQDqQDrSCOHuTe/PuvTt4gKcfmhmGmSPcJrubhPil4C/h4h+4F+bN7BjAGYAZyQ+B9Ea1mQ0AXAAYAzj0jq5JTnsBNrNzB9R3Gt8LbGbq6AqAwOru2mQ7Jfm6U8dOpXS7BDBMUD4BTADcxs9JBmk31tiNUncnHdOYAZCOjwBkqjrmJEOBRcAdRkkBF24kufYuAVWuHC2jVbES2I1S09k1aqJ1SnLibLwAaGNiRPK+E9iNojGQdquMonfMlUfy3cxEo+htA1XukfIyYKdTf0yN0tapuhzXHZiZihS9nayQbBQUqHZaBbwuHhy02kAFoBUzsbEyjb1rzaI+6nwvqmLptFZz6KDSTLKsixt5IE4qMZeKkDYyUNXlhqBKD4sj03hdyRGgtJKebSux6zX7cdEZ1SXgZvbkl6YkXTlLktl0FC2QGMHMpPFJKSqAZ5IZOz8BHC5SsbnaujIzi56PfGE0jkHyv8xY22osYC2QIck3d7iOgbQ/SIuNL9KuHWukAmjids21dnsdC5LxhQo/bKPxIB2NxHy6QFoWWj6Ni7RTxyVu9kOj/d1YOr0DlxS3MdUlLy3J+XvAX204px8c9gpDAAAAAElFTkSuQmCC"/>                  </a>
            </div>
          </div>
        </div>
      </section>
  
  </div>
    </>
  )
}
