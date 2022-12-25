import React from 'react';
import './illustration.scss'
import {illus_col_1, illus_col_2, illus_col_3} from "../../data";

const Illustration = () => {
    const col_1 = illus_col_1;
    const col_2 = illus_col_2;
    const col_3 = illus_col_3
    return (
        <div className='illustration' id = 'illustration'> 
        
            <div>
                <h1>Projects</h1>
                <p>Assorted soup of ReactJS, Python, C/C++, and mechatronics systems.</p>
                <p>t girl and her little anime girls</p>
            </div>
            <div className='area'>
                <div className='col'>
                    <div className="container">
                            {col_1.map((d) => (
                            
                            
                            <div className="item">
                                <a href={d.github} target="_blank"><img src={d.image} alt='' /></a>
                            </div>
                            ))}
                    </div>
                </div>
                <div className='col'>
                    <div className="container">
                        {col_2.map((d) => (
                            
                            
                        <div className="item">
                            <a href={d.github} target="_blank"><img src={d.image} alt='' /></a>
                        </div>
                        ))}
                    </div>
                </div>
                <div className='col'>
                    <div className="container">
                        {col_3.map((d) => (
                            
                            
                            <div className="item">
                                <a href={d.github} target="_blank"><img src={d.image} alt='' /></a>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Illustration;