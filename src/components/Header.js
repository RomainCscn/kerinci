import React from 'react'
import Img from 'gatsby-image'

import style from './header.module.css'

const Header = ({ image, text, subtitle, fullscreen }) => (
  <header style={{position: 'relative'}}>
    {fullscreen ? 
      <Img fluid={image} style={{height: 'calc(100vh - 52px)', filter: 'brightness(90%) saturate(120%)'}}/> :
      <Img fluid={image} style={{height: '500px', filter: 'brightness(90%) saturate(120%)'}}/>
    }
    <div className={style.title}>
      <div className={`has-text-centered has-text-light is-uppercase has-text-weight-bold`}>{text}</div>
      {subtitle ? 
        <div>
          <div className={`has-text-centered has-text-light is-italic ${style.subtitle}`}>{subtitle}</div> 
        </div>
        : null
      }
    </div>
  </header>
)

export default Header
