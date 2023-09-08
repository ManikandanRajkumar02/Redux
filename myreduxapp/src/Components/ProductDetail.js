import React from "react"
import { useEffect } from "react"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { selectedProduct } from "../Redux/Actions/ProductAction"
import { useParams } from "react-router"


function ProductDetail() {
    const product = useSelector((state) => state.product)
    const { id, title, image, description } = product
    const { productId } = useParams()
    const dispatch = useDispatch()
    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
            console.log(err);
        })
        dispatch(selectedProduct(response.data))
    }
    useEffect(() => {
        fetchProductDetail()
    }, [productId])
    return (
        <div>
           <div className="container">
            <div class="card">
                <img src={image} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{description}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
</div>
        </div>
    )
}
export default ProductDetail
