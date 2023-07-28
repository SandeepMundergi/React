import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [countone, setcountone] = useState(0);
  const [counttwo, setcounttwo] = useState(0);
  let c1 = () => {
    setcountone(countone + 1);
  };
  let c2 = () => {
    setcounttwo(counttwo + 1);
  };
  const Iseven = useMemo(() => {
    let i = 0;
    while (i < 999999999) i++;
    return countone % 2 === 0;
  }, [countone]);
  return (
    <div>
      <button onClick={c1}>counterOne-{countone}</button>
      <span>{Iseven ? "Even" : "Odd"}</span>
      <br />
      <button onClick={c2}>counterTwo-{counttwo}</button>
    </div>
  );
};

export default UseMemo;
