//hello is the function name from the new file, this is how we do components
import Hello from './components/new.js';
import Randomwords from './components/body.js';
import './App.css';
import Adreet from "./components/image.js";
import { useState } from 'react';
import {motion, transform} from "framer-motion";
import { useRef } from "react";


// import Mbutton from "./components/motionbtn.js";



export default function App() {

  const services = useRef(null);
  const blog = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  let debounceTimeout = null;
  //store false in popupOpen and create method named setpopupOpen to change its value
  const[popupOpen, setpopupOpen] = useState(false);

  //constants/methods that we can use to tell the code the popup is open or not
  const close = () => setpopupOpen(false);
  const open = () => setpopupOpen(true);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('show', entry.isIntersecting);
      if(entry.isIntersecting) {
        entry.target.classList.toggle("show", entry);
      }
      
    });
  });
  

  const hiddenelements = document.querySelectorAll(".logo",".blue", ".cyan", ".green", ".black");
  hiddenelements.forEach((el) => observer.observe(el));
  return(
    <>
    
    
    <div className = "web">
      <body>
        <section className='blue' >
        <button className='btn' onClick={() => scrollToSection(services)}>Hello</button>;
          <Randomwords  />
          <div className = "curve"></div>
        </section>
        <section className='black'>
          <Hello name = "chris" />
          <Randomwords  />
        </section>
        <section ref={services} className='cyan'>
          <div>
            <motion.button 
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9,}}
            //on click, run close function of popupOpen is true, run open if otherwise
            
            className='mbtn'>Click Me
            </motion.button>

            {/* {popupOpen && <Popup popupOpen = {popupOpen} handleClose={close} />} */}

        </div>
        </section>
        <section className='black'>
          <Hello name = "chris" />
          <Randomwords  />
        </section>
        <section className='green'>
          <Hello name = "chris" />
          <Randomwords  />
        </section>

        <div className = "logos">
          <div className = "logo black">
            <Adreet />
          </div>
          <div className = "logo black">
            <Adreet />
          </div>
          <div className = "logo black">
            <Adreet />
          </div>
          <div className = "logo black">
            <Adreet />
          </div>

        </div>
      
      



      </body>
    
    
    </div>
    
    
    
    </>
    
    
    
    
    
  );

  
}


