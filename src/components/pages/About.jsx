import React from 'react'
import ContactSection from '../ContactSection.jsx'
import About_Hero_section from '../About_Hero_section.jsx'
import VideoContainer from '../VideoContainer.jsx'
import Person_section from '../Person_section.jsx'
import Person_section_to from '../Person_section_to.jsx'


function About() {
  
  return (
    <div className='container-fluid p-0 '>
      <About_Hero_section/>
      <VideoContainer/>
      <Person_section/>
      <Person_section_to/>
      <ContactSection/>
      
      
    </div>
  )
}

export default About