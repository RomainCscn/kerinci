import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {

  const toggle = () => {
    document.querySelector(".burger").classList.toggle("is-active");
    document.querySelector(".navbar-menu").classList.toggle("is-active");
  }

  return (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item has-text-primary" style={{fontSize: '1.5rem', fontFamily: 'Playfair Display, serif'}}>
          Kerinci Kultur
        </Link>
        <span onClick={toggle} className="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/about">
            About
          </Link>
          <Link className="navbar-item" to="/eco-tours">
            Eco Tours
          </Link>
          <Link className="navbar-item" to="/homestay">
            Homestay
          </Link>
          <Link className="navbar-item" to="/gallery">
            Gallery
          </Link>
          <Link className="navbar-item" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
