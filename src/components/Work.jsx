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
                    <div className='work2'>
                        <h3>ByLaPera, S.L.</h3>
                        <p>React FrontEnd Developer <br></br><span>- June 2022 to Present -</span></p>
                        <p>Little functionalities implementation; dropdown menus, hidden menus, search bars, pop-up's. <br></br>
                        <br></br>
                        API requests( GET ) with parameters and tokens.<br></br>
                        NoSQL requests ( GET, POST, PUT, DELETE ) <br></br>*Routes of the server checked by PostMan. <br></br>
                        <br></br>
                        Component testing essential functionality, user vision. <br></br>
                        <br></br>
                        Authentication JWT; Login, Register and user actions.</p>
                    </div>
                    <div className='square'>
                    </div>
                </article>
                <article className='works'>
                    <div className='square2'>
                    </div>
                    <div className='work'>
                        <h3>Freelance Developer</h3>
                        <p>Full Stack Web Developer <br></br><span>- February 2021 to June 2022 -</span></p>
                        <p>Web Project Manager for MyGreenPepper & Fotofiguras Mascotas: Design, development, deployment, updating and maintenance.</p>
                    </div>
                    <div className='square2'>
                    </div>
                </article>
                <article className='works'>
                    <div className='square3'>
                    </div>
                    <div className='work'>
                        <h3>Fotofiguras Mascotas</h3>
                        <p>Autónomo <br></br><span>- April 2016 to September 2021 -</span></p>
                        <p>Web development and deploy, customers support, production, shipment, sales, financial control..</p>
                    </div>
                    <div className='square3'>
                    </div>
                </article>
                <br></br>
                <button onClick={()=>downloadImage(resume)}><ImDownload></ImDownload> Resumé</button>
            </section>
  )
}

export default Work
