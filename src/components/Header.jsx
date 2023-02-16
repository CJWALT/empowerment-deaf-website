import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <>
    <header>
      <div className="container">
            <div className="header_wrap">
                <div className="header_img">
                    <img src="./img/empowermentdeaf.png" alt="empowerment deaf logo" />
                </div>
                <div className="nav-btn">
                    <ul className="nav">
                        <li className="nav-list">
                            <a href="#" className="nav_link">Home</a>
                        </li>
                        <li className="nav-list">
                            <a href="#" className="nav_link">About</a>
                        </li>
                        <li className="nav-list">
                            <a href="#" className="nav_link">Contact</a>
                        </li>
                        <li className="nav-list">
                            <a href="#" className="nav_link">Blog</a>
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