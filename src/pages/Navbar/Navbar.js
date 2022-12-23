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
const Navbar = ({ menuOpen, setMenuOpen}) => {
  const [animation, setAnimation] = useState('closed');
const onClick = () => {
  setAnimation('moving');
  setMenuOpen(!menuOpen);
  setTimeout(() => {
    setAnimation(animation === 'closed' ? 'open' : 'closed');
  }, 200);
};
  

  return (
    <div className = 'navbar' id='navbar'>
      <button onClick={onClick} className = 'hamburger'>
        <svg width='32' height='32' viewBox='0 0 24 24'>
            <motion.path
                stroke='white'
                stroke-width="10"
                animate={animation}
                variants={path01Variants}
            />
            <motion.path
                stroke='white'
                stroke-width="20"
                animate={animation}
                variants={path02Variants}
            />
        </svg>
    </button>

    </div>
  )
}

export default Navbar