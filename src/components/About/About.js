import hero_img from '../../images/renz.png';
import React from 'react';
import '../About/About.css';
import '../About/About_responsive.css';
import { PiArrowArcRightBold } from "react-icons/pi";

export default function hero() {
    return (
      <div className='text-center' id='about'>
      <div className="main-container">
           <div className="container-column">
                <div className='about'>
                <div className='hover-me'>
                    <h2>About Me<PiArrowArcRightBold /></h2>
                    {/* <p>Hover me</p> */}
                    </div>
                  <div className='flip-cards'>
                    <div className='flip-image'>
                      <img src={hero_img} className='mb-4' alt='' />
                    </div>
                    <div className='flip-back'>
                    <p>
                      Graduate with a Bachelor of Science in Information Technology from Holy Cross College Pampanga, I have developed a strong foundation in web development, focusing on creating responsive and user-friendly websites. My passion for technology and design drives me to continuously improve my skills in frontend development. Whether it's building sleek interfaces, ensuring cross-device compatibility, or enhancing user experience, I am dedicated to crafting modern, engaging web solutions. With a commitment to staying updated with the latest trends and technologies, I actively contribute to dynamic web projects that deliver real value to users and businesses alike.
                      </p>
                    </div>
                  </div>
                </div>
           </div>
        </div>
      </div>      
    )
}