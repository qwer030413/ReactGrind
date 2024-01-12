import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import Anitext from '../headers/animatedText';
import Mnormal from '../buttons/motion';

import 'react-toastify/dist/ReactToastify.css';
import toast, { Toaster } from 'react-hot-toast';

export const ContactUs = () => {
    
    const [pressed, setPressed] = useState(false);
    const myRef = useRef(null);

    const form = useRef();
   
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_sagmm5r', 'template_ebky5f9', form.current, '14UvcvDxKfecep_yS')
        .then((result) => {
            console.log(result.text);
            toast.success('Message sent!')

  
           
          
              
            document.getElementById("fn").value = "";
            document.getElementById("em").value = "";
            document.getElementById("msg").value = "";


        }, (error) => {
            console.log(error.text);
            toast.error("Something is wrong, try again!")

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
                    <input type="submit" value="Send" className='submit' />
                    
                </div>

            </form>
        </div>
        

    </div>
        
    );
  };

  export default ContactUs;