import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ addToCart }) => {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    fetch("./desserts.json")
      .then((response) => response.json())
      .then((data) => {
        // Process image paths to make them absolute
        const processedData = data.map(dessert => ({
          ...dessert,
          image: {
            thumbnail: dessert.image.thumbnail,
            mobile: dessert.image.mobile,
            tablet: dessert.image.tablet,
            desktop: dessert.image.desktop
          }
        }));
        setDesserts(processedData);
      });
  }, []);

  return (
    <div className="product-list">
      {desserts.map((dessert) => (
        <ProductItem key={dessert.name} dessert={dessert} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;