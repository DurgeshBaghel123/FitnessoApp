import React from 'react'
import Card from './Card'
import data from './CardData'

function CardSection() {
    console.log(data)
  return (
    <div className='row mb-5 px-5'>
        {data.map((ele,ind)=>{
            return(
                <Card data={ele} id={ind}/>
            )
                
        })}
    </div>
  )
}

export default CardSection