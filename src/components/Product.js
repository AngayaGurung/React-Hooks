import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";

const Product = () => {
  const { productName, price } = useContext(ProductContext);

  return (
    <>
      <h2>Product Information</h2>
      <p>Name: {productName}</p>
      <p>Price: ${price}</p>
    </>
  );
};

export default Product;
