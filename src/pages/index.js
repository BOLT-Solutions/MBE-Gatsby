import * as React from "react"
import Layout from "../components/layout"
import HomeBanner from "../components/HomeBanner"
import ContactUs from "../components/ContactUs"
import Solutions from "../components/Solutions"
import Industries from "../components/Industries"
import LifeCycle from "../components/LifeCycle"
import ClientStories from "../components/ClientStories"
import About from "../components/About"
import Products from "../components/Products"
import ProductsBrief from "../components/ProductsBrief"
import Services from "../components/Services"
import Process from "../components/Process"
import Footer from "../components/Footer"
import $ from "jquery"
import { useEffect } from "react"
import { withPreview } from 'gatsby-source-prismic'


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
  

const Index = () => {

    useEffect(() => {

        if (typeof window !== undefined) {

          window.addEventListener("load", onInit)
        }
      })
  return (
      <React.StrictMode>
          
          <Layout>
              <main role="main">
                  <HomeBanner />
                  <Solutions/>
                  <Industries id="industries"/>
                  <Services/>
                  <LifeCycle/>
                  <Process/>
                  <Products/>
                  <ClientStories/>
                  <ProductsBrief/>
                  <ContactUs/>
                  <About/>
                  <Footer/>
              </main>
          </Layout>
    </React.StrictMode>
  )
}


export default Index

