import React from 'react'

import ruleta from "./images/ruleta.png"
import trading from "./images/tradingKing.png"
import meals from "./images/MealsSearch.png"
import team from "./images/OrgTeams.png"
import dalle from "./images/dall-e.png"

import {Skills} from "./components/Skills"
import Work from "./components/Work"


export function Mid() {   
    return (
    <div  className="mid">
        <Skills />
            <br></br><br></br>
        <Work />     
            <section className="projects">
                <div id="projects" className="main-content">
                    <h1>Projects</h1>
                    <p>Take a look at some of my projects: </p>
                </div>
                <div  className='project-holder'>
                    <a target='_blank' href='https://dall-e-copy.netlify.app'>
                    <div className='project'>
                        <img className="img-ruleta" src={dalle} />
                    </div>
                    </a>
                    <a target='_blank' href='https://ruletadelafortuna.netlify.app'>
                    <div className='project'>
                    <img className="img-ruleta" src={ruleta} />
                    </div>
                    </a>
                    <a target='_blank' href='https://meals-app.davodeveloper.repl.co/'>
                    <div className='project'>
                    <img className="img-ruleta3" src={meals} />
                    </div>
                    </a>
                    <a target='_blank' href='https://trading-view.davodeveloper.repl.co/'>
                    <div className='project'>
                    <img className="img-ruleta2" src={trading} />
                    </div>
                    </a>
                </div>
                <div  className='project-holder2'>
                    <div className='project2'>
                        <a target='_blank' href='https://dall-e-copy.netlify.app'>
                        <h3>Ai Image generator</h3>
                        </a>
                        <br></br>
                        <p>Browse any image by prompt<br></br>Share with the community<br></br>Full Stack Project</p>
                    </div>
                    <div className='project2'>
                        <a target='_blank' href='https://ruletadelafortuna.netlify.app'>
                        <h3>Fortune Roulette Game</h3>
                        </a>
                        <br></br>
                        <p>How many panels can you <br></br>complete? Inspired on the tv-show!<br></br>For 1 or 2 players</p>
                    </div>
                    <div className='project2'>
                    <a target='_blank' href='https://meals-app.davodeveloper.repl.co/'>
                    <h3>Meal Searcher</h3>
                    </a>
                        <br></br>
                        <p>Do a search of your favorites dishes!<br></br>You can add favorites</p>
                    </div>
                    <div className='project2'>
                    <a target='_blank' href='https://trading-view.davodeveloper.repl.co/'>
                    <h3>Trading View</h3>
                    </a>
                        <br></br>
                        <p>Control your favorite brands and determine a good chance to invest<br></br></p>
                    </div>
                </div>
            </section>
    </div>
    )
}
