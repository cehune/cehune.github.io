import React from 'react'
import './menu.scss'
import { Outlet, Link } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Menu = ({ menuOpen, setMenuOpen, animation, setAnimation }) => {

    const onClick = () => {
        setAnimation('moving');
        window.scrollTo(0, 0);
        setMenuOpen(!menuOpen);
        setTimeout(() => {
          setAnimation(animation === 'closed' ? 'open' : 'closed');
        }, 200);
      };
  return (
    
    <div className={'menu ' + ( menuOpen && 'active')}>
        <ul>
            <li onClick={onClick}>
                <Link to="/">Home</Link>
            </li>
            <li onClick={onClick}>
                <Link to="/projects">Projects</Link>
            </li>
           
            <li onClick={onClick}>
                <Link to="/illustration">Illustrations</Link>
            </li>
           
            <li onClick={onClick}>
                <Link to="/about">About</Link>
            </li>
            
            <li>
                <a href='https://github.com/mckalechung/mckalechung.github.io/blob/main/public/assets/Resume.pdf' target='blank'> Resume</a>
            </li>
            <div className="icons">
            <a className='icon' href='mailto: mckale.chung@gmail.com' target='_blank'><EmailIcon  style = {{color:'white', fontSize: '6vh', padding: '2vh'}} /> </a>
                <a className='icon' href='https://github.com/mckalechung' target='_blank'><GitHubIcon style = {{color:'white', fontSize: '6vh', padding: '2vh'}}/></a>
                <a className='icon' href='https://www.linkedin.com/in/cchung7' target='_blank'><LinkedInIcon  style = {{color:'white', fontSize: '6vh', padding: '2vh'}}/></a>
            </div>
        </ul>
        <Outlet />

    </div>
 
  )
}

export default Menu