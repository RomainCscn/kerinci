import React from 'react'
import Img from 'gatsby-image'

const Card = ({ title, description, image }) => (
  <div className="card">
  <div className="card-image">
    <figure className="image">
      <Img fluid={image}/>
    </figure>
  </div>
  <div className="card-content" style={{minHeight: 195}}>
    <p className="title is-4 has-text-centered">{title}</p>
    <div className="content">
      {description}
      <br/>
    </div>
  </div>
</div>
)

export default Card

