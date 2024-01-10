import Anitext from '../components/headers/animatedText.js'
import Image from '../components/Images/image.js';
import Aboutpic from '../components/Images/aboutmeimage.js';

function Aboutme(){
    // MAKE SKILLS TAB
    return(
        <body>
            <div className = 'aboutme'>
                <div className='picture'>
                <Aboutpic />
                </div>

                <div className='introabout'>
                <Anitext text = "About Me" class = "about"/>
                <text className='aboutm'>{'Hi! My name is Seojin Park, but you can call me Chris. I am a fast learner who loves to code in their free time, and I love learning new things'}</text>
                <text className='aboutm'>{'I am proficient in Java, Python, C++, Assembly MIPS, CSS, HTML, JavaScript, and React.js'}</text>
                <text className='aboutm'>{'When I am not programming or studying, I am usually playing chess, going on hikes with my family, and going rock climbing with my friends'}</text>
               
                
                </div>
            </div>
        </body>
        
    );
}

export default Aboutme