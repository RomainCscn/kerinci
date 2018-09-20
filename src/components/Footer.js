import React from 'react'
import { Link } from 'gatsby'

import style from "./footer.module.css"

const Footer = () => (
  <footer className={style.container}>
    <Link className='button is-primary is-medium' to="/contact">
      Book now
    </Link>
    <div className={style.socialBtn}>
      Facebook
      Instagram
    </div>
  </footer>
)

export default Footer
