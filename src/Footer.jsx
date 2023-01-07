import React from 'react'
import {AiOutlineCopyright} from "react-icons/ai"
import {BsGithub} from "react-icons/bs"


export function Footer() {
  return (
    <div className="footer">

        <ul className="social-icons">
            <li><a href="#"><ion-icon name="logo-linkedin"></ion-icon></a></li>
            <li><a href="#"><BsGithub name="logo-instagram"></BsGithub></a></li>
        </ul>
        <ul className="menu">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        </ul>
        <p>Copyright <AiOutlineCopyright></AiOutlineCopyright> 2022 davodeveloper.com</p>
    
    </div>
  )
}
