import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Portfolio from './components/Portfolio/Portfolio'
import Works from './components/Works/Works'
import Illustration from './components/Illustration/Illustration'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import './app.scss'

const App = () => {
  return (
    <div className='app'>
        
            <Navbar />
            <div className="sections">
                <Intro />
                <Portfolio />
                <Works />
                <Illustration />
                <About />
                <Contact />
            </div>
       
    </div>
  )
}

export default App