import React from 'react';
import './illustration.scss'
import {illus_col_1, illus_col_2} from "../../data";
import { GridOne } from './Grids/GridOne';
import { GridThree, GridTwo } from './Grids/GridTwo';
import { GridFour } from './Grids/GridFour';
import { GridFive } from './Grids/GridFive';
const Illustration = () => {
    const col_1 = illus_col_1;
    const col_2 = illus_col_2;

    return (
        <div className='illustration' id = 'illustration'> 
        
            <div className='main'>
                
                <div className="iconContainer">
        <a className='downArrow' href='#gallery'><img src='assets/down arrow.png' alt=''/></a>
            </div>
        
        </div>
            <div className='grids'> 
            <GridFive />
            <GridFour />
            <GridTwo />
            <GridOne />
            <GridThree /></div>

        </div>
    )
}

export default Illustration;

/* */