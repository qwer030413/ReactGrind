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
  // const navigate = useNavigate();

  // let component;
  //   switch(window.location.pathname)
  //   {
  //     case "/ReactGrind/pages/contactme.js":
  //       component = <ContactMe />
  //       break;
  //     case "/ReactGrind/pages/Projects.js":
  //       component = <Projects />
  //       break;
  //     case "/ReactGrind/pages/aboutme.js":
  //       component = <Aboutme />
  //       break;
  //     case "/ReactGrind":
  //       component = <Home />
  //       break;

  //   }
  

  
  return (
    <>
    <body>
        <Tabs />
        {/* {component}    */}
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
