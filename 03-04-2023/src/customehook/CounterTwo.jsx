import React, { useState } from "react";
import useDocument from "./useDocument";

const CounterTwo = () => {
  const [Two, settwo] = useState(0);
  let countTwo = () => {
    settwo(Two + 1);
  };
  useDocument(Two);
  return (
    <div>
      <button onClick={countTwo}>count Two - {Two}</button>
    </div>
  );
};

export default CounterTwo;
