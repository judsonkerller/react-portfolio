import React from 'react'
import { BsLinkedin, BsInstagram } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a 
        href="https://linkedin.com/in/judsonkerller" 
        target="_blank" 
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a 
        href="https://github.com/judsonkerller" 
        target="_blank" 
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a 
        href="https://instagram/judsonkerller" 
        target="_blank" 
        rel="noreferrer"
      > 
        <BsInstagram /> 
      </a>
    </div>
  )
}

export default HeaderSocials