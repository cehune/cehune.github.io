import React from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './pages/Projects/Projects'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Example from "./pages/Intro/Intro";
import Menu from './pages/Menu/Menu'
import Navbar from "./pages/Navbar/Navbar"

import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      
      <Routes>

          <Route index element={<Example />} />
          <Route path="projects" element={<Projects />} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
