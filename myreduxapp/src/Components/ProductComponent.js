import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function ProductComponent() {
    const products = useSelector((state) => state.allProducts.products)
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product
        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-4" >
                        <Link to={`product/${id}`}>
                        <div class="card">
                            <img src={image} class="card-img-top" />
                            <div class="card-body">
                                <h5 class="card-title">{title}</h5>
                                <p class="card-text">{price}</p>
                                <a href="#" class="btn btn-primary">{category}</a>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
              )
    })
    return (
        <div>{renderList}</div>
    )
}
export default ProductComponent