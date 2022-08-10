import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Portfolio from './components/Portfolio/Portfolio'

import Illustration from './components/Illustration/Illustration'

import Contact from './components/Contact/Contact'
import Menu from './components/Menu/Menu'
import './app.scss'

import { useState } from 'react';

const App = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  

  
  
  
  return (
    <div className='app' >
        
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            
            <div className="sections">
                <Intro />
                <Portfolio />
                <Illustration />
                <Contact className='contact'/>

            </div>
     
       
    </div>
  )
}

export default App