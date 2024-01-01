import {motion, transform} from "framer-motion";
import './buttons.css';
import myFile from '../../ResumeNew.pdf';

export default function Mbutton(value){
    
    
    return (
    <div>
        <a href= {myFile} target="_blank">
            <motion.button 
            whileHover={{scale: 1.1}}
            whileTap={{
                scale: 0.9,
                
            
            }}
            
            
           
            className='mbtn'>
                {value.text}
            </motion.button>
        </a>
       


    </div>
    
    
    
    
    );
}