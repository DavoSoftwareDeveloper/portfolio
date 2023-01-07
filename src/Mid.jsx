import React from 'react'
import {ImHtmlFive} from "react-icons/im"
import {SiCss3} from "react-icons/si"
import {SiJavascript} from "react-icons/si"
import {SiReact} from "react-icons/si"
import {CgFigma} from "react-icons/cg"
import {SiNodedotjs} from "react-icons/si"
import {FaGitAlt} from "react-icons/fa"
import {SiRedux} from "react-icons/si"
import {SiGraphql} from "react-icons/si"
import {ImDownload} from "react-icons/im"
import ruleta from "./images/ruleta.png"
import trading from "./images/tradingKing.png"
import meals from "./images/MealsSearch.png"
import team from "./images/OrgTeams.png"

import {Skills} from "./components/Skills"


export function Mid() {   
    return (
    <div  className="mid">
            <div id="skills" className="main-content">
                <h1>Skills</h1>
                <p>Find here some technologies that I use every day: </p>
                <div className='grid-container'>  
                    <div className='header'>
                        <p>Main</p>
                        <p>Essentials</p>
                        <p>Tools</p>
                    </div>  
                    <div className='items'>
                        <div className='container-simbol_up'>
                                <SiReact className='simbol-main'></SiReact>
                        </div>
                        <div className='container-simbol_mid'>
                                <ImHtmlFive className='simbol'></ImHtmlFive>
                                <SiCss3 className='simbol'></SiCss3>
                                <SiJavascript className='simbol'></SiJavascript> 
                        </div>
                        <div className='container-simbol_down'>
                                <CgFigma className='simbol'></CgFigma>
                                <SiNodedotjs className='simbol'></SiNodedotjs>
                                <FaGitAlt className='simbol'></FaGitAlt>
                                <SiRedux className='simbol'></SiRedux>
                                <SiGraphql className='simbol'></SiGraphql>
                        </div>
                                
                        <div className='container-block'>
                            <div className='block block_1'></div>
                        </div>
                        <div className='container-block'>
                            <div className='block block_2'></div>
                            <div className="block block_2"></div>
                            <div className="block block_2"></div>
                        </div>
                        <div className='container-block'>
                            <div className='block block_3'></div>
                            <div className="block block_3"></div>
                            <div className="block block_3"></div>
                            <div className="block block_3"></div>
                            <div className="block block_3"></div>
                        </div>
                    </div>                   
                </div>
            </div>
            <br></br><br></br>
            <section id="work" className="main-content">
                <h1>Work</h1>
                <p>Relevant latest works on I had been. </p>
                <article className='works'>
                    <div className='square'>
                    </div>
                    <div className='work'>
                        <h3>La Pera Limonera</h3>
                        <p>React FrontEnd Developer <span>- June 2021 to Present -</span></p>
                        <p>Developments with React JS modern features:<br></br> hooks, life-cycle methods; managing status and APIs with Redux Saga; testing with Jest-Enzyme; Azure DevOps & Amazon Web Service.</p>
                    </div>
                    <div className='square'>
                    </div>
                </article>
                <article className='works'>
                    <div className='square'>
                    </div>
                    <div className='work'>
                        <h3>Freelance</h3>
                        <p>Full Stack Web Developer <span>- February 2019 to June 2021 -</span></p>
                        <p>Web Project Manager for MyGreenPepper & Fotofiguras Mascotas: Design, development, deployment, updating and maintenance.</p>
                    </div>
                    <div className='square'>
                    </div>
                </article>
                <br></br>
                <button><ImDownload></ImDownload> Resume</button>
            </section>
            <section className="projects">
                <div id="projects" className="main-content">
                    <h1>Projects</h1>
                    <p>Take a look at some of my projects: </p>
                </div>
                <div  className='project-holder'>
                    <div className='project'>
                        <img className="img-ruleta" src={ruleta} />
                    </div>
                    <div className='project'>
                    <img className="img-ruleta2" src={trading} />
                    </div>
                    <div className='project'>
                    <img className="img-ruleta3" src={meals} />
                    </div>
                    <div className='project'>
                    <img className="img-ruleta4" src={team} />
                    </div>
                </div>
                <div  className='project-holder2'>
                    <div className='project2'>
                        <h3>Fortune Roulette Game</h3>
                        <br></br>
                        <p>How many panels can you <br></br>complete? Inspired on the tv-show!<br></br>For 1 or 2 players</p>
                    </div>
                    <div className='project2'>
                    <h3>Trading View</h3>
                        <br></br>
                        <p>Control your favorite brands and determine a good chance to invest<br></br></p>
                    </div>
                    <div className='project2'>
                    <h3>Meal Searcher</h3>
                        <br></br>
                        <p>How many panels can you achive? Inspired on the tv-show!<br></br>You can add favorites</p>
                    </div>
                    <div className='project2'>
                    <h3>Team Organitzation app</h3>
                        <br></br>
                        <p>Create and change WorkTeams, keep a view of all members<br></br></p>
                    </div>
                </div>
            </section>
    </div>
    )
}
