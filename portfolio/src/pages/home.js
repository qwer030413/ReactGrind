import Anitext from '../components/headers/animatedText.js'
import Image from '../components/Images/image.js';

function Home(){
    return(
      
        <div className='contents'>
            <div className='picture'>
              <Image />
            </div>

            <div className='intro'>
              <Anitext text = "My name is Seojin Park" class = "header"/>
              <Anitext text = "I am a sophomore at San Diego Miramar College" class = "small"/>
              
            </div>
            
          </div>
    );
    

}

export default Home