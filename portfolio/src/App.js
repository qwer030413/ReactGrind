import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs/Tab.js';
import Anitext from './components/headers/animatedText.js'
import Image from './components/Images/image.js';
function App() {
  return (
    
    <div>
      
      <body>
        <Tabs />
        <div className='contents'>
          <div className='picture'>
            <Image />
          </div>

          <div className='intro'>
            <Anitext className = "a" text = "My name is Chris Park" class = "header"/>
          </div>
          
        </div>
        
        
        

      </body>
      

    </div>

    
  );

}

export default App;
