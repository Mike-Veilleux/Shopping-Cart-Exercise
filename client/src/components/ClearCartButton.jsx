import React from "react";

const ClearCartButton = (props) => {
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

export default ClearCartButton;
