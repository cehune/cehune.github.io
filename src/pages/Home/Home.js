import Intro from '../Intro/Intro';
import Featured from '../Featured/Featured';
import Contact from '../Contact/Contact';
import React from 'react'
import FeaturedIllus from '../Featured/FeaturedIllus';
import { useState } from 'react';
const Home = () => {

    return(
        <div>
            
            <Intro />
            <Featured />
            <FeaturedIllus />
            <Contact />
        </div>
    )
}

export default Home;