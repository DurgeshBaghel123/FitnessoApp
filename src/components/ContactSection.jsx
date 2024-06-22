import React from 'react'
import '../css/ContactSection.scss'
import Button from './Button'

function ContactSection() {
  return (
    <div className='row contact-section'>
        <div className='col-md-10 mx-auto py-5 text-center py-2'>
            <div className='row py-3'>
                <h2>Get our free meal plan</h2>
                <p>ignup to our newsletter to get a free 30 day meal plan. 
                    You will receive all guidance on what to eat, how to cook and how much to eat.</p>
                <div className='row inputfield py-4'>
                    <div className='col-md-4'><input type="text" className="form-control " placeholder='Full Name' /></div>
                    <div className='col-md-4'><input type="email" className="form-control " placeholder='Email'/></div>
                    <div className='col-md-4 d-flex justify-content-center'>
                        <Button data="SIGN UP" className="btn"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactSection