import React from "react";

import './App.css';
import Projects from './pages/Projects/Projects'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from './pages/Menu/Menu'
import Navbar from "./pages/Navbar/Navbar"
import Illustration from './pages/Illustration/Illustration';
import About from './pages/About/About';

import { useState } from 'react';




function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animation, setAnimation] = useState('closed');
  return (
    <div className="App">
      <BrowserRouter>

              <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}
                      animation={animation} setAnimation={setAnimation}/>
              <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}
                      animation={animation} setAnimation={setAnimation}/>
   
        <Routes>
            
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="illustration" element={<Illustration />} />
            <Route path="about" element={<About />} />

        </Routes>
     
    </BrowserRouter>
    </div>
  );
}

export default App;
