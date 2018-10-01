import React from 'react'
import { Link } from 'gatsby'

import style from "./footer.module.css"

import facebook from '../img/icons/facebook.png'
import instagram from '../img/icons/instagram.png'
import youtube from '../img/icons/youtube.png'
import airbnb from '../img/icons/airbnb.png'
import logo from '../favicon.png'

const Footer = () => (
  <footer className={style.footer}>
    <div className={`has-text-grey-lighter has-background-grey-darker`}>
      <div className={`columns ${style.firstRow}`}>
        <div className={`column is-5 ${style.about}`}>
          <img src={logo} alt="Kerinci Kultur logo" className={style.logo}/>
          <div>With <em>Kerinci Kultur</em>, discover the secret valley of Kerinci, experience various eco tours and live the local life at our homestay.</div>
        </div>
        <div className="column is-1"></div>
        <div className={`column has-text-grey-lighter ${style.links}`}>
          <div>
          <Link className={style.link} to="/about">
          About
          </Link>
          </div>
          <Link className={style.link} to="/eco-tours">
            Eco Tours
          </Link>
          <Link className={style.link} to="/homestay">
            Homestay
          </Link>
          <Link className={style.link} to="/gallery">
            Gallery
          </Link>
          <Link className={style.link} to="/contact">
            Contact
          </Link>
        </div>
        <div className={`column is-3 ${style.contact}`}>
          <span className="is-size-5" style={{marginBottom: '1rem'}}>Contact</span>
          <a className={style.link} href="tel:+6285366442933">+62 85366442933</a>
          <a className={style.link} href="mailto:roli5_socialist@yahoo.com">roli5_socialist@yahoo.com</a>
        </div>
      </div>
    </div>
    <div className="has-text-light" style={{backgroundColor: '#e5792c'}}>
      <div className={`columns ${style.secondRow}`}>
        <div className={`column ${style.copyright}`}>
          Copyright © 2018 Kerinci Kultur.
        </div>
        <div className={`column ${style.socialIcons}`}>
          <a href="https://facebook.com/kerincikultur"><img src={facebook} alt="facebook logo" className={style.icon}/></a>
          <a href="https://www.instagram.com/explore/tags/kerinci/"><img src={instagram} alt="instagram logo" className={style.icon}/></a>
          <a href="https://www.youtube.com/watch?v=lWeww6Q6Ack"><img src={youtube} alt="youtube logo" className={style.icon}/></a>
          <a href="https://www.airbnb.com/rooms/16679732?s=51"><img src={airbnb} alt="airbnb logo" className={style.icon}/></a>
          </div>
      </div>
    </div>
  </footer>
)

export default Footer
