import React from 'react'
import {ImDownload} from "react-icons/im"
import FileSaver from 'file-saver'
import resume from '../images/resume_2.pdf'


function downloadImage(file){
        FileSaver.saveAs(file, `davo-developer-resume.pdf`)
}

const Work = () => {
  return (
<section id="work" className="main-content">
                <h1>Work</h1>
                <p>Relevant latest works on I had been. </p>
                <article className='works'>
                    <div className='square'>
                    </div>
                    <div className='work'>
                        <h3>La Pera Limonera</h3>
                        <p>React FrontEnd Developer <span>- June 2022 to Present -</span></p>
                        <p>Developments with React JS modern features:<br></br> hooks, life-cycle methods; managing status and APIs; testing with Jest-Enzyme.</p>
                    </div>
                    <div className='square'>
                    </div>
                </article>
                <article className='works'>
                    <div className='square'>
                    </div>
                    <div className='work'>
                        <h3>Freelance Developer</h3>
                        <p>Full Stack Web Developer <span>- February 2021 to June 2022 -</span></p>
                        <p>Web Project Manager for MyGreenPepper & Fotofiguras Mascotas: Design, development, deployment, updating and maintenance.</p>
                    </div>
                    <div className='square'>
                    </div>
                </article>
                <article className='works'>
                    <div className='square'>
                    </div>
                    <div className='work'>
                        <h3>Fotofiguras Mascotas</h3>
                        <p>Autónomo <span>- April 2015 to September 2021 -</span></p>
                        <p>Web development and deploy, customers support, production, shipment, sales, financial control..</p>
                    </div>
                    <div className='square'>
                    </div>
                </article>
                <br></br>
                <button onClick={()=>downloadImage(resume)}><ImDownload></ImDownload> Resumé</button>
            </section>
  )
}

export default Work
