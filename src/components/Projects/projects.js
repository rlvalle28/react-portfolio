import React from 'react'
import '../Projects/projects.css'
import '../Projects/project_responsive.css'
import cycle from '../../images/cycle.png'
import aventra from '../../images/aventra.png'
import ida from '../../images/ida_img.png'
import blossom from '../../images/blossom_img.png'
import proofEasy from '../../images/proof_easy.png'
import vita from '../../images/vita.png'
import trailer from '../../images/trailer.png'
import flayboard from '../../images/flayboard.png'



const projects = () => {
  return (
    <div className='text-center' id='projects'>
        <div className='main-container'>
            <div className='container-column'>
                <h1>Projects</h1>
                    <div className='projectContainer'>
                            <div className='cardProj'>
                                <a href='https://cycleandstrength.com/' target='_blank'>
                                <img src={cycle}></img>
                                </a>
                            </div>
                            <div className='cardProj'>
                                <a href='https://aventramanagement.com/' target='_blank'>
                                <img src={aventra}></img>
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
                            <div className='cardProj'>
                                <a href='https://proofeasy.io/' target='_blank'>
                                <img src={proofEasy}></img>
                                </a>
                            </div>
                            <div className='cardProj'>
                                <a href='https://vitanatural.nl/' target='_blank'>
                                <img src={vita}></img>
                                </a>
                            </div>
                            <div className='cardProj'>
                                <a href='https://www.altrailerrentals.com/' target='_blank'>
                                <img src={trailer}></img>
                                </a>
                            </div>
                            <div className='cardProj'>
                                <a href='https://johnb562.sg-host.com/' target='_blank'>
                                <img src={flayboard}></img>
                                </a>
                            </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default projects
