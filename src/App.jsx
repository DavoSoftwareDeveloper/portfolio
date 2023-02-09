import { useState } from 'react'
import { Footer } from "./Footer"
import { Top } from "./Top"
import { Mid } from "./Mid"
import { Contact } from "./Contact"
import { Waves } from "./components/Waves"

function App() {

  return (
    <div className="App">
      <Top />
      <Mid /> 
      <Contact />
      <Footer />
      <Waves />
    
      

    </div>
  )
}

export default App
