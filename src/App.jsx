import { useState } from 'react'
import { Footer } from "./Footer"
import { Top } from "./Top"
import { Mid } from "./Mid"
import { Contact } from "./Contact"

function App() {

  return (
    <div className="App">
      <Top />
      <Mid />
      <Contact />
      <Footer />
      <div className="bloque-izq">
            <div className="waves">
                <div className="new2-wave" id="wave1"></div>
                <div className="new2-wave" id="wave2"></div>
                <div className="new2-wave" id="wave3"></div>
                <div className="new2-wave" id="wave4"></div>
            </div>
        </div>
        <div className="bloque">
            <div className="waves">
                <div className="new-wave" id="wave1"></div>
                <div className="new-wave" id="wave2"></div>
                <div className="new-wave" id="wave3"></div>
                <div className="new-wave" id="wave4"></div>
            </div>
        </div>

    </div>
  )
}

export default App
