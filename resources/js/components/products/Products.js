import React,{useState,useEffect, useMemo} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './products.css';
import Product from './product';
import Social from './social';
import Alert from './Alert';
import Card from './card';
import { getdata } from './functions';


function Products() {
    return (
        <div className="container">
           <List />
           <Alert message='link copied' />
        <Card img='../icons/email.svg'  title='title' desc='desc' />
        </div>
    );
}

const List =()=>{
    const [title, settitle] = useState([])
    const [error, seterror] = useState(false);
    useEffect(() => {
        document.title='menu';

       try {
         getdata().then(res=>{
             if(res=='500') seterror(true)
             else settitle(res.data)
        }).catch(error=>{
            seterror(true);
        });
    }catch(error){
        console.log('eroror')
    }

        return ()=>{

        }

    },[]);

const [si, setsi] = useState(0)
    useEffect(() => {
        setsi($('#social-id').val())
        return () => {
            
        }
    }, [$('#social-id').val()])
    return(
    <div className='container m-0 p-0'>
        
        {error?<div className='text-danger text-center'>server error cant reach .....</div>:<div className='row'>
        <Social  name='whatsapp' id={si} />
        {
           title?title.map((item,i)=>(<div key={i} className='col-lg-4 col-md-6 col-sm-12 '><Product data={item} /></div>) ):'...wait'
        }
        </div>
}

<input type='hidden' id='social-id'  /> 
    </div>
    )
}



export default Products;

if (document.getElementById('example')) {
    ReactDOM.render(<Products />, document.getElementById('example'));
}
