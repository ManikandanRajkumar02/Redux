import { useEffect } from "react"
import React from "react"
import ProductComponent from "./ProductComponent"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { setProducts } from "../Redux/Actions/ProductAction"

function ProductListing(){
    const products=useSelector((state)=>state)
    const dispatch=useDispatch()

    const fetchProducts=async()=>{
    const response= await axios.get("https://fakestoreapi.com/products").catch((err)=>{
    console.log(err);
    })
    dispatch(setProducts(response.data));
    }

    useEffect(()=>{
    fetchProducts()
    },[])

    return(
        <div>
            <ProductComponent/>
        </div>
    )
}
export default ProductListing