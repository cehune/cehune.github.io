import React from 'react'
import './menu.scss'

//import EmailIcon from '@mui/icons-material/Email';
//import LinkedInIcon from '@mui/icons-material/LinkedIn';
//import GitHubIcon from '@mui/icons-material/GitHub';

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={'menu ' + ( menuOpen && 'active')}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href='#intro'>Home</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href='#portfolio'>Portfolio</a>
            </li>
           
            <li onClick={()=>setMenuOpen(false)}>
                <a href='#illustration'>Illustration</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href='#about'>About</a>
            </li >
            <li onClick={()=>setMenuOpen(false)}>
                <a href='#contact'>Contact</a>
            </li>
            <li>
                <a href='https://github.com/mckalechung/mckalechung.github.io/blob/main/public/assets/Mckale%20Chung%20Resume%20August%202022.pdf' target='blank'> Resume</a>
            </li>
        </ul>


    </div>
  )
}

export default Menu