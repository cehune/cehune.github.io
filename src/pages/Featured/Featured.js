import React from 'react';
import './featured.scss'

import {featuredProjectsJSON} from "../../data";
import { Link } from "react-router-dom";

const Featured = () => {
    const data = featuredProjectsJSON;
    return (
        <div className='featured' id = 'featured'> 
            <h2>Featured Projects</h2>
 


            <div className="container">
                    {data.map((d) => (
                    
                    
                <div className="item">
                    <img src={d.image} alt='' />
                    <div className='projectTitle'><h3>{d.title}</h3></div>
                    <a href={d.github} target="_blank">GitHub</a>
          </div>
          ))}
        
             </div>
                   
                        <div className="button-area">
                            <div className='redirect'>
                                <Link to="/projects">See More Projects</Link>
                            </div>
                        </div>
                
                    
        </div>
    )
}

export default Featured;