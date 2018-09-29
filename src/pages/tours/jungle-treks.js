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
      <Layout>
      <Header image={this.props.data.jungleTreks.childImageSharp.fluid} title="Jungle treks"/>
      <section>
        <div className={style.iconContainer}>
          <img src={itinerary} alt="itinerary logo" className={style.icon}/>
          <h2 className="is-title is-size-3" >Itinerary</h2>
        </div>
        <div className="container content" style={{maxWidth: '800px'}}> 
          <h3 className="is-size-4">Day 1</h3>

          <p>We’ll begin the day with an early start. Get our bags and hop in the car for a two and a half hour drive to the first lake,stopping at a traditional market on the way for your choice of local breakfast. </p>
          
          <p>When arriving at the lake we will sit back for a hot coffee or tea with a light snack before commencing the walk. We’ll walk approximately two hours before stopping at Nylo Lake. Here we can hang out, eat lunch and admire the beautiful surroundings.</p>

          <p>Then a two hour walk to lake Nyalo. We’ll stop here for a hot coffee/tea. After we finish our drinks we’ll walk one and a half hours  to Lake Duo. Lake Duo is in the middle of the cinnamon jungle.It has a strong aroma of cinnamon.The pink leaves reflect over the lakes surface, and in sunny season the leaves become light red. Here we’ll set up our campsite. After that you are free to go fishing, swimming, canoeing or just hang out. In the evening we’ll enjoy dinner around the campfire.
          </p>

          <h3 className="is-size-4">Day 2</h3>

          <p>You’ll wake up to the sound of many birds, most dominantly the sound of the Siamang. The early morning is a great time for bird watching. The reflection of the clouds on the water is also very clear at this time of day. We’ll eat barbecue fish for breakfast, caught from the night before (hopefully).</p>

          <p>Then we’ll pack up and walk two hours to Lake Kacik for coffee and lunch and after this continue our walk for another two hours to Kaco Lake (Blue Lake).</p>

          <p>Here we will set up camp and then you can do whatever you feel like doing, whether that be fishing, swimming or just lazing in a hammock.
          We’ll have another dinner around the campfire before setting into our tents for the night.</p>

          <h3 className="is-size-4">Day 3</h3>

          <p>As we slide out of bed you are free to have a morning swim, fish and hang out before breakfast. We’ll drink hot coffee and soak up the last of the area before heading back. The walk back to the car will take three hours and the drive home another two and a half.</p>

        </div>
      </section>
      <section style={{backgroundColor: '#F4F4F4'}}>
        <div className={style.iconContainer}>
          <img src={backpack} alt="backpack logo" className={style.icon}/>
          <h2 className="is-title is-size-3" >What to bring?</h2>
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
          <h2 className="is-title is-size-3" >Prices</h2>
        </div>
        <div className="container content" style={{maxWidth: '800px'}}> 
          <p>As the jungle treks are very flexible, contact us by Whatsapp to get the tour price: <a href="tel:+6285366442933">+62 85366442933</a></p>
          
          <p>Price includes:</p>
            <ul>
            <li>Nights in our homestay for the night before the trek and after the trek</li>
            <li>National Park permits</li>
            <li>All camping equipment: camping tent, mattress and sleeping bags</li>
            <li>Full board meals while you are on the trek: breakfast, lunch, dinner, coffe or tea and water.</li>
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