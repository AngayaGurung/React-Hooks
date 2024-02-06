import React from "react";
import CompoContext from "./CompoContext";
import Compo1 from "../components/Compo1";

const ContextProvider = () => {
  const contextValue = {
    name: "simimi",
    address: "kathmandu",
  };
  return (
    <CompoContext.Provider value={contextValue}>
      <Compo1 />
    </CompoContext.Provider>
  );
};

export default ContextProvider;
