import React, { Component } from 'react'
import './Intro.css'

class Intro extends Component {
  render() {
    return (
      <section className="intro">
        <img src={this.props.image} alt={this.props.name} />
        <div>
          <h2>{this.props.name}</h2>
          <p>{this.props.company}</p>
          <p>{this.props.location}</p>
          <p>{this.props.bio}</p>
        </div>
      </section>
    )
  }
}

export default Intro