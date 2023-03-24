import React from 'react';
import './about.scss'
import AnimAbout from './AnimAbout';
import Contact from '../Contact/Contact';
//<AnimAbout  className='anim'/>
const About = () => {
    return (
        <div className='about' id = 'about'> 
            <div className='info'>

        {  /*<div className = 'left'> 
                <AnimAbout  className='anim'/>
    </div>*/}  
                <div className='right'>
                    <h1>Hi again!</h1>
                    <p className='blurb'>Thanks for checking out this site. A little about me,
                     I love drawing, programming, designing, piano, cooking, and rock climbing!
                     Below are the important lightning round facts about me. </p>

                    <div >
                        <h2 className='status'>Current Status: Working on Internship at Ford!</h2>
                    </div>
                    <hr />
                    <div className='edu'>
                        <h2>Education</h2>
                        <h3>University of Waterloo</h3>
                        <h3>Bachelors of Applied Science in Mechatronics Engineering, 2022 - Present</h3>
                        <h3>Grade: 94/100, Deans Honour List</h3>
                    </div>
                    <div className='work'>
                        <h2>Work Experience</h2>
                        <h3>Test Automation Intern @ Ford || Janurary 2023 - Present</h3>
                        <h3>Firmware Developer @ UWARG || Janurary 2023 - Present</h3>
                        
                    </div>
                    <div className='skills'>
                        <h2>Skills</h2>
                        <h3>Languages: Python, C++, ReactJS </h3>
                        <h3>Libraries: OpenCV, PyTorch, Pandas, Numpy, Matplotlib</h3>
                        
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    )
}

export default About;