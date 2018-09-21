import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Card from '../components/Card'

export default class HomestayPage extends React.Component {
  render() {
    
    const descriptionRoom1 = "The first room contains a single bed and comes furnished with a bedside table, desk and chair. The windows open onto an unobstructed view of the jungle covered mountains and rice paddies.";
    const descriptionRoom2 = "The second room contains a double and a single bed as well as a table. There also is a private balcony overlooking the house front garden and the coffee shop.";
    
    console.log(this.props.data);

    return (
      <Layout>
      <section className="hero is-medium is-primary is-bold">
        <div className="hero-body">
          <div className="container has-text-centered">
          <h1 className="title">
            Homestay
          </h1>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns is-8 is-variable">
          <div className="column">
          <Card title="Room 1" description={descriptionRoom1} image={this.props.data.room1.childImageSharp.fluid}/>
          </div>
          <div className="column">
          <Card title="Room 2" description={descriptionRoom2} image={this.props.data.room2.childImageSharp.fluid}/>
          </div>
          </div>
          <h2 className="is-size-2">Common area</h2>
          <p>The backyard offers many outdoor sitting areas to relax, drink a coffee, and chat. Among the banana and coconut trees sits a large fire pit on a floor of mulch from the cinnamon trees. On occasion our friends will bring traditional instruments to play in the evening. The tree house in the garden is another great place to relax and take in the hills coated with native growth that overhang the paddy fields.  The tree house is a great place for eating breakfast in the morning and watching the sunset in the evening. </p><br />
          <p>Feel free to explore the local area around the home stay! Small vendors dot the streets selling traditional dishes. There are beautiful tracks through the paddy fields that can be explored by bicycle or motorbike. However, you won’t find any big shopping centers or western food places around the streets. Kerinci is still nicely tucked away from all the hustle and bustle that accompanies city life.  It’s a great place to reconnect with nature and disconnect from the stresses of city life.</p>
        </div>
      </section>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    room1: file(relativePath: {eq: "room1.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
      }
    }
    room2: file(relativePath: {eq: "room2.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
      }
    }
  }
`
