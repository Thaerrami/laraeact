import React from 'react'
import { deleteprd } from './functions'

function DeleteConf(props) {
    return (
        <div className='conf card' id='conf'>
            <input type='hidden'  id='dlt-data'  />
            Are you sure you wante to delete this product ({props.title}) ?
            <div> <button className='btn btn-danger m-2' onClick={()=>deleteprd()} >Delete</button ><button onClick={()=>$('#conf').hide()} className='btn btn-light m-2'>cancle</button></div>
        </div>
    )
}

export default DeleteConf
