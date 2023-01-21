import { useState } from "react";

const useItems = () => {
  const initialStock = [
    { name: "Bananas", quantity: 12, price: 0.85 },
    { name: "Apples", quantity: 7, price: 0.65 },
    { name: "Lemons", quantity: 9, price: 0.45 },
    { name: "Limes", quantity: 4, price: 0.35 },
  ];

  const [shopItems, setShopItems] = useState(initialStock);
  const [cartItems, setCartItems] = useState([]);

  const onAddToCart = (itemToAdd) => {
    //exit function if shop item quantity is 0
    if (itemToAdd.quantity === 0) {
      return;
    }

    //Decrease quantity by one from shopItem stock
    const newShopItemsArray = shopItems.map((shopItem) => {
      if (shopItem.name == itemToAdd.name) {
        shopItem.quantity = shopItem.quantity - 1;
      }
      return shopItem;
    });
    // update shopItems state
    setShopItems(newShopItemsArray);

    // find matching item in cart
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.name == itemToAdd.name
    );

    if (existingCartItem === undefined) {
      // is not in cart, add new shopItem to cartItems with quantity of 1
      const newCartItemsArray = [
        ...cartItems,
        { name: itemToAdd.name, quantity: 1, price: itemToAdd.price },
      ];
      // update cartItems state
      setCartItems(newCartItemsArray);
    } else {
      //Is alreaty in cart => remap array with item quantity +1
      const newCartItemsArray = cartItems.map((cartItem) => {
        if (cartItem.name === itemToAdd.name) {
          cartItem.quantity = cartItem.quantity + 1;
        }
        return cartItem;
      });
      // update cartItems state
      setCartItems(newCartItemsArray);
    }
  };

  const onRemoveFromCart = (itemToRemove) => {
    //exit function if cart item quantity is 0
    if (itemToRemove.quantity == 0) {
      return;
    } else {
      //Decrease quantity by one from cartItem
      const newCartItemsArray = cartItems.map((cartItem) => {
        if (cartItem.name === itemToRemove.name) {
          cartItem.quantity = cartItem.quantity - 1;
        }
        return cartItem;
      });
      const filterOutZero = newCartItemsArray.filter(
        (item) => item.quantity != 0
      );
      setCartItems(filterOutZero);
      //remap shopItems with item quantity +1
      const newShopItemsArray = shopItems.map((shopItem) => {
        if (shopItem.name == itemToRemove.name) {
          shopItem.quantity = shopItem.quantity + 1;
        }
        return shopItem;
      });
      setShopItems(newShopItemsArray);
    }
  };

  const onClearCart = () => {
    setCartItems([]);
    setShopItems(initialStock);
  };

  return {
    shopItems,
    cartItems,
    setShopItems,
    setCartItems,
    onAddToBasket: onAddToCart,
    onRemoveFromCart,
    onClearCart,
  };
};

export default useItems;
