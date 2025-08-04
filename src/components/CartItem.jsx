import React from "react";

const CartItem = ({ item, removeFromCart, addToCart, decreaseQuantity }) => {
  return (
    <div className="cart-item">
      <div className="cart-item__info">
        <h3 className="cart-item__name">{item.name}</h3>
        <p className="cart-item__price">
          {item.quantity} x ${item.price.toFixed(2)}
        </p>
      </div>
      <div className="cart-item__controls">
        <div className="cart-item__quantity-controls">
          <button className="cart-item__quantity-btn" onClick={() => decreaseQuantity(item)}>
            <img src="/icon-decrement-quantity.svg" alt="Decrease quantity" />
          </button>
          <span>{item.quantity}</span>
          <button className="cart-item__quantity-btn" onClick={() => addToCart(item)}>
            <img src="/icon-increment-quantity.svg" alt="Increase quantity" />
          </button>
        </div>
        <button className="cart-item__remove-btn" onClick={() => removeFromCart(item)}>
          <img src="/icon-remove-item.svg" alt="Remove item" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;