import './buttons.css'


function Bouncebtn(value){
    return(
        <a href = {value.h}>
            <button className='btn'>{value.text}</button>

        </a>
        
    );

}

export default Bouncebtn;