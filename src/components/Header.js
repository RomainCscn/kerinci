import React from 'react'
import Img from 'gatsby-image'

const Header = ({ image, text }) => (
  <header style={{position: 'relative'}}>
    <Img fluid={image}/>
    <div className="has-text-centered has-text-light is-uppercase has-text-weight-bold" style={{
      fontSize: '5rem',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }}>{text}</div>
  </header>
)

export default Header
