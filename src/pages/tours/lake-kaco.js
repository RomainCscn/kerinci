import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import Header from '../../components/Header'
import TourPrice from '../../components/TourPrice'

import itinerary from '../../img/icons/itinerary.png'
import backpack from '../../img/icons/backpack.png'
import price from '../../img/icons/price.png'

import style from '../global.module.css'

export default class LakeKacoPage extends React.Component {
  render() {
    let priceDetails = {
      oneDay: [
        {name: 'Solo', price: '900,000'},
        {name: 'Two persons', price: '1,200,000'},
        {name: 'Three persons', price: '1,300,000'},
        {name: 'Four persons', price: '1,600,000'},
        {name: 'Five persons', price: '1,800,000'}
      ],
      twoDays: [
        {name: 'Solo', price: '1,500,000'},
        {name: 'Two persons', price: '1,800,000'},
        {name: 'Three persons', price: '2,100,000'},
        {name: 'Four persons', price: '2,300,000'},
        {name: 'Five persons', price: '2,500,000'}
      ]
    }

    return (
      <Layout title="Lake Kaco tours | Kerinci Kultur">
      <Header image={this.props.data.lakeKaco.childImageSharp.fluid} title="Lake Kaco"/>
      <section>
        <div className={style.iconContainer}>
          <img src={itinerary} alt="itinerary logo" className={style.icon}/>
          <h2 className="title is-size-3" >Itinerary</h2>
        </div>
        <div className="container content" style={{maxWidth: '800px'}}> 

          <p>After waking up at home we’ll get our things (spare clothes and towel if you plan on swimming) and head to a traditional market for breakfast, then we’ll jump into the car and make our way to the blue lake. The drive will take around two hours, passing different Kerinci streets and villages.
          When arriving at the track we’ll commence the three hour walk through the jungle. This walk is dominantly flat and quite a leisurely one. Sandals are highly recommended as on the walk we’ll be passing small streams.</p>
          
          <p>When arriving at the beautiful blue lake we can sit back and enjoy a nasibunkus picnic lunch, swim and jump off an overhanging tree into the lake, drink hot coffees, or just lay back in a hammock and soak up the serenity,
          The legend of the lake is that it was created by an ancientprincess’s tears. The lake’s beauty is very astonishing.
          After we feel we have stayed and enjoyed the area as much as we could have we’ll make our way back.</p>

        </div>
      </section>
      <section style={{backgroundColor: '#F4F4F4'}}>
        <div className={style.iconContainer}>
          <img src={backpack} alt="backpack logo" className={style.icon}/>
          <h2 className="title is-size-3" >What to bring?</h2>
        </div>
        <div className="container content" style={{maxWidth: '800px'}}> 
 
        Following are the <b>personal</b> packs that should be prepared for trekking:
        ​<ul>
          <li>Sandals or waterproof shoes</li>
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
          <TourPrice details={priceDetails}/>
          
          <p>Price includes:</p>
          <ul>
            <li>Transporation to the starting point</li>
            <li>Full board meals: breakfast, lunch, coffee or tea and water</li>
          </ul>

          <p><em>Note that we can help you find a private or shared car, both from Bukittinggi, Padang or Jambi to Kerinci.</em></p>
          <article className="message is-success">
            <div className="message-body">
              <p>Don't hesitate to contact us by Whatsapp to get more information: <a href="tel:+6285366442933">+62 85366442933</a></p>
            </div>
          </article>
        ​
        </div>
      </section>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    lakeKaco: file(relativePath: {eq: "lake-kaco.jpg"}) {
      childImageSharp {
        fluid(maxHeight: 2000) {
            ...GatsbyImageSharpFluid
          }
      }
    }
  }
`