import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { getAllData } from './handledata';
import './edit.css'
import DeleteConf from './DeleteConf';
import Like from './Like';
import UpdatePrd from './UpdatePrd';
import Imager from './imager';
import Alert from './Alert';



function Show() {
    const [products, setproducts] = useState([])

    useEffect(() => {
      setInterval(() => {
        
        getAllData().then(res=>setproducts(res.data)).catch(err=>console.error(err));
      }, 1500);
        
    }, [])
    return (
        <div className="container-fluid p-0 m-0 " style={{overflowX:'auto'}}>
               <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Product</th>
      <th scope="col">Description</th>
      <th scope="col">Likes</th>
      <th scope="col"></th>{/* update */ }
      <th scope="col" ></th>{/* delete */ }
    </tr>
  </thead>
  <tbody>
      {products.map((product,i)=><tr key={i}>
      <td><img width='100px' id='img-prd-list' src={product.img} /></td>
      <td>{product.title}</td>
      <td>{product.description}</td>
      <td><span className='like'>{product.likes}<span> <Like sign={product.likes}  /> </span></span></td>
      
      <td><button onClick={()=>{$('#udt').show('slow');$('#udt-id').val(product.id)}} className='btn btn-warning'>update</button></td>
      <td><button onClick={()=>{$('#conf').show('slow');$('#dlt-data').val(product.id)}} className='btn btn-danger'>delete</button></td>
    </tr>
    
    )}   
  </tbody>
</table> 

<Alert message='message' />
<DeleteConf title='title' />
<UpdatePrd title='title' />

        </div>
    );
}

export default Show;

if (document.getElementById('editview')) {
    ReactDOM.render(<Show />, document.getElementById('editview'));
}
