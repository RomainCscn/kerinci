import React from 'react'
import Img from 'gatsby-image'
import { Link } from "gatsby"

const TourItem1 = ({ title, image, path }) => (
  <Link to={path}>
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <Img fluid={image} style={{height: '300px'}}/>
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-4 has-text-centered">{title}</p>
      </div>
    </div>
  </Link>
)

export default TourItem1

