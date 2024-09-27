import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me-photo2.jpeg'
import HeaderSocials from './HeaderSocials'

const MyHeader = () => {
  return (
    <header>
      <div className="container header__container">
        <div className='header__text'>
        <h5>Hello I'm</h5>
        <h1>Elechi Favour</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        </div>
        
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  );
}

export default MyHeader;
