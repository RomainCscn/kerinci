import React from 'react'
import { graphql } from 'gatsby'
import { Link } from "gatsby"
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import Header from '../components/Header'

import style from './global.module.css'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Header fullscreen image={this.props.data.tujuh.childImageSharp.fluid} title="Kerinci" subtitle="The secret valley"/>
          <section>
            <div className="container content has-text-centered" style={{maxWidth: '800px'}}>
              <div className={`is-size-3 has-text-primary ${style.introMessage}`}>Kerinci, a mystical place layered with natural beauty, strong traditions and rich culture.</div> 
              
              <p className="has-text-grey">Come discover a secret valley nestled between jungle covered mountains. Immerse yourself in a different way of life and leave enriched by your experiences.</p>

              <Link to="/about">
                <button className={`button is-primary is-outlined is-medium ${style.learnButton}`}>Learn more about the secret valley</button>
              </Link>
            </div>
          </section>
          <Img style={{maxHeight: '500px'}} fluid={this.props.data.nature2.childImageSharp.fluid}/>
          <section className="has-background-light">
            <div className="container" style={{maxWidth: '800px'}}>
              <div className="columns">
                <div className="column">
                  <h2 className="is-size-3 has-text-centered" style={{marginBottom: '2rem'}}>What is Kerinci Kultur?</h2>
                  <p>A <b>community</b> made up of local people and whose goal is to share with you the essence of this hidden valley.
                  We would like you to have the chance to immerse yourself in a new culture, enjoy our food, our traditions… it’s not just about a trek or an excursion, it’s about to live a different experience that you can’t find in your own country.</p>
                </div>
                <div className="column is-1"></div>
                <div className="column is-narrow has-text-centered">
                  <Img style={{maxHeight: '200px', filter: 'brightness(110%) saturate(125%)'}} fixed={this.props.data.kerinciKultur.childImageSharp.fixed}/>
                </div>
              </div>
            </div>
          </section>
          <Img style={{maxHeight: '500px'}} fluid={this.props.data.nature.childImageSharp.fluid}/>
          <section>
            <div className="container" style={{maxWidth: '800px'}}>
              <h2 className="is-size-3 has-text-centered" style={{marginBottom: '2rem'}}>What to do in Kerinci?</h2>
              <p>Kerinci is the best place if you love rainforest and outdoor activities due to being part of <a href="https://en.wikipedia.org/wiki/Kerinci_Seblat_National_Park">Kerinci Seblat National Park</a>, the <b>largest</b> national park on the island of Sumatra.</p>
              ​<p>Are you looking forward to going out of your comfort zone and living an <b>authentic</b> experience in the nature off the beaten path? Then come discover, enjoy and release your stress within the most amazing beauty nature on earth.</p>
              <div className="has-text-centered">
                <Link to="/eco-tours">
                  <button className={`button is-primary is-outlined is-medium ${style.actionButton}`}>Discover Kerinci with us</button>
                </Link>
                <Link to="/homestay">
                  <button className={`button is-primary is-outlined is-medium ${style.actionButton}`}>Stay at our homestay</button>
                </Link>
              </div>
            </div>
          </section>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    tujuh: file(relativePath: {eq: "tujuh.jpeg"}) {
      childImageSharp {
        fluid (quality: 100) {
            ...GatsbyImageSharpFluid
          }
      }
    }
    kerinciKultur: file(relativePath: {eq: "favicon.png"}) {
      childImageSharp {
        fixed (height: 200) {
            ...GatsbyImageSharpFixed
          }
      }
    }
    nature: file(relativePath: {eq: "nature.jpg"}) {
      childImageSharp {
        fluid (quality: 80) {
            ...GatsbyImageSharpFluid
          }
      }
    }
    nature2: file(relativePath: {eq: "home.jpg"}) {
      childImageSharp {
        fluid (quality: 100) {
            ...GatsbyImageSharpFluid
          }
      }
    }
  }
`