import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet"
import $ from "jquery"

//Modal Imports .
import HubspotForm from "react-hubspot-form"
import Modal from "react-bootstrap/Modal"
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react"
import "./style.css"
import { withPreview } from "gatsby-source-prismic"
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"
const onInit = () => {

    $(window).on("load", function () {
      if ($("#preloader").length) {
        $("#preloader")
          .delay(100)
          .fadeOut("slow", function () {
            $(this).remove()
          })
      }
    })
  
    // Smooth scroll for the navigation menu and links with .scrollto classes
    var scrolltoOffset = $("#header").outerHeight() - 21
    if (window.matchMedia("(max-width: 991px)").matches) {
      scrolltoOffset += 20
    }
    $(document).on(
      "click",
      ".nav-menu a, .mobile-nav a, .scrollto",
      function (e) {
        if (
          window.location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
          window.location.hostname == this.hostname
        ) {
          var target = $(this.hash)
          if (target.length) {
            e.preventDefault()
  
            var scrollto = target.offset().top - scrolltoOffset
  
            if ($(this).attr("href") == "#header") {
              scrollto = 0
            }
  
            $("html, body").animate(
              {
                scrollTop: scrollto,
              },
              1500,
              "easeInOutExpo"
            )
  
            if ($(this).parents(".nav-menu, .mobile-nav").length) {
              $(".nav-menu .active, .mobile-nav .active").removeClass("active")
              $(this).closest("li").addClass("active")
            }
  
            if ($("body").hasClass("mobile-nav-active")) {
              $("body").removeClass("mobile-nav-active")
              $(".mobile-nav-toggle i").toggleClass(
                "icofont-navigation-menu icofont-close"
              )
              $(".mobile-nav-overly").fadeOut()
            }
            return false
          }
        }
      }
    )
  
    // Activate smooth scroll on page load with hash links in the url
    $(document).ready(function () {
      if (window.location.hash) {
        var initial_nav = window.location.hash
        if ($(initial_nav).length) {
          var scrollto = $(initial_nav).offset().top - scrolltoOffset
          $("html, body").animate(
            {
              scrollTop: scrollto,
            },
            1500,
            "easeInOutExpo"
          )
        }
      }
    })
  
    // Navigation active state on scroll
    var nav_sections = $("section")
    var main_nav = $(".nav-menu, .mobile-nav")
  
    $(window).on("scroll", function () {
      var cur_pos = $(this).scrollTop() + 200
  
      nav_sections.each(function () {
        var top = $(this).offset().top,
          bottom = top + $(this).outerHeight()
  
        if (cur_pos >= top && cur_pos <= bottom) {
          if (cur_pos <= bottom) {
            main_nav.find("li").removeClass("active")
          }
          main_nav
            .find('a[href="#' + $(this).attr("id") + '"]')
            .parent("li")
            .addClass("active")
        }
        if (cur_pos < 300) {
          $(
            ".nav-menu ul:first li:first, .mobile-menu ul:first li:first"
          ).addClass("active")
        }
      })
    })
  
    // Mobile Navigation
    if ($(".nav-menu").length) {
      var $mobile_nav = $(".nav-menu").clone().prop({
        class: "mobile-nav d-lg-none",
      })
      $("body").append($mobile_nav)
      $("body").prepend(
        '<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'
      )
      $("body").append('<div class="mobile-nav-overly"></div>')
  
      $(document).on("click", ".mobile-nav-toggle", function (e) {
        $("body").toggleClass("mobile-nav-active")
        $(".mobile-nav-toggle i").toggleClass(
          "icofont-navigation-menu icofont-close"
        )
        $(".mobile-nav-overly").toggle()
      })
  
      $(document).on("click", ".mobile-nav .drop-down > a", function (e) {
        e.preventDefault()
        $(this).next().slideToggle(300)
        $(this).parent().toggleClass("active")
      })
  
      $(document).click(function (e) {
        var container = $(".mobile-nav, .mobile-nav-toggle")
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ($("body").hasClass("mobile-nav-active")) {
            $("body").removeClass("mobile-nav-active")
            $(".mobile-nav-toggle i").toggleClass(
              "icofont-navigation-menu icofont-close"
            )
            $(".mobile-nav-overly").fadeOut()
          }
        }
      })
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
      $(".mobile-nav, .mobile-nav-toggle").hide()
    }
  
    // Toggle .header-scrolled class to #header when page is scrolled
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $("#header").addClass("header-scrolled")
        $("#topbar").addClass("topbar-scrolled")
      } else {
        $("#header").removeClass("header-scrolled")
        $("#topbar").removeClass("topbar-scrolled")
      }
    })
  
    if (window.scrollTo() > 50) {
      $("#header").addClass("header-scrolled")
      $("#topbar").addClass("topbar-scrolled")
    }
  
    // Back to top button
  
    // Skills section
    // $('.skills-content').waypoint(function() {
    //     $('.progress .progress-bar').each(function() {
    //         $(this).css("width", $(this).attr("aria-valuenow") + '%');
    //     });
    // }, {
    //     offset: '80%'
    // });
  
    // jQuery counterUp
    // $('[data-toggle="counter-up"]').counterUp({
    //     delay: 10,
    //     time: 1000
    // });
  }
  
function SeperationPage() {

    //Modal event handlers.
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    useEffect(() => {
    
        if (typeof window !== undefined) {

          window.addEventListener("load", onInit)
        }
      })
    
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
                      hubspot_form_id {
                        text
                      }
                      icon {
                        url
                      }
                      meta_tags {
                        meta_content {
                          text
                        }
                        meta_name {
                          text
                        }
                      }
                      open_graph_tags {
                        meta_content {
                          text
                        }
                        meta_property {
                          text
                        }
                      }
                      page_title {
                        text
                      }
                      separation_products {
                        download_brochure_link {
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

    let description = allPrismicSeperation.edges[0].node.data.description.text
    let header_image = allPrismicSeperation.edges[0].node.data.header_image.url
    let icon = allPrismicSeperation.edges[0].node.data.icon.url
    let title = allPrismicSeperation.edges[0].node.data.title.text
    let separation_products = allPrismicSeperation.edges[0].node.data.separation_products
    let separation_products_title = allPrismicSeperation.edges[0].node.data.separation_products_title.text
    let page_title = allPrismicSeperation.edges[0].node.data.page_title.text
    let meta_tags = allPrismicSeperation.edges[0].node.data.meta_tags
    let open_graph_tags = allPrismicSeperation.edges[0].node.data.open_graph_tags
    let hubspot_form_id = allPrismicSeperation.edges[0].node.data.hubspot_form_id.text

    return (
        <Layout>
            <Helmet>

                {meta_tags.map(meta_tag => (
                    <meta
                        name={meta_tag.meta_name.text}
                        content={meta_tag.meta_content.text}
                    ></meta>
                ))}

                {open_graph_tags.map(open_graph_tag => (
                    <meta
                        property={open_graph_tag.meta_property.text}
                        content={open_graph_tag.meta_content.text}
                    ></meta>
                ))}

                <title>{page_title}</title>

            </Helmet>

            <div
                className="background"
                style={{
                    background: `url(${header_image})`,
                    backgroundSize: "cover",
                    height: "60vh",
                }}
            ></div>

            <section className="container">
                <div className="imgContainer mr-5 TopIcon">
                    {" "}
                    <img src={icon} />
                </div>

                <h1
                    className="ml-5"
                    className="PageTitle"
                    style={{ color: "#962C17" }}
                >
                    <strong>{title}</strong>
                </h1>

                <div className="d-flex mt-5 ml-5">
                    <div
                        className="imgContainer mr-5 SideIcon"
                        style={{ width: "200px" }}
                    >
                        <img src={icon} />
                    </div>

                    <div
                        className="pl-5 ml5 d-flex align-content-center"
                        style={{ borderLeft: "2px solid #962C17" }}
                    >
                        <p className="PageDescription">
                            <strong>{description}</strong>
                        </p>
                    </div>
                </div>
            </section>

            <section
                className="ProductsSection"
                style={{ backgroundColor: "#EDEDED" }}
            >
                <div className="container">
                    <h1
                        className="ml-3"
                        className="ProductTitle"
                        style={{ color: "#962C17" }}
                    >
                        <strong>{separation_products_title}</strong>
                    </h1>

                    {separation_products.map(product => (
                        <div className="row" style={{ marginTop: "30px" }}>
                            <div className="mt-5 row  ProductSection">
                                <div className=" col-md-5 col-sm-12 ">
                                    <img src={product.side_image.url} />
                                </div>
                                <div className="ml5 col-md-6 col-sm-12">
                                    <h2 style={{ fontSize: "25px" }}>
                                        <strong>
                                            {
                                                product
                                                    .separation_product_title
                                                    .text
                                            }
                                        </strong>
                                    </h2>
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            minHeight: "200px",
                                        }}
                                    >
                                        <strong>
                                            {
                                                product
                                                    .seperation_product_description
                                                    .text
                                            }
                                        </strong>
                                    </p>
                                    <div
                                        className="d-flex justify-content-between"
                                        style={{ width: "100%" }}
                                    >
                                        <a
                                            style={{
                                                color: "#962C17",
                                                fontSize: "17px",
                                            }}
                                            href={
                                                product.download_brochure_link
                                                    .url
                                            }
                                        >
                                            <strong>Download Brochure</strong>
                                        </a>
                                        <a
                                            style={{
                                                color: "#962C17",
                                                fontSize: "17px",
                                            }}
                                            onClick={handleShow}
                                        >
                                            <strong>Request Information</strong>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <HubspotForm
                        portalId="19589739"
                        formId= {hubspot_form_id}
                        onSubmit={() => console.log("Submit!")}
                        onReady={form => console.log("Form ready!")}
                        loading={<div>Loading...</div>}
                    />
                </Modal.Body>
            </Modal>

            <Footer />
        </Layout>
    )
}
export default withPrismicPreview(SeperationPage,
    [
           {
             repositoryName: 'mbecontent.prismic.io',
          },
    ])
