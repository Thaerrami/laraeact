import React, { useEffect } from 'react'
import $ from 'jquery';
import { preventscrollfixed } from './functions';


function Card(props) {
    return (
        <div id='card' className=' main-card carder'>
        <span className='btn-cls' onClick={()=>$('#card').fadeOut('slow')}><button type="button" className="btn-close" aria-label="Close"></button></span>
            <div className=" text-center col-lg-4 col-md-8 col-sm-12 mx-auto" >
                <img id='prod-card-img' src={props.img} width='100%' />
                <div>
                    <h1 id='prod-card-title'>{props.title}</h1>
                </div>
                <div>
                <p id='prod-card-desc'>{props.desc}</p>
                </div>
               <div style={{height:'500px',background:'transparent'}}>

               </div>
            </div>
        </div>
    )
}

export default Card
