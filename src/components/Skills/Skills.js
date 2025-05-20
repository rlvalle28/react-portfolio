import React from 'react'
import '../Skills/Skills.css';
import '../Skills/Skills_responsive.css';
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import html_img from '../../images/html.png';
import css_img from '../../images/css.png';
import js_img from '../../images/js.png';
import bootstrap_img from '../../images/bootstrap.png';
import react_img from '../../images/react_text.png';
import php_img from '../../images/php.png';
import wp_img from '../../images/wp.png';



const Skills = () => {
  return (
    <div className='text-center' id='skills'>
      <div className='main-container'>
        <div className='container-row'>
        <h1>Skills</h1>
          <div className='CardContainer d-flex justify-content-center align-items-center flex-wrap gap-4'>
            <div className='Card d-flex flex-column'>
              <div className='cardTop'>
                <img src={html_img}></img>
              </div>
              <div className='cardBottom mt-2'>
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStarHalf />
              <IoMdStarOutline />
              </div>
              <div className='rate'>
                <p className='mb-3'>4.5 / 5</p>
              </div>
            </div>
            <div className='Card d-flex flex-column'>
              <div className='cardTop'>
                <img src={css_img}></img>
              </div>
              <div className='cardBottom mt-2'>
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStarHalf />
              <IoMdStarOutline />
              </div>
               <div className='rate'>
                <p className='mb-3'>4.5 / 5</p>
              </div>
            </div>
            <div className='Card d-flex flex-column'>
              <div className='cardTop'>
              <img src={js_img}></img>
              </div>
              <div className='cardBottom m-2'>
              <IoMdStar />
              <IoMdStar />
              <IoMdStarHalf />
              <IoMdStarOutline />
              <IoMdStarOutline />
              </div>
              <div className='rate'>
                <p className='mb-3'>3.5 / 5</p>
              </div>
            </div>
            <div className='Card d-flex flex-column'>
              <div className='cardTop'>
              <img src={bootstrap_img}></img>
              </div>
              <div className='cardBottom'>
              <IoMdStar />
              <IoMdStar />
              <IoMdStarHalf />
              <IoMdStarOutline />
              <IoMdStarOutline />
              </div>
              <div className='rate'>
                <p className='mb-3'>3.5 / 5</p>
              </div>
            </div>
            <div className='Card d-flex flex-column'>
              <div className='cardTop'>
              <img src={react_img}></img>
              </div>
              <div className='cardBottom'>
              <IoMdStar />
              <IoMdStar />
              <IoMdStarHalf />
              <IoMdStarOutline />
              <IoMdStarOutline />
              </div>
              <div className='rate'>
                <p className='mb-3'>3.5 / 5</p>
              </div>
            </div>
            <div className='Card d-flex flex-column'>
              <div className='cardTop'>
              <img src={php_img}></img>
              </div>
              <div className='cardBottom'>
              <IoMdStar />
              <IoMdStar />
              <IoMdStarHalf />
              <IoMdStarOutline />
              <IoMdStarOutline />
              </div>
              <div className='rate'>
                <p className='mb-3'>3.5 / 5</p>
              </div>
            </div>
            <div className='Card d-flex flex-column'>
              <div className='cardTop'>
              <img src={wp_img}></img>
              </div>
              <div className='cardBottom'>
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStarHalf />
              <IoMdStarOutline />
              </div>
              <div className='rate'>
                <p className='mb-3'>4.5 / 5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
