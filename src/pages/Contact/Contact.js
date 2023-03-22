import React from 'react'
import './Contact.scss'
import { useForm} from '@formspree/react';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';



const Contact = () => {

  //const [state, handleSubmit] = useForm("mjvzvbej");
  return (
    <div className = 'contact' id='contact'>
      
        <div className="contactSection">
            
            <div className="left">
                    <div className="textContent">
                      <hr />
                        <h3>Lets Connect, I'd love to chat!</h3>
                        <hr /> 
                        <p>
                            Send me a fun fact if anything. 
                            
                        </p>
                    </div>
                    
            </div>
            <div className="right">
                <div className="contactForm">
                          <form action="https://formspree.io/f/mnqllawj" method="POST">
                    
                    <label>
                      <input type = "text" name = "name" class="name" placeholder="Your Name"/>
                    </label>
                    <label>
                      <input name = "email" type = "text" class="email" placeholder="Your Email"/>
                    </label>
                    <label>
                      <input name = "subject" type = "text" class="subject" placeholder="Subject"/>
                    </label>
                    <label> 
                      <textarea name = "message" class="message" placeholder="Your Message"  rows='3' cols = '150'></textarea>
                    </label> 
                  <button type = "submit" >Send </button>
              </form>
                </div>
            </div>
        </div>
        <div className="footer">
            <h3 className='quote'> celine chung</h3>
            <hr/> 
            <div className="resumeContainer"> <a className='resume' href='https://github.com/mckalechung/mckalechung.github.io/blob/main/public/assets/Mckale%20Chung%20Resume%20August%202022.pdf' target='_blank'> resume</a></div>
            <div className="icons">
                <a className='icon'href='mailto: mckale.chung@gmail.com' target='_blank'><EmailIcon  style = {{color:'white', fontSize: '4vh', padding: '2vh'}} /> </a>
                <a className='icon'href='https://github.com/mckalechung' target='_blank'><GitHubIcon  style = {{color:'white', fontSize: '4vh', padding: '2vh'}}/></a>
                <a className='icon'href='https://www.linkedin.com/in/mckale-chung-507b22202/' target='_blank'><LinkedInIcon  style = {{color:'white', fontSize: '4vh', padding: '2vh'}}/></a>

            </div>
        </div>
    </div>
  )
}

export default Contact