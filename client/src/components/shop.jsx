import React from "react";

const Shop = (props) => {
  const renderShopItems = props.shopItems.map((shopItem, index) => {
    let nameStyle = "name";
    let priceStyle = "price";
    let quantityStyle = "quantity";
    if (shopItem.quantity === 0) {
      nameStyle = "name striped";
    }

    return (
      <div
        key={`shopItem_${index}`}
        className="item shop"
        onClick={() => props.onAddToCart(shopItem)}
      >
        <div className={nameStyle}>{`${shopItem.name}`}</div>
        <div className={priceStyle}>{`${shopItem.price}$`}</div>
        <div className={quantityStyle}>{`${shopItem.quantity}`}</div>
      </div>
    );
  });
  return (
    <div className="subContainer">
      <div className="title">Fruit Shop</div>
      <div className="itemContainer">{renderShopItems}</div>
    </div>
  );
};

export default Shop;
