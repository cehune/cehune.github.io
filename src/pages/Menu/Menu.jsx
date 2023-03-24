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
    <div>     <div className={'menuback page_shift_one ' + ( menuOpen && 'active')}></div>
    <div className={'menuback page_shift_two ' + ( menuOpen && 'active')}></div>
    <div className={'menuback page_shift_three ' + ( menuOpen && 'active')}></div>
    <div className={'menuback menu ' + ( menuOpen && 'active')}>
        <h1 className='sideways_name'> celine chung </h1>
        <ul>
             <Link  className='menulink'onClick={onClick} to="/projects"><li >
               Projects
            </li></Link>
           
            <Link className='menulink'onClick={onClick} to="/illustration"><li >
                Illustrations
            </li></Link>

             <Link className='menulink'onClick={onClick} to="/about"><li>
               About
            </li></Link>
           <Link className='menulink'onClick={onClick} to="/contact"><li>
               Contact
            </li></Link> 
            
            <li>
                <a href='https://github.com/mckalechung/mckalechung.github.io/blob/main/public/assets/Resume.pdf' target='blank'> Resume</a>
            </li>
            <div className="icons">
            <a className='icon' href='mailto: mckale.chung@gmail.com' target='_blank'><EmailIcon  style = {{color:'white', fontSize: '6vh'}} /> </a>
                <a className='icon' href='https://github.com/mckalechung' target='_blank'><GitHubIcon style = {{color:'white', fontSize: '6vh'}}/></a>
                <a className='icon' href='https://www.linkedin.com/in/cchung7' target='_blank'><LinkedInIcon  style = {{color:'white', fontSize: '6vh'}}/></a>
            </div>
        </ul>
        <Outlet />

    </div></div>
 
  )
}

export default Menu