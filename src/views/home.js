import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Innocent Monthly Turtle</title>
        <meta property="og:title" content="Innocent Monthly Turtle" />
      </Helmet>
    </div>
  )
}

export default Home
