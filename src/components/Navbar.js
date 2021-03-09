import React from 'react'
import "./App.css"
import Link from "react-scroll/modules/components/Link";
import "bootstrap/dist/js/bootstrap"

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand"><Link className="Link" to="header" spy={true} smooth={true}><img src="images/hotelnhome3.png" width="160" height="85"></img></Link></a>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">

            <li className="nav-item active">
                <a className="nav-link"><Link className="Link" to="business" spy={true} smooth={true}>Our business</Link></a>
            </li>
            
            <li className="nav-item active">
                <a className="nav-link"><Link className="Link" to="products" spy={true} smooth={true}>Products</Link></a>
            </li>
            <li className="nav-item">
                <a className="nav-link"><Link className="Link" to="projects" spy={true} smooth={true}>References</Link></a>
            </li>
            <li className="nav-item">
                <a className="nav-link"><Link className="Link" to="about1" spy={true} smooth={true}>Story</Link></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://hotelnhome.myshopify.com">Shop</a>
            </li>
            
            </ul>
        </div>
        </nav>

    )
}

export default Navbar
