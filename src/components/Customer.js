import React, { useContext } from "react";
import CustomerContext from "../context/CustomerContext";

const Customer = () => {
  const { name, address } = useContext(CustomerContext);
  return (
    <>
      <h1>this is customer page</h1>
      <p>Customer Name: {name}</p>
      <p>Customer address: {address}</p>
    </>
  );
};

export default Customer;
