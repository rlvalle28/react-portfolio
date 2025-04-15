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
import marci from '../../images/marci.png'
import urlsvg from '../../images/url-link.png'



const projects = () => {
  return (
    <div className='text-center' id='projects'>
        <div className='main-container'>
            <div className='container-column'>
                <h1>Projects</h1>
                    <div className='projectContainer d-flex flex-wrap justify-content-center align-items-center gap-4'>
                        <div className='parent-card'>
                        <div className='cardProj'>
                                <img src={cycle}></img>
                            </div>
                            <div className='img-hover d-flex justify-content-center align-items-center'>
                                <div className='img-logo'>
                                <a href='https://cycleandstrength.com/' target='_blank'>
                                    <img src={urlsvg} alt="Descriptive text" className="responsive-img" />
                                </a>
                                </div>
                            </div>
                        </div>

                        <div className='parent-card'>
                        <div className='cardProj'>
                                <img src={aventra}></img>
                            </div>
                            <div className='img-hover d-flex justify-content-center align-items-center'>
                                <div className='img-logo'>
                                <a href='https://aventramanagement.com/' target='_blank'>
                                    <img src={urlsvg} alt="Descriptive text" className="responsive-img" />
                                </a>
                                </div>
                            </div>
                        </div>

                        <div className='parent-card'>
                        <div className='cardProj'>
                                <img src={ida}></img>
                            </div>
                            <div className='img-hover d-flex justify-content-center align-items-center'>
                                <div className='img-logo'>
                                <a href='https://www.intuitivedataanalytics.com/' target='_blank'>
                                    <img src={urlsvg} alt="Descriptive text" className="responsive-img" />
                                </a>
                                </div>
                            </div>
                        </div>

                        <div className='parent-card'>
                        <div className='cardProj'>
                                <img src={blossom}></img>
                            </div>
                            <div className='img-hover d-flex justify-content-center align-items-center'>
                                <div className='img-logo'>
                                <a href='https://blossomecom.com/' target='_blank'>
                                    <img src={urlsvg} alt="Descriptive text" className="responsive-img" />
                                </a>
                                </div>
                            </div>
                        </div>

                        <div className='parent-card'>
                        <div className='cardProj'>
                                <img src={proofEasy}></img>
                            </div>
                            <div className='img-hover d-flex justify-content-center align-items-center'>
                                <div className='img-logo'>
                                <a href='https://proofeasy.io/' target='_blank'>
                                    <img src={urlsvg} alt="Descriptive text" className="responsive-img" />
                                </a>
                                </div>
                            </div>
                        </div>

                        <div className='parent-card'>
                        <div className='cardProj'>
                                <img src={vita}></img>
                            </div>
                            <div className='img-hover d-flex justify-content-center align-items-center'>
                                <div className='img-logo'>
                                <a href='https://vitanatural.nl/' target='_blank'>
                                    <img src={urlsvg} alt="Descriptive text" className="responsive-img" />
                                </a>
                                </div>
                            </div>
                        </div>

                        <div className='parent-card'>
                        <div className='cardProj'>
                                <img src={trailer}></img>
                            </div>
                            <div className='img-hover d-flex justify-content-center align-items-center'>
                                <div className='img-logo'>
                                <a href='https://www.altrailerrentals.com/' target='_blank'>
                                    <img src={urlsvg} alt="Descriptive text" className="responsive-img" />
                                </a>
                                </div>
                            </div>
                        </div>

                        <div className='parent-card'>
                        <div className='cardProj'>
                                <img src={flayboard}></img>
                            </div>
                            <div className='img-hover d-flex justify-content-center align-items-center'>
                                <div className='img-logo'>
                                <a href='https://johnb562.sg-host.com/' target='_blank'>
                                    <img src={urlsvg} alt="Descriptive text" className="responsive-img" />
                                </a>
                                </div>
                            </div>
                        </div>

                        <div className='parent-card'>
                        <div className='cardProj'>
                                <img src={marci}></img>
                            </div>
                            <div className='img-hover d-flex justify-content-center align-items-center'>
                                <div className='img-logo'>
                                <a href='https://marci-metzger.netlify.app/' target='_blank'>
                                    <img src={urlsvg} alt="Descriptive text" className="responsive-img" />
                                </a>
                                </div>
                            </div>
                        </div>

                    </div>
            </div>
        </div>
    </div>
  )
}

export default projects
