import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cart, removeFromCart, addToCart, decreaseQuantity, confirmOrder }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <img src="/illustration-empty-cart.svg" alt="Empty cart" />
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <div>
          {cart.map((item, index) => (
            <CartItem
              key={index}
              item={item}
              removeFromCart={removeFromCart}
              addToCart={addToCart}
              decreaseQuantity={decreaseQuantity}
            />
          ))}
          <div className="cart__total">
            <h3>Total</h3>
            <p>${total.toFixed(2)}</p>
          </div>
          <div className="cart__carbon-neutral">
            <img src="/icon-carbon-neutral.svg" alt="Carbon neutral" />
            <span>Carbon-neutral shipping</span>
          </div>
          <button className="confirm-order-btn" onClick={confirmOrder}>
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;