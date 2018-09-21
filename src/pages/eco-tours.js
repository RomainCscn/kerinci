import React from 'react'

import Layout from '../components/Layout'

export default class EcoToursPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Eco tours</h1>
              <h2 className="is-size-4">Choose your own Kerinci adventure!</h2>
            </div>
            <p>The many tour options can be combined into an itinerary of your choosing based on your interests. We don’t want you to feel locked into a strict schedule with no room to move. We can aIso provide advice and point you in the direction of tours we feel will suit you best. Contact us if you would like to modify any of the tour packages described below to best suit your needs. For example, with some overnight tours it is possible to change them in to a one day tour if you prefer not to camp.
            </p><br/>
            <p>The freedom over itineraries makes tours by Kerinci Kultur suitable for nature and adventure enthusiasts of all ages including families. Whether you want a fast paced adventure or an easy going cultural experience, Kerinci has an enormous amount of both to offer. There are plenty of ways to live, taste, learn and explore the valley.
            On these tours we will use the home stay as a base. During overnight treks you will not have to pay for a night at the home stay. Bags can be left in lockers in the house.
            </p>
          </div>
        </section>
      </Layout>
    )
  }
}