import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Card from '../components/Card'

import style from './global.module.css'

import rooms from '../img/icons/rooms.png'
import shared from '../img/icons/shared-area.png'

export default class HomestayPage extends React.Component {
  render() {
    
    const descriptionRoom1 = "The first room contains a single bed as well as a bedside table, desk and chair. The windows open onto an unobstructed view of the jungle covered mountains and rice paddies.";
    const descriptionRoom2 = "The second room contains a double and a single bed as well as a table. There also is a private balcony overlooking the house front garden and the coffee shop.";

    return (
      <Layout title="Homestay | Kerinci Kultur">
      <Header image={this.props.data.homestay.childImageSharp.fluid} title="Homestay" subtitle="Discover the local life"/>
      <section>
        <div className="container">
          <div className={style.iconContainer}>
            <img src={rooms} alt="rooms logo" className={style.icon}/>
            <h2 className="is-title is-size-3">Rooms</h2>
          </div>
          <div className="columns is-centered">
            <div className="column is-5-desktop">
              <Card title="Room 1" headline="Single bed" description={descriptionRoom1} image={this.props.data.room1.childImageSharp.fluid} link="https://www.airbnb.com/rooms/16694952?s=51"/>
            </div>
            <div className="column is-1"></div>
            <div className="column is-5-desktop">
              <Card title="Room 2" headline="Double and single bed" description={descriptionRoom2} image={this.props.data.room2.childImageSharp.fluid} link="https://www.airbnb.com/rooms/16679732?s=51"/>
            </div>
          </div>
          </div>
        </section>
        <section style={{backgroundColor: '#F4F4F4'}}>
          <div className={style.iconContainer}>
            <img src={shared} alt="shared area logo" className={style.icon}/>
            <h2 className="is-title is-size-3">Common area</h2>
          </div>
          <div className="container content" style={{maxWidth: '800px'}}> 
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
    homestay: file(relativePath: {eq: "homestay.jpg"}) {
      childImageSharp {
        fluid(maxHeight: 2000) {
            ...GatsbyImageSharpFluid
          }
      }
    }
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
