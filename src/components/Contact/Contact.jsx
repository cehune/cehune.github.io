import React from 'react'
import './contact.scss'
import { useForm, ValidationError } from '@formspree/react';
const Contact = () => {

  const [state, handleSubmit] = useForm("mjvzvbej");
  return (
    <div className = 'contact' id='contact'>
        <div className="left">
                <div className="textContent">
                    <h3>Lets Connect, I'd love to chat!</h3>
                    <hr /> 
                    <p>
                        I'm interested in technical competitions, design, and the opportunity to try tech related roles in any industry.
                        I'm love learning more about others and their unique ideas or fields, so feel free to shoot me a message! 
                        
                    </p>
                </div>
                
        </div>
        <div className="right">
            <div className="contactForm">
                <form onSubmit={handleSubmit}>
      
                <label>
                   <input type = "text" name = "name" class="name" placeholder="Your Name" />
                </label>
                <label>
                    <input name = "email" type = "text" class="email" placeholder="Your Email" />
                 </label>
                 <label>
                    <input name = "subject" type = "text" class="subject" placeholder="Subject" />
                 </label>
                 <label> 
                       <textarea name = "message" className="message" placeholder="Your Message"  rows='5' cols = '150'></textarea>
                 </label> 
                 <button type = "submit" disabled={state.submitting}>Send </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact