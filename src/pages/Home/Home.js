import Intro from '../Intro/Intro';
import Featured from '../Featured/Featured';
import Contact from '../Contact/Contact';
import React from 'react'

const Home = () => {

    return(
        <div>
            
            <Intro />
            <Featured />

            <Contact />
        </div>
    )
}

export default Home;