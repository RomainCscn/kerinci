import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import Header from '../../components/Header'
import TourPrice from '../../components/TourPrice'

import itinerary from '../../img/icons/itinerary.png'
import backpack from '../../img/icons/backpack.png'
import price from '../../img/icons/price.png'

import style from './tours.module.css'

export default class MountKerinciPage extends React.Component {
  render() {
    let priceDetails = {
      oneDay: [
        {name: 'Solo', price: '100'},
        {name: 'Two persons', price: '200'},
        {name: 'Three persons', price: '250'},
        {name: 'Four persons', price: '300'}
      ],
      twoDays: [
        {name: 'Solo', price: '200'},
        {name: 'Two persons', price: '300'},
        {name: 'Three persons', price: '350'},
        {name: 'Four persons', price: '400'}
      ],
      threeDays: [
        {name: 'Solo', price: '300'},
        {name: 'Two persons', price: '350'},
        {name: 'Three persons', price: '400'},
        {name: 'Four persons', price: '450'},
        {name: 'Five persons', price: '500'}
      ],
    }

    return (
      <Layout>
      <Header image={this.props.data.mountKerinci.childImageSharp.fluid} text="Mount Kerinci"/>
      <section>
        <div className={style.iconContainer}>
          <img src={itinerary} alt="itinerary logo" className={style.icon}/>
          <h2 className="is-title is-size-3" style={{ borderBottom: '2px solid grey'}}>Itinerary</h2>
        </div>
        <div className="container content" style={{maxWidth: '800px'}}> 
          <h3 className="is-size-4">Day 1</h3>

          <p>Five o’clock in the morning wake up. Grab your stuff and put it in the car. The drive to the village at the base of the trek will take one and a half hours. We’ll stop on the way at a traditional market for your choice of a delectable breakfast.</p>
        
          <p>We’ll enter the trek from a village in Kerinci and embark on our eight hour walk to the tree shelter. As we trek forward we mustn’t forget to stop and look back over the views of the rice fields, tea plantations, wetlands, and the distant view of Mount Tujuh .Over the course of this beautiful walk we will stop for coffee’s and lunch. On these breaks we’ll sit back and enjoy the surroundings andviews below us.</p>
        
          <p>In the late afternoon we will set up camp at the tree shelter, eat a lovely warm dinner around the camp fire and then head to bed. This is the last point on the mountain with running water.</p>
        
          <h3 className="is-size-4">Day 2</h3>
        
          <p>We’ll begin the day with an early 4am start, drinking hot Kerinci coffee to wake up. We’ll feast upon a nasi goreng breakfast to fuel ourselves for the day ahead. Then we will commence the three hour walk to the summit.</p>
        
          <p>The astonishing view from the summit of the volcano is impressively vast. The view covers the Indian Ocean, Padang and even Bukkingi city, a nine hour drive from Kerinci.  We’ll spend some time on the summit taking in the view and eating an early lunch. Then we’ll start the six hour walk back to the village and from there drive home.</p>
        </div>
      </section>
      <section style={{backgroundColor: '#F4F4F4'}}>
        <div className={style.iconContainer}>
          <img src={backpack} alt="backpack logo" className={style.icon}/>
          <h2 className="is-title is-size-3" style={{ borderBottom: '2px solid grey'}}>What to bring?</h2>
        </div>
        <div className="container content" style={{maxWidth: '800px'}}> 
        <p>To climb <em>Mount Kerinci</em>, it is important that you should be at least on above level of fitness and should be able to carry your own load of personal daypack through the trekking.</p>
 
        Following are the <b>personal</b> packs that should be prepared for trekking:
        ​<ul>
          <li>Backpack to store your items with rain cover or waterproof backpack</li>
          <li>Waterproof trekking shoes with good grip</li>
          <li>Warm breathable clothing like long-sleeved shirts or hiking pants</li>
          <li>Waterproof Windbreaker and raincoat</li>
          <li>Warm hat and gloves</li>
          <li>Extra clothes and socks</li>
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
          <TourPrice details={priceDetails}/>
        
          <p>Price includes:</p>
          <ul>
            <li>Two nights in our homestay for the night before the trek and after the trek
            National Park permits</li>
            <li>>All camping equipment: camping tent, mattress and sleeping bags</li>
            <li>1 or 2 porters (it depends on the size of group) who will carry with the camping equipment and food.</li>
            <li>Full board meals while you are on the trek: breakfast, lunch, dinner, coffe or tea and water.</li>
          </ul>

          <p><em>Note that we can help you find a private or shared car, both from Padang or Jambi to Kerinci.</em></p>
          <article className="message is-success">
            <div className="message-body">
              <p>Don't hesitate to contact us by Whatsapp to get more information: <a href="tel:+6285366442933">+62 85366442933</a></p>
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
    mountKerinci: file(relativePath: {eq: "mount-kerinci.jpg"}) {
      childImageSharp {
        fluid(maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
      }
    }
  }
`