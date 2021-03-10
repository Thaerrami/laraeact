import React, { useState } from 'react';
import Card from './card';
import { setpopup } from './functions';

import Like from './Like';
import Share from './share';


const Product =(props)=>{
    return <div className='card shadow ' onClick={()=>$('#social-id').val(props.data.id)} style={{maxWidth:'70%',margin:'20px auto'}} >
        <div onClick={()=>{setpopup({img:props.data.img,title:props.data.title,desc:props.data.description});}}>
        <h2>{props.data.title}</h2>
        <small>{props.data.description.substr(0,10)}{props.data.description.length>10?' ...':null}</small>
        <img src={'/storage/'+props.data.img} width='100%' height='150px' loading='lazy' />
        </div>
        <div className='reaction'><Like id={props.data.id} />  <span> <Share id={props.data.id} /></span></div>
    </div>
}


export default Product;