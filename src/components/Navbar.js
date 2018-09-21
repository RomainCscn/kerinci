import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" style={{fontSize: "24px", color: "darkorange"}}>
          Kerinci Kultur
        </Link>
      </div>
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
      <div className="navbar-end">
      </div>
    </div>
  </nav>
)

export default Navbar
