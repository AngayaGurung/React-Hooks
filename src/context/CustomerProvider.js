import React from "react";
import CustomerContext from "./CustomerContext";
import Customer from "../components/Customer";

const CustomerProvider = () => {
  const customerContextValue = {
    name: "Pema Angaya Gurung",
    address: "Mustang",
  };

  return (
    <CustomerContext.Provider value={customerContextValue}>
      <Customer />
    </CustomerContext.Provider>
  );
};

export default CustomerProvider;
