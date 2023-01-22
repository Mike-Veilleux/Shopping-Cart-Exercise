import React from "react";

const CartClearButton = (props) => {
  let result = <></>;
  if (props.cartItems.length > 0) {
    result = (
      <button className="btn" onClick={() => props.onClearCart()}>
        Clear Basket
      </button>
    );
  }
  return <>{result}</>;
};

export default CartClearButton;
