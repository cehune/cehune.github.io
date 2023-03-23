import React from 'react';
import './projects.scss'
import { featuredProjectsJSON } from "../../data";

const Projects = () => {
    const data = featuredProjectsJSON;
    return (
        <div className='projects' id='projects'>

            <div className='projectsTitle'>
                <h1>Projects</h1>
                <p> An assorted soup of ReactJS, Python, C/C++, and mechatronics systems.</p>
            </div>

            <div className='areashell'>
                <div className='area'>
                    <div className="container">
                        {data.map((d) => (


                            <div className="item">

                                <div className='itemInfo'>
                                    <a href={d.github} target="_blank" className='github'><h3>{d.title}</h3></a>
                                    <p>{d.description}</p>
                                </div>
                                <a href={d.github} target="_blank" className='github'><div className='projectImage'><img src={d.image} alt='' /></div></a>

                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Projects;

