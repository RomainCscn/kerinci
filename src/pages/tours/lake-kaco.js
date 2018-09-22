import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import Header from '../../components/Header'

import itinerary from '../../img/icons/itinerary.png'
import backpack from '../../img/icons/backpack.png'
import price from '../../img/icons/price.png'

import style from './tours.module.css'

export default class LakeKacoPage extends React.Component {
  render() {
    return (
      <Layout>
      <Header image={this.props.data.lakeKaco.childImageSharp.fluid} text="Lake Kaco"/>
      <section>
        <div className={style.iconContainer}>
          <img src={itinerary} alt="itinerary logo" className={style.icon}/>
          <h2 className="is-title is-size-3" style={{ borderBottom: '2px solid grey'}}>Itinerary</h2>
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
          <h2 className="is-title is-size-3" style={{ borderBottom: '2px solid grey'}}>What to bring?</h2>
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
          <h2 className="is-title is-size-3" style={{ borderBottom: '2px solid grey'}}>Prices</h2>
        </div>
        <div className="container content" style={{maxWidth: '800px'}}> 
        <p>Contact us by Whatsapp to get the tour price: <a href="tel:+6285366442933">+62 85366442933</a></p>
        
        <p>Price includes:</p>
        <ul>
          <li>Transporation to the starting point</li>
          <li>Full board meals: breakfast, lunch, coffee or tea and water.</li>
        </ul>
        ​
        <p><em>Note that we can help you to find a private or shared car, both from Padang or Jambi to Kerinci.</em></p>
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
        fluid(maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
      }
    }
  }
`