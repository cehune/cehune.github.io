import React from 'react';
import './about.scss'
import AnimAbout from './AnimAbout';
import Contact from '../Contact/Contact';
//<AnimAbout  className='anim'/>
const About = () => {
    return (
        <div className='about' id = 'about'> 
            <div className='info'>

            <div className = 'left'> 
                <AnimAbout  className='anim'/>
                </div>
                <div className='right'>
                    <h1>Hi again!</h1>
                    <p className='blurb'>A little about me, i’m studying 
                    Mechatronics Engineering, and i'm currently on an internship term. I love drawing, programming, electronics, designing, piano,  and rock climbing!</p>
                    <hr />
                    <div className='edu'>
                        <h2>Education</h2>
                        <h3>University of Waterloo</h3>
                        <h3>Bachelors of Applied Science in Mechatronics Engineering, 2022 - Present</h3>
                        <h3>GPA: 3.97 (94 / 100)</h3>
                    </div>
                    <div className='work'>
                        <h2>Work Experience</h2>
                        <h3>Test Automation Intern @ Ford || Janurary 2023 - Present</h3>
                        <h3>Computer Vision Team Member @ UWARG || December 2022 - Present</h3>
                        
                    </div>
                    <div className='languages'>
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