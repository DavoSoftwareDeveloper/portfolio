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

export function Skills() {
  return (
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

            <div className='container-name_up'>
                    <p>React</p>
            </div>
            <div className='container-name_mid'>
                    <p>Html5</p>
                    <p>CSS3</p>
                    <p>Javascript</p>
            </div>
            <div className='container-name_down'>
                    <p>Figma</p>
                    <p>Node.js</p>
                    <p>GitHub</p>
                    <p>Redux</p>
                    <p>GraphQL</p>
            </div>

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
  )
}
