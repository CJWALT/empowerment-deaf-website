import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Header = () => {
  return (
    <>
    <header>
      <div className="container">
            <div className="header_wrap">
                <div className="header_img">
                   <Link to='/'> <img src="./img/empowermentdeaf.png" alt="empowerment deaf logo" /> </Link>
                </div>
                <div className="nav-btn">
                    <ul className="nav">
                        <li className="nav-list">
                            <Link to='/' className="nav_link">Home</Link>
                        </li>
                        <li className="nav-list">
                            <a href="#" className="nav_link">About</a>
                        </li>
                        <li className="nav-list">
                            <a href="#" className="nav_link">Contact</a>
                        </li>
                        <li className="nav-list">
                            <Link to='/blog' className="nav_link">Blog</Link>
                        </li>
                    </ul>

                    <Button children="Donate" buttonColor="orange"/>
                </div>
                
            </div>
        </div>
    </header>
    </>
  )
}

export default Header