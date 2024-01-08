import './buttons.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Bouncebtn(value){
    

    return(
        // <a href = {value.h}>
        //     <button className='btn' onClick={() => value.click}>{value.text}</button>

        // </a>

        <Link to= {value.h}>
            <button className='btn' >{value.text}</button>
        </Link>


            
        
            

       
        
    );

}

export default Bouncebtn;