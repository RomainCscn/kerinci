import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

import Header from '../components/Header'

export default class ContactPage extends React.Component {
  render() {
    return (
      <Layout>
        <Header image={this.props.data.mountKerinci.childImageSharp.fluid}/>
        <section className="section">
        <div className="container content" style={{maxWidth: '800px'}}>
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">Contact</h1>
          </div>
          <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="bot-field" />
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input className="input" type="text"  name="name"/>
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input className="input" type="email" name="email"/>
              </div>
            </div>
            <div className="field">
              <label className="label">Subject</label>
              <div className="control">
                <input className="input" type="text" name="subject"/>
              </div>
            </div>
            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea className="textarea" name="message"></textarea>
              </div>
            </div>
            <div className="control">
              <button type="submit" className="button is-link">Send</button>
            </div>
          </form>
        </div>
        </section>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    mountKerinci: file(relativePath: {eq: "home.jpg"}) {
      childImageSharp {
        fluid(maxHeight: 1000) {
            ...GatsbyImageSharpFluid
          }
      }
    }
  }
`
