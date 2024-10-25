import React from 'react'
import '../Projects/projects.css'

import druv from '../../images/druv-realty.webp'
import joint from '../../images/joint-property-ventures.webp'
import ida from '../../images/ida.png'

const projects = () => {
  return (
    <div className='text-center' id='projects'>
        <div className='main-container'>
            <div className='container-row'>
                <h1>Projects</h1>
                    <div className='projectContainer'>
                            <div className='cardProj'>
                                <a href='https://dhruv-realty.com/' target='blank'>
                                <img src={druv}></img>
                                <h2>Druv Realty</h2>
                                </a>
                            </div>
                            <div className='cardProj'>
                            <a href='https://jointpropertyventures.com/' target='blank'>
                                <img src={joint}></img>
                                <h2>Joint Property Ventures</h2>
                                </a>
                            </div>
                            <div className='cardProj'>
                            <a href='https://www.intuitivedataanalytics.com/' target='blank'>
                                <img src={ida}></img>
                                <h2>Intuitive Data Analytics</h2>
                                </a>
                            </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default projects
