import {motion, transform} from "framer-motion";
import './buttons.css';

export default function Mbutton(value){
    const onButtonClick = () => {
        const pdfUrl = 'ResumeJob.pdf';
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Seojin(Chris) Park Resume.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    
    return (
    <div>
        <motion.button 
        whileHover={{scale: 1.1}}
        whileTap={{
            scale: 0.9,
            
        
        }}
        
        
        //on click, run close function of popupOpen is true, run open if otherwise
        onClick={onButtonClick}
        className='mbtn'>{value.text}
        </motion.button>


    </div>
    
    
    
    
    );
}