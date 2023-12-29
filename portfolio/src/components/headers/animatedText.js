import TextSpan from './charSpan.js';
import './bigtext.css';


function Anitext(value){
    
    const sentance = value.text.split("");
    

    return(
        
            <div className={value.class}>
                {sentance.map((letter, index) =>{
                    return(
                        // <motion.span key = {index}  className = "span" animate={controls} onMouseOver={() => animation}>
                            
                        //     {letter  === " " ? "\u00A0" : letter}
                        // </motion.span>
                        <TextSpan key = {index} className = "span">
                            {letter  === " " ? "\u00A0" : letter}
                        </TextSpan>
                    )
                
                    })}
            </div>
        
    );
}

export default Anitext;