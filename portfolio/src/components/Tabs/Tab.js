import React from "react";
import { useState } from "react";
import './styleTabs.css';
import Bouncebtn from '../buttons/bounce';
import LinkedIn from '../Images/linked';
import Mbutton from "../buttons/motion";
const Tabs = () => {
    const [page, setPage] = useState(1);
  return (
    <nav className = "nav">
        <a className="name">Chris Park</a>
        <div className="center">
          <div className="tabcontainer"> 
              <ul>
                <li>
                    <Bouncebtn text = "About Me" h = "./tab.js" />
                </li>
                <li>
                    <Bouncebtn text = "Projects" h = "./Projects.js" />
                </li>
                <li>
                    <Bouncebtn text = "Contact me" h = "./tab.js" />
                </li>
              </ul>


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