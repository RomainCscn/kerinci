import React from 'react'

import style from "./footer.module.css"

import facebook from '../img/icons/facebook.png'
import instagram from '../img/icons/instagram.png'
import youtube from '../img/icons/youtube.png'
import airbnb from '../img/icons/airbnb.png'

const Footer = () => (
  <footer className={`footer has-text-centered ${style.footer}`}>
    <div className="columns">
      <div className="column">
        <h3 className="is-title is-size-3">Kerinci Kultur</h3>
      </div>
      <div className="column">
      <a href="https://airbnb.com" target="blank" className="button is-medium" style={{backgroundColor: '#fd5c63', paddingRight: '0.5rem'}}>
        <span className="icon">
          <img src={airbnb} alt="airbnb logo"/>
        </span>
        <span style={{color: 'white'}}>Book now</span>
      </a>
    </div>
      <div className={`column ${style.socialIcons}`}>
        <a href="https://facebook.com/kerincikultur"><img src={facebook} alt="facebook logo" className={style.icon}/></a>
        <a href="https://www.instagram.com/explore/tags/kerinci/"><img src={instagram} alt="instagram logo" className={style.icon}/></a>
        <a href="https://www.youtube.com/watch?v=lWeww6Q6Ack"><img src={youtube} alt="youtube logo" className={style.icon}/></a>
      </div>
    </div>
  </footer>
)

export default Footer
