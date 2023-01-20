import React from "react";

const ShopItems = (props) => {
  const renderShopItems = props.shopItems.map((shopItem, index) => {
    return (
      <div
        key={`shopItem_${index}`}
        className="shopItem"
        onClick={(e) => props.onAddToBasket(e, shopItem)}
      >
        {`${shopItem.name}: ${shopItem.quantity}`}
      </div>
    );
  });
  return <div className="shopItemContainer">{renderShopItems}</div>;
};

export default ShopItems;
