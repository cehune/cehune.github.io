import React from 'react';
import './featuredillus.scss'

import { Link } from "react-router-dom";

const FeaturedIllus = () => {

    return (
        <div className='featuredillus' id = 'featuredillus'> 
            <div className = 'container'id="container">
                
                <div className='images'>
                    <img src='https://cdn.discordapp.com/attachments/689212878200242194/1056387495299911691/natu.png' alt=''/>
                    <img src='https://cdn.discordapp.com/attachments/689212878200242194/1056359430037458964/image.png' alt=''/>
                    <img src='https://cdn.discordapp.com/attachments/689212878200242194/1056387530402050078/fish_parade.png' alt=''/>
                    <img src='https://cdn.discordapp.com/attachments/689212878200242194/1056387511066308608/winter_girl.png' alt=''/>


                </div>
                <h2><Link to="/illustration">Illustrations..</Link></h2>
                
            </div>
          <div className='space'></div>
        </div>
    )
}

export default FeaturedIllus;


     
         