import React, { useState } from "react";
import Header from "./component/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./views/Home";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import Error from "./views/Error";

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const [lightMode, setLightMode] = useState(false)

  function toggleBackground(){
    setLightMode(!lightMode)
}

  function toggleDrawer(){
    setIsOpen(!isOpen)
  }

  return (
    <Router>
      <main className={`App h-full ${lightMode ? 'aaa' : 'eee'}`}>
      <Header
        isOpen={isOpen}
        toggleDrawer={toggleDrawer}
        setIsOpen={setIsOpen}
        lightMode={lightMode}
        toggleBackground={toggleBackground}
      />
        <Routes>
          <Route path="/" element={<Home
            setIsOpen={setIsOpen}
            lightMode={lightMode}
          />}/>
          <Route path="/projects" element={<Projects
            setIsOpen={setIsOpen}
            lightMode={lightMode}
          />}/>
          <Route path="/contact" element={<Contact
            setIsOpen={setIsOpen}
            lightMode={lightMode}
          />}/>
          <Route path='*' element={<Error/>}/>
        </Routes>    
      </main>
    </Router>
  );
}

export default App;