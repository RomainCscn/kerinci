import React from 'react'
import Img from 'gatsby-image'

import style from './header.module.css'

const Header = ({ image, text }) => (
  <header style={{position: 'relative'}}>
    <Img fluid={image} style={{maxHeight: '500px'}}/>
    <div className={`has-text-centered has-text-light is-uppercase has-text-weight-bold ${style.title}`}>{text}</div>
  </header>
)

export default Header
