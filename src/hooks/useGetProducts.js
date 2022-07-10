import  { useState, useEffect } from 'react';
import axios from 'axios';
export const useGetProducts=(API)=>{ 
    const [products, setProducts] = useState([]);
    useEffect(async ()=>{
        const response=await axios.get(API);
        setProducts(response.data);
    },[])
    console.log("uwu")
    return products;
}