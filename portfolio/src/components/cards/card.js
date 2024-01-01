import {motion, transform} from "framer-motion";
import jet from './jet.jpg';
import "./cards.css";
function Card(value){
    return(
        <motion.div className="cardContainer" whileHover={{scale: 1.05}}>
            <div className="imageContainer">
                <img src = {value.image} />

            </div>
            <div className="textContainer">
                <div className='Name'>
                    <text>{value.text}</text>
                </div>
                <div className='description'>
                    <text>{value.description}</text>
                </div>
                <div className = "used">
                    <text>{value.used}</text>
                </div>
            </div>
            


        </motion.div>
    );
    
}

export default Card