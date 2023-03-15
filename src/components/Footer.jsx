import React from 'react'
import {GrFacebook, GrInstagram} from 'react-icons/gr'
import {FaLinkedin, FaPhoneAlt, FaTwitterSquare} from 'react-icons/fa'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import {FiSend} from 'react-icons/fi'
import Button from './Button'
const Footer = () => {
  return (
    <>
    <footer>
        <div className="container">
            <div className="footer-wrap">
                <div className="footer-logo-addy">
                    <img src="./img/empowermentdeaf.png" alt="footer logo" />
                    <div className="footer-icons">
                        <a href='#' className='social-icons'><GrFacebook /></a>
                        <a href='#' className='social-icons'><GrInstagram /></a>
                        <a href='#' className='social-icons'><FaLinkedin /></a>
                        <a href='#' className='social-icons'><FaTwitterSquare /></a>
                        <a href='#' className='social-icons'><FiSend/></a>
                    </div>
                </div>
                <div className="footer-links">
                <h6 className='links-heading'>Permalinks</h6>
                    <ul className="permalinks-one">
                        <li className="footer-link"><a href ="#" className='footer-link_list'>Home</a></li>
                        <li className="footer-link"><a href ="#" className='footer-link_list'>About</a></li>
                        <li className="footer-link"><a href ="#" className='footer-link_list'>Blog</a></li>
                        <li className="footer-link"><a href ="#" className='footer-link_list'>Our Needs</a></li>
                    </ul>
                </div>
                <div className="footer-contact_form">
                    <p className="form-para">
                        Get in touch with us: 
                    </p>
                    <form> 
                        <input type='text' placeholder="Name" className="form-field"/> 
                        <input type='email' placeholder="Email Address" className="form-field"/> 
                        <textarea placeholder='Message' className='form-field' rows='4'></textarea>
                        <Button children='Send' buttonColor='bg-white' />
                    </form>
                </div>

                <div className="footer-addy">
                        <small className="org_phone">
                           <FaPhoneAlt /> +44 7423 323 919
                        </small>
                        <small className="org_email">
                            <MdEmail /> info@aedvp.uk
                        </small>
                        <small className="org_addy">
                        <MdLocationOn/> 164C William Street, Poland Great Britain 
                        </small>
                </div>
                <Button children="Donate" buttonColor="orange" buttonLay="absolute"/> 
            </div>
        </div>
        
    </footer>
    </>
  )
}

export default Footer