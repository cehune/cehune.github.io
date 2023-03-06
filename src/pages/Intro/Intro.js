import * as React from "react";

import './intro.scss';




const Intro = () => {


  return (
    <div className='intro' id='intro'>
      <div className="wrapper">
       
        <h1 className='hello'>  hi, i'm celine. </h1>
        <hr />
        <h3> aspiring developer and equally aspiring illustrator</h3>
        
        <div className="iconContainer">
        <a className='downArrow' href='#featured'><img src='assets/down arrow.png' alt=''/></a>
      </div>
      </div>
      
         
    </div>
  );
};

export default Intro;