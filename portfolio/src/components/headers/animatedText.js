import TextSpan from './charSpan.js';
import './bigtext.css';


function Anitext(value){
    
    const sentance = value.text.split("");
    

    return(
        
            <div className={value.class}>
                {sentance.map((letter, index) =>{
                    return(
                        <text>
                                <TextSpan key = {index} className = "span">
                                    {letter  === " " ? "\u00A0" : letter}
                                </TextSpan>
                        </text>
                        
                    )
                
                    })}
            </div>
        
    );
}

export default Anitext;