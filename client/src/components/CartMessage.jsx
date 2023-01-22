import React from "react";

const CartMessage = (props) => {
  let message = "";

  if (props.cartItems.length === 0) {
    message = "Click on an item in the Fruit Shop to add to your basket...";
  } else {
    let totalAmount = 0;
    props.cartItems.forEach((item) => {
      totalAmount = totalAmount + item.quantity * item.price;
    });
    message = `Total: ${totalAmount.toFixed(2)}$`;
  }
  return <div className="message">{message}</div>;
};

export default CartMessage;
