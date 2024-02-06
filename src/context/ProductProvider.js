import React from "react";
import ProductContext from "./ProductContext";
import Product from "../components/Product";

const ProductProvider = () => {
  const productContextValue = {
    productName: "Samsung s24 plus",
    price: 29.99,
    // Add other product-related information as needed
  };

  return (
    <ProductContext.Provider value={productContextValue}>
      <Product />
    </ProductContext.Provider>
  );
};

export default ProductProvider;
