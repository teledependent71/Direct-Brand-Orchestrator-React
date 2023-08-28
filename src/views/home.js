import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Direct Brand Orchestrator</title>
        <meta property="og:title" content="Direct Brand Orchestrator" />
      </Helmet>
    </div>
  )
}

export default Home
