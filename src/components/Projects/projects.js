import React from 'react'
import '../Projects/projects.css'

import druv from '../../images/dhruv_img.png'
import joint from '../../images/joint_img.png'
import ida from '../../images/ida_img.png'
import blossom from '../../images/blossom_img.png'

const projects = () => {
  return (
    <div className='text-center' id='projects'>
        <div className='main-container'>
            <div className='container-column'>
                <h1>Projects</h1>
                    <div className='projectContainer'>
                            <div className='cardProj'>
                                <a href='https://dhruv-realty.com/' target='_blank'>
                                <img src={druv}></img>
                                </a>
                            </div>
                            <div className='cardProj'>
                                <a href='https://jointpropertyventures.com/' target='_blank'>
                                <img src={joint}></img>
                                </a>
                            </div>
                            <div className='cardProj'>
                                <a href='https://www.intuitivedataanalytics.com/' target='_blank'>
                                <img src={ida}></img>
                                </a>
                            </div>
                            <div className='cardProj'>
                                <a href='https://blossomecom.com/' target='_blank'>
                                <img src={blossom}></img>
                                </a>
                            </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default projects
