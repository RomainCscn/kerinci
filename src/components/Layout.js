import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import './all.sass'

const TemplateWrapper = ({ children, title }) => (
  <div>
    <Helmet title={title ? title : "Kerinci Kultur | Eco tours & Homestay in Kerinci"} 
      meta={[
        { name: 'description', content: 'Come discover the secret valley of Kerinci! At Kerinci Kultur, we provide various Eco Tours around Kerinci as well as a homestay to discover and live the local life.' },
        { name: 'keywords', content: 'Kerinci Kultur, Kerinci, national park, treks, Eco Tours, EcoTours, homestay, secret valley' }]}>
        <html lang="en" />
      </Helmet>
    <Navbar />
    <div>{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
