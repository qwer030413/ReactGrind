import {motion, transform} from "framer-motion";
import '../App.css';
import { useState } from 'react';
import Popup from './popup.jsx';

export default function Mbutton(){
    //store false in popupOpen and create method named setpopupOpen to change its value
    const[popupOpen, setpopupOpen] = useState(false);

    //constants/methods that we can use to tell the code the popup is open or not
    const close = () => setpopupOpen(false);
    const open = () => setpopupOpen(true);
    return (
    <div>
        <motion.button 
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9,}}
        //on click, run close function of popupOpen is true, run open if otherwise
        onClick={
            // console.log("clicked!")
            () => (popupOpen ? close() : open())
        }
        className='mbtn'>Click Me
        </motion.button>

        {popupOpen && <Popup popupOpen = {popupOpen} handleClose={close} />}

    </div>
    
    
    
    
    );
}