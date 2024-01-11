import './App.css';
import Tabs from './components/Tabs/Tab.js';
import Anitext from './components/headers/animatedText.js'
import Image from './components/Images/image.js';
import { BrowserRouter as Router, Routes, Route, useNavigate, createRoutesFromElements } from "react-router-dom";

import ContactMe from "./pages/contactme.js";
import Projects from './pages/Projects.js';
import Aboutme from './pages/aboutme.js';
import Home from './pages/home.js';


function App() {
  
  

  
  return (
    <>
    <body>
        <Tabs />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/pages/aboutme.js" element = {<Aboutme />} />
          <Route path = "/pages/Projects.js" element = {<Projects />} />
          <Route path = "/pages/contactme.js" element = {<ContactMe />} />
        </Routes>
      </body>
      
    
    
    
    
    </>
    
      
      
      

    

    
  );

}

export default App;
