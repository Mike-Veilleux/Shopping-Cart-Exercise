import { useEffect } from "react";
import "./App.css";
import CartItems from "./components/cartItems";
import ShopItems from "./components/shopItems";
import useItems from "./hooks/useItems";

function App() {
  const items = useItems();

  return (
    <div className="App">
      <div className="title">My fruit shop</div>
      <ShopItems {...items} />
      <CartItems {...items} />
    </div>
  );
}

export default App;
