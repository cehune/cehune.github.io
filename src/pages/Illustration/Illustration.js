import React from 'react';
import './illustration.scss'
import {illus_col_1, illus_col_2} from "../../data";

const Illustration = () => {
    const col_1 = illus_col_1;
    const col_2 = illus_col_2;

    return (
        <div className='illustration' id = 'illustration'> 
        
            <div className='main'>
                <img src='https://cdn.discordapp.com/attachments/689212878200242194/1056387495299911691/natu.png' alt=' featured image' />
            </div>
            <div className='gallery'>
                <div className='area'>
                    <div className='col col-landscape'>
                        <div className="container">
                                {col_1.map((d) => (
                                
                                
                                <div className="item">
                                    <a href={d.insta} target="_blank"><img src={d.image} alt='' /></a>
                                </div>
                                ))}
                        </div>
                    </div>
                    <div className='col col-portrait'>
                        <div className="container">
                            {col_2.map((d) => (
                                
                                
                            <div className="item">
                                <a href={d.insta} target="_blank"><img src={d.image} alt='' /></a>
                            </div>
                            ))}
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Illustration;

/* */