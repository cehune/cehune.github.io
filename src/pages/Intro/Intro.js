import * as React from "react";

import './intro.scss';
import {useState} from 'react'

const particles = []
for (var i = 0; i < 30; ++i){
  particles.push(<div className="circle-container"><div className="circle"></div></div>)
}

const Intro = () => {
  

  return (
    <div className='intro' id='intro'>

      <div className="wrapper">
        <h3> illustrator and developer ||</h3>
        <h1 className='hello'>  CELINE CHUNG </h1>
        <hr />
        
        
        <div className="iconContainer">
        <a className='downArrow' href='#featured'><img src='assets/down arrow.png' alt=''/></a>


      </div>

      <div className="circle-container"><div className="circle"></div></div>

      </div>
      {particles}
      
         
    </div>
  );
};

export default Intro;