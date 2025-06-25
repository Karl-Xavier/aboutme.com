import React, { useState } from "react";
import Header from "./component/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./views/Home";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import Error from "./views/Error";
import { useNavContext } from "./component/ContextAPI";
import ProjId from "./views/ProjId";

function App() {

  const { lightMode } = useNavContext()

  return (
    <Router>
      <main className={`App h-full ${lightMode ? 'aaa' : 'eee'}`}>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path='/projects/:id' element={<ProjId/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>    
      </main>
  </Router>
  );
}

export default App;