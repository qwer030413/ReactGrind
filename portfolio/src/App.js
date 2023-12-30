import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs/Tab.js';
import Anitext from './components/headers/animatedText.js'
import Image from './components/Images/image.js';
function App() {
  return (
    
    
      
      <body>
        <Tabs />
        <div className='contents'>
          <div className='picture'>
            <Image />
          </div>

          <div className='intro'>
            <Anitext text = "My name is Chris Park" class = "header"/>
            <Anitext text = "I am a sophomore at San Diego Miramar College" class = "small"/>
            
          </div>
          
        </div>
        
        
        

      </body>
      

    

    
  );

}

export default App;
