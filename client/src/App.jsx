import "./App.css";
import Cart from "./components/cart";
import CartMessage from "./components/cartMessage";
import CartClearButton from "./components/cartClearButton";
import Shop from "./components/shop";
import useItems from "./hooks/useItems";

function App() {
  const items = useItems();

  return (
    <div className="container">
      <Shop {...items} />
      <Cart {...items} />
    </div>
  );
}

export default App;
