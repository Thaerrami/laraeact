import React, { useEffect, useState } from 'react'
import { handleupdate, myalert } from './functions';

const UpdatePrd=()=>{

    const [inputs, setinputs] = useState({img:'',title:'',description:''})

    useEffect(() => {
        //  console.log(inputs)
      return () => {
        
      }
    }, [inputs])

const handleSubmit=(e)=>{
    // console.log(inputs);
    var formData = new FormData();

    formData.append("title", inputs.title);
    formData.append("description", inputs.description); // number 123456 is immediately converted to a string "123456"
// HTML file input, chosen by user
    formData.append('img',inputs.img);

    const res= handleupdate(formData);
    res.then(res=>{
        // location.reload();
        console.log(res)
        myalert('data updated successfuly');
        $('#udt').hide('slow');
        // $('#img-prd-list').attr('src','/storage/'+res.data)
        
    })

    e.preventDefault();
}

    return (
        <div>
          <div className='conf card none' id='udt'>
          <span className='btn-cls position-absolute' onClick={()=>$('#udt').hide()}><button type="button" className="btn-close" aria-label="Close"></button></span>
              Edit produt <span id='udt-prod'>( title )</span> 
              <input id='udt-id' type='hidden' />
              <form onSubmit={handleSubmit} method='post' encType='multipart/form-data' > 
              <input onChange={(e)=>setinputs({...inputs,img:e.target.files[0]})} name='img' type='file' className='form-control m-2'  />
              <input onChange={(e)=>setinputs({...inputs,title:e.target.value})} name='title' type='text' className='form-control m-2'  />
              <textarea onChange={(e)=>setinputs({...inputs,description:e.target.value})} name='description' className='form-control m-2'></textarea>
              <button  className='btn btn-warning'> -- GO -- </button>
              </form>
          </div>
        </div>
    )
}

export default UpdatePrd
