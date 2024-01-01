import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './pages.css';
import ContactUs from '../components/contact/contactform';
import Anitext from '../components/headers/animatedText';
import Earth from '../components/Images/earth';

function ContactMe(){
    
    return( 
        <>
            <div className = "title">
            <Anitext text = "Contact Me" class = "header" />
            </div>
            <div className='pagescontainer'>
                <ContactUs />
                {/* <Earth /> */}

            </div>
            
        
        </>
        
        
    );
}

export default ContactMe