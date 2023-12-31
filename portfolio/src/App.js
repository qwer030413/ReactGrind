import './App.css';
import Tabs from './components/Tabs/Tab.js';
import Anitext from './components/headers/animatedText.js'
import Image from './components/Images/image.js';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import ContactMe from "./pages/contactme.js";
import Projects from './pages/Projects.js';
import Aboutme from './pages/aboutme.js';
import Home from './pages/home.js';


function App() {
  let component;
  switch(window.location.pathname)
  {
    case "/pages/contactme.js":
      component = <ContactMe />
      break;
    case "/pages/Projects.js":
      component = <Projects />
      break;
    case "/pages/aboutme.js":
      component = <Aboutme />
      break;
    case "/":
      component = <Home />
      break;
    
  }
  return (
    
    
      
      <body>
        <Tabs />
        {component}
          
        
        
                
                
             
        
        
        

      </body>
      // <Home />

    

    
  );

}

export default App;
