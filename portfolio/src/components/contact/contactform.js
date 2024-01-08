import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import Anitext from '../headers/animatedText';
import Mnormal from '../buttons/motion';
import Success from '../alerts/success';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const ContactUs = () => {
    
    const [pressed, setPressed] = useState(false);

    const form = useRef();

  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_sagmm5r', 'template_ebky5f9', form.current, '14UvcvDxKfecep_yS')
        .then((result) => {
            console.log(result.text);
            setPressed(true);
          
              
            document.getElementById("fn").value = "";
            document.getElementById("em").value = "";
            document.getElementById("msg").value = "";


        }, (error) => {
            console.log(error.text);
        });
    };
   
    
  
    return (
    <div>
        
        
        <div className='formcontainer'>
            <form ref={form} onSubmit={sendEmail}>
                <h1 className='message'>Send a message</h1>
                <div className='inputBox'>
                    {/* <label for="text" className='textlable'>Name</label> */}
                    <input id = "fn" type="text" name="user_name" required = 'required'className='nameinput' placeholder=" "/>
                    <span className='labels'>Full Name</span>
                    
                </div>
                <div className='inputBox'>
                    <input id = "em" type="email" name="user_email" required = 'required' placeholder=' '/>
                    <span className='labels'>Email</span>
                </div>
                <div className='inputBox'>
                    
                    <textarea id = "msg"name="message" required = 'required'  className='txtarea' placeholder=' '/>
                    <span className='labels'>Message</span>
                </div>
                
                
                <div className='button'>
                    {/* <input type="submit" value="Send" className='submit' /> */}
                    <Success />
                    {/* <button type="submit" value="Send" className='submit' onClick={notify}>Send</button> */}
                </div>

            </form>
        </div>
        

    </div>
        
    );
  };

  export default ContactUs;