import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'

import style from './global.module.css'

import location from '../img/icons/location.png'
import phone from '../img/icons/phone.png'

export default class ContactPage extends React.Component {
  render() {
    return (
      <Layout>
        <Header image={this.props.data.mountKerinci.childImageSharp.fluid} text="Contact"/>
        <section className="section">
        <div className="container content">
          <div className="columns is-variable is-8">
            <div className="column">
              <div className={style.iconContainer}>
                <img src={phone} alt="phone logo" className={style.icon}/>
                <div className="is-title is-size-3" style={{ borderBottom: '2px solid grey'}}>Contact information</div>
              </div>
              <div>
                <div className="message is-success">
                  <div className="message-body">
                    <p>To contact us, use the following number for quicker response (<em>call and Whatsapp</em>) or the form below.</p>
                    <div className="has-text-centered">
                      <a href="tel:+6285366442933">+62 85366442933</a>
                    </div>
                  </div>
                </div>
                <div className="box">
                  <h3>Homestay</h3>
                  <p>Use our <a href="https://airbnb.com" target="blank">Airbnb link</a> or send a message detailing the dates of your stay, room preference, and number of guests. Please include any transportation assistance you may require and refer to the information found in <em>how to get here</em>.</p>
                </div>
                <div className="box">
                  <h3>Eco Tours</h3>
                  <p>Send a message detailing the Eco Tours you are interested in booking, preferred dates, and number of guests. If you have any questions don’t hesitate to ask, the tours are very flexible.</p>
                </div>
                <h3>Contact form</h3>
                <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                  <input type="hidden" name="bot-field" />
                  <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                      <input className="input" type="text"  name="name"/>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                      <input className="input" type="email" name="email"/>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Subject</label>
                    <div className="control">
                      <input className="input" type="text" name="subject"/>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                      <textarea className="textarea" name="message"></textarea>
                    </div>
                  </div>
                  <div className="control">
                    <button type="submit" className="button is-link">Send</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="column">
              <div className={style.iconContainer}>
                <img src={location} alt="location logo" className={style.icon}/>
                <div className="is-title is-size-3" style={{ borderBottom: '2px solid grey'}}>How to get here?</div>
              </div>
              <div className={style.mapResponsive}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d996.86477025004!2d101.35616642922533!3d-1.9704638595983774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e2da792ee583721%3A0x5585f48f4dbe420a!2sKafe+Kerinci+Kulture!5e0!3m2!1sen!2sid!4v1537844106117" width="600" height="450" frameBorder="0" allowFullScreen title="google-maps"></iframe>
              </div>
              <div>
                <div className="box" style={{marginTop: '24px'}}>
                  <div className="is-title is-size-5">Option 1: From Padang, West Sumatra</div>
                ​  <p>If you are flying into Padang, Minangkabau International Airport (PDG), an airport pick up can be arranged for you beforehand. We can book you a night at a guesthouse in Padang or organize your van ride straight to Kerinci. The van operates twice daily, morning and evening. The morning bus is highly recommended for a breathtaking journey through the Lake Danaudiatas, tea plantations, jungle covered mountains, and traditional farms.</p>
                <ul>
                  <li>
                    <em>Shared Taxi:</em>
                    <ul>
                      <li>Padang BIM Airport - Kerinci, idr 170k/person</li>
                      <li>Padang city - kerinci, idr 120k/person</li>
                    </ul>
                  </li>
                  <li><em>Private car, idr 900k</em></li>
                </ul>​
                </div>
                <div className="box">
                  <div className="is-title is-size-5">Option 2: Fly from Jambi airport (DJB) to Kerinci airport (KRC)</div>
                ​  <p>We can we pick you up at the airport.</p>
                </div>
                <div className="message is-primary">
                  <div className="message-body">Note that we can arrange you a shared taxi from other cities.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    mountKerinci: file(relativePath: {eq: "home.jpg"}) {
      childImageSharp {
        fluid(maxHeight: 1000) {
            ...GatsbyImageSharpFluid
          }
      }
    }
  }
`
