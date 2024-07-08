import React from "react";
import Header from "./component/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./views/Home";
import Projects from "./views/Projects";
import Contact from "./views/Contact";

function App() {
  return (
    <Router>
      <main className="App h-full eee">
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>    
      </main>
    </Router>
  );
}

export default App;