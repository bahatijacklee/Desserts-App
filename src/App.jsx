import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import OrderConfirmationModal from "./components/OrderConfirmationModal";

function App() {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = (dessert) => {
    const existingItem = cart.find((item) => item.name === dessert.name);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.name === dessert.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...dessert, quantity: 1 }]);
    }
  };

  const removeFromCart = (dessert) => {
    setCart(cart.filter((item) => item.name !== dessert.name));
  };

  const decreaseQuantity = (dessert) => {
    const existingItem = cart.find((item) => item.name === dessert.name);
    if (existingItem.quantity === 1) {
      removeFromCart(dessert);
    } else {
      setCart(
        cart.map((item) =>
          item.name === dessert.name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  const confirmOrder = () => {
    setIsModalOpen(true);
  };

  const startNewOrder = () => {
    setCart([]);
    setIsModalOpen(false);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="app">
      <h1 className="app__title">Desserts</h1>
      <div className="container">
        <div className="product-list-container">
          <ProductList addToCart={addToCart} />
        </div>
        <div className="cart-container">
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            addToCart={addToCart}
            decreaseQuantity={decreaseQuantity}
            confirmOrder={confirmOrder}
          />
        </div>
      </div>
      {isModalOpen && (
        <OrderConfirmationModal
          cart={cart}
          total={total}
          startNewOrder={startNewOrder}
        />
      )}
    </main>
  );
}

export default App;
