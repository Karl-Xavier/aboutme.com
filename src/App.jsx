import React, { useState } from "react";
import Header from "./component/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./views/Home";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import Error from "./views/Error";

function App() {

  const [isOpen, setIsOpen] = useState(false)
  function toggleDrawer(){
    setIsOpen(!isOpen)
  }

  return (
    <Router>
      <main className="App h-full eee">
      <Header
        isOpen={isOpen}
        toggleDrawer={toggleDrawer}
        setIsOpen={setIsOpen}
      />
        <Routes>
          <Route path="/" element={<Home
            setIsOpen={setIsOpen}
          />}/>
          <Route path="/projects" element={<Projects
            setIsOpen={setIsOpen}
          />}/>
          <Route path="/contact" element={<Contact
            setIsOpen={setIsOpen}
          />}/>
          <Route path='*' element={<Error/>}/>
        </Routes>    
      </main>
    </Router>
  );
}

export default App;