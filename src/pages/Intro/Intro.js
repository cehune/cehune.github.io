import * as React from "react";

import './intro.scss';




const Intro = () => {


  return (
    <div className='intro' id='intro'>
      <div className="wrapper">
       
        <h1 className='hello'>  hi, i'm mckale! </h1>
        <hr />
        <h3> mechatronics engineering student at uwaterloo,  illustrator</h3>
        <h3>test automation intern at ford</h3>
        <div className="iconContainer">
        <a className='downArrow' href='#featured'><img src='assets/down arrow.png' alt=''/></a>
      </div>
      </div>
      
         
    </div>
  );
};

export default Intro;