import React from 'react';
import './illustration.scss'
import {illus_col_1, illus_col_2} from "../../data";
import { GridOne } from './Grids/GridOne';
const Illustration = () => {
    const col_1 = illus_col_1;
    const col_2 = illus_col_2;

    return (
        <div className='illustration' id = 'illustration'> 
        
            <div className='main'>
                
                <div className="iconContainer">
        <a className='downArrow' href='#gallery'><img src='assets/down arrow.png' alt=''/></a>
      </div>
        
            </div><GridOne />
            <div className='gallery' id='gallery'>
                <div className='galleryarea'>
                    <div className='col col-landscape'>
                        <div className="container">
                                {col_1.map((d) => (
                                
                                
                                <div className="galitem">
                                    <a href={d.insta}  rel="noreferrer"target="_blank"><img src={d.image} alt='' /></a>
                                </div>
                                ))}
                        </div>
                    </div>
                    <div className='col col-portrait'>
                        <div className="container">
                            {col_2.map((d) => (
                                
                                
                            <div className="galitem">
                                <a href={d.insta}  rel="noreferrer" target="_blank"><img src={d.image} alt='' /></a>
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