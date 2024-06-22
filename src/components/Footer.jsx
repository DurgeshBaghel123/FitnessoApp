import React from 'react'
import '../css/Footer.scss'

function Footer() {
  return (
    
    <footer>
        <div className='row px-5'>
            <div className='col-md-4 left-f'>
                <div className='logo  w-50'>
                    <img src='public\image\5e808d31a7eca1775993ae82_white-logo.svg' className='w-75'/>
                </div>
                <div className='paymentlogo d-flex justify-content-between align-item-center '>
                    <img src='public\image\5e83076eb74fcd72dd21dc7b_paypal.svg' />
                    <img src='public\image\5e8304eb6ceb87f7281f6fdc_Stripe_Logo,_revised_2016.svg'/>
                    <img src='public\image\5e8305e9097a90332d0e6f79_mc_symbol.svg'/>
                    <img src='public\image\5e83061fb74fcd764121d765_Visa_2014_logo_detail.svg'/>
                    <img src='public\image\5e8305e9097a90332d0e6f79_mc_symbol.svg'/>
                    
                </div>
            </div>
            <div className='col-md-4 f-center'>
                <div className='f-text'>CONTACT</div>
                <p><a href='#'>contact@fitnesso.com</a></p>
                <div className='f-text mb-2'>LICENCING</div>
                <p><a href='#'>Copyright Flow Ninja</a></p>
                <p><a href='#'>Powered By Webflow</a></p>
                <p><a href='#'>Licencing</a></p>
                <p><a href='#'>Support</a></p>
                

            </div>
            <div className='col-md-4 f-right'>
                <div className='f-text'>EXPLORE</div>
                <p><a href='#'>Premium Courses</a></p>
                <p><a href='#'>Free Courses</a></p>
                <p><a href='#'>Blog</a></p>
                <p><a href='#'>About</a></p>
                <p><a href='#'>Contact</a></p>
                <p><a href='#'>Style Guide</a></p>
                

            </div>
        </div>
    </footer>
  )
}

export default Footer