import React from 'react';

import '../Projects/projects.scss'
import { featuredProjectsJSON } from "../../data";
import { Link } from "react-router-dom";

const Featured = () => {
    const data = featuredProjectsJSON;
    const onClick = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div className='projects' id='featured'>
            <div className='projectsTitle'>
                <h1>Featured Projects</h1>

            </div>
            <div className='areashell'>
                <div className='area'>
                    <div className='container'>
                        <div className="item">

                            <div className='itemInfo'><a href={featuredProjectsJSON[0].github} target="_blank" className='github'><h3>{featuredProjectsJSON[0].title}</h3></a>
                                <p>{featuredProjectsJSON[0].description}</p></div>
                            <a href={featuredProjectsJSON[0].github} target="_blank" className='github'><div className='projectImage'><img src={featuredProjectsJSON[0].image} alt='' /></div></a>

                        </div>
                        <div className="item">

                            <div className='itemInfo'><a href={featuredProjectsJSON[1].github} target="_blank" className='github'><h3>{featuredProjectsJSON[1].title}</h3></a>
                                <p>{featuredProjectsJSON[1].description}</p></div>
                            <a href={featuredProjectsJSON[1].github} target="_blank" className='github'><div className='projectImage'><img src={featuredProjectsJSON[1].image} alt='' /></div></a>

                        </div>
                    </div>
                </div>
            </div>
            <h2 className='seemore'> <Link className='seemorelink' onClick={onClick} to="/projects">see more</Link></h2>
        </div>
    )
}

export default Featured;



