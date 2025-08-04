import React from "react";

const ProductItem = ({ dessert, addToCart }) => {
  return (
    <div className="product-item">
      <picture>
        <source media="(min-width: 960px)" srcSet={dessert.image.desktop} />
        <source media="(min-width: 640px)" srcSet={dessert.image.tablet} />
        <img className="product-item__image" src={dessert.image.mobile} alt={dessert.name} />  
      </picture>
      <div className="product-item__details">
        <h3 className="product-item__name">{dessert.name}</h3>
        <p className="product-item__price">${dessert.price.toFixed(2)}</p>
        <button className="add-to-cart-btn" onClick={() => addToCart(dessert)}>
          <img src="/icon-add-to-cart.svg" alt="Add to cart" width="16" height="16" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;