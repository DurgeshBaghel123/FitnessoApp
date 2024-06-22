import Button  from "./Button.jsx"
import '../css/Navbar.scss'
import { useState } from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    const [togglebtn,settogglebtn]=useState(true)
  return (
    <div className="row pt-2 Navbar px-5 bg-light ">
        <nav className="main-navbar">
            <div className="logo">
                <img src="public\image\5e808ce7dc544553a7f1b1e4_Black (1).svg" alt="logo" className="w-50"/>
            </div>
            <i className={togglebtn?"fa-solid fa-bars mobile-btn":"fa-solid fa-xmark mobile-btn"} onClick={()=>{
                    togglebtn?settogglebtn(false):settogglebtn(true)
                }}></i>
            <div className={togglebtn?"navbar ":"navbar show"}>
                <div className="menu pt-2">
                    <ul className="">
                        <li><NavLink to="/"><i className="fa-solid fa-house mobile-icon "></i> Home</NavLink></li>
                        <li><NavLink to="/about"><i className="fa-solid fa-address-card mobile-icon "></i> About</NavLink></li>
                        <li><NavLink to="/freeworkout"><i className="fa-solid fa-dumbbell mobile-icon"></i>Free Workouts</NavLink></li>
                        <li><NavLink to="/contact"><i className="fa-solid fa-shop mobile-icon"></i>Contact</NavLink></li>
                        <li><NavLink to="/blog"><i className="fa-solid fa-shop mobile-icon"></i>Blog</NavLink></li>
                    </ul>
                </div>
                
                <div className="btn">
                    <Button data="BOOK A CALL"/>
                    
                </div>
                
                <i className="fa-solid fa-cart-shopping ms-3"></i>
                
            </div>
        </nav>
    </div>
  )
}

export default Navbar