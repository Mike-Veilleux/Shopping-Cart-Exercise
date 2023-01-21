import React from "react";

const ShopItems = (props) => {
  const renderShopItems = props.shopItems.map((shopItem, index) => {
    let nameStyle = "name";
    let priceStyle = "price";
    let quantityStyle = "quantity";
    if (shopItem.quantity === 0) {
      nameStyle = "name striped";
      // priceStyle = "price striped";
      // quantityStyle = "quantity striped";
    }

    return (
      <div
        key={`shopItem_${index}`}
        className="item shop"
        onClick={() => props.onAddToBasket(shopItem)}
      >
        <div className={nameStyle}>{`${shopItem.name}`}</div>
        <div className={priceStyle}>{`${shopItem.price}$`}</div>
        <div className={quantityStyle}>{`${shopItem.quantity}`}</div>
      </div>
    );
  });
  return <div className="itemContainer">{renderShopItems}</div>;
};

export default ShopItems;
