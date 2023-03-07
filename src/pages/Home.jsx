import React from 'react'
// import Header_hero from '../components/Header_hero'
import MisVis from '../components/MisVis'
import Needs from '../components/Needs'
import Hero from '../components/Hero'
import Blog from '../pages/Blog'
import Our_team from '../components/Our_team'

const Home = () => {
  return (
    <>
        <Hero />
        <MisVis/>
        <Needs/>
        <Blog />
        <Our_team/>
  </>
  )
}

export default Home