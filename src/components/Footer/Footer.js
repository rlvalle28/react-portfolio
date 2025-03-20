import React from 'react'
import logo_img from '../../images/logo_remove_bg.png';
import '../Footer/Footer.css';
import '../Footer/Footer_responsive.css';


const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <div className='main-container' id='footer'>
      <div className='container-row'>
        <div className='footer'>
        <img src={logo_img}></img>
       <h6>
       © {currentYear} All rights reserved.
       </h6>
        </div>
      </div>
    </div>
  )
}

export default Footer;