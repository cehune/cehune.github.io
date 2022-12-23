import React from 'react'

import { BrowserRouter, Route, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import './navbar.scss'


const path01Variants = {
  open: { d: 'M3.06061 2.99999L21.0606 21' },
  closed: { d: 'M0 9.5L24 9.5' },
 }

 const path02Variants = {
  open: { d: 'M3.00006 21.0607L21 3.06064' },
  moving: { d: 'M0 14.5L24 14.5' },
  closed: { d: 'M0 14.5L15 14.5' },
 }
const Navbar = ({ menuOpen, setMenuOpen, animation, setAnimation}) => {
  //const [animation, setAnimation] = useState('closed');
const onClick = () => {
  setAnimation('moving');
  setMenuOpen(!menuOpen);
  setTimeout(() => {
    setAnimation(animation === 'closed' ? 'open' : 'closed');
  }, 200);
};
  

  return (
    <div className = {( 'navbar ') + ( menuOpen && 'active ') } id='navbar'>
        <div className='wrapper'>
            <div className = 'left'>
              <div className='icon' >

              </div>
              <div className = 'name'>
                  <h3>celine c </h3>

              </div>

          </div>
          <div className = 'right'>
              <button onClick={onClick} className = 'hamburger'>
                <svg width='44' height='44' viewBox='0 0 24 24'>
                    <motion.path

                        animate={animation}
                        variants={path01Variants}
                    />
                    <motion.path
            
                
                        animate={animation}
                        variants={path02Variants}
                    />
                </svg>
              </button>

          </div>
        </div>
    </div>
  )
}

export default Navbar