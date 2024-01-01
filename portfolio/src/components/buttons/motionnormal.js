import {motion, transform} from "framer-motion";
import './buttons.css';

export default function Mnormal(value){
    
    
    return (
    <div>
        <motion.button 
        whileHover={{scale: 1.1}}
        whileTap={{
            scale: 0.9,
            
        
        }}
        onClick={value.click}
        
        
        
        className='nbtn'>{value.text}
        </motion.button>


    </div>
    
    
    
    
    );
    }