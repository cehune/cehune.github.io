import React from 'react'
import './intro.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Intro = () => {
  return (
    <div className='intro' id='intro'>
      <div className="wrapper">
        <div className='greeting'><h2 className='hello'>hello! </h2> <h2>i'm</h2> </div>
        <h1> celine chung  </h1>
        <hr />
        <h3> first year mechatronics engineering student at the university of waterloo and passionate illustrator</h3>
        
      </div>
      <div className="iconContainer">
        <a className='downArrow' href='#portfolio'><img src='assets/down arrow.png' alt=''/></a>
      </div>
         
    </div>
  )
}

export default Intro