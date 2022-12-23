import React from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './pages/Projects/Projects'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Intro from "./pages/Intro/Intro";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Intro />} />
          <Route path="projects" element={<Projects />} />

        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
