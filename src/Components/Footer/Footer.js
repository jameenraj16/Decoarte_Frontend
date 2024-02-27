import React from 'react'
import logo from "../Assets/Logo.png"
import { BsFacebook, BsInstagram, BsTwitterX, BsWhatsapp } from "react-icons/bs"
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-logo'>
                <img src={logo} alt='' />
                <p>DECOARTE</p>
            </div>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Prducts</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='footer-social-icons'>
                <div className='footer-icons-container'>
                    <BsInstagram className='footer-icon' />
                </div>
                <div className='footer-icons-container'>
                    <BsWhatsapp className='footer-icon' />
                </div>
                <div className='footer-icons-container'>
                    <BsFacebook className='footer-icon' />
                </div>
                <div className='footer-icons-container'>
                    <BsTwitterX className='footer-icon' />
                </div>
            </div>
            <div className='footer-copyright'>
                <hr />
                <p>Copyright @ 2024 - All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer