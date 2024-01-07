import './buttons.css'
import React from 'react';

function Bouncebtn(value){
    

    return(
        <a href = {value.h}>
            <button className='btn' onClick={() => value.click}>{value.text}</button>

        </a>


            
        
            

       
        
    );

}

export default Bouncebtn;