import React, { useState } from "react";
import useDocument from "./useDocument";

const CounterOne = () => {
  const [one, setone] = useState(0);
  let countOne = () => {
    setone(one + 1);
  };
  useDocument(one);
  return (
    <div>
      <button onClick={countOne}>count one - {one}</button>
    </div>
  );
};

export default CounterOne;
