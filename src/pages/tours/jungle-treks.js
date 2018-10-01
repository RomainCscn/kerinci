import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import Header from '../../components/Header'

import itinerary from '../../img/icons/itinerary.png'
import backpack from '../../img/icons/backpack.png'
import price from '../../img/icons/price.png'

import style from '../global.module.css'

export default class JungleTreksPage extends React.Component {
  render() {
    return (
      <Layout title="Jungle treks | Kerinci Kultur">
      <Header image={this.props.data.jungleTreks.childImageSharp.fluid} title="Jungle treks"/>
      <section>
        <div className={style.iconContainer}>
          <img src={itinerary} alt="itinerary logo" className={style.icon}/>
          <h2 className="title is-size-3" >Itinerary</h2>
        </div>
        <div className="container content" style={{maxWidth: '800px'}}> 
          <p>Jungle treks are only suitable for people looking for adventure: <b>you will go out of your confort zone</b>. That's why we don't have predefined itinerary and will build you one according to what you want to experience.</p>
        </div>
      </section>
      <section style={{backgroundColor: '#F4F4F4'}}>
        <div className={style.iconContainer}>
          <img src={backpack} alt="backpack logo" className={style.icon}/>
          <h2 className="title is-size-3" >What to bring?</h2>
        </div>
        <div className="container content" style={{maxWidth: '800px'}}> 
 
        Following are the <b>personal</b> packs that should be prepared for trekking:
        ​Following are the <b>personal</b> packs that should be prepared for trekking:
        ​<ul>
          <li>Backpack to store your items with rain cover or waterproof backpack</li>
          <li>Waterproof trekking shoes with good grip or sandals</li>
          <li>Warm breathable clothing like long-sleeved shirts or hiking pants</li>
          <li>Waterproof windbreaker and raincoat</li>
          <li>Extra clothes and socks</li>
          <li>Swimsuit</li>
          <li>Sunscream</li>
          <li>Small lightweight towel</li>
        </ul>
        </div>
      </section>
      <section>
        <div className={style.iconContainer}>
          <img src={price} alt="price logo" className={style.icon}/>
          <h2 className="title is-size-3" >Prices</h2>
        </div>
        <div className="container content" style={{maxWidth: '800px'}}>           
          <article className="message is-success">
            <div className="message-body">
              <p>As the jungle treks are very flexible, contact us by Whatsapp to get more information: <a href="tel:+6285366442933">+62 85366442933</a></p>
            </div>
          </article>

          <p>Price includes:</p>
            <ul>
            <li>Nights in our homestay for the night before and after the trek</li>
            <li>National Park permits</li>
            <li>All camping equipment: camping tent, mattress and sleeping bags</li>
            <li>Full board meals while you are on the trek: breakfast, lunch, dinner, coffe or tea and water</li>
          </ul>

          <p><em>Note that we can help you find a private or shared car, both from Bukittinggi, Padang or Jambi to Kerinci.</em></p>
        </div>
      </section>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    jungleTreks: file(relativePath: {eq: "jungle-treks.jpg"}) {
      childImageSharp {
        fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
      }
    }
  }
`