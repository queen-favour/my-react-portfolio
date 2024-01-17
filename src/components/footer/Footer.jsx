import React from 'react'
import './footer.css'
import { BsLinkedin } from "react-icons/bs"
import { FiInstagram } from "react-icons/fi"
import { IoLogoTwitter } from "react-icons/io"


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Queen Favour</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/favour-elechi-9401a7218/" target='_blank'><BsLinkedin /></a>
        <a href="https://twitter.com/just_QueenFavor" target='_blank'><IoLogoTwitter /></a>
        <a href="https://www.instagram.com/_queen_favour/" target='_blank'><FiInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Queen Favour. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer