import React, {useState} from 'react'
import { Navbar } from "./components/Navbar"
import davo1r from "./images/davo1r.png"
import davo3r from "./images/davo3r.png"


export function Top() {
  const [photoHover, setPhotoHover] = useState(true)


  
     window.addEventListener("scroll", function(){
      const title = document.getElementById("title");
      const parraf = document.getElementById("parraf");
      const value = window.scrollY;
      title.style.transform = `translateX(-${value * 0.25}px)`;
      parraf.style.transform = `translateX(${value * 0.55}px)`;
  
    } )
    


  return (
    <div id="about" className="top">   
        <Navbar />
        <div className="top-content">
            <div  id="photo-containerExt" className="photo">
                <div id="photo-container" className="photo">
                  <img  className="photo" onClick={()=>setPhotoHover(prev => !prev)} id={photoHover?"img":"img_2"} src={photoHover?davo1r:davo3r}></img>
                </div>
            </div>
            <div className='flex-top'>
                  <div className="title" id="title"> Hi! I'm <span className="border-text">Davo</span>, software <span className="border-text">developer</span> </div>
                  <p className="text-top" id="parraf">Passionate about technology and art.<br>
                    </br>Totally engaged to the project development, from the initial idea where we find the fundamental parts to a satisfactory solution for achieve the goals needed.<br>
                    </br> Full-Stack devoted to design and efficiency.</p>
            </div>
        </div>
    </div>
  )
}
