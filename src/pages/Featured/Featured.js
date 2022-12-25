import React from 'react';
import './featured.scss'

import {featuredProjectsJSON} from "../../data";
import { Link } from "react-router-dom";

const Featured = () => {
    const data = featuredProjectsJSON;
    return (
        <div className='featured' id = 'featured'> 
            <div className='content'>
            <div className='left'>
                <h1>Featured Projects..</h1>
                <p>In C++, Python, or general mechatronics</p>
                <div className='item itemleft'>
                <div className='image'><a href="https://github.com/mckalechung/Canadian-Assistive-Rescue-Prototype-Robot" target="_blank"><img src="https://cdn.discordapp.com/attachments/689212878200242194/1056230897541709914/IMG_4401_1.jpg" alt='' /></a></div>
                    <div className='projectTitle'><h3>Autonomous Simulated Rescue Robot</h3></div>
                                    </div>

            </div>

            <div className='right'>
                    <div className='item itemright'>
                    <a href="https://github.com/mckalechung/computer-vision-bootcamp" target="_blank"><img src="https://cdn.discordapp.com/attachments/689212878200242194/1056233711416377414/image.png" alt='' /></a>
                        <div className='projectTitle'><h3>CIFAR-10 Image Classifier</h3></div>
                        
                    </div>
                    <div className='button-redirect'>
                        <Link className = 'redirect 'to="/projects">All Projects</Link>
                    </div>
            </div>

            </div>
         
        </div>
    )
}

export default Featured;


     
         