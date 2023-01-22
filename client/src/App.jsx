import { useEffect } from "react";
import "./App.css";
import CartItems from "./components/cartItems";
import CartMessage from "./components/CartMessage";
import ClearCartButton from "./components/ClearCartButton";
import ShopItems from "./components/shopItems";
import useItems from "./hooks/useItems";

function App() {
  const items = useItems();

  return (
    <div className="container">
      <ShopItems {...items} />
      <CartItems {...items} />
      <CartMessage {...items} />
      <ClearCartButton {...items} />
    </div>
  );
}

export default App;
