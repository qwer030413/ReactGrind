import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './pages.css';
import ContactUs from '../components/contact/contactform';
import Anitext from '../components/headers/animatedText';
import Earth from '../components/Images/earth';
import toast, { Toaster } from 'react-hot-toast';

function ContactMe(){
    
    return( 
        <>
        <div><Toaster
        toastOptions={{
            className: '',
            style: {
              padding: '16px',
              color: 'white',
              background: '#232323',
            },
          }}
        /></div>

            <div className = "title">
            <Anitext text = "Contact Me" class = "header" />
            </div>
            <div className='pagescontainer'>
                <ContactUs />
                <div className='earthcontainer'>
                    <Earth />
                </div>
                

            </div>
            
        
        </>
        
        
    );
}

export default ContactMe