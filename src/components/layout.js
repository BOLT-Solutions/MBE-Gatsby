/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import { Helmet } from "react-helmet"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import $ from "jquery"

const onInit = () => {
  console.log("init")
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


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })

    if (typeof window !== undefined) {

      // window.addEventListener("load", onInit)
    }
  })
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
        />

        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"
        />
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"/>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossorigin="anonymous"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
          crossorigin="anonymous"
        />

        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"
        />

        <script
          key="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossOrigin="anonymous"
          defer
        />

        <script
          key="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossOrigin="anonymous"
          defer
        />
        <script
          key="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
          src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossOrigin="anonymous"
          defer
        />
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
        <script src="/bower_components/jquery/dist/jquery.js"></script>
        <script src="/node_modules/jquery/dist/jquery.js"></script>
        <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=mbecontent"></script>

      </Helmet>

      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      <main role="main">{children}</main>

      <div id="preloader"></div>
      <a href="#" className="back-to-top">
        <i className="icofont-simple-up"></i>
      </a>
      <footer></footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
