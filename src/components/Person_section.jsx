import React from 'react'
import Person_info from './Person_info.jsx'
import Bg_image from './Bg_image.jsx'
import '../css/Person_info.css'

function Person_section() {
  return (
    <div className='row  person_section '>
        <Person_info/>
        <Bg_image/>
    </div>
  )
}

export default Person_section