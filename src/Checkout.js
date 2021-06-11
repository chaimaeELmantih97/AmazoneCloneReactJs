import React from "react";
import { useStateVAlue } from "./StateProvider";

function Checkout() {
  const [{ basket }] = useStateVAlue();
  return (
    <div className="checkout">
      <img
        className="checkout_img"
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt=""
        srcset=""
      />
    </div>
  );
}

export default Checkout;
