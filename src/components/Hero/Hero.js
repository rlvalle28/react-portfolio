import React, { useEffect }  from 'react';
import '../Hero/Hero.css';
import '../Hero/Hero_responsive.css';
import '../Button/Button.css';
import hero_img from '../../images/image_rb.png';
import TypingText from '../TypingText/TypingText';
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSkype } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const handleViewResume = () => {
    const filePath = '/Ralph_Laurence_Valle_FrontEndDev.pdf';
    
    window.open(filePath, '_blank');
  };


export default function Hero() {

    return (
        <di className='text-center' id='home'>
        <div className="main-container">
           <div className="container-row">
                <div className='hero'>
                    <h1>Hi! I'm Ralph Laurence Valle</h1>
                    <TypingText />
                    <div className='react-icons d-flex justify-content-center align-items-center gap-3 m-3'>
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
                    <button onClick={handleViewResume} className="view-button">View My Resume</button>
                </div>
                <div className='hero-img'>
                    <img src={hero_img} alt='' className='hero-img' />
                </div>
           </div>
        </div>
        </di>
    )
}

