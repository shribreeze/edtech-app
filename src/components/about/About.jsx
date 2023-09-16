import React from 'react'
import AboutCard from './AboutCard'
import './about.css'

const About = () => {
  return (
    <>
      <section className="back">
        <h2>Home / about</h2>
        <h1>About Us</h1>
      </section>
      <div className='margin'></div>
      <AboutCard />
    </>
  )
}

export default About