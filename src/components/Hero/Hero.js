import React from 'react';
import '../Hero/Hero.css';
import '../Hero/Hero_responsive.css';
import '../Button/Button.css';
import hero_img from '../../images/image_rb.png';
import TypingText from '../TypingText/TypingText';
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const handleViewResume = () => {
    const filePath = 'Ralph_Laurence_valle.pdf';
    
    window.open(filePath, '_blank');
  };


export default function hero() {

    return (
        <div className='text-center' id='home'>
        <div className="main-container">
           <div className="container-row">
                <div className='hero'>
                    <h1>Hi! I'm Ralph Laurence Valle</h1>
                    <TypingText />
                    <div className='react-icons m-3'>
                    <a href="https://www.facebook.com/rencevalle.28" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                    <a href="https://github.com/rlvalle28" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <FaInstagramSquare />
                    <AiFillTikTok />
                    </div>
                    <button onClick={handleViewResume} className="view-button">View My Resume</button>
                </div>
                <div className='hero-img'>
                    <img src={hero_img} alt='' className='hero-img' />
                </div>
           </div>
        </div>
        </div>
    )
}

