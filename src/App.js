import React from "react";
import CustomerProvider from "./context/CustomerProvider";
import ProductProvider from "./context/ProductProvider";

const App = () => {
  return (
    <>
      <CustomerProvider />
      <ProductProvider />
    </>
  );
};

export default App;
