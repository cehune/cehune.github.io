import React from 'react'
import './intro.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Intro = () => {
  return (
    <div className='intro' id='intro'>
      <div className="wrapper">
        <div className='greeting'><h2 className='hello'>hello! </h2> <h2>i'm</h2> </div>
        <h1> mckale chung  </h1>
        <hr />
        <h3> First year Mechatronics Engineering student at the University of Waterloo and illustrator</h3>
        
      </div>
      <div className="iconContainer">
        <a className='downArrow' href='#portfolio'><img src='assets/down arrow.png' alt=''/></a>
      </div>
         
    </div>
  )
}

export default Intro