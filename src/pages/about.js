import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'

import style from './global.module.css'

export default class EcoToursPage extends React.Component {
  render() {
    return (
      <Layout>
        <Header image={this.props.data.ricePaddies.childImageSharp.fluid} text="About Kerinci"/>
        <section className="section">
          <div className="container content" style={{maxWidth: '800px'}}>

            <div className={style.embedContainer}>
              <iframe title="Kerinci kultur" src='https://www.youtube-nocookie.com/embed/lWeww6Q6Ack' frameBorder='0' allowFullScreen allow="autoplay; encrypted-media"></iframe>
            </div>

            <p>Kerinci was one of the last villages the Dutch discovered during their colonization of Indonesia. The Dutch named Kerinci, ‘Secret Valley’, given its discrete location tucked away in a valley surrounded by mountains. Today the title still holds great truth, Kerinci remains incredibly unspoiled and unexplored by tourism. Even locals have yet to discover all the secrets the jungle holds.</p>

            <p>The Valley is a national park, home to glorious mountains, rivers, lakes and waterfalls. Mount Kerinci sits proudly over the valley. At 3805m, it is the highest active volcano South East Asia. Many travelers arrive in Kerinci purely to conquer the trek to the top of the volcano.</p>

            <p>When wandering the streets of Kerinci you will be overwhelmed with friendly smiles, waves, and greetings. It’s not uncommon for locals to ask for a photo. Since tourism has yet to flourish the community is delighted to meet the tourists who visit their community.</p>

            <article className="message is-success">
              <div className="message-body">
                <em>Come explore this valley and leave with an experience that you will carry forever.</em>
              </div>
            </article>
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
        fluid(maxHeight: 1000) {
            ...GatsbyImageSharpFluid
          }
      }
    }
  }
`
