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

  return (
      <>
          <Helmet>
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"/>
              <link rel="stylesheet"
                      href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"/>

                      <link rel="stylesheet"
                          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                          crossorigin="anonymous" />

        
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />

    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>

              <script
                  key="https://code.jquery.com/jquery-3.2.1.slim.min.js"
                  src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
                  integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
                  crossOrigin="anonymous"
                  defer
              />,
    <script
                  key="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
                  src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
                  integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
                  crossOrigin="anonymous"
                  defer
              />,
    <script
                  key="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
                  src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
                  integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
                  crossOrigin="anonymous"
                  defer
              />

<script src="/bower_components/jquery/dist/jquery.js"></script>
<script src="/node_modules/jquery/dist/jquery.js"></script>
<link rel="stylesheet" href="/node_modules/owl.carousel/dist/assets/owl.carousel.min.css" />
<link rel="stylesheet" href="/bower_components/owl.carousel/dist/assets/owl.carousel.min.css" />


<script src="/bower_components/owl.carousel/dist/owl.carousel.min.js"></script>
           </Helmet>

      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
         <main role="main">{children}</main>
          <div id="preloader"></div>
          <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>
          <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
