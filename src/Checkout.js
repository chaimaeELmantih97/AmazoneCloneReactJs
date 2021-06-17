import React from "react";
import { useStateVAlue } from "./StateProvider";
import "./checkout.css";
import CheckoutProduct from "./CheckoutProduct";
function Checkout() {
  const [{ basket }] = useStateVAlue();
  return (
    <div className="checkout">
      <img
        className="checkout_ad"
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt=""
        srcset=""
      />
      {basket?.length === 0 ? (
        <div>
          <h2>your Shopping Basket is empty</h2>
          <p>
            You have no items in your basket. To buy one or more items, click
            "Add to basket" next to the item.
          </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout_title">Tour Shopping Basket</h2>
          {/* list out all the checkout products */}
          {basket.map((item) => (
            <CheckoutProduct />
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;
