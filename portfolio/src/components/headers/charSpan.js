import './bigtext.css';
import { color, motion, transform, useAnimationControls } from "framer-motion"

const TextSpan = ({children}) =>{
    const controls = useAnimationControls();
    const animation = () => {

        controls.start({
            transform: [
                "scale3d(1, 1, 1)",
                "scale3d(1.4, .55, 1)",
                "scale3d(.75, 1.25, 1)",
                "scale3d(1.25, .85, 1)",
                "scale3d(.9, 1.05, 1)",
                "scale3d(1, 1, 1)",
                
            ],

            // transition: { 
            //     times:[0.9,0.9,0.9,0.9,0.9,0.9]
            // },
        })
        
    }

    return(
        <motion.span className = "span" whileHover={{scale: 1.1, color:"#00A6ED", transition: "0.5s"}} animate = {controls}
        onMouseOver={() => animation()}
        >

        {children}
        </motion.span>


    );
    
   
};

export default TextSpan;