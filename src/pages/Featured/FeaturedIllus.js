import React from 'react';
import './featuredillus.scss'

import { Link } from "react-router-dom";

const FeaturedIllus = () => {
    const onClick = () => {
        window.scrollTo(0, 0); 
      };
    return (
        <div className='featuredillus' id = 'featuredillus'> 
            <div className = 'container'id="container">
                
                <div className='images'>
                    <img src='https://cdn.discordapp.com/attachments/689212878200242194/1056387495299911691/natu.png' alt=''/>
                    
                    <img src='https://cdn.discordapp.com/attachments/689212878200242194/1056387530402050078/fish_parade.png' alt=''/>
                    <img src='https://cdn.discordapp.com/attachments/689212878200242194/1056387511066308608/winter_girl.png' alt=''/>
                    <img src='https://cdn.discordapp.com/attachments/689212878200242194/1059898636110151880/fish_parade_1.png' alt=''/>

                </div>
                <h2><Link  onClick={onClick} to="/illustration">Illustrations..</Link></h2>
                
            </div>
          <div className='space'></div>
        </div>
    )
}

export default FeaturedIllus;


     
         