import React from "react";
import { useState } from "react";
import './styleTabs.css';
import Bouncebtn from '../buttons/bounce';
import LinkedIn from '../Images/linked';
import Mbutton from "../buttons/motion";
import Aboutme from "../../pages/aboutme.js";
import App from "../../App.js";
import ContactMe from "../../pages/contactme.js";



const Tabs = () => {

  return (  
    <nav className = "nav">
        <a className="name" href="/ReactGrind/">Seojin Park</a>
        <div className="center">
          <div className="tabcontainer"> 
            
              
               <Bouncebtn text = "About Me"  h = "../../pages/aboutme.js" />
               <Bouncebtn text = "Projects" h = "../../pages/Projects.js" />
               <Bouncebtn text = "Contact me" h = "../../pages/contactme.js" />
              
               

               
               

          </div>
            

        </div>
        <div className="contacts">
        <LinkedIn />  
        <Mbutton text = "Resume" />

        </div>
      
    </nav>
  );
};
export default Tabs;