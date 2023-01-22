import "./App.css";
import Cart from "./components/cart";
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
