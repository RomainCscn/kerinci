import React from 'react'
import Img from 'gatsby-image'

import style from './header.module.css'

const Header = ({ image, title, subtitle, fullscreen }) => {

  const text = <div className={style.title}>
  <div className={`has-text-centered has-text-light is-uppercase has-text-weight-bold`}>{title}</div>
    <div>
      <div className={`has-text-centered has-text-light is-italic ${style.subtitle}`}>{subtitle}</div> 
    </div>
  </div>
  
  let img;

  if (fullscreen) {
    img = <Img fluid={image} style={{height: 'calc(100vh - 52px)', filter: 'brightness(80%) saturate(120%)'}}/>
  } else {
    img = <Img fluid={image} style={{height: '500px', filter: 'brightness(80%) saturate(120%)'}}/>
  }

  return(
  <header style={{position: 'relative'}}>
    {img}
    {text}
  </header>
  )
}

export default Header
