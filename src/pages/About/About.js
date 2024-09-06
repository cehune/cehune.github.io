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
                <div className='experience'>
                    <h1>Hi again!</h1>
                    <p className='blurb'>Thanks for checking out this site. A little about me,
                     I love drawing, graphics, and cycling. No more information for you! </p>

                    
                    <hr />
                    <div className='edu'>
                        <h2>Education</h2>
                        <h3>University of Waterloo</h3>
                        <h3>Bachelors of Applied Science in Mechatronics Engineering, 2022 - Present</h3>
                        <h3>Grade: 94.18/100 , Deans Honour List for all academic Terms x3/3</h3>
                    </div>
                    <div className='work'>
                        <h2>Work Experience</h2>
                        <h3>WIll Update, WATONOMOUS, FORD, GM, WARG</h3>
                        
                    </div>
                    <div className='skills'>
                        <h2>Skills</h2>
                        <h3>Languages: Python, C++, Javascript, Kotlin </h3>
                        <h3>Libraries: OpenGL, Espresso, insert library here</h3>
                        
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    )
}

export default About;