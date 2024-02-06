import { useContext } from "react";
import CompoContext from "../context/CompoContext";

const Compo1 = () => {
  const { name, address } = useContext(CompoContext);
  return (
    <>
      <h1>my name is {name}</h1>
      <p>i am from {address}</p>
    </>
  );
};

export default Compo1;
