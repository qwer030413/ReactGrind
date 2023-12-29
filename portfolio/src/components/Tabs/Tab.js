import React from "react";
import { useState } from "react";
import './styleTabs.css';
import Bouncebtn from '../buttons/bounce';

const Tabs = () => {
    const [page, setPage] = useState(1);
  return (
    <nav className = "nav">
        <a className="name">Chris Park</a>
        <div className="tabcontainer"> 
            <ul>
            <li>
                
                <Bouncebtn text = "Home" h = "./tab.js" />
            </li>
            <li>
                <Bouncebtn text = "Projects" h = "./Projects.js" />
            </li>
            <li>
                <Bouncebtn text = "Contact me" h = "./tab.js" />
            </li>
            
            

      </ul>


        </div>
      
    </nav>
  );
};
export default Tabs;