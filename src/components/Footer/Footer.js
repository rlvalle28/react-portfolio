import React from 'react'
import logo_img from '../../images/logo_remove_bg.png';
import '../Footer/Footer.css';
import '../Footer/Footer_responsive.css';
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSkype } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='main-container' id='footer'>
      <div className='container-row'>
        <div className='footer'>
        <img src={logo_img}></img>
        <div className='react-icons'>
        <a href="https://www.facebook.com/rencevalle.28" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                    <a href="https://github.com/rlvalle28" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://wa.me/+639761652460" target="_blank" rel="noopener noreferrer">
                        <IoLogoWhatsapp />
                    </a>
                    <a href="skype:plug-shop?+639761652460" target="_blank" rel="noopener noreferrer">
                        <FaSkype />
                    </a>
                    <a href="https://discord.com/tel:+639761652460" target="_blank" rel="noopener noreferrer">
                        <FaDiscord />
                    </a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;