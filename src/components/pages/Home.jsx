import React from 'react'
import '../../css/Home.css'
import Hero_hero_section from '../Hero_hero_section'
import Hero_experence from '../Hero_experence'
import Home_Healths from '../Home_Healths'
import Free_Home_workout_section from '../Free_Home_workout_section'
import ContactSection from '../ContactSection'
import Person_section from '../Person_section'


function Home() {
  return (
    <>
        <div className='container-fluid home p-0'>
          <Hero_hero_section/>
          <Hero_experence/>
          <Home_Healths/>
          <Free_Home_workout_section/>
          <Person_section/>
          <ContactSection/>
        </div>      
    </>
  )
}

export default Home