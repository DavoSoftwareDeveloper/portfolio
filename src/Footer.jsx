import React from 'react'
import {AiOutlineCopyright} from "react-icons/ai"
import {BsGithub} from "react-icons/bs"
import {AiOutlineTwitter} from "react-icons/ai"


export function Footer() {
  return (
    <div className="footer">

        <ul className="social-icons">
            <li><a target="_blank" href="#"><ion-icon name="logo-linkedin"></ion-icon></a></li>
            <li><a target="_blank" href="https://github.com/DavoSoftwareDeveloper?tab=repositories"><BsGithub name="logo-instagram"></BsGithub></a></li>
            <li><a target="_blank" href="#"><AiOutlineTwitter name="logo-twitter"></AiOutlineTwitter></a></li>
        </ul>
        <ul className="menu">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        </ul>
        <p>Copyright <AiOutlineCopyright></AiOutlineCopyright> 2023 davodeveloper.com</p>
    
    </div>
  )
}
