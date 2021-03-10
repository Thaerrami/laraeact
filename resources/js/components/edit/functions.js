import axios from "axios";

import $ from 'jquery';

export  function geturl(){
    return window.location.protocol+'//'+window.location.hostname+':'+window.location.port
}

export function deleteprd(id){
    var id=$('#dlt-data').val();
    // alert(id)

    axios.delete('http://localhost:8000/api/delete/'+id)
    .then(res => {
      console.log(res);
      console.log(res.data);
      
    })
    
    $('#conf').hide()
}


export  async function handleupdate(data){
    var id= $('#udt-id').val();
// alert(id)
console.log(data)
    try{
    const res=await axios.post('http://localhost:8000/api/update/'+id, data,{
        onUploadProgress:ProgressEvent=>{
            console.log(Math.round(ProgressEvent.loaded/ProgressEvent.total * 100)+'%')
        }
    })
    return res;
    }
    catch(error){
        alert('not updated')
    }
    
}


export const myalert=(text)=>{
    
    $('#alert').text(text).animate({
        top:'10%'
    })
    setTimeout(() => {
        $('#alert').animate({
            top:'-100%'
        })  
    }, 4000);
}