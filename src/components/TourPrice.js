import React from 'react'

export default class Gallery extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeLenghtTrek: 'oneDay',
      peopleNumber: ""
    };
  }

  peopleNumber() {
    const { details } = this.props;
    let options = details[this.state.activeLenghtTrek].map(element => {
      return <option key={element.name} value={element.name}>{element.name}</option>
    });
    return <div style={{marginBottom: '1rem'}}>
    <label className="label">Number of people</label>
    <div className="select">
      <select onChange={(e) => this.setState({peopleNumber: e.target.value})}>
        <option value=""></option>
        {options}
      </select>
    </div>
    </div>
  }

  price() {
    const { details } = this.props;
    let price;
    if (details[this.state.activeLenghtTrek].find(element => element.name === this.state.peopleNumber)) {
      price = details[this.state.activeLenghtTrek].find(element => element.name === this.state.peopleNumber).price;
    }
    return <div style={{marginBottom: '2rem'}}>
      {price ? 
        <div>
          Total: <br />
          <strong className="is-size-5">{price} IDR</strong>
        </div>
        : null}
    </div>
  }

  render() {
    const { details } = this.props;

    let oneDay, twoDays, threeDays;
  
    if (details.oneDay) {
      oneDay = <button className={`button ${this.state.activeLenghtTrek === 'oneDay' ? 'is-success is-selected' : null}`} onClick={() => this.setState({activeLenghtTrek: 'oneDay'})}>One day</button>
    }
  
    if (details.twoDays) {
      twoDays = <button className={`button ${this.state.activeLenghtTrek === 'twoDays' ? 'is-success is-selected' : null}`} onClick={() => this.setState({activeLenghtTrek: 'twoDays'})}>Two days, one night</button>
    }
  
    if (details.threeDays) {
      threeDays = <button className={`button ${this.state.activeLenghtTrek === 'threeDays' ? 'is-success is-selected' : null}`} onClick={() => this.setState({activeLenghtTrek: 'threeDays'})}>Three days, two nights</button>
    }
  
    let stayLength = 
    <div style={{marginBottom: '1rem'}}>
      <label className="label">Trek length</label>
      <div className="buttons has-addons">
        {oneDay} {twoDays} {threeDays}
      </div>
    </div>

    let item = <div>
      {stayLength}
      {this.peopleNumber()}
      {this.price()}
    </div>
  
    return item
  }
}