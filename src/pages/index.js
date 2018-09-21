import React from 'react'

import Layout from '../components/Layout'

import Header from '../components/Header'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Header image={this.props.data.mountKerinci.childImageSharp.fluid}/>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Welcome to Kerinci</h1>
            </div>
            <p>Kerinci is a mystical place layered with natural beauty, strong traditions and rich culture. Come discover a secret valley nestled between jungle covered mountains. Immerse yourself in a different way of life and leave enriched by your experiences.</p>
            <p>Kerinci Kultur is a community made up of local people and whose goal is to share with you the essence of this hidden valley.
            We would like you could have the chance to inmerse yourself in a new culture, enjoy our food, our traditions….it’s not just about a trek or an excursion, it’s about to live a different experience that you can’t find in your own country.</p>
            <p>Kerinci is the best place if you love rainforest and outdoor activities due to it's surrounded by Kerinci Seblat National Park, the largest national park on the island of Sumatra.</p>
            ​<p>Are you looking forward to going out of your comfort zone and living an authentic experience in the nature off the beaten path? Then come discover, enjoy and release your stress within the most amazing beauty nature on earth!</p>
          </div>
        </section>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    mountKerinci: file(relativePath: {eq: "mount-kerinci.png"}) {
      childImageSharp {
        fluid(maxHeight: 1000) {
            ...GatsbyImageSharpFluid
          }
      }
    }
  }
`
