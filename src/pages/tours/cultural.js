import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import Header from '../../components/Header'

import cinnamon from '../../img/icons/cinnamon.png'
import dance from '../../img/icons/dance.png'
import tea from '../../img/icons/tea.png'
import market from '../../img/icons/market.png'

import style from '../global.module.css'

export default class JungleTreksPage extends React.Component {
  render() {
    return (
      <Layout title="Cultural tours | Kerinci Kultur">
      <Header image={this.props.data.cultural.childImageSharp.fluid} title="Cultural"/>
      <section>
        <div className={style.iconContainer}>
          <img src={cinnamon} alt="cinnamon logo" className={style.icon}/>
          <h2 className="is-title is-size-3" >Cinnamon harvest</h2>
        </div>
        <div className="container content" style={{maxWidth: '800px'}}>
          <p>Kerinci produces around 45% of cinnamon worldwide. If you are curious and eager to learn about the process of the cinnamon harvest come and take a tour.</p>

          <p>We’ll start the day as usual, with breakfast in the traditional market. Then we will drive around one and a half hours to the farm. After greeting the farmer we will visit the tea plantation in the cinnamon jungle. You can choose to join the harvesting process or just to watch it. It will include peeling the bark from the tree, washing it and then scraping it.
          We will end the tour with lunch.</p>
        </div>
      </section>
      <section style={{backgroundColor: '#F4F4F4'}}>
        <div className={style.iconContainer}>
          <img src={tea} alt="tea logo" className={style.icon}/>
          <h2 className="is-title is-size-3" >Tea plantation</h2>
        </div>
        <div className="container content" style={{maxWidth: '800px'}}> 
          <p>Our tea plantations are one of the biggest in the world. As the tea plantations are located around the center of all the tours, we can combine a visit to the plantations on your request with any tour. Or if you wish to we can arrange a picnic lunch here one day.</p>
        </div>
      </section>
      <section>
        <div className={style.iconContainer}>
          <img src={dance} alt="dance logo" className={style.icon}/>
          <h2 className="is-title is-size-3" >Traditional dance</h2>
        </div>
        <div className="container content" style={{maxWidth: '800px'}}> 
          <p>Traditional dancing is an occasion that takes place during festivals. The biggest festival is Kerinci Lake, happening once a year is ‘Festival Danua Kerinci’.It runs for five days with performances in the mornings and afternoons.  Festivals are momentous occasions in Kerinci culture, happening twice a year in all the villages around Kerinci. The dates are generally in August and December but change depending on harvest time.</p>

          <p>If you are not here during festival time but wish to see a traditional dancing performance,I can arrange that for you. The cost of this performance will vary depending on the size of your group. The more people the less it will cost per person.</p>
        </div>
      </section>
      <section style={{backgroundColor: '#F4F4F4'}}>
        <div className={style.iconContainer}>
          <img src={market} alt="market logo" className={style.icon}/>
          <h2 className="is-title is-size-3" >Traditional market</h2>
        </div>
        <div className="container content" style={{maxWidth: '800px'}}> 
          <p>Our local traditional market runs every Monday. You can find a traditional market every day in the villages around Kerinci. We will visit the traditional markets with most tours but if you wish to visit it another time that can be arranged for you.</p>
        </div>
      </section>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    cultural: file(relativePath: {eq: "cultural.jpg"}) {
      childImageSharp {
        fluid(maxHeight: 2000) {
            ...GatsbyImageSharpFluid
          }
      }
    }
  }
`