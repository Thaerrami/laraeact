import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { geturl } from './functions';

function SingleProd() {
    var { id } = useParams();
    const [product, setproduct] = useState([]);
    useEffect(() => {
        setproduct(axios(geturl()+'product/'+id).then(res=>res=res.data).catch(error=>console.log(error)));
        console.log(product)
    }, [])
    return (
        <div>
            hi
         
        </div>
    )
}

export default SingleProd
