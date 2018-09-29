import React from 'react'
import Img from 'gatsby-image'

import airbnb from '../img/icons/airbnb.png'

const Card = ({ title, headline, description, image, link }) => (
  <div className="card">
    <div className="card-image">
      <figure className="image">
        <Img fluid={image}/>
      </figure>
    </div>
    <div className="card-content" style={{minHeight: 195}}>
      <div>
        <div className="is-size-3">{title}</div>
        <div className="is-size-6 has-text-grey">{headline}</div>
      </div>
      <div style={{margin: '24px 0'}}>
        {description}
      </div>
      <div>
        <a href={link} target="blank" className="button is-medium" style={{backgroundColor: '#fd5c63', paddingRight: '0.5rem'}}>
        <span className="icon">
          <img src={airbnb} alt="airbnb logo"/>
        </span>
        <span style={{color: 'white'}}>Book now</span>
        </a>
      </div>
    </div>
  </div>
)

export default Card

