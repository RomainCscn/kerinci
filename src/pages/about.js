import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'

import style from './global.module.css'

export default class EcoToursPage extends React.Component {
  render() {
    return (
      <Layout title="About the secret valley | Kerinci Kultur">
        <Header image={this.props.data.ricePaddies.childImageSharp.fluid} title="Kerinci" subtitle="Learn more about the secret valley"/>
        <section>
          <div className="container content" style={{maxWidth: '800px'}}>

            <div className={style.embedContainer}>
              <iframe title="Kerinci kultur" src='https://www.youtube-nocookie.com/embed/lWeww6Q6Ack' frameBorder='0' allowFullScreen allow="autoplay; encrypted-media"></iframe>
            </div>

            <p>Kerinci was one of the last villages the Dutch discovered during their colonization of Indonesia. The Dutch named Kerinci the &ldquo;<em>Secret Valley</em>&rdquo; given its discrete location tucked away in a valley surrounded by mountains. Today the title still holds great truth, Kerinci remains incredibly unspoiled and unexplored by tourism. Even locals have yet to discover all the secrets the jungle holds.</p>

            <p>The Valley is a national park, home to glorious mountains, rivers, lakes and waterfalls. Mount Kerinci sits proudly over the valley. At 3805m, it is the highest active volcano South East Asia. Many travelers arrive in Kerinci purely to conquer the trek to the top of the volcano.</p>

            <p>When wandering the streets of Kerinci you will be overwhelmed with friendly smiles, waves, and greetings. It’s not uncommon for locals to ask for a photo. Since tourism has yet to flourish the community is delighted to meet the tourists who visit their community.</p>
            <div style={{borderBottom: '1px solid #dbdbdb', margin: '3rem 6rem'}}></div>
            <p className={`is-size-4 has-text-centered has-text-primary ${style.introMessage}`}>Come explore this valley and leave with an experience that you will carry forever.</p> 

          </div>
        </section>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    ricePaddies: file(relativePath: {eq: "rice-paddies.jpg"}) {
      childImageSharp {
        fluid(maxHeight: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
      }
    }
  }
`
