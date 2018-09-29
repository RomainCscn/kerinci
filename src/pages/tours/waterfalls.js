import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import Header from '../../components/Header'

import itinerary from '../../img/icons/itinerary.png'
import backpack from '../../img/icons/backpack.png'
import waterfall from '../../img/icons/waterfall.png'

import style from '../global.module.css'

export default class JungleTreksPage extends React.Component {
  render() {
    return (
      <Layout title="Waterfalls tours | Kerinci Kultur">
      <Header image={this.props.data.waterfalls.childImageSharp.fluid} title="Waterfalls"/>
      <section>
        <div className={style.iconContainer}>
          <img src={itinerary} alt="itinerary logo" className={style.icon}/>
          <h2 className="is-title is-size-3" >Itinerary</h2>
        </div>
        <div className="container content" style={{maxWidth: '800px'}}>
          <p>The waterfall trips will always be centered around a picnic lunch. You’ll pack your bags at the beginning of the day and head off for the waterfall stopping at a traditional market for breakfast.</p>
          
          <p>The waterfalls are secluded in the native growth. They are found by wandering into the jungle. It doesn’t take long before your path is enclosed by thick native jungle growth. You’ll follow the river upstream until you reach the waterfall. You may encounter some wildlife on your walk.
          </p>

          <p>When arriving at the waterfall you’ll be free to swim or shower under its downfall (if not too intense), explore the area, laze in the hammocks, take some glorious photos or do whatever you feel like doing. We’ll spend a nice stretch of time at the waterfall, eating lunch and hanging out before walking back.</p>
        </div>
      </section>
      <section style={{backgroundColor: '#F4F4F4'}}>
        <div className={style.iconContainer}>
          <img src={backpack} alt="backpack logo" className={style.icon}/>
          <h2 className="is-title is-size-3" >What to bring?</h2>
        </div>
        <div className="container content" style={{maxWidth: '800px'}}> 
 
        ​Following are the <b>personal</b> packs that should be prepared for trekking:
        ​<ul>
          <li>Waterproof windbreaker and raincoat</li>
          <li>Sandals or waterproof shoes</li>
          <li>Swimsuit</li>
          <li>A change of clothes</li>
          <li>Small lightweight towel</li>
        </ul>
        </div>
      </section>
      <section>
        <div className={style.iconContainer}>
          <img src={waterfall} alt="waterfall logo" className={style.icon}/>
          <h2 className="is-title is-size-3" >Waterfalls</h2>
        </div>
        <div className={`container content ${style.boxContainer}`}> 
          <div className={`box ${style.box}`}>
            <h3 className="is-size-4">Arai Waterfall</h3>
            <ul>
              <li>Drive: 0.5 hrs</li>
              <li>Trekking: 2.5 hrs</li>
              <li>Difficulty: Quite slippery, challenging climb</li>
            </ul>
          </div>
          <div className={`box ${style.box}`}>
            <h3 className="is-size-4">Pancuran Rayo Waterfall</h3>
            <ul>
              <li>Drive: 1.5 hrs</li>
              <li>Trekking: 2 hrs</li>
              <li>Difficulty: Quite a steep, challenging walk</li>
            </ul>
          </div>
          <div className={`box ${style.box}`}>
            <h3 className="is-size-4">Talang Kemulun Waterfall</h3>
            <ul>
              <li>Drive: 1.5 hrs</li>
              <li>Trekking: 1 hrs</li>
              <li>Difficulty: Quite comfortable steady incline walk</li>
            </ul>
          </div>
          <div className={`box ${style.box}`}> 
            <h3 className="is-size-4">Batu Kura Waterfall</h3>
            <ul>
              <li>Drive: 0.5 hrs</li>
              <li>Trekking: 1 hr</li>
              <li>Difficulty: Easy</li>
            </ul>
          </div>
          <div className={`box ${style.box}`}>
            <h3 className="is-size-4">Tricontra Waterfall</h3>
            <ul>
              <li>Drive: 1.5 hrs</li>
              <li>Trekking: 3 hrs</li>
              <li>Difficulty: Next to no incline, a portion contains a challenging climbing</li>
            </ul>
          </div>
        </div>
      </section>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    waterfalls: file(relativePath: {eq: "waterfalls.jpg"}) {
      childImageSharp {
        fluid(maxHeight: 2000) {
            ...GatsbyImageSharpFluid
          }
      }
    }
  }
`