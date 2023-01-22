import React from "react";
import CartClearButton from "./cartClearButton";
import CartMessage from "./cartMessage";

const Cart = (props) => {
  let title;
  if (props.cartItems.length > 0) {
    title = <div className="title">My Basket</div>;
  }

  const renderCartItems = props.cartItems.map((cartItem, index) => {
    return (
      <div
        key={`shopItem_${index}`}
        className="item cart"
        onClick={() => props.onRemoveFromCart(cartItem)}
      >
        <div className="name">{`${cartItem.name}`}</div>
        <div className="quantity">{`${cartItem.quantity}`}</div>
      </div>
    );
  });
  return (
    <div className="subContainer">
      <div>{title}</div>
      <div className="itemContainer">{renderCartItems}</div>
      <CartMessage {...props} />
      <CartClearButton {...props} />
    </div>
  );
};

export default Cart;
