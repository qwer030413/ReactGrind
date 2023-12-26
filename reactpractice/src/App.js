//hello is the function name from the new file, this is how we do components
import Hello from './components/new.js';
import Randomwords from './components/body.js';
import './App.css';
import { render } from '@testing-library/react';


export default function App() {
  
  return(
    <>
    
    
    <div className = "web">
      <body>
        <section className='first'>
          <Hello name = "chris" />
          <Randomwords  />
          <div class = "curve"></div>
        </section>
        <section>
          <Hello name = "chris" />
          <Randomwords  />
        </section>
        <section>
          <Hello name = "chris" />
          <Randomwords  />
        </section>
        <section>
          <Hello name = "chris" />
          <Randomwords  />
        </section>
        <section>
          <Hello name = "chris" />
          <Randomwords  />
        </section>
      
      



      </body>
    
    
    </div>
    
    
    
    </>
    
    
    
    
    
  );

  
}


