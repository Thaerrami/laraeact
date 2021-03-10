import React, { useEffect } from 'react';
import './products.css';

function Alert(props) {
    
    return (
        <div id='alert' className='alert-main' >
            <span >
                {props.message} 
            </span>
        </div>
    )
}

export default Alert