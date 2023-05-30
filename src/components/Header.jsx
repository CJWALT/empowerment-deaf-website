import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMenu } from 'react-icons/io5'
import Button from './Button'

const Header = () => {

    const [showNav, setShowNav] = useState(true);

    const toggleNav = ()=> setShowNav(!showNav)
    

  return (
    <>
    <header>
      <div className="container">
            <div className="header_wrap">
                <div className="header_img"
                data-aos="zoom-in"
                data-aos-duration="800"
                >
                   <Link to='/'> <img src="./img/empowermentdeaf.png" alt="empowerment deaf logo" /> </Link>
                </div>
                <div 
                
                // data-aos={showNav ? "fade-down" : "fade-up" }
                // data-aos-delay={showNav ? "400" : "0"}
                // data-aos-duration={showNav ? "800" : "0"} 
                className={showNav ? "nav-btn" : "nav-btn nav-active"} >
                    <ul className="nav">
                        <li className="nav-list">
                            <Link to='/' className="nav_link" onClick={toggleNav}>Home</Link>
                        </li>
                        <li className="nav-list">
                            <a href="#" className="nav_link" onClick={toggleNav}>About</a>
                        </li>
                        <li className="nav-list">
                            <Link to='/blog' className="nav_link" onClick={toggleNav}>Blog</Link>
                        </li>
                    </ul>
                    <Button children="Donate" buttonColor="orange"/>
                </div>
                 <IoMenu className="mobileNav" onClick={toggleNav}/>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header