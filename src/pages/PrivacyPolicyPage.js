import * as React from "react"
import Layout from "../components/layout"
import Footer from "../components/Footer"
import { graphql, Link, useStaticQuery } from "gatsby"
import "./style.css"
import $ from "jquery"
import { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
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
  
export default function PrivacyPolicyPage () {
    
    useEffect(() => {
    
        if (typeof window !== undefined) {

          window.addEventListener("load", onInit)
        }
      })

      const { allPrismicCrushingandgrinding } = useStaticQuery(graphql`
      query PrivacyPolicyQuery {
        allPrismicCrushingandgrinding {
          edges {
            node {
              data {
                banner_image {
                  url
                }
                crurshing_products_title {
                  text
                }
                description {
                  text
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



    return (
        <Layout>
           
           <section className="container" style={{marginTop:"60px"}}>
                <h1>Privacy Policy</h1>
                <p>§ 1 Information on the collection of personal data</p>
                <p>(1) In the following we inform about the collection of personal data when using our website. Personal data are all data by which a person is identified or can be identified. These data include, for example, the name of a person but also data from which a person can be identified (e.g. e-mail address, bank account details or similar).</p>
                <p>(2) The person responsible for the processing of personal data on this website according to Art. 4 para. 7 EU Data Protection Regulation (DSGVO) is</p>
                <ul>
                  <li>MBE Coal & Minerals Technology Holding GmbH</li>
                  <li>Gottfried Hagen Str. 20</li>
                  <li>D-51105 Cologne</li>
                  <li>eMail: info@www.mbe-cmt.com</li>
                </ul>
                <p>You can contact our data protection officer Friederike Scholz, attorney at law, Hohenstaufenring 58, 50674 Cologne, Germany, at scholz@ra-scholz.eu or our postal address with the addition “the data protection officer”.</p>
                <p>(3) When you contact us by e-mail, the data you provide us with (your e-mail address, your name, address and telephone number, if applicable) will be stored by us in order to answer your enquiries and to send you any information material you may have requested. The data is stored in accordance with Art. 6 Para. 1 No. b DSGVO and is used for contractual or pre-contractual contact. We delete the data arising in this connection within three months, insofar as no contractual relationship should come about. After a contractual relationship has been established, data will be deleted after the end of the contractual relationship, insofar as there are no legal storage obligations, e.g. § 147 AO, to prevent the deletion.</p>
                <p>§ 2 Your rights</p>
                <p>(1) You have the following rights in relation to the personal data concerning you:</p>
                <ul >
                  <li>Right to information Art. 15 DSGVO</li>
                  <li>Right of correction or deletion Art. 16 DSGVO Art. 17 DSGVO</li>
                  <li>Right to restrict processing Art. 18 DSGVO</li>
                  <li>Right to object to processing Art. 21 DSGVO</li>
                  <li>Right to data transferability Art. 20 DSGVO</li>
                </ul>
                <p>(2) You also have the right to complain to a data protection supervisory authority about the processing of your personal data by us. For example, the state commissioner for data protection and information security https://www.ldi.nrw.de would be a suitable authority for a complaint.</p>
                <p>§ 3 Collection of personal data when visiting our website</p>
                <p>(1) When using the website for informational purposes only, i.e. if you do not register or otherwise provide us with information, we only collect the personal data that your browser sends to our server. If you wish to view our website, we collect the following data, which is technically necessary for us to display our website and to ensure its stability and security The legal basis for this is a balancing of interests in accordance with Art. 6 Para. 1 S. 1 lit. f DSGVO):</p>
                <ul>
                  <li>IP address</li>
                  <li>Date and time of the request</li>
                  <li>Time zone difference to Greenwich Mean Time (GMT)</li>
                  <li>Content of the request (concrete page)</li>
                  <li>Access status/HTTP status code</li>
                  <li>Amount of data transferred in each case</li>
                  <li>Website from which the request comes</li>
                  <li>Browser</li>
                  <li>Operating system and its interface</li>
                  <li>Language and version of the browser software.</li>
                </ul>
                <p>§ 3 Objection or revocation against the processing of your data</p>
                <p>(1) If you have given your consent to the processing of your data (legal basis Art. 6 para. 1 lit. a DSGVO), you may revoke this consent at any time. Such revocation shall take effect for future processing after the revocation has been declared.</p>
                <p>(2) Insofar as we base the processing of your personal data on the legal basis of Art. 6 para. 1 lit. f DSGVO (weighing of interests), you may object to the processing. This is the case if the processing is in particular not necessary for the fulfilment of a contract with you. In the event of such an objection, we would ask you to explain the reasons why we should not process your personal data as we have done. In the event of your justified objection, we will examine the facts of the case and will either stop or adapt the data processing or show you our compelling reasons worthy of protection on the basis of which we will continue the processing.</p>
            </section>
         
           



        <Footer />
        </Layout>
    )
}
