import React from 'react'
import './Footer.css'
import {BsFacebook, BsGithub, BsLinkedin, BsTwitter, BsWhatsapp} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>STEVO_DEV</a>

      <ul className="footer__links">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="http://linkden.com" ><BsLinkedin /></a>
        <a href="http://facebook.com" ><BsFacebook /></a>
        <a href="http://twitter.com" ><BsTwitter /></a>
        <a href="http://whatsapp.com" ><BsWhatsapp /></a>
        <a href="http://github.com" ><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Stevo_Dev Portfolio,. 2023 || All Right Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer