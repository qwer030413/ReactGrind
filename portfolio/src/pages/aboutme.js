import Anitext from '../components/headers/animatedText.js'
import Image from '../components/Images/image.js';
import Aboutpic from '../components/Images/aboutmeimage.js';

function Aboutme(){
    // MAKE SKILLS TAB
    return(
        <body>
            <div className = 'contents'>
                <div className='picture'>
                <Aboutpic />
                </div>

                <div className='intro'>
                <Anitext text = "About Me" class = "about"/>
                <Anitext text = "MAKE A SKILLS TAB" class = "small"/>
                
                </div>
            </div>
        </body>
        
    );
}

export default Aboutme