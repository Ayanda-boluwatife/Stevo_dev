import React from 'react'
import {BsFacebook, BsGithub, BsLinkedin, BsTwitter, BsWhatsapp} from 'react-icons/bs'
// import {FaInstagram} from 'react-icons'
import './Header.css'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="http://linkden.com" ><BsLinkedin /></a>
        <a href="http://facebook.com" ><BsFacebook /></a>
        <a href="http://twitter.com" ><BsTwitter /></a>
        <a href="http://whatsapp.com" ><BsWhatsapp /></a>
        <a href="http://github.com" ><BsGithub /></a>
        {/* <a href="http://instagram.com" target='_blank'><FaInstagram /></a> */}
    </div>
  )
}

export default HeaderSocial