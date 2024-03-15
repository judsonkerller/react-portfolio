import React from 'react'
import './footer.css'
import { BsLinkedin, BsInstagram } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>JK</a>

      <ul className="permalinks">
        {/* <li><a href="#"></a></li> */}
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/judsonkerller"><BsLinkedin /></a>
        <a href="https://github.com/judsonkerller"><FaGithub /></a>
        <a href="https://instagram.com/judsonkerller"><BsInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; JUDSON KERLLER. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer