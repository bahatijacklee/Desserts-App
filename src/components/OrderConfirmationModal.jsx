import React from "react";

const OrderConfirmationModal = ({ cart, total, startNewOrder }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <img className="modal__icon" src="/icon-order-confirmed.svg" alt="Order confirmed" />
        <h2 className="modal__title">Order Confirmed</h2>
        <p className="modal__text">Your order has been successfully placed.</p>
        <div className="order-summary">
          {cart.map((item) => (
            <div key={item.name} className="order-item">
              <span>
                {item.name} (x{item.quantity})
              </span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="order-total">
            <h3>Total</h3>
            <p>${total.toFixed(2)}</p>
          </div>
        </div>
        <button className="new-order-btn" onClick={startNewOrder}>Start New Order</button>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;
