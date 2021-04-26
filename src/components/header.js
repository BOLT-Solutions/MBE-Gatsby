import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./main.css"
import "./layout.css"

const Header = ({ siteTitle }) => (
    <header id="header" className="fixed-top" data-aos="fade"  >
        <div className="container d-flex align-items-center">
            <nav className="nav-menu d-none d-lg-block">
                <ul>
                    <li className="drop-down"><a href="#solutions">Solutions</a>
                        <ul>
                            <li><a href="#industries">Industries</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#lifecycle">Lifecycle support</a></li>
                        </ul>
                    </li>
                    <li className="drop-down"><a href="#products">Products</a>
                        <ul>
                            <li><a href="#crushing">Crushing</a></li>
                            <li><a href="#classification">Classification</a></li>
                            <li><a href="#segregation">Segregation</a></li>
                        </ul>
                    </li>
                    <li><a href="#testimonials">Client stories</a></li>
                    <li><a href="#about-us">About us</a></li>
                    <li><a href="#contact">Contact us</a></li>
                </ul>
            </nav>
        </div>
    </header> 
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

//    < header
//style = {{
//    background: `rebeccapurple`,
//        marginBottom: `1.45rem`,
//    }}
//  >
//    <div
//        style={{
//            margin: `0 auto`,
//            maxWidth: 960,
//            padding: `1.45rem 1.0875rem`,
//        }}
//    >
//        <h1 style={{ margin: 0 }}>
//            <Link
//                to="/"
//                style={{
//                    color: `white`,
//                    textDecoration: `none`,
//                }}
//            >
//                {siteTitle}
//            </Link>
//        </h1>
//    </div>
//  </header >