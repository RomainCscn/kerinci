import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Gallery from '../components/Gallery'

export default class EcoToursPage extends React.Component {

  render() {
    const photos = this.props.data.photos.edges.map(edge => edge.node.fluid);
    
    return (
      <Layout title="Gallery | Kerinci Kultur">
        <Header image={this.props.data.nature.childImageSharp.fluid} title="Gallery"/>
        <section className="section" style={{padding: '0'}}>
          <Gallery full={true} photos={photos}/>
        </section>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
      photos: allImageSharp(filter: {fluid: {originalName: {regex: "/g_/"}}}) {
        edges {
          node {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      nature: file(relativePath: {eq: "nature.jpg"}) {
      childImageSharp {
        fluid(maxHeight: 1000) {
            ...GatsbyImageSharpFluid
          }
      }
    }
  }
`