import React from 'react'
import {GrFacebook, GrInstagram} from 'react-icons/gr'
import {FaLinkedin} from 'react-icons/fa'
const Footer = () => {
  return (
    <>
    <footer>
        <div className="container">
            <div className="footer-wrap">
                <div className="footer-logo-addy">
                    <img src="./img/empowermentdeaf.png" alt="footer logo" />
                    <div className="footer-icons">
                        <GrFacebook />
                        <GrInstagram />
                        <FaLinkedin />
                    </div>
                </div>
                <div className="footer-links">
                    <ul className="permalinks-one">
                        <li className="footer-link"><a href ="#">Home</a></li>
                        <li className="footer-link"><a href ="#">About</a></li>
                        <li className="footer-link"><a href ="#">Blog</a></li>
                        <li className="footer-link"><a href ="#">Our Needs</a></li>
                    </ul>
                </div>
                <div className="footer-contact-form">
                    <form> 
                        <input type='text' placeholder="Name" className="form-field"/> 
                        <input type='email' placeholder="Email Address" className="form-field"/> 
                        <textarea placeholder='Message'></textarea>
                    </form>
                </div>

                <div className="footer-addy">
                        <small className="org_phone">
                            +44 7423 323 919
                        </small>
                        <small className="org_email">
                            info@aedvp.uk
                        </small>
                        <small className="org_addy">
                        164C William Street, Poland Great Britain 
                        </small>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer