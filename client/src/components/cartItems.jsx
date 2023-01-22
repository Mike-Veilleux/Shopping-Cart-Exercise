import React from "react";

const CartItems = (props) => {
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
    </div>
  );
};

export default CartItems;
