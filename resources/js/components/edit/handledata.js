import axios from 'axios';

export async function  getAllData(){

    try{
    const resp = await axios.get('http://localhost:8000/api/prodcuts/');
    return resp
    }
    catch(error){
        return error.data;
    }

    try{
        
    }catch(err){
        console.error(err)
    }

    
}