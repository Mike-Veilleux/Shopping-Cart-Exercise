import React from "react";

const CartItems = (props) => {
  const renderCartItems = props.cartItems.map((cartItem, index) => {
    return (
      <div key={`shopItem_${index}`} className="shopItem">
        {`${cartItem.name}: ${cartItem.quantity}`}
      </div>
    );
  });
  return <div className="shopItemContainer">{renderCartItems}</div>;
};

export default CartItems;
