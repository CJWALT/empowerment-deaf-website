import React from 'react'

import MisVis from '../components/MisVis'
import Needs from '../components/Needs'
import Hero from '../components/Hero'
import Blog from '../pages/Blog'
import OurTeam from '../components/OurTeam'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <Hero />
        <MisVis/>
        <Needs/>
        <Blog />
        <OurTeam/>
        <Footer />
  </>
  )
}

export default Home