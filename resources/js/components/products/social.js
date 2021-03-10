import React, { useEffect, useState } from 'react';
import { copytext, geturl, handleshare } from './functions';
import $ from 'jquery'
import Alert from './Alert';

function Social(props) {
    
    return (
        <div className='social-list unselectable none' 
        
         id='sociallinks'>
            <div className='container-fluid'>

            <div className='row'>
            <Whatsapp />
            <Facebook />
            <Twitter  />
            <Telegram />
            <Linkedin />
            <Email    />
            <Copylink />
            </div>
            </div>
        </div>
    )
}

const col='col';

const Whatsapp=(props)=>{
    // alert(props.id)
return (
    <div className={col} onClick={()=>{handleshare(); }}>
        <button className="btn bg-transparent"  > 
        <a className="btn btn-primary" style={{backgroundColor: '#25d366'}}  role="button">
            <i className="fab fa-whatsapp"></i>
        </a>
        </button>
    </div>
)    
}

const Twitter=(props)=>{
    return (
        <div className={col} onClick={()=>handleshare()}>
             <button className="btn bg-transparent" data-sharer="twitter" data-title="Checkout Sharer.js!" data-hashtags="awesome, sharer.js" data-url={`${location.origin}/product/${$('#social-id').val()}`}>
                 <a className="btn btn-primary" style={{backgroundColor:'#55acee'}}  role="button">
                     <i className="fab fa-twitter">
                    </i>
                </a>
             </button>
        </div>
    )    
    }

       
const Facebook=(props)=>{
    return (
        <div className={col} onClick={()=>handleshare()}>
          <button className="btn bg-transparent" data-sharer="facebook" data-hashtag="hashtag" data-url={`${location.origin+'/product/'+$('#social-id').val()}`}>
          <a className="btn btn-primary" style={{backgroundColor:'#0082ca'}}  role="button">
                     <i className="fab fa-facebook">
                    </i>
                </a>
        </button>
       
            
        </div>
    )    
    }

    
const Telegram=(props)=>{
    return (
        <div className={col} onClick={()=>handleshare()}> 
            <button className="btn bg-transparent" data-sharer="telegram" data-title="Checkout Sharer.js!" data-url={`${location.origin+'/product/'+$('#social-id').val()}`} data-to="+44555-5555">
            <a className="btn btn-primary" style={{backgroundColor:'#0088cc'}}  role="button">
                     <i className="fab fa-telegram">
                    </i>
                </a>
            </button>
        </div>
    )    
    }

const Linkedin=(props)=>{
    return (
        <div className={col} onClick={()=>handleshare()}>
            <button className="btn bg-transparent" data-sharer="linkedin" data-url={`${location.origin+'/product/'+$('#social-id').val()}`}>
            <a className="btn btn-primary" style={{backgroundColor:'#0088cc'}}  role="button">
                     <i className="fab fa-linkedin">
                    </i>
                </a>
            </button>
        </div>
    )    
    }


    
    
    const Email=(props)=>{
        return (
            <div className={col} onClick={()=>handleshare()}>
<button className="btn bg-transparent" data-sharer="email" data-title="Awesome Url" data-url={`${location.origin+'/product/'+$('#social-id').val()}`} data-subject="Hey! Check out that URL" data-to=""> 
    <img width='75' src='./icons/email.svg' />
</button>
        </div>
    )    
}

const Copylink=(props)=>{
        return (
            <div className={col} onClick={()=>{handleshare();copytext(location.origin+'/product/'+$('#social-id').val())}} >
                <button className="btn bg-transparent" >
                   <a className="btn btn-share" style={{backgroundColor:'#fff'}}  role="button">
                   <i className="fas fa-share"></i>
                    </a>
                </button>
                
            </div>
        )    
        }


export default Social
