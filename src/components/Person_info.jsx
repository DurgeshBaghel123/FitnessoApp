import React from 'react'
import Button from './Button';
import '../css/Person_info.css'

function Person_info() {
  return (
    <div className='col-md-6 person-info '>
      <h2 className=''>I am Durgesh</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam non, dignissimos ab consequatur esse laboriosam itaque cum laborum quasi, reiciendis pariatur et natus excepturi eaque numquam placeat eveniet? Labore, culpa!</p>
      <ul className='my-5'>
        <li>
          <div>01</div>
          <div>Over 10 years of experience</div>
        </li>
        <li>
          <div>02</div>
          <div>Coached 2,000+ people</div>
        </li>
        <li>
          <div>03</div>
          <div>Bachelors in nutrition</div>
        </li>
      </ul>
      <Button data="Shedual a Call"/>
    </div>
  )
}

export default Person_info;