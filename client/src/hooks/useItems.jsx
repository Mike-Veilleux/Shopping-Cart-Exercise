import { useState, useEffect } from "react";

const initialStock = [
  { name: "Bananas", quantity: 10 },
  { name: "Apples", quantity: 7 },
  { name: "Mangos", quantity: 3 },
];

const useItems = () => {
  const [shopItems, setShopItems] = useState(initialStock);
  const [cartItems, setCartItems] = useState([]);

  const onAddToBasket = (e, item) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.name == item.name
    );
    if (existingItem === undefined) {
      setCartItems([...cartItems, { name: item.name, quantity: 1 }]);
    } else {
    }
  };

  const onRemoveFromCart = (e) => {};

  return {
    shopItems,
    cartItems,
    setShopItems,
    setCartItems,
    onAddToBasket,
    onRemoveFromCart,
  };
};

export default useItems;
