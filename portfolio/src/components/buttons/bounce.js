import './buttons.css'
import React from 'react';
import { useRef } from 'react';

import { Link } from 'react-router-dom';

function Bouncebtn(value){
//     const buttonlist = document.querySelectorAll('.btn');
//     buttonlist.forEach(btnel => {
//         btnel.addEventListener('click', () => {
//         document.querySelector('.clickbutton')?.classList.remove('.clickbutton');
//         btnel.classList.add('.clickbutton');
//         });
//   });

//    const a = document.querySelectorAll('.btn');
//    a.forEach((element) => {
//     console.log(element);
//    });
    

    

    return(
        // <a href = {value.h}>
        //     <button className='btn' onClick={() => value.click}>{value.text}</button>

        // </a>

        <Link to= {value.h}>
            <button className='btn'>{value.text}</button>
        </Link>


            
        
            

       
        
    );

}

export default Bouncebtn;