import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

function SingleProd() {
    var { id } = useParams();
    const [product, setproduct] = useState([]);
    useEffect(() => {
        setproduct(axios('http://localhost:8000/api/product/'+id).then(res=>res=res.data).catch(error=>console.log(error)));
        console.log(product)
    }, [])
    return (
        <div>
            hi
         
        </div>
    )
}

export default SingleProd
