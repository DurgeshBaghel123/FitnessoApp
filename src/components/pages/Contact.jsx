import React, { useState } from 'react' 
import '../../css/Contact_page.scss'


function Contact() {
  const[Name,setName]=useState("")
  const[CurrentWeight,setCurrentWeight]=useState("")
  const[GoalWeight,setGoalWeight]=useState("")
  const[Email,setEmail]=useState("")
  const[Textarea,setTextarea]=useState("")
  let arraydatastore =[]
  function GetData(){
    
      let UserData={
        Name:Name,
        CurrentWeight:CurrentWeight,
        GoalWeight:GoalWeight,
        Email:Email,
        Textarea:Textarea
      }
      console.log(UserData)
      alert("your form submit")
      setName(""),setCurrentWeight(""),setGoalWeight(""),setEmail(""),setTextarea("")
  }
  return (
    <div className='row contact px-5 bg-light py-5'>
      <div className='col-md-6 pt-4'>
        <h1>Get in touch today to a schedule your discovery call.</h1>
        <p>Just fill out this short form on the right to get started in your life changing journey. If you prefer you can contact us below directly.</p>
        <div className='email'>
          <p className='m-0'>EMAIL</p>
          <div><a href='#'>contact@fitnesso.com</a></div>
        </div>
        <div className='phone mt-5'>
          <p className='m-0'>PHONE</p>
          <div>+916397877092</div>
        </div>
      </div>
      <div className="col-md-6 contact-form ">
        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            <input type='text'className='form-control p-3' placeholder='Full Name'value={Name}onChange={(e)=>{
                setName(e.target.value)
            }}/>
          </div>
          <div className='col-md-6 col-sm-12'>
            <input type='number'className='form-control p-3' placeholder='Current Weight'value={CurrentWeight}onChange={(e)=>{
                setCurrentWeight(e.target.value)
            }}/>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            <input type='number'className='form-control p-3' placeholder='Goal Weight'value={GoalWeight}onChange={(e)=>{
                setGoalWeight(e.target.value)
            }}/>
          </div>
          <div className='col-md-6 col-sm-12'>
            <input type='email'className='form-control p-3' placeholder='Email Address'value={Email}onChange={(e)=>{
                setEmail(e.target.value)
            }}/>
          </div>
        </div>
        <div className='row '>
          <div className='col-md-12'>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="7"value={Textarea} onChange={(e)=>{
              setTextarea(e.target.value);
            }}></textarea>
          </div>
        </div>
        <div className='row '>
          <div className='col-md-12'>
            <button className='form-control btn  p-3'onClick={GetData}>Get in Touch</button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Contact