import React from 'react'
import './menu.scss'
import { Outlet, Link } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Menu = ({ menuOpen, setMenuOpen, animation, setAnimation }) => {

    const onClick = () => {
        setAnimation('moving');
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
           
            <li onClick={()=>setMenuOpen(false)}>
                <a href='#illustration'>Illustration</a>
            </li>
           
            <li onClick={()=>setMenuOpen(false)}>
                <a href='#about'>About</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href='#contact'>Contact</a>
            </li>
         

          
            <li>
                <a href='https://github.com/mckalechung/mckalechung.github.io/blob/main/public/assets/Mckale%20Chung%20Resume%20August%202022.pdf' target='blank'> Resume</a>
            </li>
            <div className="icons">
            <a className='icon' href='mailto: mckale.chung@gmail.com' target='_blank'><EmailIcon  style = {{color:'white', fontSize: '6vh', padding: '2vh'}} /> </a>
                <a className='icon' href='https://github.com/mckalechung' target='_blank'><GitHubIcon style = {{color:'white', fontSize: '6vh', padding: '2vh'}}/></a>
                <a className='icon' href='https://www.linkedin.com/in/mckale-chung-507b22202/' target='_blank'><LinkedInIcon  style = {{color:'white', fontSize: '6vh', padding: '2vh'}}/></a>
            </div>
        </ul>
        <Outlet />

    </div>
 
  )
}

export default Menu