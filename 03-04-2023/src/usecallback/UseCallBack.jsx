import React, { useCallback, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

const UseCallBack = () => {
  const [age, setage] = useState(22);
  const [salary, setsalary] = useState(22000);

  const incage = useCallback(() => {
    setage(age + 1);
  }, [age]);
  const incsal = useCallback(() => {
    setsalary(salary + 1);
  }, [salary]);
  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handel={incage}>increment age</Button>
      <Count text="Salary" count={salary} />
      <Button handel={incsal}>increment age</Button>
    </div>
  );
};

export default UseCallBack;
