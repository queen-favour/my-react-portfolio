import React from 'react'
import { BsLinkedin } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"
import { BsTwitterX } from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="www.linkedin.com/in/favour-elechi-9401a7218" target='_blank'><BsLinkedin /></a>
        <a href="https://twitter.com/just_QueenFavor" target='_blank'><BsTwitterX /></a>
        <a href="https://github.com/queen-favour" target='_blank'><FaGithub /></a>


    </div>
  )
}

export default HeaderSocials