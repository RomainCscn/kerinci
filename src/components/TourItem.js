import React from 'react'
import Img from 'gatsby-image'

import style from "./touritem.module.css"

const TourItem = ({ title, description, imageSide, image }) => {

  let textColumn = 
  <div className={`${style.textContainer} column`}>
    <h2 className="title is-3 has-text-centered">{title}</h2>
    <p className={style.description}>{description}</p>
  </div>

  let imageColumn =
  <div className="column is-three-fifths">
    <Img style={{maxHeight: '400px'}} fluid={image}/>
  </div>

  let item;

  if (imageSide === 'left') {
    item =
    <div className="columns is-mobile is-gapless" style={{marginBottom: 0}}>
      {imageColumn}
      {textColumn}
    </div>  
  } else {
    item = 
    <div className="columns is-mobile is-gapless" style={{marginBottom: 0}}>
      {textColumn}
      {imageColumn}
    </div>
  }

  return item
}

export default TourItem

