import $ from 'jquery';
import axios from 'axios'

export function geturl(){
    return window.location.protocol+'//'+window.location.hostname+':'+window.location.port+'/api/';
}


export function copytext (str) {
    // Create new element
    var el = document.createElement('textarea');
    // Set value (string to be copied)
    el.value = str;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand('copy');
    // Remove temporary element
    document.body.removeChild(el);

    $('#alert').fadeIn(1000).animate({top:'40px'});
    setTimeout(() => {
        $('#alert').fadeOut(1000).animate({top:'-100px'});
    }, 7000);

   
 }

 export function dolike(id){
    localStorage.setItem('prod'+id,'liked');
 }

 export function dislike(id){
    localStorage.setItem('prod'+id,null);
}

export function isliked(id){
    return localStorage.getItem('prod'+id);
}



export function handleshare(id){

    $('#sociallinks').fadeToggle(1000);
    id=$('#social-id').val();
    window.open('whatsapp://send?text='+location.origin+'/product/'+id);  
    // window.open('https://web.whatsapp.com://send?text=');
}


export function setpopup({...data}){
    $('#card').show('slow');
    $('#prod-card-img').attr('src','/storage/'+data.img)
    $('#prod-card-title').text(data.title)
    $('#prod-card-desc').text(data.desc);
}



export function stopscroll(){
    document.getElementById('card').ontouchend = (e) => {
        e.preventDefault();
    };
}


export async function getdata(){
try{
    return await axios('http://localhost:8000/api/prodcuts/')
}catch(error){
return '500';
}
return '404';
}


export const share=()=>{
   
}