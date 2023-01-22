import "./App.css";
import CartItems from "./components/cartItems";
import CartMessage from "./components/cartMessage";
import CartClearButton from "./components/cartClearButton";
import ShopItems from "./components/shopItems";
import useItems from "./hooks/useItems";

function App() {
  const items = useItems();

  return (
    <div className="container">
      <ShopItems {...items} />
      <CartItems {...items} />
      <CartMessage {...items} />
      <CartClearButton {...items} />
    </div>
  );
}

export default App;
