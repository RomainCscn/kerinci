import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import TourItem from '../components/TourItem'

import adventure from '../img/icons/adventure.png'

import style from './global.module.css'

export default class EcoToursPage extends React.Component {
  render() {
    return (
      <Layout>
      <Header image={this.props.data.mountKerinci.childImageSharp.fluid} title="Eco tours" subtitle="Ready for some adventure?"/>
        <section className="container">
          <div className={style.iconContainer}>
            <img src={adventure} alt="adventure logo" className={style.icon}/>
            <h2 className="is-title is-size-3 has-text-centered">Choose your own Kerinci adventure</h2>
          </div>
          <div className="container content" style={{maxWidth: '800px'}}> 
            <p>The many tour options can be combined into an itinerary of your choosing based on your interests. We don’t want you to feel locked into a strict schedule with no room to move. We can aIso provide advice and point you in the direction of tours we feel will suit you best. Contact us if you would like to modify any of the tour packages described below to best suit your needs. For example, with some overnight tours it is possible to change them in to a one day tour if you prefer not to camp.
            </p><br/>
            <p>The freedom over itineraries makes tours by Kerinci Kultur suitable for nature and adventure enthusiasts of all ages including families. Whether you want a fast paced adventure or an easy going cultural experience, Kerinci has an enormous amount of both to offer. There are plenty of ways to live, taste, learn and explore the valley.
            On these tours we will use the home stay as a base. During overnight treks you will not have to pay for a night at the home stay. Bags can be left in lockers in the house.
            </p>
          </div>
        </section>
        <section className="container" style={{paddingTop: '0'}}>
          <div className="columns is-multiline">
            <div className="column is-one-third-widescreen is-half-tablet">
              <TourItem title="Mount Kerinci"  image={this.props.data.mountKerinci.childImageSharp.fluid} path="/tours/mount-kerinci"/>
            </div>
            <div className="column is-one-third-widescreen is-half-tablet">
              <TourItem title="Mount Tujuh" image={this.props.data.mountTujuh.childImageSharp.fluid} path="/tours/mount-tujuh"/>
            </div>
            <div className="column is-one-third-widescreen is-half-tablet">
              <TourItem title="Lake Kako"  image={this.props.data.lakeKaco.childImageSharp.fluid} path="/tours/lake-kaco"/>
            </div>
            <div className="column is-one-third-widescreen is-half-tablet">
              <TourItem title="Jungle treks" image={this.props.data.jungleTreks.childImageSharp.fluid} path="/tours/jungle-treks"/>
            </div>
            <div className="column is-one-third-widescreen is-half-tablet">
              <TourItem title="Waterfalls"  image={this.props.data.waterfalls.childImageSharp.fluid} path="/tours/waterfalls"/>
            </div>
            <div className="column is-one-third-widescreen is-half-tablet">
              <TourItem title="Cultural" image={this.props.data.cultural.childImageSharp.fluid} path="/tours/cultural"/>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    mountKerinci: file(relativePath: {eq: "mount-kerinci.jpg"}) {
      childImageSharp {
        fluid(maxHeight: 1000) {
            ...GatsbyImageSharpFluid
          }
      }
    }
    mountTujuh: file(relativePath: {eq: "mount-tujuh.jpeg"}) {
      childImageSharp {
        fluid(maxHeight: 1000) {
            ...GatsbyImageSharpFluid
          }
      }
    }
    lakeKaco: file(relativePath: {eq: "lake-kaco.jpg"}) {
      childImageSharp {
        fluid(maxHeight: 1000) {
            ...GatsbyImageSharpFluid
          }
      }
    }
    jungleTreks: file(relativePath: {eq: "jungle-treks.jpg"}) {
      childImageSharp {
        fluid(maxHeight: 1000) {
            ...GatsbyImageSharpFluid
          }
      }
    }
    waterfalls: file(relativePath: {eq: "waterfalls.jpg"}) {
      childImageSharp {
        fluid(maxHeight: 1000) {
            ...GatsbyImageSharpFluid
          }
      }
    }
    cultural: file(relativePath: {eq: "cultural.jpg"}) {
      childImageSharp {
        fluid(maxHeight: 1000) {
            ...GatsbyImageSharpFluid
          }
      }
    }
  }
`
