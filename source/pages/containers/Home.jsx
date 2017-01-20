import React, { Component } from 'react'
import { Link } from 'react-router'

class Home extends Component {
  render () {
    return (
      <section name="Home">
        <h1>Home</h1>
        <Link to="/about">
          Go to About
        </Link>
      </section>
    )
  }
}

export default Home