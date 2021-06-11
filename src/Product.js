import React from 'react'
import './Product.css'
function Product({id, title, image, price, rating}) {
    return (
        <div className="Product">
            <p>{title}</p>
            <p className="productPrice">
                <smal>$</smal>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">
                {Array(rating)
                .fill()
                .map((_)=>(
                    <p>⭐</p>
                ))}

            </div>
            <img src={image} alt="" />
            <button> Add to basket </button>
        </div>
    )
}

export default Product
