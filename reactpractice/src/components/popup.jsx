import {motion} from "framer-motion";
import Backdrop from "./backdrop";

const drop = {
    hidden: {
        // vh: viewhight
        y: "100vh",
        opacity:0,
    },
    visible: {
        y:"0",
        opacity: 1,
        Transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },

};

const Popup = ({handleClose, text}) =>{
    <Backdrop onClick = {handleClose}>
        <motion.div
            onClick={(e) => e.stopPropagation()}
            className="yellowpopup"
            variants={drop}
            initial= "hidden"
            animate = "visible"
            exit="exit"
        >

        </motion.div>

    </Backdrop>
};

export default Popup;