import React, { useRef, useState } from 'react';
import Alert from './Alert';
import {geturl ,copytext}from './functions'; 
import $ from 'jquery'

const Share=(props)=>{   

    return (
        <span  className='unselectable share' onClick={()=>{$('#sociallinks').fadeToggle();}} >
          <svg  width="20" height="23" viewBox="0 0 2128 2036" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M617 943L1081 700L1521 471"    stroke="#0aa853" strokeWidth="100"/>
              <path d="M617 1199L1013 1373L1569 1631" stroke="#0aa853" strokeWidth="100"/>
              <circle cx="1778" cy="350" r="350"  fill="#00ff76"/>
              <circle cx="350" cy="1116" r="350"  fill="#00ff76"/>
              <circle cx="1778" cy="1686" r="350" fill="#00ff76"/>
              </svg>
        </span>
    )
}

export default Share;