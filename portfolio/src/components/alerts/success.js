
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Success(){
    const notify = () =>{
      toast.success('Message sent!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        });

    };
    return (
        <div>
            <button type="submit" value="Send" className='submit' onClick={notify}>Send</button>

          <ToastContainer />
        </div>
      );
}

export default Success