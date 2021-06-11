import React from "react";
import "./Product.css";
import { useStateVAlue } from "./StateProvider";
function Product({ id, title, image, price, rating }) {
  const [, dispatch] = useStateVAlue();

  const addToBasket = () => {
    //    add item to basket
    dispatch({
      type: "add_to_Basket",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div class="product_info">
        <p>{title}</p>
        <p className="productPrice">
          <smal>$</smal>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addToBasket}> Add to basket </button>
    </div>
  );
}

export default Product;
