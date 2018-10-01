import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import Header from '../../components/Header'
import TourPrice from '../../components/TourPrice'

import itinerary from '../../img/icons/itinerary.png'
import backpack from '../../img/icons/backpack.png'
import price from '../../img/icons/price.png'

import style from '../global.module.css'

export default class MountTujuhPage extends React.Component {
  render() {
    let priceDetails = {
      twoDays: [
        {name: 'Solo', price: '2,300,000'},
        {name: 'Two persons', price: '3,100,000'},
        {name: 'Three persons', price: '4,000,000'},
        {name: 'Four persons', price: '5,200,000'},
        {name: 'Five persons', price: '6,000,000'}
      ],
      threeDays: [
        {name: 'Solo', price: '3,200,000'},
        {name: 'Two persons', price: '4,000,000'},
        {name: 'Three persons', price: '5,100,000'},
        {name: 'Four persons', price: '6,200,000'},
        {name: 'Five persons', price: '7,000,000'}
      ],
    }

    return (
      <Layout title="Mount Tujuh tours | Kerinci Kultur">
      <Header image={this.props.data.mountTujuh.childImageSharp.fluid} title="Mount Tujuh"/>
      <section>
        <div className={style.iconContainer}>
          <img src={itinerary} alt="itinerary logo" className={style.icon}/>
          <h2 className="title is-size-3" >Itinerary</h2>
        </div>
        <div className="container content" style={{maxWidth: '800px'}}> 
          <h3 className="is-size-4">Day 1</h3>

          <p>We’ll start the day bright and early, getting our bags and hopping in the car for a two hour drive to a village in Kerinci. On the way we’ll stop at a traditional market for breakfast, where there’ll be an appetizing range of different meals to choose from.
          From the village we’ll enter the jungle and begin the three hour trek to the lake. The jungles beauty will close in around us as we stride forward.The duration of the walk will vary depending on the groups desire to stop and take in the surroundings and also their fitness level.</p>
        
          <p>We’ll arrive at Lake Gunung Tuguh for lunch, sitting back and enjoying the beautiful surroundings.The lake is a caldera, created by an ancient volcano eruption. It’s the highest caldera in South East Asia.</p>
        
          <p>After you feel that your lunch has settled you can set up camp. The afternoon will be yours to do what you want. There is plenty to do, you can go swimming, hunt some crabs for dinner, explore the areaor just kick back in one of the hammocks, whatever you fancy.
          As the evening commences you can enjoy a barbeque dinner around the camp fire. If we are lucky and successful hunting crabs, we’ll be able to enjoy barbequed crab for dinner. After dinner is a prime time to search for nocturnal animals, if you feel like doing so. If you are visiting the lake on a full moon the area will be lit up by the bright moonlight. It’s really the best time to visit the lake.</p>
        
          <h3 className="is-size-4">Day 2</h3>
          
          <p>You’ll start the day with a leisurely wake up. Drinking Kerinci coffee or tea and feasting upon a hot nasi goreng breakfast. After breakfast we’ll take a canoe tour around the lake. This is really an opportunity not to be missed. When floating down this lake you will be surrounded by the seven mountains looming overhead. The scenery makes you feels as though you have re-entered the dinosaur era.If the canoes are not available we’ll spend the day exploring and hanging out.</p>
          
          <h3 className="is-size-4">Day 3 <em>(optional)</em></h3>
          
          <p>Another leisurely wake up. We’ll eat breakfast, soak up the last of the breathtaking view before commencing our walk back to the village. On the drive home we’ll stop at the largest tea plantation in the world for a picnic lunch.</p>

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
          <li>Backpack to store your items with rain cover or waterproof backpack</li>
          <li>Waterproof trekking shoes with good grip</li>
          <li>Warm breathable clothing like long-sleeved shirts or hiking pants</li>
          <li>Waterproof Windbreaker and raincoat</li>
          <li>Flip flops</li>
          <li>Swimsuit</li>
          <li>Sunscream</li>
          <li>Extra clothes and socks</li>
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
            <li>Two nights in our homestay for the night before and after the trek</li>
            <li>National Park permits</li>
            <li>All camping equipment: camping tent, mattress and sleeping bags</li>
            <li>1 or 2 porters (it depends on the size of group) who will carry with the camping equipment and food</li>
            <li>Full board meals while you are on the trek: breakfast, lunch, dinner, coffe or tea and water</li>
          </ul>
          <p><em>Note that we can help you find a private or shared car, both from Bukittinggi, Padang or Jambi to Kerinci.</em></p>
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
    mountTujuh: file(relativePath: {eq: "mount-tujuh.jpeg"}) {
      childImageSharp {
        fluid(maxHeight: 2000) {
            ...GatsbyImageSharpFluid
          }
      }
    }
  }
`